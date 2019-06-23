export class MonsterModel {
    constructor(){
        this.name = "Monster";
        this.element = "Monster";
        this.furType = "";
        this.numArms = 0;
        this.numLegs = 0;
        this.canSwim = false;     
        this.canFly = true;
        this.color = "";
    }

    screech(){
        // TODO: Play sound or change color.
    }
    
    // Check if the monster has a valid setup.
    verify(){
        // TODO
    }
    
    configure(properties){
        for (const prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                const element = properties[prop];
                this[prop] = element;
            }
        }
    }
}
