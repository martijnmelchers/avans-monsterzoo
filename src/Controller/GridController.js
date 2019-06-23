import { Controller } from './Controller';
import { Storage } from "../Model/storage";
import { MonsterModel } from '../Model/monster';
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

    
        const surroundingIndexes = this.model.getSurrounding(x,y);
        surroundingIndexes.forEach(indexes => {
            let placedMonster = this.model.getMonster(indexes[0], indexes[1]);
            let monsterModel = new MonsterModel();
            monsterModel.configure(placedMonster);
            this.view.interact(indexes[0],indexes[1]);
        });
    }
}


