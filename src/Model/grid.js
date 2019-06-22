import { Config } from './config';
import { Storage } from "./storage";

export class GridModel {
    constructor(name, region) {
        this.name = name;
        this.region = region;
        this.rows = Config.grid.rows;
        this.columns = Config.grid.columns;
        this.gridLayout = Storage.loadLayout(this.region);

        console.log(JSON.stringify(this))
    }

    isDisabled(x, y) {
        return this.gridLayout["layout"][x][y] === 1;
    }
}


