import {View} from './View';
import {GridModel} from '../Model/grid';
export class GridView extends View {
    render(model){
        let testEL = this.element.querySelector('#testEvent');
        this.model = model;
        this.renderTiles();        
    }

    renderTiles(){
        for (let index = 0; index < this.model.numTiles;  index++) {
            this.createTile(index);
        }
    }
    createTile(index){
        this.element.innerHTML += `
            <div id="` + index + `" class="zoo-tile"></div>
        `;
    }
}