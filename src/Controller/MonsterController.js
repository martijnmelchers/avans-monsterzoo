import { Controller } from "./Controller";
import { MonsterModel } from "../Model/monster";
import { View } from "../View/View";
import { Storage} from "../Model/storage";

export class MonsterController extends Controller {
    initialize() {
        this.view.onMonsterCreate = this.onMonsterCreate.bind(this);
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
}