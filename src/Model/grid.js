import { Config } from './config';
import { Storage } from "./storage";

export class GridModel {
    constructor(name, region) {
        this.name = name;
        this.region = region;
        this.rows = Config.grid.rows;
        this.columns = Config.grid.columns;
        this.gridLayout = Storage.loadLayout(this.region);
        this.monsterLayout = Storage.getPlacedMonsters(this.region);
        console.log(Storage.getPlacedMonsterByCoords(this.region, 3,3));

    }

    isDisabled(x, y) {
        return this.gridLayout["layout"][x][y] === 1;
    }

    getMonster(x, y) {
        return this.monsterLayout.find(m => m.x === x && m.y === y);
    }


    getSurrounding(x, y){
        this.monsterLayout = Storage.getPlacedMonsters(this.region);
        let monsterLocations = [];
        if(this.getMonster(x,y+1)){
            monsterLocations.push([x,y+1])
        }
        if(this.getMonster(x+1,y)){
            monsterLocations.push([x+1,y])
        }
        if(this.getMonster(x-1,y)){
            monsterLocations.push([x-1,y])
        }
        if(this.getMonster(x,y-1)){
            monsterLocations.push([x,y-1])
        }
        if(this.getMonster(x+1,y+1)){
            monsterLocations.push([x+1,y+1])
        }
        if(this.getMonster(x-1,y+1)){
            monsterLocations.push([x-1,y+1])
        }
        if(this.getMonster(x+1,y-1)){
            monsterLocations.push([x+1,y-1])
        }
        if(this.getMonster(x+1,y-1)){
            monsterLocations.push([x+1,y-1])
            
        }

        return monsterLocations;
    }
}


