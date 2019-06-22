import { PageController } from '../Controller/PageController';
import { PageView } from '../View/PageView';
import { Storage } from "./storage";

export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');

    Storage.checkEmpty();

    let pageView = new PageView(document.getElementById("page-wrapper"));
    const pageController = new PageController(null,pageView);
    pageController.initialize();

}