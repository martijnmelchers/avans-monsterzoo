


class ZooController {
    
}

class Monster {
    get type(){
        return this.element;
    }

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



let monster = new Monster();

monster.configure({
    name: "Fucking beast ",
    furType : "Veren",
    element: "Fire",
    numArms : 10,
    numLegs : 12,
    canSwim : true,     
    canFly : false,
    color : "Red",
});

console.log(monster);

class WindMonster extends Monster {
    constructor(){
        this.element = "Wind";
    }    
}

class FireMonster extends Monster  {
    constructor(){
        this.element = "Fire";
    }
}

class EarthMonster extends Monster {
    constructor(){
        this.element = "Earth";
    }
}

class WaterMonster extends Monster {
    constructor(){
        this.element = "Water";
    }
}