import {View} from './View';

export class GridView extends View {
    render(){
        let testEL = this.element.querySelector('#testEvent');
        testEL.addEventListener('click', this.onClickTest);
    }
}