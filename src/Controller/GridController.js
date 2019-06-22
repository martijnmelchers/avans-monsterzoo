import {Controller} from './Controller';

export class GridController extends Controller {
    initialize(){
        this.view.onClickTest = this.onClickTest.bind(this);
        this.view.render();
    }

    onClickTest(){
        console.log("Test");
    }
}


