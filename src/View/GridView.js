import { View } from './View';

export class GridView extends View {
    set display(setDisplay) {
        setDisplay ? this.element.classList.toggle("visible") : this.element.classList.remove("visible");
    }

    render(model) {
        this.model = model;
        this.element.innerHTML = this.renderTiles().join("");
        this.addMonsters();

        this.createListenerEvents();
    }

    renderTiles() {
        const gridItems = [];
        /* Since the grid is dynamically generated the CSS needs to be added dynamically */
        this.element.style = `grid-template-rows: repeat(${this.model.rows}, 50px);grid-template-columns: repeat(${this.model.columns}, 50px);`;

        for (let x = 0; x < this.model.rows; x++) {
            for (let y = 0; y < this.model.columns; y++) {
                gridItems.push(this.createTile(x, y));
            }
        }
        return gridItems;
    }

    createTile(x, y) {
        return `<div class="zoo-tile ${this.model.isDisabled(x, y) ? "disabled" : ""}" data-x="${x}" data-y="${y}"></div>`;
    }

    addMonsters() {


        for (let e = 0; e < this.model.rows; e++) {
            for (let a = 0; a < this.model.columns; a++) {
                console.log(e,a);
                const monster = this.model.getMonster(e, a);

                if (!monster) continue;

                console.log('re');
                const image = document.createElement('img');

                image.id = monster.id;
                image.src = monster.drawing;
                image.draggable = true;
                image.addEventListener('dragstart', this.drag);

                this.element.querySelector(`[data-x='${e}'][data-y='${a}']`).appendChild(image);
            }
        }



    }

    allowDrop(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }

    createListenerEvents() {
        for (const tile of this.element.querySelectorAll(".zoo-tile:not(.disabled)")) {
            tile.addEventListener('drop', this.drop);
            tile.addEventListener('dragover', this.allowDrop)
        }
    }

    drag(ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    }


    interact(x,y){
        let tile = this.element.querySelector(`[data-x='${x}'][data-y='${y}']`);
        let image = tile.firstChild;
        image.classList.add("blurred");
        setTimeout(() => {
           image.classList.remove("blurred"); 
        }, 1000);
    }
}