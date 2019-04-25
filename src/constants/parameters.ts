import localText from "./localText";
import { ClassAttributes } from "react";

export interface LocalTextType {
  fr: string,
  pt: string,
  en: string,
  it: string,
  de: string,
  es: string,
  pl: string,
  ru: string,
  [key: string]: string,
}

export interface NeedType {
  id: string,
  type: ("BASIC" | "LUXURY"),
  perMinute: number,
  atPopulationOf : number
}
export interface SocialClassType {
  id: string,
  name: string,
  icon: string,
  localText: LocalTextType,
  residentsPerHouse: number,
  needs: NeedType[],
}
export interface WorldType {
  id: string,
  name: string,
  localText: LocalTextType,
  classes: {
    [key: string]: SocialClassType,
  }
}
export interface PopulationType {
  [key: string]: WorldType,
}
interface ClassType {
  farmers?: number,
  workers?: number,
  artisans?: number,
  engineers?: number,
  investors?: number,
  jornaleros?: number,
  obreros?: number,
}
interface CostType {
  credits?: number,
  timber?: number,
  bricks?: number,
  steelBeams?: number,
  windows?: number,
  concrete?: number,
  weapons?: number,
  heavyWeapons?: number,
  influence?: number,
}
interface MaintenanceType {
  credits?: number,
  farmers?: number,
  workers?: number,
  artisans?: number,
  engineers?: number,
  jornaleros?: number,
  obreros?: number,
}
export interface ProductionBuildingType {
  id: string,
  name: string,
  localText: LocalTextType | null,
  icon: string,
  type: "PRODUCTION",
  atPopulationOf: ClassType,
  constructionCost: CostType,
  maintenanceCost: MaintenanceType,
  needs: string[] | null,
  produces: string,
  time: number,
  electricity: ("OPTIONAL" | "REQUIRED" | null),
}
interface OtherBuildingType {
  id: string,
  name: string,
  localText: LocalTextType | null,
  icon: string,
  type: ("HARBOUR" | "MONUMENT" | "RESIDENCE" | "ROAD" | "PUBLIC") // ...
  atPopulationOf: ClassType,
  constructionCost: CostType,
  maintenanceCost: MaintenanceType | null,
  electricity: ("OPTIONAL" | "REQUIRED" | null)
}
interface Buildings {
  [key: string]: (ProductionBuildingType | OtherBuildingType),
}

export interface ProductType {
  id: string,
  name: string,
  icon: string,
  localText: LocalTextType | null,
  producerIds: string[],
  isEndProduct: boolean,
}

// IDs: ./ids.txt

// 10...... => bothWorlds
// 20...... => newWorld
// 30...... => oldWorld
// ..10.... => Farmers / Jornaleros
// ..20.... => Workers / Obreros
// ..30.... => Artisans
// ..40.... => Engineers
// ..50.... => Investors
// ....01.. => Building
// ......01 => Product


///////////////////////////////////////////////////////////////////////////////
///////////////////////////// Population //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


