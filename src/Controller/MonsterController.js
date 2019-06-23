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
        console.log("Form submit epicness");
    }
}