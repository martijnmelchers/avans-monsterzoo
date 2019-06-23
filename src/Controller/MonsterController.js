import { Controller } from "./Controller";
import { MonsterModel } from "../Model/monster";
import { View } from "../View/View";
import { Storage} from "../Model/storage";
import {MonsterModel} from "../Model/monster";
import { Config } from "../Model/config";

export class MonsterController extends Controller {
    initialize() {
        this.view.onMonsterCreate = this.onMonsterCreate.bind(this);
        this.view.onElementChange = this.onElementChange.bind(this);

        let config = {
            data: {},
            restrictions: {},
        }

        this.view.render();
    }

    onMonsterCreate(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const monster = new MonsterModel();

        // Display the key/value pairs
        for (const pair of formData.entries()) {
            monster.setProperty(pair[0], pair[1])
        }

        monster.setProperty("drawing", this.view.exportCanvas());
        monster.setProperty("id", Math.floor(Math.random() * 10000 + 1));

        Storage.saveMonster(monster);
        View.scrollToTop();

        this.view.displayMonster(monster);
    }

    onElementChange(e){
        const index = e.target.selectedIndex;
        const value = e.target.options[index].value;

        let data =  {
            limitations: Config.monsters.types[value]
        }

        this.view.render(data)
    }
}