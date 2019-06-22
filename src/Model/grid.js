import { Config } from './config';
import { Storage } from "./storage";

export class GridModel {
    constructor(name, region) {
        this.name = name;
        this.region = region;
        this.rows = Config.grid.rows;
        this.columns = Config.grid.columns;
        this.gridLayout = Storage.loadLayout(this.region);
        this.monsterLayout =  [];
        console.log(JSON.stringify(this))
    }

    isDisabled(x, y) {
        return this.gridLayout["layout"][x][y] === 1;
    }

    setMonster(x,y, monster){
        this.monsterLayout[x][y] = monster;
    }

    getMonster(x,y){
        return this.monsterLayout[x][y];
    }

    moveMonster(fromX, fromY, toX, toY){
        if(this.getMonster(toX,toY) === null){
            // Grab the instance of the position from.
            let monster = this.getMonster(fromX,fromY);
            this.setMonster(toX,toY, monster);

            // Clear the previous spot.
            this.setMonster(fromX, fromY, null);
        }        
    }
}


