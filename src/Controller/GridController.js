import { Controller } from './Controller';
import { Storage } from "../Model/storage";

export class GridController extends Controller {
    initialize() {
        this.view.drop = this.drop.bind(this);

    }

    drop(ev) {
        ev.preventDefault();
        const id = parseInt(ev.dataTransfer.getData("text/plain"));

        if (!id) return;

        const region = ev.target.parentElement.dataset.region;
        const x = parseInt(ev.target.dataset.x);
        const y = parseInt(ev.target.dataset.y);


        if(Storage.getAvailableMonster(id) == null) {
            const monster = Storage.getPlacedMonster(region, id);

            if(!monster) return;

            monster.x = x;
            monster.y = y;

            Storage.moveMonster(monster);
        } else {
            const monster = Storage.getAvailableMonster(id);

            if(!monster) return;

            monster.x = x;
            monster.y = y;
            monster.region = region;

            Storage.placeMonster(monster);
        }



        ev.target.appendChild(document.getElementById(id));
    }
}


