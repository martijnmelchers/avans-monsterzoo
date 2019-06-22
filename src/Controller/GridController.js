import {Controller} from './Controller';
import {GridModel} from '../Model/grid'

export class GridController extends Controller {
    initialize(){
        this.view.onClickTest = this.onClickTest.bind(this);
        this.view.render(this.model);
    }

    onClickTest(){
        console.log("Test");
    }
}


