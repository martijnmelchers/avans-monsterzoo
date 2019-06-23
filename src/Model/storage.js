export class Storage {

    static checkEmpty() {
        if (localStorage.getItem('zoo_data') == null) {
            localStorage.setItem('zoo_data', JSON.stringify(Storage.createDefaultConfiguration()))
        }
    }

    static createDefaultConfiguration() {
        return {
            areas: [
                {
                    region: "Jungle",
                    layout: [
                        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
                        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                    ],
                },
                {
                    region: "NorthPole",
                    layout: [
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                        [0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
                        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [1, 0, 0, 0, 1, 1, 0, 0, 0, 0]
                    ]
                },
                {
                    region: "Sahara",
                    layout: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ]
                }
            ],
            available_monsters: [],
            placed_monsters: []
        };
    }

    static getObject() {
        return JSON.parse(localStorage.getItem('zoo_data'));
    }

    static saveObject(data) {
        localStorage.setItem('zoo_data', JSON.stringify(data));
    }

    static loadLayout(region) {
        return Storage.getObject().areas.find(x => x.region === region);
    }

    static saveMonster(monster) {
        const data = Storage.getObject();

        data.available_monsters.push(monster);

        Storage.saveObject(data);
    }

    static placeMonster(monster) {
        const data = Storage.getObject();

        data.available_monsters.filter(x => x.drawing !== monster.drawing);
        data.placed_monsters.push(monster);

        Storage.saveObject(data);
    }
}