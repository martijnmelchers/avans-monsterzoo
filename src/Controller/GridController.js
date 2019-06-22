import {Controller} from './Controller';
import {GridModel} from '../Model/grid'

export class GridController extends Controller {
    initialize(){
        this.view.onClickTest = this.onClickTest.bind(this);
    }

    onClickTest(){
        console.log("Test");
    }
}


