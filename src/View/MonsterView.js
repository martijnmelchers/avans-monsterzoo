import { View } from "./View";



export class MonsterView extends View {
    render(model) {
        let monsterForm = this.element.querySelector("#monsterCreateForm");
        monsterForm.addEventListener("submit", this.onMonsterCreate);

        let monsterType = this.element.querySelector("#monsterType");
        monsterType.addEventListener("change", this.onElementChange);


        let container = this.element.querySelector("#monsterCanvas");
        this.init(container, 250, 250, "#fff");


        if(model){
            if(model.limitations){
                this.setLimitations(model.limitations);
            }
        }
    }


    setLimitations(limitations){
        //TODO: change fields based on limitations.
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

        if(this.canvas)
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
            console.log("Drawing?");
        };
        this.canvas.node.onmouseup = (e) => {
            this.canvas.isDrawing = false;
        };

        this.element.querySelector("#eraseButton").addEventListener('click', (e) => {
            this.canvas.erase = !this.canvas.erase;
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
        // do shit
        const element = document.getElementById("available-monsters");
        const image = document.createElement('img');

        image.id = monster.id;

        image.src = monster.drawing;
        image.draggable = true;
        image.addEventListener('dragstart', this.drag);

        element.appendChild(image);
    }

    drag(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
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


    // Renders indivudual monster fields
    renderField(limitations, key){
        var group = this.element.querySelector(`input[name='${key}']`);
        if(group !== null){
            let shadow = group.parentNode;
            const shadowEl = shadow.attachShadow({mode: 'open'});
            let el = document.createElement(this.getLimitationFieldType(limitations)[0]);
            shadowEl.appendChild(el);
        }
    }


    getLimitationFieldType(limitation){
        if(limitation.types)
            return ["select",""];
        if(limitation.min && limitation.max)
            return ["input", "number"];
        if(typeof limitation === "boolean")
            return ["input", "checkbox"]

        return ["input"];
    }
}