const population: PopulationType = {
  oldWorld: {
    id: "w1c0b000p00",
    name: "Old World",
    localText: {
      fr: "Population : Ancien Monde",
      pt: "Moderate Population",
      en: "Population: Old World",
      it: "Popolazione: Vecchio Mondo",
      de: "Bevölkerung: Alte Welt",
      es: "Población: Viejo Mundo",
      pl: "",
      ru: "Население: Старый Свет"
    },
    classes: {
      w1c1b000p00: {
        id: "w1c1b000p00",
        name: "Farmers",
        icon: "/assets/icons/farmers.webp",
        localText: {
          fr: "Fermiers",
          pt: "Farmers",
          en: "Farmers",
          it: "Contadini",
          de: "Bauern",
          es: "Granjeros",
          pl: "Farmerzy",
          ru: "Фермеры"
        },
        residentsPerHouse: 10,
        needs: [{ 
            id: "w1c1b002p00", // Market
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 0,
          },
          {
            id: "w0c0b000p03", // Fish
            type: "BASIC",
            perMinute: 0.0025000002,
            atPopulationOf: 50,
          },
          {
            id: "w0c0b000p05", // Schnapps
            type: "LUXURY",
            perMinute: 	0.003333336,
            atPopulationOf: 100,
          },
          {
            id: "w0c0b000p07",  // Work Clothes,
            type: "BASIC",
            perMinute: 0.003076926,
            atPopulationOf: 150,	
          },
          {
            id: "w1c1b013p00", // Pub
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 150,
          },
        ]
      },
      w1c2b000p00: {
        id: "w1c2b000p00",
        name: "Workers",
        icon: "/assets/icons/workers.webp",
        localText: {
          fr: "Ouvriers",
          pt: "Workers",
          en: "Workers",
          it: "Lavoratori",
          de: "Arbeiter",
          es: "Trabajadores",
          pl: "Robotnicy",
          ru: "Рабочие"
        },
        residentsPerHouse: 20,
        needs: [
          {
            id: "w1c1b002p00", // Market
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1
          },
          {
            id: "w0c0b000p03", // Fish
            type: "BASIC",
            perMinute: 0.0025000002,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p05", // Schnapps
            type: "LUXURY",
            perMinute: 	0.003333336,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p07",  // Work Clothes,
            type: "BASIC",
            perMinute: 0.003076926,
            atPopulationOf: 1,	
          },
          {
            id: "w1c1b013p00", // Pub
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p11", // Sausages
            type: "BASIC",
            perMinute: 0.001000002,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p14", // Bread
            type: "BASIC",
            perMinute: 0.00090909,
            atPopulationOf: 150,
          },
          {
            id: "w1c2b023p00", // Church
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 150,
          },
          {
            id: "w0c0b000p21", // Soap
            type: "BASIC",
            perMinute: 0.000416667,
            atPopulationOf: 300,
          },
          {
            id: "w0c0b000p25", // Beer
            type: "LUXURY",
            perMinute: 0.00076923,
            atPopulationOf: 500,
          },
          {
            id: "w1c2b042p00", // School
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 750,
          }
        ]
      },
      w1c3b000p00: {
        id: "w1c3b000p00",
        name: "Artisans",
        icon: "/assets/icons/artisans.webp",
        localText: {
          fr: "Artisans",
          pt: "Artisans",
          en: "Artisans",
          it: "Artigiani",
          de: "Handwerker",
          es: "Artesanos",
          pl: "Rzemieślnicy",
          ru: "Ремесленники"
        },
        residentsPerHouse: 30,
        needs: [
          {
            id: "w0c0b000p11", // Sausages
            type: "BASIC",
            perMinute: 0.001000002,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p14", // Bread
            type: "BASIC",
            perMinute: 0.00090909,
            atPopulationOf: 1,
          },
          {
            id: "w1c2b023p00", // Church
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p21", // Soap
            type: "BASIC",
            perMinute: 0.000416667,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p25", // Beer
            type: "LUXURY",
            perMinute: 0.00076923,
            atPopulationOf: 1,
          },
          {
            id: "w1c2b042p00", // School
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p57", // Canned Food
            type: "BASIC",
            perMinute: 0.00034188,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p58", // Sewing Machines
            type: "BASIC",
            perMinute: 0.00095238,
            atPopulationOf: 250,
          },
          {
            id: "w1c3b110p00", // Variety Theatre
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 250,
          },
          {
            id: "w0c0b000p30", // Rum
            type: "LUXURY",
            perMinute: 0.001904762,
            atPopulationOf: 500,
          },
          {
            id: "w0c0b000p60", // Fur Coats
            type: "BASIC",
            perMinute: 0.000888888,
            atPopulationOf: 900,
          },
          {
            id: "w1c3b118p00", // University
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1500,
          }
        ]
      },
      w1c4b000p00: {
        id: "w1c4b000p00",
        name: "Engineers",
        icon: "/assets/icons/engineers.webp",
        localText: {
          fr: "Engineers",
          pt: "Engineers",
          en: "Engineers",
          it: "Engineers",
          de: "Engineers",
          es: "Engineers",
          pl: "Engineers",
          ru: "Engineers",
        },
        residentsPerHouse: 40,
        needs: [
          {
            id: "w0c0b000p57", // Canned Food
            type: "BASIC",
            perMinute: 0.00051282,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p58", // Sewing Machines
            type: "BASIC",
            perMinute: 0.0014285715,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p60", // Fur Coats
            type: "BASIC", 
            perMinute: 0.0013333335,
            atPopulationOf: 1,
          },
          {
            id: "w1c3b118p00", // University
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w1c3b110p00", // Variety Theatre
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p30", // Rum
            type: "LUXURY",
            perMinute: 0.002857143,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p66", // Glasses
            type: "BASIC",
            perMinute: 0.000222222,
            atPopulationOf: 1,
          },
          {
            id: "w1c4b126p00", // Electricity (Oil Powerplant)
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 500,
          },
          {
            id: "w0c0b000p70", // High Wheelers
            type: "LUXURY",
            perMinute: 0.0006250005,
            atPopulationOf: 500,
          },
          {
            id: "w0c0b000p41", // Coffee
            type: "BASIC",
            perMinute: 0.001176471,
            atPopulationOf: 1000,
          },
          {
            id: "w0c0b000p73", // Pocket Watches
            type: "LUXURY",
            perMinute: 0.0001960785,
            atPopulationOf: 1000,
          },
          {
            id: "w0c0b000p75", // Light Bulbs
            type: "BASIC",
            perMinute: 0.0003124995,
            atPopulationOf: 1750,
          },
          {
            id: "w1c4b143p00", // Bank
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 3000,
          }
        ]
      },
      w1c5b000p00: {
        id: "w1c5b000p00",
        name: "Investors",
        icon: "/assets/icons/investors.webp",
        localText: {
          fr: "Investors",
          pt: "Investors",
          en: "Investors",
          it: "Investors",
          de: "Investors",
          es: "Investors",
          pl: "Investors",
          ru: "Investors",
        },
        residentsPerHouse: 40,
        needs: [
          {
            id: "w0c0b000p66", // Glasses
            type: "BASIC",
            perMinute: 0.0003555552,
            atPopulationOf: 1,
          },
          {
            id: "w1c4b126p00", // Electricity
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p70", // High Wheelers
            type: "LUXURY",
            perMinute: 0.0009999996,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p41", // Coffee
            type: "BASIC",
            perMinute: 0.0018823524,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p73", // Pocket Watches
            type: "LUXURY",
            perMinute: 0.0003137256,
            atPopulationOf: 1,
          },
          {
            id: "w1c4b142p75", // Light Bulbs
            type: "BASIC",
            perMinute: 0.0005000004,
            atPopulationOf: 1,
          },
          {
            id: "w1c4b143p00", // Bank
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p77", // Champagne
            type: "BASIC",
            perMinute: 0.0004704,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p48", // Cigars
            type: "BASIC",
            perMinute: 0.000444444,
            atPopulationOf: 750,
          },
          {
            id: "w1c5b148p00", // Club House,
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 750,
          },
          {
            id: "w0c0b000p51", // Chocolate,
            type: "BASIC",
            perMinute: 0.0010666668,
            atPopulationOf: 1750,
          },
          {
            id: "w0c0b000p78", // Jewelry,
            type: "LUXURY",
            perMinute: 0.0004210524,
            atPopulationOf: 1750,
          },
          {
            id: "w0c0b000p79", // Gramophones
            type: "LUXURY",
            perMinute: 0.00010524,
            atPopulationOf: 3000,
          },
          {
            id: "w0c0b000p81", // Steam Carriages
            type: "BASIC",
            perMinute: 0.000133332,
            atPopulationOf: 5000,
          },
        ]
      },
    }
  },
  newWorld: {
    id: "w2c0b000p00",
    name: "New World",
    localText: {
      fr: "Population : Nouveau Monde",
      pt: "Colony Population",
      en: "Population: New World",
      it: "Popolazione: Nuovo Mondo",
      de: "Bevölkerung: Neue Welt",
      es: "Población: Nuevo Mundo",
      pl: "",
      ru: "Население: Новый Свет"
    },
    classes: {
      w2c1b000p00: {
        id: "w2c1b000p00",
        name: "Jornaleros",
        icon: "/assets/icons/jornaleros.webp",
        localText: {
          fr: "Jornaleros",
          pt: "Jornaleros",
          en: "Jornaleros",
          it: "Jornaleros",
          de: "Jornaleros",
          es: "Jornaleros",
          pl: "Jornaleros",
          ru: "Хорналеро"
        },
        residentsPerHouse: 10,
        needs: [
          {
            id: "w2c1b044p00", // Market
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1
          },
          {
            id: "w0c0b000p28", // Fried Plantains
            type: "BASIC",
            perMinute: 0.00285714,
            atPopulationOf: 50,
          },
          {
            id: "w0c0b000p35", // Ponchos
            type: "BASIC",
            perMinute: 0.002500002,
            atPopulationOf: 200,
          },
          {
            id: "w0c0b000p30", // Rum
            type: "LUXURY",
            perMinute: 0.00142857,
            atPopulationOf: 100,
          },
          {
            id: "w2c1b069p00", // Chapel
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 300,
          },
        ]
      },
      w2c2b000p00: {
        id: "w2c2b000p00",
        name: "Obreros",
        icon: "/assets/icons/obreros.webp",
        localText: {
          fr: "Obreros",
          pt: "Obreros",
          en: "Obreros",
          it: "Obreros",
          de: "Obreros",
          es: "Obreros",
          pl: "Obreros",
          ru: "Обреро"
        },
        residentsPerHouse: 20,
        needs: [
          {
            id: "w2c1b044p00", // Market
            type: "BASIC",
            perMinute: 0,
            atPopulationOf: 1
          },
          {
            id: "w0c0b000p28", // Fried Plantains
            type: "BASIC",
            perMinute: 0.002857143,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p35", // Ponchos
            type: "BASIC",
            perMinute: 0.002499999,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p30", // Rum
            type: "LUXURY",
            perMinute: 0.001428573,
            atPopulationOf: 1,
          },
          {
            id: "w2c1b069p00", // Chapel
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p39", // Tortillas
            type: "BASIC",
            perMinute: 0.00142857,
            atPopulationOf: 1,
          },
          {
            id: "w0c0b000p41", // Coffee
            type: "BASIC",
            perMinute: 0.000588237,
            atPopulationOf: 300,
          },
          {
            id: "w2c2b080p00", // Boxing Arena
            type: "LUXURY",
            perMinute: 0,
            atPopulationOf: 300,
          },
          {
            id: "w0c0b000p44", // Bowler Hats
            type: "BASIC",
            perMinute: 0.001333332,
            atPopulationOf: 600,
          },
          {
            id: "w0c0b000p25", // Beer
            type: "LUXURY",
            perMinute: 0.001333332,
            atPopulationOf: 600,
          },
          {
            id: "w0c0b000p58", // Sewing Machines
            type: "BASIC",
            perMinute: 0.001250001,
            atPopulationOf: 1000,
          },
          {
            id: "w0c0b000p48", // Cigars
            type: "LUXURY",
            atPopulationOf: 1000,
            perMinute: 0.000555555,
          }, 
        ]
      },
    }
  }
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////// Buildings ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


const buildings: Buildings = {
  w1c1b001p00: {
    id: "w1c1b001p00",
    name: "Dirt Road (Old World)",
    localText: null,
    icon: "/asets/icons/dirtRoad.webp",
    type: "ROAD",
    atPopulationOf: {
      farmers: 0,
    },
    constructionCost: {
      credits: 3,
    },
    maintenanceCost: null,
    electricity: null, 
  },
  w1c1b002p00: {
    id: "w1c1b002p00",
    name: "Market Place (Old World)",
    localText: null,
    icon: "/assets/icons/marketPlace.webp",
    type: "PUBLIC",
    atPopulationOf: {
      farmers: 0,
    },
    constructionCost: {
      credits: 500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 20,
    },
    electricity: null,
  },
  w1c1b003p00: {
    id: "w1c1b003p00",
    name: "Farmer Residence",
    localText: null,
    icon: "/assets/icons/residence.webp",
    type: "RESIDENCE",
    atPopulationOf: {
      farmers: 0,
    },
    constructionCost: {
      timber: 2,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w1c1b004p00: {
    id: "w1c1b004p00",
    name: "Small Warehouse (Old World)",
    localText: null,
    icon: "/assets/icons/smallWarehouse.webp",
    type: "PUBLIC",
    atPopulationOf: {
      farmers: 0,
    },
    constructionCost: {
      credits: 500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 20,
    },
    electricity: null,
  },
  w1c1b005p01: {
    id: "w1c1b005p01",
    name: "Lumberjack's Hut",
    icon: "/assets/icons/wood.webp",
    localText: {
      fr: "Cabane de bûcheron",
      pt: "Lumberjack's Hut",
      en: "Lumberjack's Hut",
      it: "Capanno del taglialegna",
      de: "Holzfällerhütte",
      es: "Cabaña de leñador",
      pl: "Chata drwala",
      ru: "Хижина лесоруба"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 1,
    },
    constructionCost: {
      credits: 100,
    },
    maintenanceCost: {
      credits: 10,
      farmers: 5,
    },
    needs: null,
    produces: "w0c0b000p01", // Wood
    time: 15,
    electricity: null,
  },
  w1c1b006p02: {
    id: "w1c1b006p02",
    name: "Sawmill",
    icon: "/assets/icons/timber.webp",
    localText: {
      fr: "Scierie",
      pt: "Sawmill",
      en: "Sawmill",
      it: "Segheria",
      de: "Sägewerk",
      es: "Serrería",
      pl: "Tartak",
      ru: "Лесопилка"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 1,
    },
    constructionCost: {
      credits: 100,
    },
    maintenanceCost: {
      credits: 10,
      farmers: 10,
    },
    needs: ["w0c0b000p01"], // [Wood]
    produces: "w0c0b000p02", // Timber
    time: 15,
    electricity: "OPTIONAL",
  },
  w1c1b007p03: {
    id: "w1c1b007p03",
    name: "Fishery",
    icon: "/assets/icons/fish.webp",
    localText: {
      fr: "Pêcherie",
      pt: "Fishery",
      en: "Fishery",
      it: "Area di pesca",
      de: "Fischerei",
      es: "Pescadería",
      pl: "Dom rybaka",
      ru: "Рыболовецкая гавань"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 50,
    },
    constructionCost: {
      credits: 100,
      timber: 2,
    },
    maintenanceCost: {
      credits: 40,
      farmers: 25,
    },
    needs: null,
    produces: "w0c0b000p03", // Fish
    time: 30,
    electricity: null,
  },
  w1c1b008p04: {
    id: "w1c1b008p04",
    name: "Potato Farm",
    icon: "/assets/icons/potatoes.webp",
    localText: {
      fr: "Exploitation de pommes de terre",
      pt: "Potato Farm",
      en: "Potato Farm",
      it: "Fattoria di patate",
      de: "Kartoffelhof",
      es: "Granja de patatas",
      pl: "Uprawa ziemniaków",
      ru: "Картофельная ферма"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 100,
    },
    constructionCost: {
      credits: 100,
      timber: 2,
    },
    maintenanceCost: {
      credits: 20,
      farmers: 20,
    },
    needs: null,
    produces: "w0c0b000p04", // Potatoes
    time: 30,
    electricity: null,
  },
  w1c1b009p05: {
    id: "w1c1b009p05",
    name: "Schnapps Distillery",
    icon: "/assets/icons/schnapps.webp",
    localText: {
      fr: "Distillerie",
      pt: "Schnapps Distillery",
      en: "Schnapps Distillery",
      it: "Distilleria di liquori",
      de: "Schnapsbrennerei",
      es: "Destilería de licor",
      pl: "Gorzelnia",
      ru: "Винокурня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 100,
    },
    constructionCost: {
      credits: 100,
      timber: 2,
    },
    maintenanceCost: {
      credits: 40,
      farmers: 50,
    },
    needs: ["w0c0b000p04"], // [Potatoes]
    produces: "w0c0b000p05", // Schnapps
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c1b010p06: {
    id: "w1c1b010p06",
    name: "Scheep Farm",
    icon: "/assets/icons/wool.webp",
    localText: {
      fr: "Élevage de moutons",
      pt: "Sheep Farm",
      en: "Sheep Farm",
      it: "Allevamento di pecore",
      de: "Schäferei",
      es: "Granja ovina",
      pl: "Farma owiec",
      ru: "Овцеферма"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 150,
    },
    constructionCost: {
      credits: 100,
      timber: 2,
    },
    maintenanceCost: {
      credits: 20,
      farmers: 10,
    },
    needs: null,
    produces: "w0c0b000p06", // Sheep Wool
    time: 30,
    electricity: null,
  },
  w1c1b011p07: {
    id: "w1c1b011p07",
    name: "Framework Knitters",
    icon: "/assets/icons/workClothes.webp",
    localText: {
      fr: "Filature",
      pt: "Framework Knitters",
      en: "Framework Knitters",
      it: "Maglieriste",
      de: "Schneiderei",
      es: "Telar de marco",
      pl: "Szwalnia",
      ru: "Жилье вязальщиц"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      farmers: 150,
    },
    constructionCost: {
      credits: 400,
      timber: 2,
    },
    maintenanceCost: {
      credits: 50,
      farmers: 50,
    },
    needs: ["w0c0b000p06"],  // [Wool]
    produces: "w0c0b000p07",  // Work Clothes
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c1b012p00: {
    id: "w1c1b012p00",
    name: "Fire Station (Old World)",
    localText: null,
    icon: "/assets/icons/fireStation.webp",
    type: "PUBLIC",
    atPopulationOf: {
      farmers: 150,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 25,
    },
    electricity: null,
  },
  w1c1b013p00: {
    id: "w1c1b013p00",
    name: "Pub",
    localText: null,
    icon: "/assets/icons/pub.webp",
    type: "PUBLIC",
    atPopulationOf: {
      farmers: 150,
    },
    constructionCost: {
      credits: 500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 20,
    },
    electricity: null,
  },
  w1c2b014p00: {
    id: "w1c2b014p00",
    name: "Paved Street (Old World)",
    localText: null,
    icon: "/assets/icons/pavedStreet.webp",
    type: "ROAD",
    atPopulationOf: {
      workers: 1,
    },
    constructionCost: {
      credits: 13,
      bricks: 1,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w1c2b015p08: {
    id: "w1c2b015p08",
    name: "Clay Pit (Old World)",
    icon: "/assets/icons/clay.webp",
    localText: {
      fr: "Carrière d'argile",
      pt: "Clay Pit",
      en: "Clay Pit",
      it: "Cava di argilla",
      de: "Lehmgrube",
      es: "Cantera de arcilla",
      pl: "Wyrobisko gliny",
      ru: "Глиняный карьер"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 1,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 10,
      workers: 50,
    },
    needs: null,
    produces: "w0c0b000p08",  // Clay
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c2b016p09: {
    id: "w1c2b016p09",
    name: "Brick Factory (Old World)",
    icon: "/assets/icons/bricks.webp",
    localText: {
      fr: "Briqueterie",
      pt: "Brick Factory",
      en: "Brick Factory",
      it: "Fabbrica di mattoni",
      de: "Ziegelei",
      es: "Fábrica de ladrillos",
      pl: "Cegielnia",
      ru: "Кирпичный завод"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 1,
    },
    constructionCost: {
      credits: 500,
      timber: 8,
    },
    maintenanceCost: {
      credits: 20,
      workers: 25,
    },
    needs: ["w0c0b000p08"], // [Clay]
    produces: "w0c0b000p09",  // Bricks
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c2b017p10: {
    id: "w1c2b017p10",
    name: "Pig Farm",
    icon: "/assets/icons/pigs.webp",
    localText: {
      fr: "Élevage de porcs",
      pt: "Pig Farm",
      en: "Pig Farm",
      it: "Allevamento di maiali",
      de: "Schweinezucht",
      es: "Granja porcina",
      pl: "Farma świń",
      ru: "Свиноферма"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 1,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 40,
      workers: 30,
    },
    needs: null,
    produces: "w0c0b000p10",  // Pigs
    time: 60,
    electricity: null,
  },
  w1c2b018p11: {
    id: "w1c2b018p11",
    icon: "/assets/icons/sausages.webp",
    name: "Slaughterhouse",
    localText: {
      fr: "Boucherie",
      pt: "Butcher's",
      en: "Slaughterhouse",
      it: "Macelleria",
      de: "Metzgerei",
      es: "Carnicería",
      pl: "Rzeźnik",
      ru: "Мясная лавка"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 1,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 80,
      workers: 50,
    },
    needs: ["w0c0b000p10"], // [Pigs]
    produces: "w0c0b000p11",  // Sausages
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c2b019p00: {
    id: "w1c2b019p00",
    icon: "/assets/icons/tradeUnion.webp",
    name: "Trade Union (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      workers: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 25,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c2b020p12: {
    id: "w1c2b020p12",
    icon: "/assets/icons/grain.webp",
    name: "Grain Farm",
    localText: {
      fr: "Ferme céréalière",
      pt: "Grain Farm",
      en: "Grain Farm",
      it: "Fattoria di grano",
      de: "Getreidefarm",
      es: "Granja de trigo",
      pl: "Uprawa zboża",
      ru: "Ферма",
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 20,
      farmers: 20,
    },
    needs: null,
    produces: "w0c0b000p12", // Grain
    time: 60,
    electricity: null,
  },
  w1c2b021p13: {
    id: "w1c2b021p13",
    icon: "/assets/icons/flour.webp",
    name: "Flour Mill",
    localText: {
      fr: "Moulin",
      pt: "Flour Mill",
      en: "Flour Mill",
      it: "Mulino",
      de: "Mühle",
      es: "Molino de harina",
      pl: "Wiatrak",
      ru: "Мельница"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 50,
      farmers: 10,
    },
    needs: ["w0c0b000p12"], // Grain
    produces: "w0c0b000p13", // Flour
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c2b022p14: {
    id: "w1c2b022p14",
    icon: "/assets/icons/bread.webp",
    name: "Bakery",
    localText: {
      fr: "Boulangerie",
      pt: "Bakery",
      en: "Bakery",
      it: "Panificio",
      de: "Bäckerei",
      es: "Panadería",
      pl: "Piekarnia",
      ru: "Пекарня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 1000,
      timber: 4,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 60,
      workers: 50,
    },
    needs: ["w0c0b000p13"], // [Flour]
    produces: "w0c0b000p14", // Bread
    time: 60,
    electricity: "OPTIONAL"
  },
  w1c2b023p00: {
    id: "w1c2b023p00",
    icon: "/assets/icons/church.webp",
    name: "Church",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 2500,
      timber: 20,
      bricks: 25,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c2b024p15: {
    id: "w1c2b024p15",
    icon: "/assets/icons/sails.webp",
    name: "Sailmakers (Old World)",
    localText: {
      fr: "Voilerie",
      pt: "Sailmakers",
      en: "Sailmakers",
      it: "Velai",
      de: "Segelweberei",
      es: "Fabricante de velas",
      pl: "Żaglomistrz",
      ru: "Парусная фабрика"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 150
    },
    constructionCost: {
      credits: 500,
      timber: 8,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 75,
      workers: 50,
    },
    needs: ["w0c0b000p06"], // Wool
    produces: "w0c0b000p15", // Sails
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c2b025p00: {
    id: "w1c2b025p00",
    icon: "/assets/icons/quay.webp",
    name: "Quay (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 5,
      bricks: 1,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w1c2b026p00: {
    id: "w1c2b026p00",
    icon: "/assets/icons/sailingShipyard.webp",
    name: "Sailing Shipyard (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 10000,
      timber: 20,
      bricks: 25,
    },
    maintenanceCost: {
      credits: 100,
      workers: 100,
    },
    electricity: "OPTIONAL",
  },
  w1c2b027p00: {
    id: "w1c2b027p00",
    icon: "/assets/icons/depot.webp",
    name: "Depot (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 2500,
      timber: 10,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 20,
    },
    electricity: null,
  },
  w1c2b028p00: {
    id: "w1c2b028p00",
    icon: "/assets/icons/harbourmaster.webp",
    name: "Harbourmaster's Office (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 2500,
      timber: 20,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c2b029p00: {
    id: "w1c2b029p00",
    icon: "/assets/icons/mountedGuns.webp",
    name: "Mounted Guns (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 2000,
      timber: 10,
      bricks: 10,
      weapons: 5,
    },
    maintenanceCost: {
      credits: 10,
    },
    electricity: null,
  },
  w1c2b030p00: {
    id: "w1c2b030p00",
    icon: "/assets/icons/cannonTower.webp",
    name: "Cannon Tower (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      workers: 150,
    },
    constructionCost: {
      credits: 4000,
      timber: 10,
      bricks: 10,
      steelBeams: 8,
      weapons: 10,
    },
    maintenanceCost: {
      credits: 30,
    },
    electricity: null,
  },
  w1c2b031p16: {
    id: "w1c2b031p16",
    icon: "/assets/icons/iron.webp",
    name: "Iron Mine",
    localText: {
      fr: "Mine de fer",
      pt: "Iron Mine",
      en: "Iron Mine",
      it: "Miniera di ferro",
      de: "Eisenmine",
      es: "Mina de hierro",
      pl: "Kopalnia żelaza",
      ru: "Железный рудник"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 800,
      timber: 4,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 50,
      workers: 50,
    },
    needs: null,
    produces: "w0c0b000p16", // Iron
    time: 15,
    electricity: "OPTIONAL",
  },
  w1c2b032p17: {
    id: "w1c2b032p17",
    icon: "/assets/icons/charcoalKiln.webp",
    name: "Charcoal Kiln",
    localText: {
      fr: "Charbonnière",
      pt: "Charcoal Kiln",
      en: "Charcoal Kiln",
      it: "Forno a carbone",
      de: "Köhlerei",
      es: "Horno de carbonización",
      pl: "Mielerz",
      ru: "Углевыжигательная печь"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 20,
      workers: 10,
    },
    needs: null,
    produces: "w0c0b000p17", // Coal
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c2b033p18: {
    id: "w1c2b033p18",
    icon: "/assets/icons/steel.webp",
    name: "Furnace",
    localText: {
      fr: "Fourneau",
      pt: "Furnace",
      en: "Furnace",
      it: "Fornace",
      de: "Hochofen",
      es: "Alto horno",
      pl: "Piec hutniczy",
      ru: "Плавильня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 100,
      workers: 100,
    },
    needs: ["w0c0b000p16", "w0c0b000p17"], // [Iron, Coal]
    produces: "w0c0b000p18", // Steel
    time: 30,
    electricity: "OPTIONAL"
  },
  w1c2b034p19: {
    id: "w1c2b034p19",
    icon: "/assets/icons/steelBeams.webp",
    name: "Steelworks",
    localText: {
      fr: "Aciérie",
      pt: "Steelworks",
      en: "Steelworks",
      it: "Acciaieria",
      de: "Stahlwerk",
      es: "Acerería",
      pl: "Stalownia",
      ru: "Сталелитейный завод"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 1000,
      timber: 8,
      bricks: 10,
    }, 
    maintenanceCost: {
      credits: 200,
      workers: 200,
    },
    needs: ["w0c0b000p18"], // Steel
    produces: "w0c0b000p19", // Steel Beams
    time: 45,
    electricity: "OPTIONAL",
  },
  w1c2b035p20: {
    id: "w1c2b035p20",
    icon: "/assets/icons/tallow.webp",
    name: "Rendering Works",
    localText: {
      fr: "Fonderie de suif",
      pt: "Rendering Works",
      en: "Rendering Works",
      it: "Scorticatoio",
      de: "Wasenmeisterei",
      es: "Extractor de grasa",
      pl: "Wytwórnia łoju",
      ru: "Салотопный завод"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
      bricks: 5,
      steelBeams: 4,
    },
    maintenanceCost: {
      credits: 40,
      workers: 40,
    },
    needs: ["w0c0b000p10"], // Pigs
    produces: "w0c0b000p20", // Tallow
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c2b036p21: {
    id: "w1c2b036p21",
    icon: "/assets/icons/soap.webp",
    name: "Soap Factory",
    localText: {
      fr: "Savonnerie",
      pt: "Soap Factory",
      en: "Soap Factory",
      it: "Fabbrica di sapone",
      de: "Seifensiederei",
      es: "Fábrica de jabón",
      pl: "Wytwórnia mydła",
      ru: "Мыловарня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 500,
      timber: 4, 
      bricks: 5,
      steelBeams: 4,
    },
    maintenanceCost: {
      credits: 50,
      workers: 50,
    },
    needs: ["w0c0b000p20"], // Tallow
    produces: "w0c0b000p21", // Soap
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c2b037p22: {
    id: "w1c2b037p22",
    icon: "/assets/icons/weapons.webp",
    name: "Weapon Factory",
    localText: {
      fr: "Usine d'armements",
      pt: "Weapon Factory",
      en: "Weapon Factory",
      it: "Fabbrica di armi",
      de: "Waffenfabrik",
      es: "Fábrica de armas",
      pl: "Fabryka broni",
      ru: "Оружейный завод"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 300,
    },
    constructionCost: {
      credits: 700,
      timber: 8,
      bricks: 10,
      steelBeams: 8,
    },
    maintenanceCost: {
      credits: 150,
      workers: 50,
    },
    needs: ["w0c0b000p18"], // Steel
    produces: "w0c0b000p22", // Weapons
    time: 90,
    electricity: "OPTIONAL",
  },
  w1c2b038p23: {
    id: "w1c2b038p23",
    icon: "/assets/icons/hops.webp",
    name: "Hop Farm",
    localText: {
      fr: "Houblonnière",
      pt: "Hop Farm",
      en: "Hop Farm",
      it: "Fattoria di luppoli",
      de: "Hopfenplantage",
      es: "Granja de lúpulo",
      pl: "Uprawa chmielu",
      ru: "Ферма хмеля"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 500,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 20,
      farmers: 20,
    },
    needs: null,
    produces: "w0c0b000p23", // Hops
    time: 90,
    electricity: null,
  },
  w1c2b039p24: {
    id: "w1c2b039p24",
    icon: "/assets/icons/malt.webp",
    name: "Malthouse",
    localText: {
      fr: "Malterie",
      pt: "Malthouse",
      en: "Malthouse",
      it: "Malteria",
      de: "Mälzerei",
      es: "Maltería",
      pl: "Słodownia",
      ru: "Солодильня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 500,
    },
    constructionCost: {
      credits: 500, 
      timber: 4,
      bricks: 5, 
      steelBeams: 4
    },
    maintenanceCost: {
      credits: 150,
      workers: 25
    },
    needs: ["w0c0b000p12"], // Grain
    produces: "w0c0b000p24", // Malt
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c2b040p25: {
    id: "w1c2b040p25",
    icon: "/assets/icons/beer.webp",
    name: "Brewery",
    localText: {
      fr: "Brasserie",
      pt: "Brewery",
      en: "Brewery",
      it: "Birrificio",
      de: "Brauerei",
      es: "Cervecería",
      pl: "Browar",
      ru: "Пивоварня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      workers: 500,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
      bricks: 5,
      steelBeams: 4,
    },
    maintenanceCost: {
      credits: 200,
      workers: 75,
    },
    needs: ["w0c0b000p23", "w0c0b000p24"], // [Hops, Malt]
    produces: "w0c0b000p25", // Beer
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c2b041p00: {
    id: "w1c2b041p00",
    icon: "/assets/icons/policeStation.webp",
    name: "Police Station (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      workers: 500,
    },
    constructionCost: {
      credits: 2500,
      timber: 8,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c2b042p00: {
    id: "w1c2b042p00",
    icon: "/assets/icons/school.webp",
    name: "School",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      workers: 750,
    },
    constructionCost: {
      credits: 2500,
      timber: 20,
      bricks: 25,
      steelBeams: 20,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c1b043p00: {
    id: "w2c1b043p00",
    icon: "/assets/icons/dirtRoad.webp",
    name: "Dirt Road (New World)",
    localText: null,
    type: "ROAD",
    atPopulationOf: {
      jornaleros: 0
    },
    constructionCost: {
      credits: 3,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w2c1b044p00: {
    id: "w2c1b044p00",
    icon: "/assets/icons/marketPlace.webp",
    name: "Market Place (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 0
    },
    constructionCost: {
      credits: 500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 20,
    },
    electricity: null,
  },
  w2c1b045p00: {
    id: "w2c1b045p00",
    icon: "/assets/icons/jornaleroResidence.webp",
    name: "Jornalero Residence",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 0
    },
    constructionCost: {
      timber: 1,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w2c1b046p00: {
    id: "w2c1b046p00",
    icon: "/assets/icons/smallWarehouse.webp",
    name: "Small Warehouse (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 0
    },
    constructionCost: {
      credits: 500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 10,
    },
    electricity: null,
  },
  w2c1b047p01: {
    id: "w2c1b047p01",
    icon: "/assets/icons/wood.webp",
    name: "Lumberjack's Hut (New World)",
    localText: {
      fr: "Cabane de bûcheron",
      pt: "Lumberjack's Hut",
      en: "Lumberjack's Hut",
      it: "Capanno del taglialegna",
      de: "Holzfällerhütte",
      es: "Cabaña de leñador",
      pl: "Chata drwala",
      ru: "Хижина лесоруба"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 1,
    },
    constructionCost: {
      credits: 500,
    },
    maintenanceCost: {
      credits: 10,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p01", // Wood
    time: 15,
    electricity: null,
  },
  w2c1b048p02: {
    id: "w2c1b048p02",
    icon: "/assets/icons/timber.webp",
    name: "Sawmill (New World)",
    localText: {
      fr: "Scierie",
      pt: "Sawmill",
      en: "Sawmill",
      it: "Segheria",
      de: "Sägewerk",
      es: "Serrería",
      pl: "Tartak",
      ru: "Лесопилка"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 1,
    },
    constructionCost: {
      credits: 500,
    },
    maintenanceCost: {
      credits: 10,
      jornaleros: 20,
    },
    needs: ["w0c0b000p01"], // [Wood]
    produces: "w0c0b000p02", // Timber
    time: 15,
    electricity: null,
  },
  w2c1b049p26: {
    id: "w2c1b049p26",
    icon: "/assets/icons/fishOil.webp",
    name: "Fish Oil Factory",
    localText: {
      fr: "Fabrique d'huile de poisson",
      pt: "Fish Oil Factory",
      en: "Fish Oil Factory",
      it: "Fabbrica olio di pesce",
      de: "Fischölfabrik",
      es: "Fábrica de aceite de pescado",
      pl: "Fabryka tranu",
      ru: "Фабрика рыбьего жира"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 50,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 5,
      jornaleros: 15,
    },
    needs: null,
    produces: "w0c0b000p26", // Fish Oil
    time: 30,
    electricity: null,
  },
  w2c1b050p27: {
    id: "w2c1b050p27",
    icon: "/assets/icons/plantains.webp",
    name: "Plantain Plantation",
    localText: {
      fr: "Plantation de bananes",
      pt: "Banana Plantation",
      en: "Plantain Plantation",
      it: "Piantagione di banane",
      de: "Bananenplantage",
      es: "Plantación de plátanos",
      pl: "Plantacja bananów",
      ru: "Банановая плантация"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 50,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 5,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p27", // Plantains
    time: 30,
    electricity: null,
  },
  w2c1b051p28: {
    id: "w2c1b051p28",
    icon: "/assets/icons/friedPlantains.webp",
    name: "Fried Plantain Kitchen",
    localText: {
      fr: "Cuisine de plantains frits",
      pt: "Fried Plantain Kitchen",
      en: "Fried Plantain Kitchen",
      it: "Cucina banane fritte",
      de: "Backbananen-Küche",
      es: "Freiduría de plátano",
      pl: "Kuchnia pieczonych bananów",
      ru: "Кухня для поджарки бананов"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 50,
    },
    constructionCost: {
      credits: 500,
      timber: 2,
    },
    maintenanceCost: {
      credits: 15,
      jornaleros: 25,
    },
    needs: ["w0c0b000p26", "w0c0b000p27"], // [Fish Oil, Plantains]
    produces: "w0c0b000p28", // Fried Plantains
    time: 30,
    electricity: null,
  },
  w2c1b052p00: {
    id: "w2c1b052p00",
    icon: "/assets/icons/tradeUnion.webp",
    name: "Trade Union (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 50,
    },
    constructionCost: {
      credits: 2500,
      timber: 25,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c1b053p29: {
    id: "w2c1b053p29",
    icon: "/assets/icons/sugarCane.webp",
    name: "Sugar Cane Plantation",
    localText: {
      fr: "Plantation de canne à sucre",
      pt: "Sugar Cane Plantation",
      en: "Sugar Cane Plantation",
      it: "Piantagione di canne da zucchero",
      de: "Zuckerrohrplantage",
      es: "Plantación de caña de azúcar",
      pl: "Plantacja trzciny cukrowej",
      ru: "Плантация тростника"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 100,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 5,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p29", // Sugar Cane
    time: 30,
    electricity: null,
  },
  w2c1b054p30: {
    id: "w2c1b054p30",
    icon: "/assets/icons/rum.webp",
    name: "Rum Distillery",
    localText: {
      fr: "Rhumerie",
      pt: "Rum Distillery",
      en: "Rum Distillery",
      it: "Distilleria di rum",
      de: "Rumbrennerei",
      es: "Destilería de ron",
      pl: "Destylarnia rumu",
      ru: "Фабрика рома"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 100,
    },
    constructionCost: {
      credits: 2500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 50,
      jornaleros: 30,
    },
    needs: ["w0c0b000p01", "w0c0b000p29"], // [Wood, Sugar]
    produces: "w0c0b000p30", // Rum
    time: 30,
    electricity: null,
  },
  w2c1b055p31: {
    id: "w2c1b055p31",
    icon: "/assets/icons/cotton.webp",
    name: "Cotton Plantation",
    localText: {
      fr: "Plantation de coton",
      pt: "Cotton Plantation",
      en: "Cotton Plantation",
      it: "Piantagione di cotone",
      de: "Baumwollplantage",
      es: "Plantación de algodón",
      pl: "Plantacja bawełny",
      ru: "Плантация хлопка"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 5,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p31", // Cotton
    time: 60,
    electricity: null,
  },
  w2c1b056p32: {
    id: "w2c1b056p32",
    icon: "/assets/icons/cottonFabric.webp",
    name: "Cotton Mill",
    localText: {
      fr: "Filature de coton",
      pt: "Cotton Mill",
      en: "Cotton Mill",
      it: "Cotonificio",
      de: "Baumwollweberei",
      es: "Molino de algodón",
      pl: "Przędzalnia bawełny",
      ru: "Хлопкопрядильная фабрика"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 10,
      jornaleros: 10
    },
    needs: ["w0c0b000p31"], // [Cotton]
    produces: "w0c0b000p32", // Cotton Fabric
    time: 30,
    electricity: null,
  },
  w2c1b057p15: {
    id: "w2c1b057p15",
    icon: "/assets/icons/sails.webp",
    name: "Sailmakers (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 500,
      timber: 8,
    },
    maintenanceCost: {
      credits: 15,
      jornaleros: 20,
    },
    needs: ["w0c0b000p32"], // Cotton Fabric
    produces: "w0c0b000p15", // Sails
    time: 30,
    electricity: null,
  },
  w2c1b058p00: {
    id: "w2c1b058p00",
    icon: "/assets/icons/quai.webp",
    name: "Quai (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 20,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w2c1b059p00: {
    id: "w2c1b059p00",
    icon: "/assets/icons/sailingShipyard.webp",
    name: "Sailing Shipyard (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 10000,
      timber: 20,
    },
    maintenanceCost: {
      credits: 100,
      jornaleros: 100,
    },
    electricity: null,
  },
  w2c1b060p00: {
    id: "w2c1b060p00",
    icon: "/assets/icons/depot.webp",
    name: "Depot (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 2500,
      timber: 10,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 20,
    },
    electricity: null,
  },
  w2c1b061p00: {
    id: "w2c1b061p00",
    icon: "/assets/icons/harbourmaster.webp",
    name: "Harbourmaster's Office (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 2500,
      timber: 20,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c1b062p00: {
    id: "w2c1b062p00",
    icon: "/assets/icons/repairCrane.webp",
    name: "Repair Crane (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 500,
      timber: 50,
      bricks: 75,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c1b063p00: {
    id: "w2c1b063p00",
    icon: "/assets/icons/mountedGuns.webp",
    name: "Mounted Guns (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 5000,
      timber: 20,
      bricks: 10,
      weapons: 5,
    },
    maintenanceCost: {
      credits: 10,
    },
    electricity: null,
  },
  w2c1b064p33: {
    id: "w2c1b064p33",
    icon: "/assets/icons/pearls.webp",
    name: "Pearl Farm",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 0,
    },
    constructionCost: {
      credits: 8500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 25,
      jornaleros: 50,
    },
    needs: null,
    produces: "w0c0b000p33", // Pearls
    time: 90,
    electricity: null,
  },
  w2c1b065p34: {
    id: "w2c1b065p34",
    icon: "/assets/icons/alpacaWool.webp",
    name: "Alpaca Farm",
    localText: {
      fr: "Élevage d'alpagas",
      pt: "Alpaca Farm",
      en: "Alpaca Farm",
      it: "Fattoria di alpaca",
      de: "Alpakafarm",
      es: "Granja de alpacas",
      pl: "Farma alpak",
      ru: "Ферма альпак"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 200,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 5,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p34", // Alpaca Wool
    time: 30,
    electricity: null,
  },
  w2c1b066p35: {
    id: "w2c1b066p35",
    icon: "/assets/icons/ponchos.webp",
    name: "Poncho Darner",
    localText: {
      fr: "Fabricant de ponchos",
      pt: "Poncho Darner",
      en: "Poncho Darner",
      it: "Rammendatore di poncho",
      de: "Ponchoweberei",
      es: "Tejedor de ponchos",
      pl: "Wytwórca poncz",
      ru: "Фабрика пончо"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 200,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 15,
      jornaleros: 30,
    },
    needs: ["w0c0b000p34"], // [Alpaca Wool]
    produces: "w0c0b000p35", // Ponchos
    time: 30,
    electricity: null,
  },
  w2c1b067p36: {
    id: "w2c1b067p36",
    icon: "/assets/icons/caoutchouc.webp",
    name: "Caoutchouc Plantation",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      jornaleros: 200,
    },
    constructionCost: {
      credits: 2500,
      timber: 8,
    },
    maintenanceCost: {
      credits: 25,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p36", // Caoutchouc
    time: 60,
    electricity: null,
  },
  w2c1b068p00: {
    id: "w2c1b068p00",
    icon: "/assets/icons/fireStation.webp",
    name: "Fire Station (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 200,
    },
    constructionCost: {
      credits: 500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 25,
    },
    electricity: null,
  },
  w2c1b069p00: {
    id: "w2c1b069p00",
    icon: "/assets/icons/chapel.webp",
    name: "Chapel",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 300,
    },
    constructionCost: {
      credits: 500,
      timber: 10,
    },
    maintenanceCost: {
      credits: 10,
    },
    electricity: null,
  },
  w2c1b070p00: {
    id: "w2c1b070p00",
    icon: "/assets/icons/policeStation.webp",
    name: "Police Station (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      jornaleros: 300,
    },
    constructionCost: {
      credits: 2500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c2b071p00: {
    id: "w2c2b071p00",
    icon: "/assets/icons/pavedStreet.webp",
    name: "Paved Street (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 13,
      bricks: 3,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w2c2b072p08: {
    id: "w2c2b072p08",
    icon: "/assets/icons/clay.webp",
    name: "Clay Pit (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 4,
    },
    maintenanceCost: {
      credits: 10,
      obreros: 100,
    },
    needs: null,
    produces: "w0c0b000p08", // Clay
    time: 30,
    electricity: null,
  },
  w2c2b073p09: {
    id: "w2c2b073p09",
    icon: "/assets/icons/bricks.webp",
    name: "Brick Factory (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 8,
    },
    maintenanceCost: {
      credits: 20,
      obreros: 50,
    },
    needs: ["w0c0b000p08"], // Clay
    produces: "w0c0b000p09", // Bricks
    time: 60,
    electricity: null,
  },
  w2c2b074p37: {
    id: "w2c2b074p37",
    icon: "/assets/icons/beef.webp",
    name: "Cattle Farm (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 25,
      jornaleros: 25,
    },
    needs: null,
    produces: "w0c0b000p37", // Beef
    time: 60,
    electricity: null,
  },
  w2c2b075p38: {
    id: "w2c2b075p38",
    icon: "/assets/icons/corn.webp",
    name: "Corn Farm",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 3,
    },
    maintenanceCost: {
      credits: 25,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p38", // Corn
    time: 60,
    electricity: null,
  },
  w2c2b076p39: {
    id: "w2c2b076p39",
    icon: "/assets/icons/tortillas.webp",
    name: "Tortilla Maker",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 4500,
      timber: 3,
      bricks: 2,
    },
    maintenanceCost: {
      credits: 100,
      obreros: 100,
    },
    needs: ["w0c0b000p37", "w0c0b000p38"], // [Beef, Corn]
    produces: "w0c0b000p39", // Tortillas
    time: 30,
    electricity: null,
  },
  w2c2b077p00: {
    id: "w2c2b077p00",
    icon: "/assets/icons/townHall.webp",
    name: "Town Hall (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      obreros: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 25,
      bricks: 25,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c2b078p40: {
    id: "w2c2b078p40",
    icon: "/assets/icons/coffeeBeans.webp",
    name: "Coffee Plantation",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 2500,
      timber: 5,
    },
    maintenanceCost: {
      credits: 25,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p40", // Coffee Beans
    time: 60,
    electricity: null,
  },
  w2c2b079p41: {
    id: "w2c2b079p41",
    icon: "/assets/icons/coffee.webp",
    name: "Coffee Roaster",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 9000,
      timber: 5,
      bricks: 3,
    },
    maintenanceCost: {
      credits: 150,
      obreros: 150,
    },
    needs: ["w0c0b000p40"], // Coffee Beans
    produces: "w0c0b000p41", // Coffee
    time: 30,
    electricity: null,
  },
  w2c2b080p00: {
    id: "w2c2b080p00",
    icon: "/assets/icons/boxingArena.webp",
    name: "Boxing Arena",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 5400,
      timber: 20,
      bricks: 25,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w2c4b081p42: {
    id: "w2c4b081p42",
    icon: "/assets/icons/goldOre.webp",
    name: "Gold Mine",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 2500,
      timber: 8,
      bricks: 15,
    },
    maintenanceCost: {
      credits: 250,
      obreros: 100
    },
    needs: null,
    produces: "w0c0b000p42", // Gold Ore
    time: 150,
    electricity: null,
  },
  w2c2b082p00: {
    id: "w2c2b082p00",
    icon: "/assets/icons/publicMooring.webp",
    name: "Public Mooring (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 2500,
      timber: 20,
      bricks: 10,
    },
    maintenanceCost: {
      credits: 250,
    },
    electricity: null,
  },
  w2c2b083p00: {
    id: "w2c2b083p00",
    icon: "/assets/icons/pier.webp",
    name: "Pier (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 2500,
      timber: 30,
      bricks: 50,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c2b084p00: {
    id: "w2c2b084p00",
    icon: "/assets/icons/cannonTower.webp",
    name: "Cannon Tower (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 10000,
      timber: 40,
      bricks: 40,
      weapons: 10,
    },
    maintenanceCost: {
      credits: 30,
    },
    electricity: null,
  },
  w2c2b085p00: {
    id: "w2c2b085p00",
    icon: "/assets/icons/smallOilHarbour.webp",
    name: "Small Oil Harbour (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 10000,
      timber: 20,
      bricks: 25,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w2c2b086p00: {
    id: "w2c2b086p00",
    icon: "/assets/icons/oilStorage.webp",
    name: "Oil Storage (New World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      obreros: 300,
    },
    constructionCost: {
      credits: 8000,
      timber: 8,
      bricks: 15,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w2c2b087p43: {
    id: "w2c2b087p43",
    icon: "/assets/icons/felt.webp",
    name: "Felt Producer",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 600,
    },
    constructionCost: {
      credits: 2500,
      timber: 3,
      bricks: 2,
    },
    maintenanceCost: {
      credits: 10,
      jornaleros: 10,
    },
    needs: ["w0c0b000p34"], // Alpaca Wool
    produces: "w0c0b000p43", // Felt
    time: 30,
    electricity: null,
  },
  w2c2b088p44: {
    id: "w2c2b088p44",
    icon: "/assets/icons/bowlerHats.webp",
    name: "Bombin Weaver",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 600,
    },
    constructionCost: {
      credits: 9000,
      timber: 3,
      bricks: 2,
    },
    maintenanceCost: {
      credits: 50,
      obreros: 20,
    },
    needs: ["w0c0b000p32", "w0c0b000p43"], //  [Cotton Fabric, Felt]
    produces: "w0c0b000p44", // Bowler Hats
    time: 30,
    electricity: null,
  },
  w2c2b089p00: {
    id: "w2c2b089p00",
    icon: "/assets/icons/hospital.webp",
    name: "Hospital (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      obreros: 600,
    },
    constructionCost: {
      credits: 10000,
      timber: 12,
      bricks: 20,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w2c2b090p45: {
    id: "w2c2b090p45",
    icon: "/assets/icons/oil.webp",
    name: "Oil Raffinery (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 600,
    },
    constructionCost: {
      credits: 25000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 250,
      obreros: 75,
    },
    needs: null,
    produces: "w0c0b000p45", // Oil
    time: 15,
    electricity: null,
  },
  w2c2b091p00: {
    id: "w2c2b091p00",
    icon: "/assets/icons/rails.webp",
    name: "Rails (New World)",
    localText: null,
    type: "ROAD",
    atPopulationOf: {
      obreros: 600,
    },
    constructionCost: {
      credits: 50,
      timber: 1,
      steelBeams: 1,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w2c2b092p46: {
    id: "w2c2b092p46",
    icon: "/assets/icons/tobacco.webp",
    name: "Tobacco Plantation",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1000,
    },
    constructionCost: {
      credits: 7000,
      timber: 10,
    },
    maintenanceCost: {
      credits: 25,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p46", // Tobacco
    time: 120,
    electricity: null,
  },
  w2c2b093p47: {
    id: "w2c2b093p47",
    icon: "/assets/icons/woodVeneers.webp",
    name: "Marquetry Workshop (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1000,
    },
    constructionCost: {
      credits: 2500,
      timber: 10,
      bricks: 20,
    },
    maintenanceCost: {
      credits: 100,
      obreros: 100,
    },
    needs: ["w0c0b000p01"], // [Wood]
    produces: "w0c0b000p47", // Wood Veneers
    time: 60,
    electricity: null,
  },
  w2c2b094p48: {
    id: "w2c2b094p48",
    icon: "/assets/icons/cigars.webp",
    name: "Cigar Factory (New World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1000,
    },
    constructionCost: {
      credits: 2500,
      timber: 10,
      bricks: 20,
    },
    maintenanceCost: {
      credits: 250,
      obreros: 175,
    },
    needs: ["w0c0b000p46", "w0c0b000p47"], // [Tobacco, Wood Veneers]
    produces: "w0c0b000p48", // Cigars
    time: 30,
    electricity: null,
  },
  w2c2b095p49: {
    id: "w2c2b095p49",
    icon: "/assets/icons/cocoa.webp",
    name: "Cocoa Plantation",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1500,
    },
    constructionCost: {
      credits: 7600,
      timber: 6,
    },
    maintenanceCost: {
      credits: 5,
      jornaleros: 10,
    },
    needs: null,
    produces: "w0c0b000p49", // Cocoa
    time: 60,
    electricity: null,
  },
  w2c2b096p50: {
    id: "w2c2b096p50",
    icon: "/assets/icons/sugar.webp",
    name: "Sugar Refinery",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1500,
    },
    constructionCost: {
      credits: 500,
      timber: 6,
    },
    maintenanceCost: {
      credits: 10,
      obreros: 50,
    },
    needs: ["w0c0b000p29"], // Sugar Cane
    produces: "w0c0b000p50", // Sugar
    time: 30,
    electricity: null,
  },
  w2c2b097p51: {
    id: "w2c2b097p51",
    icon: "/assets/icons/chocolate.webp",
    name: "Chocolate Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      obreros: 1500,
    },
    constructionCost: {
      credits: 24000,
      timber: 6,
    },
    maintenanceCost: {
      credits: 50,
      obreros: 100,
    },
    needs: ["w0c0b000p49", "w0c0b000p50"], // [Cocoa, Sugar]
    produces: "w0c0b000p51", // Chocolate
    time: 30,
    electricity: null,
  },
  w2c2b098p00: {
    id: "w2c2b098p00",
    icon: "/assets/icons/zoo.webp",
    name: "Zoo (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      obreros: 1500,
    },
    constructionCost: {
      credits: 10000,
      timber: 30,
      bricks: 30,
      steelBeams: 10,
      windows: 5,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w2c2b099p00: {
    id: "w2c2b099p00",
    icon: "/assets/icons/museum.webp",
    name: "Museum (New World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      obreros: 1500,
    },
    constructionCost: {
      credits: 10000,
      timber: 30,
      bricks: 30,
      steelBeams: 10,
      windows: 5,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w1c3b100p52: {
    id: "w1c3b100p52",
    icon: "/assets/icons/quartzSand.webp",
    name: "Sand Mine",
    localText: {
      fr: "Mine de silice",
      pt: "Sand Mine",
      en: "Sand Mine",
      it: "Miniera di sabbia",
      de: "Quarzgrube",
      es: "Mina de arena",
      pl: "Kopalnia piasku",
      ru: "Песчаный карьер"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 2000,
      timber: 6,
      bricks: 5,
    },
    maintenanceCost: {
      credits: 120,
      workers: 25,
    },
    needs: null,
    produces: "w0c0b000p52", // Quarz Sand
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c3b101p53: {
    id: "w1c3b101p53", 
    icon: "/assets/icons/glass.webp",
    name: "Glassmakers",
    localText: {
      fr: "Verrerie",
      pt: "Glassmakers",
      en: "Glassmakers",
      it: "Vetrai",
      de: "Glashütte",
      es: "Cristalero",
      pl: "Huta szkła",
      ru: "Стекольная фабрика"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 5400,
      timber: 6,
      bricks: 10,
      steelBeams: 8
    },
    maintenanceCost: {
      credits: 100,
      artisans: 100,
    },
    needs: ["w0c0b000p52"], // [Quarz Sand]
    produces: "w0c0b000p53", // Glass
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c3b102p54: {
    id: "w1c3b102p54",
    icon: "/assets/icons/windows.webp",
    name: "Window Makers",
    localText: {
      fr: "Vitrerie",
      pt: "Window-Makers",
      en: "Window Makers",
      it: "Produttori di finestre",
      de: "Fenster-Manufaktur",
      es: "Fabricante de ventanas",
      pl: "Wytwórnia okien",
      ru: "Оконная фабрика"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 6500,
      timber: 12,
      bricks: 20,
      steelBeams: 16,
    },
    maintenanceCost: {
      credits: 200,
      artisans: 100,
    },
    needs: ["w0c0b000p01", "w0c0b000p53"], // [Wood, Glass]
    produces: "w0c0b000p54", // Windows
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c3b103p37: {
    id: "w1c3b103p37",
    icon: "/assets/icons/beef.webp",
    name: "Cattle Farm (Old World)",
    localText: {
      fr: "Élevage de gros bétail",
      pt: "Cattle Farm",
      en: "Cattle Farm",
      it: "Allevamento di bestiame",
      de: "Rinderfarm",
      es: "Granja vacuna",
      pl: "Farma bydła",
      ru: "Скотоферма"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 2000,
      timber: 6,
    },
    maintenanceCost: {
      credits: 50,
      farmers: 20,
    },
    needs: null,
    produces: "w0c0b000p37", // Beef
    time: 120,
    electricity: null,
  },
  w1c3b104p55: {
    id: "w1c3b104p55",
    icon: "/assets/icons/redPeppers.webp",
    name: "Red Pepper Farm",
    localText: {
      fr: "Ferme de poivrons rouges",
      pt: "Red Pepper Farm",
      en: "Red Pepper Farm",
      it: "Fattoria di peperoncini",
      de: "Paprikafarm",
      es: "Granja de pimientos rojos",
      pl: "Uprawa czerwonej papryki",
      ru: "Перечная ферма"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 2000,
      timber: 6,
    },
    maintenanceCost: {
      credits: 100,
      farmers: 10,
    },
    needs: null,
    produces: "w0c0b000p55", // Red Peppers
    time: 120,
    electricity: null,
  },
  w1c3b105p56: {
    id: "w1c3b105p56",
    icon: "/assets/icons/goulasch.webp",
    name: "Artisanal Kitchen",
    localText: {
      fr: "Cuisine artisanale",
      pt: "Artisanal Kitchen",
      en: "Artisanal Kitchen",
      it: "Cucina artigianale",
      de: "Großküche",
      es: "Cocina artesanal",
      pl: "Kuchnia tradycyjna",
      ru: "Кухня"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 7000,
      timber: 6,
      bricks: 10,
      steelBeams: 8,
      windows: 8,
    },
    maintenanceCost: {
      credits: 100,
      artisans: 75,
    },
    needs: ["w0c0b000p37", "w0c0b000p55"], // [Beef, Red Peppers]
    produces: "w0c0b000p56", // Goulasch
    time: 120,
    electricity: "OPTIONAL"
  },
  w1c3b106p57: {
    id: "w1c3b106p57",
    icon: "/assets/icons/cannedFood.webp",
    name: "Cannery",
    localText: {
      fr: "Conserverie",
      pt: "Cannery",
      en: "Cannery",
      it: "Conservificio",
      de: "Konservenfabrik",
      es: "Fábrica de conservas",
      pl: "Fabryka konserw",
      ru: "Консервный завод"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 15000,
      timber: 6,
      bricks: 10,
      steelBeams: 8,
      windows: 8,
    },
    maintenanceCost: {
      credits: 100,
      artisans: 75,
    },
    needs: ["w0c0b000p16", "w0c0b000p56"], // [Iron, Goulasch]
    produces: "w0c0b000p57", // Canned Food
    time: 90,
    electricity: "OPTIONAL",
  },
  w1c3b107p00: {
    id: "w1c3b107p00",
    icon: "/assets/icons/townHall.webp",
    name: "Town Hall (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 1,
    },
    constructionCost: {
      credits: 2500,
      timber: 20,
      bricks: 25,
      steelBeams: 20,
      windows: 5,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c3b108p17: {
    id: "w1c3b108p17",
    icon: "/assets/icons/coal.webp",
    name: "Coal Mine",
    localText: {
      fr: "Mine de charbon",
      pt: "Coal Mine",
      en: "Coal Mine",
      it: "Miniera di carbone",
      de: "Kohlemine",
      es: "Mina de carbón",
      pl: "Kopalnia węgla",
      ru: "Угольная шахта"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 500,
      timber: 4, 
      bricks: 5,
    },
    maintenanceCost: {
      credits: 50,
      workers: 50,
    },
    needs: null,
    produces: "w0c0b000p17", // Coal
    time: 15,
    electricity: "OPTIONAL",
  },
  w1c3b109p58: {
    id: "w1c3b109p58",
    icon: "/assets/icons/sewingMachines.webp",
    name: "Sewing Machine Factroy",
    localText: {
      fr: "Usine de machines à coudre",
      pt: "Sewing Machine Factory",
      en: "Sewing Machine Factory",
      it: "Fabbrica di macchine da cucire",
      de: "Nähmaschinenfabrik",
      es: "Fábrica de máquinas de costura",
      pl: "Fabryka maszyn do szycia",
      ru: "Фабрика швейных машин"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 12000,
      timber: 6,
      bricks: 10,
      steelBeams: 8,
      windows: 8,
    },
    maintenanceCost: {
      credits: 500,
      artisans: 150,
    },
    needs: ["w0c0b000p01", "w0c0b000p18"], // [Wood, Steel]
    produces: "w0c0b000p58", // Sewing Machines
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c3b110p00: {
    id: "w1c3b110p00",
    icon: "/assets/icons/varietyTheatre.webp",
    name: "Variety Theatre",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 10000,
      timber: 30,
      bricks: 50,
      steelBeams: 40,
      windows: 40,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w1c3b111p00: {
    id: "w1c3b111p00",
    icon: "/assets/icons/publicMooring.webp",
    name: "Public Mooring (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 25000,
      timber: 20,
      bricks: 20,
      steelBeams: 10,
      windows: 8,
    },
    maintenanceCost: {
      credits: 400,
    },
    electricity: null,
  },
  w1c3b112p00: {
    id: "w1c3b112p00",
    icon: "/assets/icons/repairCrane.webp",
    name: "Public Mooring (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 2500,
      timber: 15,
      bricks: 15,
      steelBeams: 25,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c3b113p00: {
    id: "w1c3b113p00",
    icon: "/assets/icons/pier.webp",
    name: "Pier (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 2500,
      timber: 30,
      bricks: 50,
      steelBeams: 40,
      windows: 40,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c3b114p00: {
    id: "w1c3b114p00",
    icon: "/assets/icons/zoo.webp",
    name: "Zoo (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 250,
    },
    constructionCost: {
      credits: 10000,
      timber: 30,
      bricks: 30,
      steelBeams: 10,
      windows: 5,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w1c3b115p59: {
    id: "w1c3b115p59",
    icon: "/assets/icons/furs.webp",
    name: "Hunting Cabin",
    localText: {
      fr: "Cabane de chasse",
      pt: "Hunting Cabin",
      en: "Hunting Cabin",
      it: "Capanno da caccia",
      de: "Jagdhütte",
      es: "Cabaña de cazador",
      pl: "Chata myśliwska",
      ru: "Хижина охотника"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 900,
    },
    constructionCost: {
      credits: 2000,
      timber: 6,
    },
    maintenanceCost: {
      credits: 50,
      farmers: 10,
    },
    needs: null,
    produces: "w0c0b000p59", // Furs
    time: 60,
    electricity: null,
  },
  w1c3b116p60: {
    id: "w1c3b116p60",
    icon: "/assets/icons/furCoats.webp",
    name: "Fur Dealer",
    localText: {
      fr: "Pelleterie",
      pt: "Fur Dealer",
      en: "Fur Dealer",
      it: "Mercante di pellicce",
      de: "Fellhändler",
      es: "Tratante de pieles",
      pl: "Zakład futrzarski",
      ru: "Меховщик"
    },
    type: "PRODUCTION",
    atPopulationOf: {
      artisans: 900,
    },
    constructionCost: {
      credits: 2000,
      timber: 6,
      bricks: 10,
      steelBeams: 8,
      windows: 5,
    },
    maintenanceCost: {
      credits: 500,
      artisans: 200,
    },
    needs: ["w0c0b000p32", "w0c0b000p59"], // [Cotton Fabric, Furs]
    produces: "w0c0b000p60", // Fur Coats
    time: 30,
    electricity: "OPTIONAL"
  },
  w1c3b117p00: {
    id: "w1c3b117p00",
    icon: "/assets/icons/hospital.webp",
    name: "Hospital (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 900,
    },
    constructionCost: {
      credits: 10000,
      timber: 12,
      bricks: 20,
      steelBeams: 16,
      windows: 40,
    },
    maintenanceCost: {
      credits: 40,
    },
    electricity: null,
  },
  w1c3b118p00: {
    id: "w1c3b118p00",
    icon: "/assets/icons/university.webp",
    name: "University",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 1500,
    },
    constructionCost: {
      credits: 15000,
      timber: 30,
      bricks: 50,
      steelBeams: 40,
      windows: 40,
    },
    maintenanceCost: {
      credits: 400,
    },
    electricity: null,
  },
  w1c3b119p00: {
    id: "w1c3b119p00",
    icon: "/assets/icons/museum.webp",
    name: "Museum (Old World)",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      artisans: 1500,
    },
    constructionCost: {
      credits: 10000,
      timber: 30,
      bricks: 30,
      steelBeams: 10,
      windows: 5,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w1c4b120p61: {
    id: "w1c4b120p61",
    icon: "/assets/icons/limestone.webp",
    name: "Limestone Quarry",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 6000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
    },
    maintenanceCost: {
      credits: 250,
      workers: 25,
    },
    needs: null,
    produces: "w0c0b000p61", // Cement
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c4b121p62: {
    id: "w1c4b121p62",
    icon: "/assets/icons/concrete.webp",
    name: "Concrete Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 15000,
      timber: 20,
      bricks: 30,
      steelBeams: 24,
      windows: 25,
    },
    maintenanceCost: {
      credits: 400,
      engineers: 75,
    },
    needs: ["w0c0b000p18" , "w0c0b000p61"], // [Steel, Cement]
    produces: "w0c0b000p61", // Reinforced Concrete
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c4b122p45: {
    id: "w1c4b122p45",
    icon: "/assets/icons/oil.webp",
    name: "Oil Raffinery (Old World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 25000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 250,
      workers: 100,
    },
    needs: null,
    produces: "w0c0b000p45", // Oil
    time: 15,
    electricity: null,
  },
  w1c4b123p00: {
    id: "w1c4b123p00",
    icon: "/assets/icons/rails.webp",
    name: "Rails (Old World)",
    localText: null,
    type: "ROAD",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 50,
      timber: 1,
      steelBeams: 1,
    },
    maintenanceCost: null,
    electricity: null,
  },
  w1c4b124p00: {
    id: "w1c4b124p00",
    icon: "/assets/icons/oilStorage.webp",
    name: "Oil Storage (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 8000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 50,
    },
    electricity: null,
  },
  w1c4b125p00: {
    id: "w1c4b125p00",
    icon: "/assets/icons/smallOilharbour.webp",
    name: "Small Oilharbour (Old World)",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 10000,
      timber: 20,
      bricks: 25,
      steelBeams: 20,
      windows: 15,
      concrete: 15,
    },
    maintenanceCost: {
      credits: 100,
    },
    electricity: null,
  },
  w1c4b126p00: {
    id: "w1c4b126p00",
    icon: "/assets/icons/oilPowerplant.webp",
    name: "Oil Powerplant",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 25000,
      timber: 30,
      bricks: 50,
      steelBeams: 40,
      windows: 30,
      concrete: 25,
    },
    maintenanceCost: {
      credits: 400,
      engineers: 150,
    },
    electricity: null,
  },
  w1c4b127p63: {
    id: "w1c4b127p63",
    icon: "/assets/icons/zinc.webp",
    name: "Zinc Mine",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 5000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 250,
      workers: 25,
    },
    needs: null,
    produces: "w0c0b000p63", // Zinc
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c4b128p64: {
    id: "w1c4b128p64",
    icon: "/assets/icons/copper.webp",
    name: "Copper Mine",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 5000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 250,
      workers: 25,
    },
    needs: null,
    produces: "w0c0b000p64", // Copper
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c4b129p65: {
    id: "w1c4b129p65",
    icon: "/assets/icons/brass.webp",
    name: "Brass Smeltery",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 17000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 250,
      workers: 25,
    },
    needs: ["w0c0b000p63", "w0c0b000p64"], // [Zinc, Copper]
    produces: "w0c0b000p65", // Brass
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c4b130p66: {
    id: "w1c4b130p66",
    icon: "/assets/icons/glasses.webp",
    name: "Spectacle Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 17000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 1000,
      engineers: 100,
    },
    needs: ["w0c0b000p53", "w0c0b000p65"], // [Glass, Brass]
    produces: "w0c0b000p66", // Glasses
    time: 90,
    electricity: "OPTIONAL",
  },
  w1c4b131p00: {
    id: "w1c4b131p00",
    icon: "/assets/icons/commuterPier.webp",
    name: "Commuter Pier",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 25000,
      steelBeams: 50,
      windows: 40,
      concrete: 30,
    },
    maintenanceCost: {
      credits: 200,
    },
    electricity: null,
  },
  w1c4b132p00: {
    id: "w1c4b132p00",
    icon: "/assets/icons/steamShipyard.webp",
    name: "Steam Shipyard",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 90000,
      timber: 50,
      bricks: 100,
      steelBeams: 80,
      windows: 75,
      concrete: 75,
    },
    maintenanceCost: {
      credits: 400,
      engineers: 200,
    },
    electricity: "REQUIRED",
  },
  w1c4b133p00: {
    id: "w1c4b133p00",
    icon: "/assets/icons/bigBetty.webp",
    name: "Big Betty",
    localText: null,
    type: "HARBOUR",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 22000,
      timber: 40,
      bricks: 75,
      steelBeams: 60,
      windows: 60,
      concrete: 50,
      heavyWeapons: 20,
    },
    maintenanceCost: {
      credits: 350,
    },
    electricity: null,
  },
  w1c4b134p67: {
    id: "w1c4b134p67",
    icon: "/assets/icons/salpeter.webp",
    name: "Salpeter Works",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 12500,
      timber: 10,
      bricks: 20,
      steelBeams: 16,
    },
    maintenanceCost: {
      credits: 500,
      workers: 25,
    },
    needs: null,
    produces: "w0c0b000p67", // Salpeter
    time: 120,
    electricity: "OPTIONAL",
  },
  w1c4b135p68: {
    id: "w1c4b135p68",
    icon: "/assets/icons/dynamite.webp",
    name: "Dynamite Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 54000,
      timber: 10,
      bricks: 20,
      steelBeams: 16,
      windows: 15,
      concrete: 15,
    },
    maintenanceCost: {
      credits: 1000,
      engineers: 250,
    },
    needs: ["w0c0b000p20", "w0c0b000p67"], // [Tallow, Salpeter]
    produces: "w0c0b000p68", // Dynamite
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c4b136p69: {
    id: "w1c4b136p69",
    icon: "/assets/icons/heavyWeapons.webp",
    name: "Heavy Weapons Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1,
    },
    constructionCost: {
      credits: 85000,
      timber: 20,
      bricks: 40,
      steelBeams: 32,
      windows: 30,
      concrete: 30,
    },
    maintenanceCost: {
      credits: 2200,
      engineers: 250,
    },
    needs: ["w0c0b000p18", "w0c0b000p68"], // [Steel, Dynamite]
    produces: "w0c0b000p69", // Advanced Weapons
    time: 120,
    electricity: "REQUIRED",
  },
  w1c4b137p70: {
    id: "w1c4b137p70",
    icon: "/assets/icons/highWheelers.webp",
    name: "Bicycle Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 500,
    },
    constructionCost: {
      credits: 42000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 1200,
      engineers: 150,
    },
    needs: ["w0c0b000p18", "w0c0b000p36"], // [Steel, Caoutchouc]
    produces: "w0c0b000p70", // High Weelers
    time: 30,
    electricity: "REQUIRED",
  },
  w1c4b138p71: {
    id: "w1c4b138p71",
    icon: "/assets/icons/steamMotors.webp",
    name: "Motor Assembly Line",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 500,
    },
    constructionCost: {
      credits: 75000,
      timber: 16,
      bricks: 30,
      steelBeams: 24,
      windows: 20,
      concrete: 20,
    },
    maintenanceCost: {
      credits: 1800,
      engineers: 250,
    },
    needs: ["w0c0b000p18", "w0c0b000p65"], // [Steel, Brass]
    produces: "w0c0b000p71", // Steam Motors
    time: 90,
    electricity: "REQUIRED",
  },
  w1c4b139p72: {
    id: "w1c4b139p72",
    icon: "/assets/icons/gold.webp",
    name: "Goldsmiths",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1000,
    },
    constructionCost: {
      credits: 27000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 750,
      engineers: 125,
    },
    needs: ["w0c0b000p17", "w0c0b000p42"], // [Coal, Gold Ore]
    produces: "w0c0b000p72", // Gold
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c4b140p73: {
    id: "w1c4b140p73",
    icon: "/assets/icons/pocketWatches.webp",
    name: "Clockmakers",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1000,
    },
    constructionCost: {
      credits: 48000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 1400,
      engineers: 150,
    },
    needs: ["w0c0b000p53", "w0c0b000p72"], // [Glass, Gold]
    produces: "w0c0b000p73", // Pocket Watches
    time: 90,
    electricity: "REQUIRED",
  },
  w1c4b141p74: {
    id: "w1c4b141p74",
    icon: "/assets/icons/carbonFilament.webp",
    name: "Filament Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1750,
    },
    constructionCost: {
      credits: 30000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 725,
      engineers: 150,
    },
    needs: ["w0c0b000p17"], // [Coal]
    produces: "w0c0b000p74", // Carbon Filament
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c4b142p75: {
    id: "w1c4b142p75",
    icon: "/assets/icons/lightBulbs.webp",
    name: "Light Bulb Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      engineers: 1750,
    },
    constructionCost: {
      credits: 45000,
      timber: 8,
      bricks: 15,
      steelBeams: 12,
      windows: 10,
      concrete: 10,
    },
    maintenanceCost: {
      credits: 1000,
      engineers: 150,
    },
    needs: ["w0c0b000p53", "w0c0b000p74"], // [Glass, Carbon Filament]
    produces: "w0c0b000p75", // Light Bulbs
    time: 60,
    electricity: "OPTIONAL",
  },
  w1c4b143p00: {
    id: "w1c4b143p00",
    icon: "/assets/icons/bank.webp",
    name: "Bank",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      engineers: 3000,
    },
    constructionCost: {
      
    },
    maintenanceCost: {
      
    },
    electricity: null,
  },
  w1c5b144p00: {
    id: "w1c5b144p00",
    icon: "/assets/icons/worldsFair.webp",
    name: "World's Fair Foundations",
    localText: null,
    type: "MONUMENT",
    atPopulationOf: {
      investors: 1,
    },
    constructionCost: {
      credits: 300000,
      timber: 100,
      bricks: 200,
      steelBeams: 160,
      windows: 150,
      concrete: 150,
    },
    maintenanceCost: {
      farmers: 500,
    },
    electricity: null,
  },
  w1c5b145p76: {
    id: "w1c5b145p76",
    icon: "/assets/icons/grapes.webp",
    name: "Vineyard",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 1,
    },
    constructionCost: {
      credits: 8000,
      timber: 10,
    },
    maintenanceCost: {
      credits: 200,
      farmers: 10,
    },
    needs: null,
    produces: "w0c0b000p76", // Grapes
    time: 120,
    electricity: null,
  },
  w1c5b146p77: {
    id: "w1c5b146p77",
    icon: "/assets/icons/champagne.webp",
    name: "Champagne Cellar",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 1,
    },
    constructionCost: {
      credits: 35000,
      timber: 10,
      bricks: 20,
      steelBeams: 16,
      windows: 15,
      concrete: 15,
    },
    maintenanceCost: {
      credits: 1000,
      artisans: 150,
    },
    needs: ["w0c0b000p53", "w0c0b000p76"], // [Glass, Grapes]
    produces: "w0c0b000p77", // Grapes
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c5b147p47: {
    id: "w1c5b146p47",
    icon: "/assets/icons/woodVeneers.webp",
    name: "Marquetry Workshop (Old World)",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 750,
    },
    constructionCost: {
      credits: 22000,
      timber: 10,
      bricks: 20,
      steelBeams: 16,
      windows: 15,
      concrete: 15,
    },
    maintenanceCost: {
      credits: 750,
      artisans: 150,
    },
    needs: ["w0c0b000p01"], // [Wood]
    produces: "w0c0b000p47", // Wood Veneers
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c5b148p00: {
    id: "w1c5b148p00",
    icon: "/assets/icons/membersClub.webp",
    name: "Members Club",
    localText: null,
    type: "PUBLIC",
    atPopulationOf: {
      investors: 750,
    },
    constructionCost: {
      
    },
    maintenanceCost: {
      
    },
    electricity: null,
  },
  w1c5b149p78: {
    id: "w1c5b149p78",
    icon: "/assets/icons/jewelry.webp",
    name: "Jewellers",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 1750,
    },
    constructionCost: {
      
    },
    maintenanceCost: {
      
    },
    needs: ["w0c0b000p33", "w0c0b000p72"], // [Pearls, Gold]
    produces: "w0c0b000p78", // Jewelry
    time: 30,
    electricity: "OPTIONAL",
  },
  w1c5b150p79: {
    id: "w1c5b150p79",
    icon: "/assets/icons/gramophones.webp",
    name: "Gramophone Factory",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 3000,
    },
    constructionCost: {
      
    },
    maintenanceCost: {
      
    },
    needs: ["w0c0b000p47", "w0c0b000p65"], // [Wood Veneers, Brass]
    produces: "w0c0b000p79", // Gramophones
    time: 120,
    electricity: "OPTIONAL",
  },
  w1c5b151p80: {
    id: "w1c5b151p80",
    icon: "/assets/icons/chassis.webp",
    name: "Coachmakers",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 5000,
    },
    constructionCost: {
      
    },
    maintenanceCost: {
      
    },
    needs: ["w0c0b000p01", "w0c0b000p36"], // [Wood, Caouchuc]
    produces: "w0c0b000p80", // Chassis
    time: 120,
    electricity: "OPTIONAL",
  },
  w1c5b152p81: {
    id: "w1c5b152p81",
    icon: "/assets/icons/steamCarriages.webp",
    name: "Cab Assembly Line",
    localText: null,
    type: "PRODUCTION",
    atPopulationOf: {
      investors: 5000,
    },
    constructionCost: {
      
    },
    maintenanceCost: {
      
    },
    needs: ["w0c0b000p71", "w0c0b000p80"], // [Steam Motors, Chassis]
    produces: "w0c0b000p81", // Steam Carriages
    time: 60,
    electricity: "REQUIRED",
  },
}


///////////////////////////////////////////////////////////////////////////////
///////////////////////////// Products ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


const products: {[key: string]: ProductType} = {
  w0c0b000p01: {
    id: "w0c0b000p01",
    icon: "/assets/icons/wood.webp",
    name: "Wood",
    localText: {
      fr: "Bois",
      pt: "Wood",
      en: "Wood",
      it: "Legno",
      de: "Holz",
      es: "Madera",
      pl: "Drewno",
      ru: "Древесина"
    },
    producerIds: ["w1c1b005p01", "w2c1b047p01"], // [Lumberjack's Hut]
    isEndProduct: false,
  },
  w0c0b000p02: {
    id: "w0c0b000p02",
    icon: "/assets/icons/timber.webp",
    name: "Timber",
    localText: {
      fr: "Planches",
      pt: "Timber",
      en: "Timber",
      it: "Legname",
      de: "Bretter",
      es: "Tablones",
      pl: "Deski",
      ru: "Доски"
    },
    producerIds: ["w1c1b006p02", "w2c1b048p02"], // [Sawmill]
    isEndProduct: true,
  },
  w0c0b000p03: {
    id: "w0c0b000p03",
    icon: "/assets/icons/fish.webp",
    name: "Fish",
    localText: {
      fr: "Poisson",
      pt: "Fish",
      en: "Fish",
      it: "Pesce",
      de: "Fische",
      es: "Pescado",
      pl: "Ryby",
      ru: "Рыба"
    },
    producerIds: ["w1c1b007p03"], // Fishery
    isEndProduct: true,
  },
  w0c0b000p04: {
    id: "w0c0b000p04",
    icon: "/assets/icons/potatoes.webp",
    name: "Potatoes",
    localText: {
      fr: "Pommes de terre",
      pt: "Potatoes",
      en: "Potatoes",
      it: "Patate",
      de: "Kartoffeln",
      es: "Patatas",
      pl: "Ziemniaki",
      ru: "Картофель"
    },
    producerIds: ["w1c1b008p04"], // [Potato Farm]
    isEndProduct: false,
  },
  w0c0b000p05: {
    id: "w0c0b000p05",
    icon: "/assets/icons/schnapps.webp",
    name: "Schnapps",
    localText: {
      fr: "Eau-de-vie",
      pt: "Schnapps",
      en: "Schnapps",
      it: "Liquore",
      de: "Schnaps",
      es: "Licor",
      pl: "Alkohol",
      ru: "Шнапс"
    },
    producerIds: ["w1c1b009p05"], // [Schnapps Distillery]
    isEndProduct: true,
  },
  w0c0b000p06: {
    id: "w0c0b000p06",
    icon: "/assets/icons/wool.webp",
    name: "Wool",
    localText: {
      fr: "Laine",
      pt: "Wool",
      en: "Wool",
      it: "Lana",
      de: "Wolle",
      es: "Lana",
      pl: "Wełna",
      ru: "Шерсть"
    },
    producerIds: ["w1c1b010p06"], // [Sheep Farm]
    isEndProduct: false,
  },
  w0c0b000p07: {
    id: "w0c0b000p07",
    icon: "/assets/icons/workClothes.webp",
    name: "Work Clothes",
    localText: {
      fr: "Vêtements de travail",
      pt: "Work Clothes",
      en: "Work Clothes",
      it: "Abiti da lavoro",
      de: "Arbeitskleidung",
      es: "Ropas de trabajo",
      pl: "Ubrania robocze",
      ru: "Рабочая одежда"
    },
    producerIds: ["w1c1b011p07"],  // [Framework Knitters]
    isEndProduct: true,
  },
  w0c0b000p08: {
    id: "w0c0b000p08",
    icon: "/assets/icons/clay.webp",
    name: "Clay",
    localText: {
      fr: "Argile",
      pt: "Clay",
      en: "Clay",
      it: "Creta",
      de: "Lehm",
      es: "Arcilla",
      pl: "Glina",
      ru: "Глина"
    },
    producerIds: ["w1c2b015p08", "w2c2b072p08"],  // [Clay Pit]
    isEndProduct: false,
  },
  w0c0b000p09: {
    id: "w0c0b000p09",
    icon: "/assets/icons/bricks.webp",
    name: "Bricks",
    localText: {
      fr: "Briques",
      pt: "Bricks",
      en: "Bricks",
      it: "Mattoni",
      de: "Ziegelsteine",
      es: "Ladrillos",
      pl: "Cegły",
      ru: "Кирпичи"
    },
    producerIds: ["w1c2b016p09", "w2c2b073p09"],  // [Brick Factory]
    isEndProduct: true,
  },
  w0c0b000p10: {
    id: "w0c0b000p10",
    icon: "/assets/icons/pigs.webp",
    name: "Pigs",
    localText: {
      fr: "Porcs",
      pt: "Pigs",
      en: "Pigs",
      it: "Maiali",
      de: "Schweine",
      es: "Cerdos",
      pl: "Prosięta",
      ru: "Свиньи"
    },
    producerIds: ["w1c2b017p10"], // [Pig Farm]
    isEndProduct: false,
  },
  w0c0b000p11: {
    id: "w0c0b000p11",
    icon: "/assets/icons/sausages.webp",
    name: "Sausages",
    localText: {
      fr: "Saucisses",
      pt: "Sausages",
      en: "Sausages",
      it: "Salsicce",
      de: "Würstchen",
      es: "Salchichas",
      pl: "Kiełbasy",
      ru: "Колбаски"
    },
    producerIds: ["w1c2b018p11"], // [Slaughterhouse]
    isEndProduct: true,
  },
  w0c0b000p12: {
    id: "w0c0b000p12",
    icon: "/assets/icons/grain.webp",
    name: "Grain",
    localText: {
      fr: "Blé",
      pt: "Grain",
      en: "Grain",
      it: "Grano",
      de: "Getreide",
      es: "Trigo",
      pl: "Zboże",
      ru: "Зерно"
    },
    producerIds: ["w1c2b020p12"], // [Grain Farm]
    isEndProduct: false,
  },
  w0c0b000p13: {
    id: "w0c0b000p13",
    icon: "/assets/icons/flour.webp",
    name: "Flour",
    localText: {
      fr: "Farine",
      pt: "Flour",
      en: "Flour",
      it: "Farina",
      de: "Mehl",
      es: "Harina",
      pl: "Mąka",
      ru: "Мука"
    },
    producerIds: ["w1c2b021p13"], // [Flour Mill]
    isEndProduct: false,
  },
  w0c0b000p14: {
    id: "w0c0b000p14",
    icon: "/assets/icons/bread.webp",
    name: "Bread",
    localText: {
      fr: "Pain",
      pt: "Bread",
      en: "Bread",
      it: "Pane",
      de: "Brote",
      es: "Pan",
      pl: "Chleb",
      ru: "Хлеб"
    },
    producerIds: ["w1c2b022p14"], // [Bakery]
    isEndProduct: true,
  },
  w0c0b000p15: {
    id: "w0c0b000p15",
    icon: "/assets/icons/sails.webp",
    name: "Sails",
    localText: {
      fr: "Voiles",
      pt: "Sails",
      en: "Sails",
      it: "Vele",
      de: "Segel",
      es: "Velas",
      pl: "Żagle",
      ru: "Паруса"
    },
    producerIds: ["w1c2b024p15", "w2c1b057p15"], // [Sailmakers]
    isEndProduct: true,
  },
  w0c0b000p16: {
    id: "w0c0b000p16",
    icon: "/assets/icons/iron.webp",
    name: "Iron",
    localText: {
      fr: "Fer",
      pt: "Iron",
      en: "Iron",
      it: "Ferro",
      de: "Eisen",
      es: "Hierro",
      pl: "Żelazo",
      ru: "Железо"
    },
    producerIds: ["w1c2b031p16"], // [Iron Mine]
    isEndProduct: false
  },
  w0c0b000p17: {
    id: "w0c0b000p17",
    icon: "/assets/icons/coal.webp",
    name: "Coal",
    localText: {
      fr: "Charbon",
      pt: "Coal",
      en: "Coal",
      it: "Carbone",
      de: "Steinkohle",
      es: "Carbón",
      pl: "Węgiel",
      ru: "Уголь"
    },
    producerIds: ["w1c2b032p17", "w1c3b108p17"], // [Charcoal Kiln, Coal Mine]
    isEndProduct: false,
  },
  w0c0b000p18: {
    id: "w0c0b000p18",
    icon: "/assets/icons/steel.webp",
    name: "Steel",
    localText: {
      fr: "Acier",
      pt: "Steel",
      en: "Steel",
      it: "Acciaio",
      de: "Stahl",
      es: "Acero",
      pl: "Stal",
      ru: "Сталь"
    },
    producerIds: ["w1c2b033p18"], // [Furnace]
    isEndProduct: false,
  },
  w0c0b000p19: {
    id: "w0c0b000p19",
    icon: "/assets/icons/steelBeams.webp",
    name: "Steel Beams",
    localText: {
      fr: "Poutres d'acier",
      pt: "Beams",
      en: "Steel Beams",
      it: "Travi d'acciaio",
      de: "Stahlträger",
      es: "Vigas de acero",
      pl: "Stalowe belki",
      ru: "Стальные балки"
    },
    producerIds: ["w1c2b034p19"], // [Steelworks]
    isEndProduct: true,
  },
  w0c0b000p20: {
    id: "w0c0b000p20",
    icon: "/assets/icons/tallow.webp",
    name: "Tallow",
    localText: {
      fr: "Suif",
      pt: "Tallow",
      en: "Tallow",
      it: "Sego",
      de: "Schweinefett",
      es: "Sebo",
      pl: "Łój",
      ru: "Сало"
    },
    producerIds: ["w1c2b035p20"], // [Rendering Works]
    isEndProduct: false,
  },
  w0c0b000p21: {
    id: "w0c0b000p21",
    icon: "/assets/icons/soap.webp",
    name: "Soap",
    localText: {
      fr: "Savon",
      pt: "Soap",
      en: "Soap",
      it: "Sapone",
      de: "Seife",
      es: "Jabón",
      pl: "Mydło",
      ru: "Мыло"
    },
    producerIds: ["w1c2b036p21"], // [Soap Factory]
    isEndProduct: true,
  },
  w0c0b000p22: {
    id: "w0c0b000p22",
    icon: "/assets/icons/weapons.webp",
    name: "Weapons",
    localText: {
      fr: "Armes",
      pt: "Weapons",
      en: "Weapons",
      it: "Armi",
      de: "Waffen",
      es: "Armas",
      pl: "Uzbrojenie",
      ru: "Оружие"
    },
    producerIds: ["w1c2b037p22"], // [Weapon Factory]
    isEndProduct: true,
  },
  w0c0b000p23: {
    id: "w0c0b000p23",
    icon: "/assets/icons/hop.webp",
    name: "Hop",
    localText: {
      fr: "Houblon",
      pt: "Hops",
      en: "Hops",
      it: "Luppoli",
      de: "Hopfen",
      es: "Lúpulo",
      pl: "Chmiel",
      ru: "Хмель"
    },
    producerIds: ["w1c2b038p23"], // [Hop Farm]
    isEndProduct: false,
  },
  w0c0b000p24: {
    id: "w0c0b000p24", 
    icon: "/assets/icons/malt.webp",
    name: "Malt",
    localText: {
      fr: "Malt",
      pt: "Malt",
      en: "Malt",
      it: "Malto",
      de: "Malz",
      es: "Malta",
      pl: "Słód",
      ru: "Солод"
    },
    producerIds: ["w1c2b039p24"], // [Malthouse]
    isEndProduct: false,
  },
  w0c0b000p25: {
    id: "w0c0b000p25",
    icon: "/assets/icons/beer.webp",
    name: "Beer",
    localText: {
      fr: "Bière",
      pt: "Beer",
      en: "Beer",
      it: "Birra",
      de: "Bier",
      es: "Cerveza",
      pl: "Piwo",
      ru: "Пиво"
    },
    producerIds: ["w1c2b040p25"], // [Brewery]
    isEndProduct: true,
  },
  w0c0b000p26: {
    id: "w0c0b000p26",
    icon: "/assets/icons/fishil.webp",
    name: "Fish Oil",
    localText: {
      fr: "Huile de poisson",
      pt: "Fish Oil",
      en: "Fish Oil",
      it: "Olio di pesce",
      de: "Fischöl",
      es: "Aceite de pescado",
      pl: "Tran",
      ru: "Рыбий жир"
    },
    producerIds: ["w2c1b049p26"], // [Fish Oil Factory]
    isEndProduct: false,
  },
  w0c0b000p27: {
    id: "w0c0b000p27",
    icon: "/assets/icons/plantains.webp",
    name: "Plantains",
    localText: {
      fr: "Plantains",
      pt: "Bananas",
      en: "Plantains",
      it: "Banane",
      de: "Bananen",
      es: "Plátanos",
      pl: "Bananowce",
      ru: "Бананы"
    },
    producerIds: ["w2c1b050p27"], // [Plantain Plantation]
    isEndProduct: false,
  },
  w0c0b000p28: {
    id: "w0c0b000p28",
    icon: "/assets/icons/friedPlantains.webp",
    name: "Fried Plantains",
    localText: {
      fr: "Plantains frits",
      pt: "Fried Bananas",
      en: "Fried Plantains",
      it: "Banane fritte",
      de: "Gebackene Bananen",
      es: "Plátanos fritos",
      pl: "Pieczone banany",
      ru: "Жареные бананы"
    },
    producerIds: ["w2c1b051p28"], // [Fried Plantain Kitchen]
    isEndProduct: true,
  },
  w0c0b000p29: {
    id: "w0c0b000p29",
    name: "Sugar Cane",
    icon: "/assets/icons/sugar-cane.webp",
    localText: {
      fr: "Canne à sucre",
      pt: "Sugar Cane",
      en: "Sugar Cane",
      it: "Canna da zucchero",
      de: "Zuckerrohr",
      es: "Caña de azúcar",
      pl: "Trzcina cukrowa",
      ru: "Сахарный тростник"
    },
    producerIds: ["w2c1b053p29"], // [Sugar Cane Plantation]
    isEndProduct: false,
  },
  w0c0b000p30: {
    id: "w0c0b000p30",
    icon: "/assets/icons/rum.webp",
    name: "Rum",
    localText: {
      fr: "Rhum",
      pt: "Rum",
      en: "Rum",
      it: "Rum",
      de: "Rum",
      es: "Ron",
      pl: "Rum",
      ru: "Ром"
    },
    producerIds: ["w2c1b054p30"], // [Rum Distillery]
    isEndProduct: true,
  },
  w0c0b000p31: {
    id: "w0c0b000p31",
    icon: "/assets/icons/cotton.webp",
    name: "Cotton",
    localText: {
      fr: "Coton",
      pt: "Cotton",
      en: "Cotton",
      it: "Cotone",
      de: "Baumwolle",
      es: "Algodón",
      pl: "Bawełna",
      ru: "Хлопок"
    },
    producerIds: ["w2c1b055p31"], // [Cotton Plantation]
    isEndProduct: false,
  },
  w0c0b000p32: {
    id: "w0c0b000p32",
    icon: "/assets/icons/cotton-fabric.webp",
    name: "Cotton Fabric",
    localText: {
      fr: "Fabrique de coton",
      pt: "Cotton Fabric",
      en: "Cotton Fabric",
      it: "Tessuto di cotone",
      de: "Baumwollstoff",
      es: "Tela de algodón",
      pl: "Tkanina bawełniana",
      ru: "Ткань"
    },
    producerIds: ["w2c1b056p32"], // [Cotton Mill]
    isEndProduct: false,
  },
  w0c0b000p33: {
    id: "w0c0b000p33",
    icon: "/assets/icons/pearls.webp",
    name: "Pearls",
    localText: null,
    producerIds: ["w2c1b064p33"], // [Pearl Farm]
    isEndProduct: false,
  },
  w0c0b000p34: {
    id: "w0c0b000p34",
    icon: "/assets/icons/alpaca-wool.webp",
    name: "Alpaca Wool",
    localText: {
      fr: "Laine d'alpaga",
      pt: "Alpaca Wool",
      en: "Alpaca Wool",
      it: "Lana di alpaca",
      de: "Alpakawolle",
      es: "Lana de alpaca",
      pl: "Wełna alpaki",
      ru: "Шерсть альпака"
    },
    producerIds: ["w2c1b065p34"], // [Alpaca Farm]
    isEndProduct: false,
  },
  w0c0b000p35: {
    id: "w0c0b000p35",
    icon: "/assets/icons/poncho.webp",
    name: "Ponchos",
    localText: {
      fr: "Ponchos",
      pt: "Ponchos",
      en: "Ponchos",
      it: "Poncho",
      de: "Ponchos",
      es: "Ponchos",
      pl: "Poncza",
      ru: "Пончо"
    },
    producerIds: ["w2c1b066p35"], // [Poncho Darner]
    isEndProduct: true,
  },
  w0c0b000p36: {
    id: "w0c0b000p36",
    icon: "/assets/icons/caoutchouc.webp",
    name: "Caoutchouc",
    localText: null,
    producerIds: ["w2c1b067p36"], // [Caoutchouc Plantation]
    isEndProduct: false,
  },
  w0c0b000p37: {
    id: "w0c0b000p37",
    icon: "/assets/icons/beef.webp",
    name: "Beef",
    localText: {
      fr: "Bœuf",
      pt: "Beef",
      en: "Beef",
      it: "Manzo",
      de: "Rindfleisch",
      es: "Ternera",
      pl: "Wołowina",
      ru: "Говядина"
    },
    producerIds: ["w2c2b074p37", "w1c3b103p37"], // [Cattle Farm]
    isEndProduct: false,
  },
  w0c0b000p38: {
    id: "w0c0b000p38",
    icon: "/assets/icons/corn.webp",
    name: "Corn",
    localText: null,
    producerIds: ["w2c2b075p38"], // [Corn Farm]
    isEndProduct: false,
  },
  w0c0b000p39: {
    id: "w0c0b000p39",
    icon: "/assets/icons/tortillas.webp",
    name: "Tortillas",
    localText: null,
    producerIds: ["w2c2b076p39"], // [Tortilla Maker]
    isEndProduct: true,
  },
  w0c0b000p40: {
    id: "w0c0b000p40",
    icon: "/assets/icons/coffeeBeans.webp",
    name: "Coffee Beans",
    localText: null,
    producerIds: ["w2c2b078p40"], // [Coffee Plantation]
    isEndProduct: false,
  },
  w0c0b000p41: {
    id: "w0c0b000p41",
    icon: "/assets/icons/coffee.webp",
    name: "Coffee",
    localText: null,
    producerIds: ["w2c2b079p41"], // [Coffee Roaster]
    isEndProduct: true,
  },
  w0c0b000p42: {
    id: "w0c0b000p42",
    icon: "/assets/icons/goldOre.webp",
    name: "Gold Ore",
    localText: null,
    producerIds: ["w2c4b081p42"], // [Gold Mine]
    isEndProduct: false,
  },
  w0c0b000p43: {
    id: "w0c0b000p43",
    icon: "/assets/icons/felt.webp",
    name: "Felt",
    localText: null,
    producerIds: ["w2c2b087p43"], // [Felt Producer]
    isEndProduct: false,
  },
  w0c0b000p44: {
    id: "w0c0b000p44",
    icon: "/assets/icons/bowlerHats.webp",
    name: "Bowler Hats",
    localText: null,
    producerIds: ["w2c2b088p44"], // [Bombin Weaver]
    isEndProduct: true,
  },
  w0c0b000p45: {
    id: "w0c0b000p45",
    icon: "/assets/icons/oil.webp",
    name: "Oil",
    localText: null,
    producerIds: ["w2c2b090p45", "w1c4b122p45"], // [Oil Raffinery]
    isEndProduct: true,
  },
  w0c0b000p46: {
    id: "w0c0b000p46",
    icon: "/assets/icons/tobacco.webp",
    name: "Tobacco",
    localText: null,
    producerIds: ["w2c2b092p46"], // [Tobacco Plantation]
    isEndProduct: false,
  },
  w0c0b000p47: {
    id: "w0c0b000p47",
    icon: "/assets/icons/woodVeneers.webp",
    name: "Wood Veneers",
    localText: null,
    producerIds: ["w2c2b093p47", "w1c5b147p47"], // [Marquetry Workshop]
    isEndProduct: false,
  },
  w0c0b000p48: {
    id: "w0c0b000p48",
    icon: "/assets/icons/cigars.webp",
    name: "Cigars",
    localText: null,
    producerIds: ["w2c2b094p48"], // [Cigar Factory]
    isEndProduct: true,
  },
  w0c0b000p49: {
    id: "w0c0b000p49",
    icon: "/assets/icons/cocoa.webp",
    name: "Cocoa",
    localText: null,
    producerIds: ["w2c2b095p49"], // [Cocoa Plantation]
    isEndProduct: false,
  },
  w0c0b000p50: {
    id: "w0c0b000p50",
    icon: "/assets/icons/sugar.webp",
    name: "Sugar",
    localText: null,
    producerIds: ["w2c2b096p50"], // [Sugar Refinery]
    isEndProduct: false,
  },
  w0c0b000p51: {
    id: "w0c0b000p51",
    icon: "/assets/icons/chocolate.webp",
    name: "Chocolate",
    localText: null,
    producerIds: ["w2c2b097p51"], // [Chocolate Factory]
    isEndProduct: true,
  },
  w0c0b000p52: {
    id: "w0c0b000p52",
    icon: "/assets/icons/quarz-sand.webp",
    name: "Quarz Sand",
    localText: {
      fr: "Sable de quartz",
      pt: "Quartz Sand",
      en: "Quartz Sand",
      it: "Sabbia di quarzo",
      de: "Quarzsand",
      es: "Arena de cuarzo",
      pl: "Piasek kwarcowy",
      ru: "Кварцевый песок"
    },
    producerIds: ["w1c3b100p52"], // [Sand Mine]
    isEndProduct: false,
  },
  w0c0b000p53: {
    id: "w0c0b000p53",
    icon: "/assets/icons/glass.webp",
    name: "Glass",
    localText: {
      fr: "Verre",
      pt: "Glass",
      en: "Glass",
      it: "Vetro",
      de: "Glas",
      es: "Cristal",
      pl: "Szkło",
      ru: "Стекло"
    },
    producerIds: ["w1c3b101p53"], // [Glassmakers]
    isEndProduct: false,
  },
  w0c0b000p54: {
    id: "w0c0b000p54",
    icon: "/assets/icons/windows.webp",
    name: "Windows",
    localText: {
      fr: "Fenêtres",
      pt: "Windows",
      en: "Windows",
      it: "Finestre",
      de: "Fenster",
      es: "Ventanas",
      pl: "Okna",
      ru: "Окна"
    },
    producerIds: ["w1c3b102p54"], // [Window Makers]
    isEndProduct: true,
  },
  w0c0b000p55: {
    id: "w0c0b000p55",
    icon: "/assets/icons/red-peppers.webp",
    name: "Red Peppers",
    localText: {
      fr: "Poivrons rouges",
      pt: "Red Peppers",
      en: "Red Peppers",
      it: "Peperoncini",
      de: "Paprika",
      es: "Pimientos rojos",
      pl: "Czerwona papryka",
      ru: "Перец"
    },
    producerIds: ["w1c3b104p55"], // [Red Pepper Farm]
    isEndProduct: false,
  },
  w0c0b000p56: {
    id: "w0c0b000p56",
    icon: "/assets/icons/goulasch.webp",
    name: "Goulasch",
    localText: {
      fr: "Goulasch",
      pt: "Goulash",
      en: "Goulash",
      it: "Gulasch",
      de: "Gulasch",
      es: "Goulash",
      pl: "Gulasz",
      ru: "Гуляш"
    },
    producerIds: ["w1c3b105p56"], // [Artisanal Kitchen]
    isEndProduct: false,
  },
  w0c0b000p57: {
    id: "w0c0b000p57",
    icon: "/assets/icons/canned-food.webp",
    name: "Canned Food",
    localText: {
      fr: "Conserves",
      pt: "Canned Food",
      en: "Canned Food",
      it: "Cibo in scatola",
      de: "Konservendosen",
      es: "Comida en conserva",
      pl: "Konserwy",
      ru: "Консервы"
    },
    producerIds: ["w1c3b106p57"], // [Cannery]
    isEndProduct: true,
  },
  w0c0b000p58: {
    id: "w0c0b000p58",
    icon: "/assets/icons/sewing-machines.webp",
    name: "Sewing Machines",
    localText: {
      fr: "Machines à coudre",
      pt: "Sewing Machines",
      en: "Sewing Machines",
      it: "Macchine da cucire",
      de: "Nähmaschinen",
      es: "Máquinas de costura",
      pl: "Maszyny do szycia",
      ru: "Швейные машины"
    },
    producerIds: ["w1c3b109p58"], // [Sewing Machine Factory]
    isEndProduct: true,
  },
  w0c0b000p59: {
    id: "w0c0b000p59",
    icon: "/assets/icons/furs.webp",
    name: "Furs",
    localText: {
      fr: "Fourrures",
      pt: "Furs",
      en: "Furs",
      it: "Pellicce",
      de: "Felle",
      es: "Pieles",
      pl: "Futra",
      ru: "Меха"
    },
    producerIds: ["w1c3b115p59"], // [Hunting Cabin]
    isEndProduct: false,
  },
  w0c0b000p60: {
    id: "w0c0b000p60",
    icon: "/assets/icons/fur-coats.webp",
    name: "Fur Coats",
    localText: {
      fr: "Manteaux de fourrure",
      pt: "Fur Coats",
      en: "Fur Coats",
      it: "Abiti di pelliccia",
      de: "Pelzmäntel",
      es: "Abrigos de piel",
      pl: "Płaszcze futrzane",
      ru: "Шубы"
    },
    producerIds: ["w1c3b116p60"], // [Fur Dealer]
    isEndProduct: true,
  },
  w0c0b000p61: {
    id: "w0c0b000p60",
    icon: "/assets/icons/cement.webp",
    name: "Cement",
    localText: null,
    producerIds: ["w1c4b120p61"], // [Limestone Quarry]
    isEndProduct: false,
  },
  w0c0b000p62: {
    id: "w0c0b000p62",
    icon: "/assets/icons/reinforcedConcrete.webp",
    name: "Reinforced Concrete",
    localText: null,
    producerIds: ["w1c4b121p62"], // [Concrete Factory]
    isEndProduct: true,
  },
  w0c0b000p63: {
    id: "w0c0b000p63",
    icon: "/assets/icons/zinc.webp",
    name: "Zinc",
    localText: null,
    producerIds: ["w1c4b127p63"], // [Zinc Mine]
    isEndProduct: false,
  },
  w0c0b000p64: {
    id: "w0c0b000p64",
    icon: "/assets/icons/copper.webp",
    name: "Copper",
    localText: null,
    producerIds: ["w1c4b128p64"], // [Copper Mine]
    isEndProduct: false,
  },
  w0c0b000p65: {
    id: "w0c0b000p65",
    icon: "/assets/icons/brass.webp",
    name: "Brass",
    localText: null,
    producerIds: ["w1c4b129p65"], // [Brass Smeltery]
    isEndProduct: false,
  },
  w0c0b000p66: {
    id: "w0c0b000p66",
    icon: "/assets/icons/glasses.webp",
    name: "Glasses",
    localText: null,
    producerIds: ["w1c4b130p66"], // [Spectacle Factory]
    isEndProduct: true,
  },
  w0c0b000p67: {
    id: "w0c0b000p67",
    icon: "/assets/icons/salpeter.webp",
    name: "Salpeter",
    localText: null,
    producerIds: ["w1c4b134p67"], // [Salpeter Works]
    isEndProduct: false,
  },
  w0c0b000p68: {
    id: "w0c0b000p68",
    icon: "/assets/icons/dynamite.webp",
    name: "Dynamite",
    localText: null,
    producerIds: ["w1c4b135p68"], // [Dynamite Factory]
    isEndProduct: false,
  },
  w0c0b000p69: {
    id: "w0c0b000p69",
    icon: "/assets/icons/advancedWeapons.webp",
    name: "Advanced Weapons",
    localText: null,
    producerIds: ["w1c4b136p69"], // [Heavy Weapons Factory]
    isEndProduct: true,
  },
  w0c0b000p70: {
    id: "w0c0b000p70",
    icon: "/assets/icons/highWheelers.webp",
    name: "High Wheelers",
    localText: null,
    producerIds: ["w1c4b137p70"], // [Bicycle Factory]
    isEndProduct: true,
  },
  w0c0b000p71: {
    id: "w0c0b000p71",
    icon: "/assets/icons/steamMotors.webp",
    name: "Steam Motors",
    localText: null,
    producerIds: ["w1c4b138p71"], // [Motor Assembly Line]
    isEndProduct: false,
  },
  w0c0b000p72: {
    id: "w0c0b000p72",
    icon: "/assets/icons/gold.webp",
    name: "Gold",
    localText: null,
    producerIds: ["w1c4b139p72"], // [Goldsmiths]
    isEndProduct: false,
  },
  w0c0b000p73: {
    id: "w0c0b000p73",
    icon: "/assets/icons/pocketWatches.webp",
    name: "Pocket Watches",
    localText: null,
    producerIds: ["w1c4b140p73"], // [Clockmakers]
    isEndProduct: true,
  },
  w0c0b000p74: {
    id: "w0c0b000p74",
    icon: "/assets/icons/carbonFilament.webp",
    name: "Carbon Filament",
    localText: null,
    producerIds: ["w1c4b141p74"], // [Filament Factory]
    isEndProduct: false,
  },
  w0c0b000p75: {
    id: "w0c0b000p75",
    icon: "/assets/icons/lightBulbs.webp",
    name: "Light Bulbs",
    localText: null,
    producerIds: ["w1c4b142p75"], // [Light Bulb Factory]
    isEndProduct: true,
  },
  w0c0b000p76: {
    id: "w0c0b000p76",
    icon: "/assets/icons/grapes.webp",
    name: "Grapes",
    localText: null,
    producerIds: ["w1c5b145p76"], // [Vineyard]
    isEndProduct: false,
  },
  w0c0b000p77: {
    id: "w0c0b000p77",
    icon: "/assets/icons/champagne.webp",
    name: "Champagne",
    localText: null,
    producerIds: ["w1c5b146p77"], // [Champagne Cellar]
    isEndProduct: true,
  },
  w0c0b000p78: {
    id: "w0c0b000p78",
    icon: "/assets/icons/jewelry.webp",
    name: "Jewelry",
    localText: null,
    producerIds: ["w1c5b149p78"], // [Jewellers]
    isEndProduct: true,
  },
  w0c0b000p79: {
    id: "w0c0b000p79",
    icon: "/assets/icons/gramophones.webp",
    name: "Gramophones",
    localText: null,
    producerIds: ["w1c5b150p79"], // [Gramophone Factory]
    isEndProduct: true,
  },
  w0c0b000p80: {
    id: "w0c0b000p80",
    icon: "/assets/icons/chassis.webp",
    name: "Chassis",
    localText: null,
    producerIds: ["w1c5b151p80"], // [Coachmakers]
    isEndProduct: false,
  },
  w0c0b000p81: {
    id: "w0c0b000p81",
    icon: "/assets/icons/steamCarriages.webp",
    name: "Steam Carriages",
    localText: null,
    producerIds: ["w1c5b152p81"], // [Cab Assembly Line]
    isEndProduct: true,
  },
}

const languages: string[] = [
  "de",
  "en",
  "es",
  "fr",
  "it",
  "pl",
  "pt",
  "ru",
]

const parameters = {
  population: population,
  buildings: buildings,
  products: products,
  languages: languages,
}

export default parameters
