import {GridController } from '../Controller/GridController';
import {GridView } from '../View/GridView';
import { Grid } from './grid';

export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');


    /* Create the regions then render them */
    const JungleRegion = new Grid("Jungle", "jungle", "jungleGrid");
    const DesertRegion = new Grid("Woestijn", "desert", "desertGrid");
    const NorthPoleRegion = new Grid("Nooordpool", "northpole", "northPoleGrid");

    JungleRegion.renderTiles();
    DesertRegion.renderTiles();
    NorthPoleRegion.renderTiles();
    let view = new GridView(document.getElementById("jungleGrid"));
    let controller = new GridController(null, view);
    controller.initialize();
}