import { View } from './View';

export class PageView extends View {
    render(model) {
        let jungleEl = this.element.querySelector("#showJungle");
        let desertEl = this.element.querySelector("#showDesert");
        let northPoleEL = this.element.querySelector("#showNorthPole");

        jungleEl.addEventListener('click', this.onShowJungle);
        desertEl.addEventListener('click', this.onShowDesert);
        northPoleEL.addEventListener('click', this.onShowNorthPole);
    }

}