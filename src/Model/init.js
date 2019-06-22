import {GridController } from '../Controller/GridController';
import {PageController } from '../Controller/PageController';
import {WeatherModel} from './weather';
import {PageView } from '../View/PageView';
import {WeatherController} from '../Controller/WeatherController';
import {WeatherView} from '../View/WeatherView';
export function initialize() {
    console.log('App initialization started');
    console.log('Loading...');




    let pageView = new PageView(document.getElementById("page-wrapper"));
    const pageController = new PageController(null,pageView);
    pageController.initialize();

}