import { Config } from './config';

export class Grid {
    constructor(name, region, gridElement) {
        this.name = name;
        this.region = region;
        this.rows = Config.grid.rows;
        this.columns = Config.grid.columns;
        this.gridElement = document.getElementById(gridElement);
    }

    renderTiles() {
        /* Since the grid is dynamically generated the CSS needs to be added dynamically */
        this.gridElement.style = `grid-template-rows: repeat(${this.rows}, 50px);grid-template-columns: repeat(${this.columns}, 50px);`
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                this.createTile(x, y);
            }
        }
    }

    createTile(x, y) {
        this.gridElement.innerHTML += `<div class="zoo-tile" data-x="${x}" data-y="${y}"></div>`;
    }
}


