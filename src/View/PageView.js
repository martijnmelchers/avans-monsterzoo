import { View } from './View';

export class PageView extends View {
    render(model) {
        let jungleEl = this.element.querySelector("#showJungle");
        let saharaEl = this.element.querySelector("#showSahara");
        let northpoleEL = this.element.querySelector("#showNorthPole");

        jungleEl.addEventListener('click', this.onShowJungle);
        saharaEl.addEventListener('click', this.onShowSahara);
        northpoleEL.addEventListener('click', this.onShowNorthPole);
    }

}