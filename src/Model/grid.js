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

    }

    isDisabled(x, y) {
        return this.gridLayout["layout"][x][y] === 1;
    }

    getMonster(x, y) {
        return this.monsterLayout.find(m => m.x === x && m.y === y);
    }
}


