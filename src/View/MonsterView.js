import { View } from "./View";

import { Storage } from "../Model/storage";
import { WeatherModel } from "../Model/weather";

export class MonsterView extends View {
    static drag(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }

    static playSound() {
        new Audio('../ding.wav').play();
    }

    static changeInfo(ev) {
        const modal = document.getElementById("infoModal");
        const monster = Storage.getPlacedMonster(ev.target.parentElement.parentElement.dataset.region, parseInt(ev.target.id));

        if (!monster) return;

        modal.querySelector("#infoArmType").innerHTML = monster.armType;
        modal.querySelector("#infoArms").innerHTML = monster.numArms;
        modal.querySelector("#infoLegs").innerHTML = monster.numLegs;
        modal.querySelector("#infoFurType").innerHTML = monster.furType;
        modal.querySelector("#infoFurColor").innerHTML = monster.color;
        modal.querySelector("#infoEyes").innerHTML = monster.eyes;
        modal.querySelector("#infoType").innerHTML = monster.element;
        modal.querySelector("#infoCanFly").innerHTML = monster.canFly ? "Ja" : "Nee";
        modal.querySelector("#infoCanSwim").innerHTML = monster.canSwim ? "Ja" : "Nee";
        modal.querySelector("#infoImage").src = monster.drawing;
        MonsterView.getMonsterBuffs(ev.target.parentElement.parentElement.dataset.region, monster.element).then(x => modal.querySelector("#buffs").innerHTML = x.join("<br>"))
        modal.querySelector('#deleteButton').dataset.id = monster.id;
        modal.querySelector('#deleteButton').dataset.region = monster.region;
    }

    static getMonsterBuffs(region, element) {
        const buffs = [];

        switch (region) {
            case "Jungle":
                if (element == "earth" || element == "water" || element == "wind")
                    buffs.push("+10% door Jungle regio");
                else
                    buffs.push("-10% door Jungle regio");
                break;
            case "NorthPole":
                if (element == "water" || element == "wind")
                    buffs.push("+10% door Noordpool regio");
                else
                    buffs.push("-10% door Noordpool regio");
                break;
            case "Sahara":
                if (element == "earth" || element == "fire")
                    buffs.push("+10% door Sahara regio");
                else
                    buffs.push("-10% door Sahara regio");
                break;
        }
    }

    render(model) {

        this.element.addEventListener('dragover', this.onDragOver);
        this.element.addEventListener("drop", this.onMonsterDrop);
        this.labels = {
            eyes: "Aantal ogen",
            canSwim: "kan hij zwemmen",
            arms: "Aantal armen",
            legs: "Aantal benen",
            armType: "Type arm",
            fur: "Type vacht",
            canFly: "Kan hij vliegen",
            color: "Kleur",
            powerType: "Speciale kracht",
        };

        let monsterForm = this.element.querySelector("#monsterCreateForm");
        monsterForm.addEventListener("submit", this.onMonsterCreate);

        let monsterType = this.element.querySelector("#monsterType");
        monsterType.addEventListener("change", this.onElementChange);


        let container = this.element.querySelector("#monsterCanvas");
        this.init(container, 250, 250, "#fff");

        document.getElementById("deleteButton").addEventListener('click', this.onDeleteClick);


        if (model) {
            if (model.limitations) {
                this.setLimitations(model.limitations);
            }
        }

    }

