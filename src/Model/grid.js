import { Config } from './config';

export class GridModel {
    constructor(name, region, gridElement) {
        this.name = name;
        this.region = region;
        this.rows = Config.grid.rows;
        this.columns = Config.grid.columns;
    }
}


