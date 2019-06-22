class ZooController {
    
}

class Tile {
    constructor(){
        this.name = "Area";
        this.climate = "Neutral";
        this.reference_city = "Amsterdam";
        this.monster = null;
    }
    set monster(monster){
        this.monster = monster;
    }
}


class Monster {
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




class WindMonster extends Monster {
    constructor(){
        super();
        this.element = "Wind";
    }
    verify(){        
    }
}

class FireMonster extends Monster  {
    constructor(){
        super();
        this.element = "Fire";
    }
}

class EarthMonster extends Monster {
    constructor(){
        super();
        this.element = "Earth";
    }
}

class WaterMonster extends Monster {
    constructor(){
        super();
        this.element = "Water";
    }
}


let wind = new WindMonster();
wind.configure({
    name: "Epic gamer",
    numArms: 9,
    numLegs: 2,
    canFly: true,
    canSwim: false,
    color: "red",
    furType: "Feathers",
});