    onDragOver(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    setLimitations(limitations) {
        //TODO: change fields based on limitations.
        this.resetFields();


        for (const limitation in limitations) {
            if (limitations.hasOwnProperty(limitation)) {
                const element = limitations[limitation];
                this.renderField(element, limitation);
            }
        }

    }

    createCanvas(parent, width, height) {
        const canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }

    init(container, width, height, fillColor) {

        if (this.canvas)
            return;

        this.canvas = this.createCanvas(container, width, height);
        const ctx = this.canvas.context;
        // define a custom fillCircle method
        ctx.fillCircle = function (x, y, radius, fillColor) {
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();
        };

        ctx.clearTo = function (fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#fff");

        // bind mouse events
        this.canvas.node.onmousemove = (e) => {
            if (!this.canvas.isDrawing) {
                return;
            }

            const x = this.getMousePos(this.canvas.node, e).x;
            const y = this.getMousePos(this.canvas.node, e).y;

            const radius = 2; // or whatever
            const fillColor = '#ff0000';

            if (!this.canvas.erase) {
                ctx.fillCircle(x, y, radius, fillColor);
            } else {
                ctx.fillCircle(x, y, radius + 2, "#fff");
            }
        };

        this.canvas.node.onmousedown = (e) => {
            this.canvas.isDrawing = true;
        };
        this.canvas.node.onmouseup = (e) => {
            this.canvas.isDrawing = false;
        };

        this.element.querySelector("#eraseButton").addEventListener('click', (e) => {
            this.canvas.erase = !this.canvas.erase;
        });

        this.element.querySelector("#clearCanvas").addEventListener('click', (e) => {
            ctx.clearTo("#fff");
        });


    }

    getMousePos(canvas, evt) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    displayMonster(monster) {
        const element = document.getElementById("available-monsters");
        const image = document.createElement('img');

        image.id = monster.id;

        image.src = monster.drawing;
        image.draggable = true;
        image.dataset.toggle = "modal";
        image.dataset.target = "#infoModal";

        image.addEventListener('dragstart', MonsterView.drag);
        image.addEventListener('click', MonsterView.playSound);
        image.addEventListener('click', MonsterView.changeInfo);

        element.appendChild(image);
    }

    exportCanvas() {
        return this.canvas.node.toDataURL();
    }

    importCanvas(data) {
        let img = new Image;
        img.src = dataUri;
        img.onload = function () {
            const ctx = this.canvas.context;
            ctx.drawImage(img, 0, 0);
        }.bind(this);
    }

    resetFields() {
        let form = this.element.querySelector("#form-dynamic");

        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
    }

    // Renders indivudual monster fields
    renderField(limitations, key) {
        let form = this.element.querySelector("#form-dynamic");

        if (limitations.fields) {
            limitations.fields.forEach((fieldVal) => {
                form.append(this.renderPartialField(fieldVal));
            });
        } else {
            form.append(this.renderPartialField(limitations, key));
        }
    }

    renderPartialField(fieldVal, name = null) {
        if (name === null) {
            name = fieldVal.name;
        }

        let form_group = document.createElement("div");
        form_group.classList.add("form-group");

        let el = null;

        let fieldType = this.getLimitationFieldType(fieldVal);

        form_group.appendChild(this.buildLabel(name));
        if (fieldType[0] === "select") {
            el = this.buildSelect(name, fieldVal);
        } else {
            el = this.buildTextInput(name, fieldVal, fieldType[1]);
        }
        form_group.appendChild(el);

        return form_group;
    }

    getLimitationFieldType(limitation) {

        let fields = [];
        if (limitation.types)
            return ["select", ""];
        if (typeof limitation === "boolean")
            return ["input", "checkbox"]
        if (limitation.min !== null && limitation.max !== null)
            return ["input", "number"];

        return fields;
    }

    buildSelect(name, limitation) {
        let selectEl = document.createElement("select");
        let options = limitation.types;
        selectEl.setAttribute("name", name);
        selectEl.classList.add("form-control")
        options.forEach((option) => {
            let optionEl = document.createElement("option");
            optionEl.setAttribute("value", option);
            optionEl.textContent = option;
            selectEl.appendChild(optionEl);
        });

        return selectEl;
    }

    buildTextInput(name, limitation, type) {
        let textEl = document.createElement("input");
        textEl.setAttribute("type", type);
        textEl.setAttribute("name", name);
        if (type === "number") {
            textEl.setAttribute("min", limitation.min);
            textEl.setAttribute("max", limitation.max);
        }
        textEl.classList.add("form-control");
        return textEl;
    }

    buildLabel(name) {
        let label = document.createElement("label");
        label.setAttribute("for", name);
        if (this.labels[name]) {
            label.textContent = this.labels[name];
        }

        return label;
    }

    buildNumberInput(limitation) {

    }
}