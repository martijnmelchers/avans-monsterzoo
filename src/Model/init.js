import { Grid } from './grid.js';

export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');

    
    const grid = new Grid("mainGrid");
    grid.renderTiles();
}