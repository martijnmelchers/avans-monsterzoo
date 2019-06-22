import {View} from './View';
import {GridModel} from '../Model/grid';
export class GridView extends View {
    render(model){
        let testEL = this.element.querySelector('#testEvent');
        this.model = model;
        let tiles = this.renderTiles();
        this.element.innerHTML = tiles;
    }

    renderTiles() {
        let content = "";
        /* Since the grid is dynamically generated the CSS needs to be added dynamically */
        this.element.style = `grid-template-rows: repeat(${this.rows}, 50px);grid-template-columns: repeat(${this.columns}, 50px);`
        for (let x = 0; x < this.model.rows; x++) {
            for (let y = 0; y < this.model.columns; y++) {
                content += this.createTile(x, y);
            }
        }
        return content;
    }

    createTile(x, y) {
        return `<div class="zoo-tile" data-x="${x}" data-y="${y}"></div>`;
    }

    set display(setDisplay){
        if(setDisplay){
            this.element.style.display = "grid"
        }
        else{
            this.element.style.display = "none";
        }
    }
}