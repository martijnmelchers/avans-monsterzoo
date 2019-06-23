import { Controller } from './Controller';
import { GridModel } from '../Model/grid';
import { GridView } from '../View/GridView'
import { GridController } from '../Controller/GridController';
import { WeatherController } from '../Controller/WeatherController';
import { WeatherView } from '../View/WeatherView';
import { WeatherModel } from '../Model/weather';
import { MonsterModel}  from '../Model/monster';
import {MonsterController } from '../Controller/MonsterController';
import {MonsterView} from '../View/MonsterView';

export class PageController extends Controller {
    initialize() {
        this.view.onShowJungle = this.onShowJungle.bind(this);
        this.view.onShowSahara = this.onShowSahara.bind(this);
        this.view.onShowNorthPole = this.onShowNorthPole.bind(this);

        this.initializeJungle();
        this.initializeSahara();
        this.initializeNorthPole();

        this.initializeWeather();
        this.initializeMonsterCreator();

        this.view.render();

        this.onShowJungle();
    }

    initializeMonsterCreator(){
        this.monsterView = new MonsterView(document.getElementById('monster-creator'));
        this.monsterModel = new MonsterModel();
        this.monsterController = new MonsterController(this.monsterModel, this.monsterView);
        this.monsterController.initialize();
    }

    initializeWeather() {
        this.weatherView = new WeatherView(document.getElementById("weather"));
        this.weatherModel = new WeatherModel();
        this.weatherController = new WeatherController(this.weatherModel, this.weatherView);
        this.weatherController.initialize();
    }

    initializeJungle() {
        const jungleElement = document.getElementById("jungleGrid");
        const jungleModel = new GridModel("Jungle", "Jungle");

        this.jungleView = new GridView(jungleElement);

        /* Create controller for the jungle */
        new GridController(jungleModel, this.jungleView).initialize();

        this.jungleView.render(jungleModel);
    }

    initializeSahara() {
        const saharaElement = document.getElementById("saharaGrid");
        const saharaModel = new GridModel("Sahara", "Sahara");

        this.saharaView = new GridView(saharaElement);

        /* Create controller for the sahara */
        new GridController(saharaModel, this.saharaView).initialize();

        this.saharaView.render(saharaModel);
    }

    initializeNorthPole() {
        const northPoleElement = document.getElementById("northPoleGrid");
        const northPoleModel = new GridModel("Noordpool", "NorthPole");

        this.northPoleView = new GridView(northPoleElement);

        /* Create controller for the north pole */
        new GridController(northPoleModel, this.northPoleView).initialize();

        this.northPoleView.render(northPoleModel);
    }


    onShowJungle() {
        this.resetVisible();
        this.jungleView.display = true;

        this.weatherController.showWeather("Rio");
    }

    onShowSahara() {
        this.resetVisible();
        this.saharaView.display = true;

        this.weatherController.showWeather("Sahara");
    }

    onShowNorthPole() {
        this.resetVisible();
        this.northPoleView.display = true;

        this.weatherController.showWeather("Longyearbyen");
    }

    resetVisible() {
        this.jungleView.display = false;
        this.saharaView.display = false;
        this.northPoleView.display = false
    }
}