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
        var formData =  new FormData(e.target);
        
        var data = formData.entries();
        // Display the key/value pairs


    }
}