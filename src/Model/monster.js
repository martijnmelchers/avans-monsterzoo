export class MonsterModel {
    constructor() {
        this.id = 0;
        this.name = "Monster";
        this.element = "Monster";
        this.furType = "";
        this.numArms = 0;
        this.numLegs = 0;
        this.canSwim = false;
        this.canFly = true;
        this.color = "";
        this.region = "";
        this.x = 0;
        this.y = 0;
    }

    screech() {
        // TODO: Play sound or change color.
    }

    // Check if the monster has a valid setup.
    verify() {
        // TODO
    }

    setProperty(property, value) {
        this[property] = value;
    }


}
