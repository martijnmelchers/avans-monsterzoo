export class Grid {
    constructor(gridElement){
        this.numTiles = 162;
        this.gridElement = gridElement;
    }

    renderTiles(){
        for (let index = 0; index < this.numTiles;  index++) {
            this.createTile(index);
        }
    }

    createTile(index){
        document.getElementById(this.gridElement).innerHTML += `
            <div id="` + index + `" class="zoo-tile"></div>
        `;
    }
}


