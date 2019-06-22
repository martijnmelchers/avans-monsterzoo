import {GridController } from '../Controller/GridController';
import {GridView } from '../View/GridView';
import {GridModel} from './grid';
export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');


    /* Create the regions then render them */
    // const JungleRegion = new Grid("Jungle", "jungle", "jungleGrid");
    // const DesertRegion = new Grid("Woestijn", "desert", "desertGrid");
    // const NorthPoleRegion = new Grid("Nooordpool", "northpole", "northPoleGrid");

    // JungleRegion.renderTiles();
    // DesertRegion.renderTiles();
    // NorthPoleRegion.renderTiles();

    let model = new GridModel();
    let jungleView = new GridView(document.getElementById("jungleGrid"));
    let jungleController = new GridController(model, jungleView).initialize();

    let desertView = new GridView(document.getElementById("desertGrid"));
    let desertController = new GridController(model, desertView).initialize();

    let northPoleView = new GridView(document.getElementById("northPoleGrid"));
    let northPoleController = new GridController(model, northPoleView).initialize();
}