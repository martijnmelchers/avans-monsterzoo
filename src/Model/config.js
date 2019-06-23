export const Config = {

    weather: {
        apiKey: "93c1bff2d02ce75777a3fcc1bdf35da7",
        units: "metric",
    },

    grid: {
        rows: 10,
        columns: 10
    },

    monsters: {
        types: {
            water:{
                arms: {
                    fields: [
                        { 
                            name: "arms",
                            min: 0,
                            max: 8,
                        },
                        {
                            name: "armType",
                            types: [
                                "Tentakels",
                                "Vinnen",
                            ]
                        }
                    ], 
                },
                legs: {
                    maxArms: 4,
                    min: 0,
                    max: 4,
                },
                eyes: {
                    min: 0,
                    max: 8,
                },
                fur: {
                    types: [
                        "Schubben",
                        "Slijm"
                    ],
                },
                canFly: false,
                canSwim: true,
                color: {
                    types: [
                        "Blauw",
                        "Rood",
                        "Groen"
                    ]
                }
            },
            fire: {
                arms: {
                    fields: [
                        { 
                            name: "arms",
                            min: 0,
                            max: 6,
                        },
                        {
                            name: "armType",
                            types: [
                                "Tentakels",
                                "Klauwen",
                                "klauw-vleugels"
                            ]
                        }
                    ], 

                },
                legs: {
                    maxArms: 2,
                    min: 0,
                    max: 4,
                },
                eyes: {
                    min: 0,
                    max: 4,
                },
                fur: {
                    types: [
                        "Schubben",
                        "Veren"
                    ],
                },
                canFly: {
                    furType: "Veren",
                },
                canSwim: false,
                color: {
                    types: [
                        "Rood",
                        "Oranje",
                        "Bruin"
                    ]
                }
            },
            earth: {
                arms: {
                    fields: [
                        { 
                            name: "arms",
                            min: 2,
                            max: 2,
                        },
                        {
                            name: "armType",
                            types: [
                                "Klauwen",
                            ]
                        }
                    ], 
                },
                legs: {
                    types:[
                        2,
                        4,
                        6
                    ]
                },
                eyes: {
                    min: 2,
                    max: 2,
                },
                fur: {
                    types: [
                        "Haar",
                        "Schubben",
                        "Slijm"
                    ],
                },
                canFly: false,
                canSwim: true,
                color: {
                    types: [
                        "Paars",
                        "Oranje",
                        "Wit"
                    ]   
                }             
            },
            wind: {
                arms: {
                    min: 2,
                    max: 2,
                    types: [
                        "Vleugels",
                        "Klauw-vleugels"
                    ]
                },
                legs: {
                    fields:[
                        {
                            types: [
                                0,
                                2
                            ]
                        }
                    ]
                },
                eyes: {
                    min: 2,
                    max: 2,
                },
                fur: {
                    types: [
                        "Veren",
                        "Haar",
                        "Schubben"
                    ],
                },
                canFly: true,
                canSwim: {
                    furType: [
                        "Haar",
                        "Schubben"
                    ]
                },
                color: {
                    types: [
                        "Wit",
                        "Blauw",
                        "Paars"
                    ]
                }
            }
        }
    },
};