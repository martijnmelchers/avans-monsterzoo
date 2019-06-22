import {Controller} from './Controller';
import {GridModel} from '../Model/grid';
import {GridView} from '../View/GridView'
import {GridController} from '../Controller/GridController';

export class PageController extends Controller {
    initialize() {
        this.gridModel = new GridModel();


        this.view.onShowJungle = this.onShowJungle.bind(this);
        this.view.onShowDesert = this.onShowDesert.bind(this);
        this.view.onShowNorthPole = this.onShowNorthpole.bind(this);

        this.jungle();
        this.desert();
        this.northPole();

        this.view.render();
        this.resetdisplays();
    }

    jungle() {
        this.jungleView = new GridView(document.getElementById("jungleGrid"));
        this.jungleController = new GridController(this.gridModel, this.jungleView).initialize();
        this.jungleView.render(this.gridModel);
    }

    desert() {
        this.deserView = new GridView(document.getElementById("desertGrid"));
        this.desertController = new GridController(this.gridModel, this.deserView).initialize();
        this.deserView.render(this.gridModel);
    }

    northPole() {
        this.northPoleView = new GridView(document.getElementById("northPoleGrid"));
        this.northPoleController = new GridController(this.gridModel, this.northPoleView).initialize();
        this.northPoleView.render(this.gridModel);
    }


    onShowJungle() {
        this.resetdisplays();
        this.jungleView.display = true;
        console.log("jungle");
    }

    onShowDesert() {
        this.resetdisplays();
        this.deserView.display = true;
        console.log("desert");
    }

    onShowNorthpole() {
        this.resetdisplays();
        this.northPoleView.display = true;

        console.log("northpole");
    }

    resetdisplays() {
        this.jungleView.display = false;
        this.deserView.display = false;
        this.northPoleView.display = false
    }
}