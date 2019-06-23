import { Controller } from "./Controller";
import {MonsterModel} from "../Model/monster";


export class MonsterController extends Controller {
    initialize(){
        this.view.onMonsterCreate = this.onMonsterCreate.bind(this);
        this.view.render();
    }
    createMonster(){
        
    }
    saveMonster(){

    }

    onMonsterCreate(e){
        e.preventDefault();
        const formData =  new FormData(e.target);
        const monster = new MonsterModel();

        // Display the key/value pairs
        for (const pair of formData.entries()) {
            monster.setProperty(pair[0], pair[1])
        }

        console.log(monster);
    }
}