import {GridController } from '../Controller/GridController';
import {GridView } from '../View/GridView';

export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');

    let view = new GridView(document.getElementById("mainGrid"));
    let controller = new GridController(null, view);
    controller.initialize();
}