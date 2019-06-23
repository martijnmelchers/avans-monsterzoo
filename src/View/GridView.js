import { View } from './View';

export class GridView extends View {
    set display(setDisplay) {
        setDisplay ? this.element.classList.toggle("visible") : this.element.classList.remove("visible");
    }

    render(model) {
        this.model = model;
        this.element.innerHTML = this.renderTiles().join("");

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

    drop(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text/plain");

        if (data === null || data === "") return;

        const region = ev.target.parentElement.dataset.region;


        ev.target.appendChild(document.getElementById(data));
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
}