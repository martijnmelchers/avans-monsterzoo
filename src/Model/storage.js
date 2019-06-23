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

        data.available_monsters = data.available_monsters.filter(x => x.id != monster.id);
        data.placed_monsters.push(monster);

        Storage.saveObject(data);
    }

    static moveMonster(monster) {
        const data = Storage.getObject();

        data.placed_monsters = data.placed_monsters.filter(m => m.id !== monster.id);
        data.placed_monsters.push(monster);

        Storage.saveObject(data);
    }

    static removeMonster(region, id) {
        const data = Storage.getObject();

        data.placed_monsters = data.placed_monsters.filter(m => m.id !== id && m.region !== id);

        Storage.saveObject(data);
    }

    static getAvailableMonster(id) {
        return Storage.getObject().available_monsters.find(x => x.id === id);
    }

    static getAvailableMonsters() {
        return Storage.getObject().available_monsters;
    }

    static getPlacedMonsters(region) {
        return Storage.getObject().placed_monsters.filter(x => x.region === region);
    }

    static getPlacedMonster(region, id) {
        return Storage.getObject().placed_monsters.find(x => x.region === region && x.id === id);
    }

    static getPlacedMonsterByCoords(region, x, y) {
        return Storage.getObject().placed_monsters.find(m => m.region === region && m.x == m && m.y == y);
    }
}