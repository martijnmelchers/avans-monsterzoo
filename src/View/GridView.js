import {View} from './View';

export class GridView extends View {
    render(model) {
        this.model = model;
        this.element.innerHTML = this.renderTiles().join("");
    }

    renderTiles() {
        const gridItems = [];
        /* Since the grid is dynamically generated the CSS needs to be added dynamically */
        this.element.style = `grid-template-rows: repeat(${this.model.rows}, 50px);grid-template-columns: repeat(${this.model.columns}, 50px);`;

        for (let x = 0; x < this.model.rows; x++) {
            for (let y = 0; y < this.model.columns; y++) {
                gridItems.push(GridView.createTile(x, y));
            }
        }
        return gridItems;
    }

    static createTile(x, y) {
        return `<div class="zoo-tile" data-x="${x}" data-y="${y}"></div>`;
    }

    set display(setDisplay) {
        setDisplay ? this.element.classList.add("visible") : this.element.classList.remove("visible");
    }
}