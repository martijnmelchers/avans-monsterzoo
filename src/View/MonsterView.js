import { View } from "./View";

export class MonsterView extends View {
    render(){
        let monsterForm = this.element.querySelector("#monsterCreateForm");
        monsterForm.addEventListener("submit", this.onMonsterCreate);
    }
}