import {GridController } from '../Controller/GridController';
import {GridView } from '../View/GridView';
import {GridModel} from '../Model/grid'
export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');

    let view = new GridView(document.getElementById("mainGrid"));

    let model = new GridModel();
    let controller = new GridController(model, view);
    controller.initialize();
}