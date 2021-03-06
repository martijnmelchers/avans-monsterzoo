import { Controller } from "./Controller";
import { MonsterModel } from "../Model/monster";
import { View } from "../View/View";
import { Storage } from "../Model/storage";
import { Config } from "../Model/config";
import { GridView } from "../View/GridView";

export class MonsterController extends Controller {
    initialize() {
        this.view.onMonsterCreate = this.onMonsterCreate.bind(this);
        this.view.onMonsterDrop = this.onMonsterDrop.bind(this);
        this.view.onElementChange = this.onElementChange.bind(this);
        this.view.onDeleteClick = this.deleteMonster.bind(this);

        let config = {
            data: {},
            restrictions: {},
        };

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
        this.view.canvas.context.clearTo("#fff");
    }

    onElementChange(e) {
        const index = e.target.selectedIndex;
        const value = e.target.options[index].value;

        let data = {
            limitations: Config.monsters.types[value]
        };

        this.view.render(data)
    }

    deleteMonster(e) {
        const id = parseInt(e.target.dataset.id);
        const region = e.target.dataset.region;

        Storage.removeMonster(region, id);
        GridView.removeMonster(region, id);
    }



    // When a monster is dropped on the configure screen to edit it.
    onMonsterDrop(ev){
        console.log("DROPPED A MONSTER OVER HERE");
    }
}