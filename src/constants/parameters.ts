
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
  id: number,
  type: ('basic' | 'luxury'),
  perMinute: number,
  atPopulationOf : number
}
export interface SocialClassType {
  id: number,
  name: string,
  icon: string,
  localText: LocalTextType,
  workforce: string,
  residentsPerHouse: number,
  needs: NeedType[],
}
export interface WorldType {
  id: number,
  name: string,
  localText: LocalTextType,
  classes: {
    [key: string]: SocialClassType,
  }
}
export interface PopulationType {
  [key: string]: WorldType,
}
interface CostType {
  credits?: number,
  timber?: number,
  bricks?: number,
  steelBeams?: number,
  windows?: number,
  concrete?: number,
  weapons?: number,
  influence?: number,
}
interface MaintenanceType {
  credits?: number,
  farmers?: number,
  workers?: number,
  artisans?: number,
  engineers?: number,
  investors?: number,
  jornaleros?: number,
  obreros?: number,
}
interface ProductionBuildingType {
  id: number,
  name: string,
  icon: string,
  localText: LocalTextType,
  constructionCost: CostType,
  maintenanceCost: MaintenanceType,
  needs: number[] | null,
  produces: number,
  perMinute: number,
}
interface OtherBuildingType {
  id: number,
  name: string,
  icon: string,
  constructionCost: CostType,
  maintenanceCost: MaintenanceType,
}
interface Buildings {
  harbour: {
    [key: number]: OtherBuildingType
  },
  institution: {
    [key: number]: OtherBuildingType
  },
  ornament: {
    [key: number]: OtherBuildingType
  },
  production: {
    [key: number]: ProductionBuildingType,
  },
  publicService: {
    [key: number]: OtherBuildingType
  },
  residence: {
    [key: number]: OtherBuildingType
  },
  street: {
    [key: number]: OtherBuildingType
  },
}

export interface ProductType {
  id: number,
  name: string,
  icon: string,
  localText: LocalTextType,
  producerIds: number[],
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
    id: 20000000,
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
      20100000: {
        id: 20100000,
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
        workforce: "Farmer Workforce",
        residentsPerHouse: 10,
        needs: [{ 
            id: 10100200, // Market
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: 20000003, // Fish
            type: 'basic',
            perMinute: 0.0025000002,
            atPopulationOf: 50,
          },
          {
            id: 20000005, // Schnapps
            type: 'luxury',
            perMinute: 	0.003333336,
            atPopulationOf: 100,
          },
          {
            id: 20000007,  // Work Clothes,
            type: 'basic',
            perMinute: 0.003076926,
            atPopulationOf: 150,	
          },
          {
            id: 20100700, // Pub
            type: 'luxury',
            perMinute: 0,
            atPopulationOf: 150,
          },
        ]
      },
      20200000: {
        id: 20200000,
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
        workforce: "Worker Workforce",
        residentsPerHouse: 20,
        needs: [
          {
            id: 10100200, // Market
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1
          },
          {
            id: 20000003, // Fish
            type: 'basic',
            perMinute: 0.0025000002,
            atPopulationOf: 1,
          },
          {
            id: 20000005, // Schnapps
            type: 'luxury',
            perMinute: 	0.003333336,
            atPopulationOf: 1,
          },
          {
            id: 20000007,  // Work Clothes,
            type: 'basic',
            perMinute: 0.003076926,
            atPopulationOf: 1,	
          },
          {
            id: 20100700, // Pub
            type: 'luxury',
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: 20000011, // Sausages
            type: 'basic',
            perMinute: 0.001000002,
            atPopulationOf: 1,
          },
          {
            id: 20000015, // Bread
            type: 'basic',
            perMinute: 0.00090909,
            atPopulationOf: 150,
          },
          {
            id: 20200600, // Church
            type: 'luxury',
            perMinute: 0,
            atPopulationOf: 150,
          },
          {
            id: 20000017, // Soap
            type: 'basic',
            perMinute: 0.000416667,
            atPopulationOf: 300,
          },
          {
            id: 20000025, // Beer
            type: 'luxury',
            perMinute: 0.00076923,
            atPopulationOf: 500,
          },
          {
            id: 20201600, // School
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 750,
          }
        ]
      },
      20300000: {
        id: 20300000,
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
        workforce: "Atisan Workforce",
        residentsPerHouse: 30,
        needs: [
          {
            id: 20000011, // Sausages
            type: 'basic',
            perMinute: 0.001000002,
            atPopulationOf: 1,
          },
          {
            id: 20000015, // Bread
            type: 'basic',
            perMinute: 0.00090909,
            atPopulationOf: 1,
          },
          {
            id: 20200600, // Church
            type: 'luxury',
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: 20000017, // Soap
            type: 'basic',
            perMinute: 0.000416667,
            atPopulationOf: 1,
          },
          {
            id: 20000025, // Beer
            type: 'luxury',
            perMinute: 0.00076923,
            atPopulationOf: 1,
          },
          {
            id: 20201600, // School
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1,
          },
          {
            id: 20000032, // Canned Food
            type: 'basic',
            perMinute: 0.00034188,
            atPopulationOf: 1,
          },
          {
            id: 20000033, // Sewing Machines
            type: 'basic',
            perMinute: 0.00095238,
            atPopulationOf: 250,
          },
          {
            id: 20301400, // Variety Theatre
            type: 'luxury',
            perMinute: 0,
            atPopulationOf: 250,
          },
          {
            id: 30000043, // Rum
            type: 'luxury',
            perMinute: 0.001904762,
            atPopulationOf: 500,
          },
          {
            id: 20000035, // Fur Coats
            type: 'basic',
            perMinute: 0.000888888,
            atPopulationOf: 900,
          },
          {
            id: 20302200, // University
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1500,
          }
        ]
      },
      20400000: {
        id: 20400000,
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
        workforce: "Enineer Workforce",
        residentsPerHouse: 40,
        needs: [
          {
            id: 10100200, // Market
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1
          },
        ]
      },
      20500000: {
        id: 20500000,
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
        workforce: "Investor Workforce",
        residentsPerHouse: 40,
        needs: [
          {
            id: 10100200, // Market
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1
          },
        ]
      },
    }
  },
  newWorld: {
    id: 30000000,
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
      30100000: {
        id: 30100000,
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
        workforce: "Jornalero Workforce",
        residentsPerHouse: 10,
        needs: [
          {
            id: 10100200, // Market
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1
          },
          {
            id: 30000038, // Fried Plantains
            type: 'basic',
            perMinute: 0.00285714,
            atPopulationOf: 50,
          },
          {
            id: 30000045, // Ponchos
            type: 'basic',
            perMinute: 0.002500002,
            atPopulationOf: 200,
          },
          {
            id: 30000043, // Rum
            type: 'luxury',
            perMinute: 0.00142857,
            atPopulationOf: 100,
          },
          {
            id: 30101300, // Chapel
            type: 'luxury',
            perMinute: 0,
            atPopulationOf: 300,
          },
        ]
      },
      30200000: {
        id: 30200000,
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
        workforce: "Obrero Workforce",
        residentsPerHouse: 20,
        needs: [
          {
            id: 10100200, // Market
            type: 'basic',
            perMinute: 0,
            atPopulationOf: 1
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
  harbour: {},
  institution: {},
  ornament: {},
  production: {
    10100401: {
      id: 10100401,
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
      constructionCost: {
        credits: 100,
      },
      maintenanceCost: {
        credits: 10,
        farmers: 5,
      },
      needs: null,
      produces: 10000001, // Wood
      perMinute: 4,
    },
    10100502: {
      id: 10100502,
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
      constructionCost: {
        credits: 100,
      },
      maintenanceCost: {
        credits: 10,
        farmers: 10,
      },
      needs: [10000001], // [Wood]
      produces: 10000002, // Timber
      perMinute: 4,
    },
    20100203: {
      id: 20100203,
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
      constructionCost: {
        credits: 100,
        timber: 2,
      },
      maintenanceCost: {
        credits: 40,
        farmers: 25,
      },
      needs: null,
      produces: 20000003, // Fish
      perMinute: 2,
    },
    20100304: {
      id: 20100304,
      name: "Potato Farm",
      icon: "/assets/icons/potato.webp",
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
      constructionCost: {
        credits: 100,
        timber: 2,
      },
      maintenanceCost: {
        credits: 20,
        farmers: 20,
      },
      needs: null,
      produces: 20000004, // Potatoes
      perMinute: 2
    },
    20100405: {
      id: 20100405,
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
      constructionCost: {
        credits: 100,
        timber: 2,
      },
      maintenanceCost: {
        credits: 40,
        farmers: 50,
      },
      needs: [20000004], // [Potatoes]
      produces: 20000005, // Schnapps
      perMinute: 2
    },
    20100506: {
      id: 20100506,
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
      constructionCost: {
        credits: 100,
        timber: 2,
      },
      maintenanceCost: {
        credits: 20,
        farmers: 10,
      },
      needs: null,
      produces: 20000006, // Wool
      perMinute: 2,
    },
    20100607: {
      id: 20100607,
      name: "Framework Knitters",
      icon: "/assets/icons/work-clothes.webp",
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
      constructionCost: {
        credits: 100,
        timber: 2,
      },
      maintenanceCost: {
        credits: 50,
        farmers: 50,
      },
      needs: [20000006],  // [Wool]
      produces: 20000007,  // Work Clothes
      perMinute: 2,
    },
    10200208: {
      id: 10200208,
      name: "Clay Pit",
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
      constructionCost: {
        credits: 500,
        timber: 4,
      },
      maintenanceCost: {
        credits: 10,
        workers: 50,
      },
      needs: null,
      produces: 10000008,  // Clay
      perMinute: 2,
    },
    10200309: {
      id: 10200309,
      name: "Brick Factory",
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
      constructionCost: {
        credits: 500,
        timber: 8,
      },
      maintenanceCost: {
        credits: 20,
        workers: 25,
      },
      needs: [10000008], // [Clay]
      produces: 10000009,  // Bricks
      perMinute: 1
    },
    20200110: {
      id: 20200110,
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
      constructionCost: {
        credits: 500,
        timber: 4,
      },
      maintenanceCost: {
        credits: 40,
        workers: 30,
      },
      needs: null,
      produces: 20000010,  // Pigs
      perMinute: 1,
    },
    20200211: {
      id: 20200211,
      name: "Slaughterhouse",
      icon: "/assets/icons/sausages.webp",
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
      constructionCost: {
        credits: 500,
        timber: 4,
        bricks: 5,
      },
      maintenanceCost: {
        credits: 80,
        workers: 50,
      },
      needs: [20000010], // [Pigs]
      produces: 20000011,  // Sausages
      perMinute: 1,
    },
    10201012: {
      id: 10201012,
      name: "Sailmakers",
      icon: "/assets/icons/sails.webp",
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
      constructionCost: {
        credits: 500,
        timber: 8,
        bricks: 10,
      },
      maintenanceCost: {
        credits: 75,
        workers: 50,
      },
      needs: [20000006], // Wool
      produces: 10000012, // Sails
      perMinute: 2,
    },
    20200313: {
      id: 20200313,
      name: "Grain Farm",
      icon: "/assets/icons/grain.webp",
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
      constructionCost: {
        credits: 500,
        timber: 4,
      },
      maintenanceCost: {
        credits: 20,
        farmers: 20,
      },
      needs: null,
      produces: 20000013, // Grain
      perMinute: 1,
    },
    20200414: {
      id: 20200414,
      name: "Flour Mill",
      icon: "/assets/icons/flour.webp",
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
      constructionCost: {
        credits: 500,
        timber: 4,
        bricks: 5,
      },
      maintenanceCost: {
        credits: 50,
        farmers: 10,
      },
      needs: [20000013], // Grain
      produces: 20000014, // Flour
      perMinute: 2,
    },
    20200515: {
      id: 20200515,
      name: "Bakery",
      icon: "/assets/icons/bread.webp",
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
      constructionCost: {
        credits: 500,
      },
      maintenanceCost: {
        credits: 60,
        workers: 50,
      },
      needs: [20000014], // [Flour]
      produces: 20000015, // Bread
      perMinute: 1
    }, 
    20200716: {
      id: 20200716,
      name: "Rendering Works",
      icon: "/assets/icons/tallow.webp",
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
      needs: [20000010], // Pigs
      produces: 20000016, // Tallow
      perMinute: 1,
    },
    20200817: {
      id: 20200817,
      name: "Soap Factory",
      icon: "/assets/icons/soap.webp",
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
      needs: [20000016], // Tallow
      produces: 20000017, // Soap
      perMinute: 2,
    },
    20200918: {
      id: 20200918,
      name: "Iron Mine",
      icon: "/assets/icons/iron.webp",
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
      produces: 20000018, // Iron
      perMinute: 4,
    },
    20201019: {
      id: 20201019,
      name: "Charcoal Kiln",
      icon: "/assets/icons/charcoal-kiln.webp",
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
      produces: 20000019, // Coal
      perMinute: 2,
    },
    20201120: {
      id: 20201120,
      name: "Furnace",
      icon: "/assets/icons/steel.webp",
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
      constructionCost: {
        credits: 500,
        timber: 4,
        bricks: 5,
      },
      maintenanceCost: {
        credits: 50,
        workers: 100,
      },
      needs: [20000018, 20000019], // [Iron, Coal]
      produces: 20000020, // Steel
      perMinute: 2,
    },
    20201221: {
      id: 20201221,
      name: "Steelworks",
      icon: "/assets/icons/steel-beams.webp",
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
      constructionCost: {
        credits: 500,
        timber: 8,
        bricks: 10,
      }, 
      maintenanceCost: {
        credits: 100,
        workers: 200,
      },
      needs: [20000020], // Steel
      produces: 20000021, // Steel Beams
      perMinute: 1.3333333333,
    },
    20201322: {
      id: 20201322,
      name: "Weapon Factory",
      icon: "/assets/icons/weapons.webp",
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
      constructionCost: {
        credits: 500,
        timber: 8,
        bricks: 10,
        steelBeams: 8,
      },
      maintenanceCost: {
        credits: 120,
        workers: 50,
      },
      needs: [20000020], // Steel
      produces: 20000022, // Weapons
      perMinute: 0.6666666667,
    },
    20201423: {
      id: 20201423,
      name: "Malthouse",
      icon: "/assets/icons/malt.webp",
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
      needs: [20000013], // Grain
      produces: 20000023, // Malt
      perMinute: 2,
    },
    20201524: {
      id: 20201524,
      name: "Hop Farm",
      icon: "/assets/icons/hops.webp",
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
      constructionCost: {
        credits: 500,
        timber: 4,
      },
      maintenanceCost: {
        credits: 20,
        farmers: 20,
      },
      needs: null,
      produces: 20000024, // Hops
      perMinute: 0.6666666667,
    },
    20201625: {
      id: 20201625,
      name: "Brewery",
      icon: "/assets/icons/beer.webp",
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
      needs: [20000023, 20000024], // [Malt, Hops]
      produces: 20000025, // Beer
      perMinute: 1,
    },
    20300126: {
      id: 20300126,
      name: "Sand Mine",
      icon: "/assets/icons/quartz-sand.webp",
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
      produces: 20000026, // Quarz Sand
      perMinute: 2,
    },
    20300227: {
      id: 20300227, 
      name: "Glassmakers",
      icon: "/assets/icons/glass.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
        bricks: 10,
        steelBeams: 8
      },
      maintenanceCost: {
        credits: 100,
        artisans: 100,
      },
      needs: [20000026], // [Quarz Sand]
      produces: 20000027, // Glass
      perMinute: 2,
    },
    20300328: {
      id: 20300328,
      name: "Window Makers",
      icon: "/assets/icons/windows.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 12,
        bricks: 20,
        steelBeams: 16,
      },
      maintenanceCost: {
        credits: 100,
        artisans: 100,
      },
      needs: [10000001, 20000027], // [Wood, Glass]
      produces: 20000028, // Windows
      perMinute: 1
    },
    10300129: {
      id: 10300129,
      name: "Cattle Farm",
      icon: "/assets/icons/beef.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
      },
      maintenanceCost: {
        credits: 50,
        farmers: 20,
      },
      needs: null,
      produces: 10000029, // Beef
      perMinute: 0.5
    },
    20300430: {
      id: 20300430,
      name: "Red Pepper Farm",
      icon: "/assets/icons/red-peppers.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
      },
      maintenanceCost: {
        credits: 50,
        farmers: 10,
      },
      needs: null,
      produces: 20000030, // Red Peppers
      perMinute: 0.5,
    },
    20300531: {
      id: 20300531,
      name: "Artisanal Kitchen",
      icon: "/assets/icons/goulasch.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
        bricks: 10,
        steelBeams: 8,
        windows: 8,
      },
      maintenanceCost: {
        credits: 100,
        artisans: 75,
      },
      needs: [10000029, 20000030], // [Beef, Red Peppers]
      produces: 20000031, // Goulasch
      perMinute: 0.5
    },
    20300632: {
      id: 20300632,
      name: "Cannery",
      icon: "/assets/icons/canned-food.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
        bricks: 10,
        steelBeams: 8,
        windows: 8,
      },
      maintenanceCost: {
        credits: 100,
        artisans: 75,
      },
      needs: [20000018, 20000031], // [Iron, Goulasch]
      produces: 20000032, // Canned Food
      perMinute: 0.6666666667
    },
    20301219: {
      id: 20301219,
      name: "Coal Mine",
      icon: "/assets/icons/coal.webp",
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
      produces: 20000019, // Coal
      perMinute: 2,
    },
    20301333: {
      id: 20301333,
      name: "Sewing Machine Factroy",
      icon: "/assets/icons/sewing-machines.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
        bricks: 10,
        steelBeams: 8,
        windows: 8,
      },
      maintenanceCost: {
        credits: 500,
        artisans: 150,
      },
      needs: [10000001, 20000020], // [Wood, Steel]
      produces: 20000033, // Sewing Machines
      perMinute: 2,
    },
    20302034: {
      id: 20302034,
      name: "Hunting Cabin",
      icon: "/assets/icons/furs.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 6,
      },
      maintenanceCost: {
        credits: 50,
        farmers: 10,
      },
      needs: null,
      produces: 20000034, // Furs
      perMinute: 1,
    },
    20302135: {
      id: 20302135,
      name: "Fur Dealer",
      icon: "/assets/icons/fur-coats.webp",
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
      constructionCost: {
        credits: 2000,
        timber: 8,
        bricks: 10,
        steelBeams: 8,
        windows: 5,
      },
      maintenanceCost: {
        credits: 500,
        artisans: 200,
      },
      needs: [20000034, 30000041], // [Furs, Cotton Fabric]
      produces: 20000035, // Fur Coats
      perMinute: 2,
    },
    30100236: {
      id: 30100236,
      name: "Fish Oil Factory",
      icon: "/assets/icons/fish-oil.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 5,
        jornaleros: 15,
      },
      needs: null,
      produces: 30000036, // Fish Oil
      perMinute: 2,
    },
    30100337: {
      id: 30100337,
      name: "Plantain Plantation",
      icon: "/assets/icons/plantains.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 5,
        jornaleros: 10,
      },
      needs: null,
      produces: 30000037, // Plantains
      perMinute: 2,
    },
    30100438: {
      id: 30100438,
      name: "Fried Plantain Kitchen",
      icon: "/assets/icons/fried-plantains.webp",
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
      constructionCost: {
        credits: 500,
        timber: 2,
      },
      maintenanceCost: {
        credits: 15,
        jornaleros: 25,
      },
      needs: [30000036, 30000037], // [Fish Oil, Plantains]
      produces: 30000038, // Fried Plantains
      perMinute: 2,
    },
    30100539: {
      id: 30100539,
      name: "Pearl Farm",
      icon: "/assets/icons/pearl.webp",
      localText: {
        fr: "",
        pt: "",
        en: "",
        it: "",
        de: "",
        es: "",
        pl: "",
        ru: ""
      },
      constructionCost: {
        credits: 2500,
        timber: 10,
      },
      maintenanceCost: {
        credits: 25,
        jornaleros: 50,
      },
      needs: null,
      produces: 30000039, // Pearls
      perMinute: 0.6666666667,
    },
    30100640: {
      id: 30100640,
      name: "Cotton Plantation",
      icon: "/assets/icons/cotton.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 5,
        jornaleros: 10,
      },
      needs: null,
      produces: 30000040, // Cotton
      perMinute: 1,
    },
    30100741: {
      id: 30100741,
      name: "Cotton Mill",
      icon: "/assets/icons/cotton-fabric.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 10,
        jornaleros: 10
      },
      needs: [30000040], // [Cotton]
      produces: 30000041, // Cotton Fabric
      perMinute: 2,
    },
    30100842: {
      id: 30100842,
      name: "Sugar Cane Plantation",
      icon: "/assets/icons/sugar-cane.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 5,
        jornaleros: 10,
      },
      needs: null,
      produces: 30000042, // Sugar
      perMinute: 2,
    },
    30100943: {
      id: 30100943,
      name: "Rum Distillery",
      icon: "/assets/icons/rum.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 50,
        jornaleros: 30,
      },
      needs: [10000001, 30000042], // [Wood, Sugar]
      produces: 30000043, // Rum
      perMinute: 2,
    },
    30101044: {
      id: 30101044,
      name: "Alpaca Farm",
      icon: "/assets/icons/alpaca-wool.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 5,
        jornaleros: 10,
      },
      needs: null,
      produces: 30000044, // Alpaca Wool
      perMinute: 2,
    },
    30101145: {
      id: 30101145,
      name: "Poncho Darner",
      icon: "/assets/icons/poncho.webp",
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
      constructionCost: {
        credits: 500,
        timber: 6,
      },
      maintenanceCost: {
        credits: 15,
        jornaleros: 30,
      },
      needs: [30000044], // [Alpaca Wool]
      produces: 30000045, // Ponchos
      perMinute: 2,
    },
    30101246: {
      id: 30101246,
      name: "Caoutchouc Plantation",
      icon: "/assets/icons/caoutchouc.webp",
      localText: {
        fr: "",
        pt: "",
        en: "",
        it: "",
        de: "",
        es: "",
        pl: "",
        ru: ""
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
      produces: 30000046, // Caoutchouc
      perMinute: 1,
    }
  },
  publicService: {
    10100200: {
      id: 10100200,
      name: "Marketplace",
      icon: "/assets/icons/marketplace.webp",
      constructionCost: {
        credits: 500,
        timber: 10,
      },
      maintenanceCost: {
        credits: 20,
      }
    },
    20100700: {
      id: 20100700,
      name: "Pub",
      icon: "/assets/icons/pub.webp",
      constructionCost: {

      },
      maintenanceCost: {

      }
    }
  },
  residence: {
    20100100: {
      id: 20100100,
      name: "Farmer Residence",
      icon: "/assets/icons/farmer-residence.webp",
      constructionCost: {

      },
      maintenanceCost: {

      }
    }
  },
  street: {
    10100100: {
      id: 10100100,
      name: "Dirt Road",
      icon: "/assets/icons/dirt-road.webp",
      constructionCost: {
        credits: 3,
      },
      maintenanceCost: {

      }
    },
  }
}


///////////////////////////////////////////////////////////////////////////////
///////////////////////////// Products ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


const products: {[key: number]: ProductType} = {
  10000001: {
    id: 10000001,
    name: "Wood",
    icon: "/assets/icons/wood.webp",
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
    producerIds: [10100401], // [Lumberjack's Hut]
    isEndProduct: false,
  },
  10000002: {
    id: 10000002,
    name: "Timber",
    icon: "/assets/icons/timber.webp",
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
    producerIds: [10100502], // [Sawmill]
    isEndProduct: true,
  },
  20000003: {
    id: 20000003,
    name: "Fish",
    icon: "/assets/icons/fish.webp",
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
    producerIds: [20100203], // Fishery
    isEndProduct: true,
  },
  20000004: {
    id: 20000004,
    name: "Potatoes",
    icon: "/assets/icons/potato.webp",
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
    producerIds: [20100304], // [Potato Farm]
    isEndProduct: false,
  },
  20000005: {
    id: 20000005,
    name: "Schnapps",
    icon: "/assets/icons/schnapps.webp",
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
    producerIds: [20100405], // [Schnapps Distillery]
    isEndProduct: true,
  },
  20000006: {
    id: 20000006,
    name: "Wool",
    icon: "/assets/icons/wool.webp",
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
    producerIds: [20100506], // [Sheep Farm]
    isEndProduct: false,
  },
  20000007: {
    id: 20000007,
    name: "Work Clothes",
    icon: "/assets/icons/work-clothes.webp",
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
    producerIds: [20100607],  // [Framework Knitters]
    isEndProduct: true,
  },
  10000008: {
    id: 10000008,
    name: "Clay",
    icon: "/assets/icons/clay.webp",
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
    producerIds: [10200208],  // [Clay Pit]
    isEndProduct: false,
  },
  10000009: {
    id: 10000009,
    name: "Bricks",
    icon: "/assets/icons/bricks.webp",
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
    producerIds: [10200309],  // [Brick Factory]
    isEndProduct: true,
  },
  20000010: {
    id: 20000010,
    name: "Pigs",
    icon: "/assets/icons/pigs.webp",
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
    producerIds: [20200110], // [Pig Farm]
    isEndProduct: false,
  },
  20000011: {
    id: 20000011,
    name: "Sausages",
    icon: "/assets/icons/sausages.webp",
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
    producerIds: [20200211], // [Slaughterhouse]
    isEndProduct: true,
  },
  10000012: {
    id: 10000012,
    name: "Sails",
    icon: "/assets/icons/sails.webp",
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
    producerIds: [10201012], // [Sailmakers]
    isEndProduct: true,
  },
  20000013: {
    id: 20000013,
    name: "Grain",
    icon: "/assets/icons/grain.webp",
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
    producerIds: [20200313], // [Grain Farm]
    isEndProduct: false,
  },
  20000014: {
    id: 20000014,
    name: "Flour",
    icon: "/assets/icons/flour.webp",
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
    producerIds: [20200414], // [Flour Mill]
    isEndProduct: false,
  },
  20000015: {
    id: 20000015,
    name: "Bread",
    icon: "/assets/icons/bread.webp",
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
    producerIds: [20200515], // [Bakery]
    isEndProduct: true,
  },
  20000016: {
    id: 20000016,
    name: "Tallow",
    icon: "/assets/icons/tallow.webp",
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
    producerIds: [20200716], // [Rendering Works]
    isEndProduct: false,
  },
  20000017: {
    id: 20000017,
    name: "Soap",
    icon: "/assets/icons/soap.webp",
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
    producerIds: [20200817], // [Soap Factory]
    isEndProduct: true,
  },
  20000018: {
    id: 20000018,
    name: "Iron",
    icon: "/assets/icons/iron.webp",
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
    producerIds: [20200918], // [Iron Mine]
    isEndProduct: false
  },
  20000019: {
    id: 20000019,
    name: "Coal",
    icon: "/assets/icons/coal.webp",
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
    producerIds: [20201019, 20301219], // [Charcoal Kiln, Coal Mine]
    isEndProduct: false,
  },
  20000020: {
    id: 20000020,
    name: "Steel",
    icon: "/assets/icons/steel.webp",
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
    producerIds: [20201120], // [Furnace]
    isEndProduct: false,
  },
  20000021: {
    id: 20000021,
    name: "Steel Beams",
    icon: "/assets/icons/steel-beams.webp",
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
    producerIds: [20201221], // [Steelworks]
    isEndProduct: true,
  },
  20000022: {
    id: 20000022,
    name: "Weapons",
    icon: "/assets/icons/weapons.webp",
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
    producerIds: [20201322], // [Weapon Factory]
    isEndProduct: true,
  },
  20000023: {
    id: 20000023, 
    name: "Malt",
    icon: "/assets/icons/malt.webp",
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
    producerIds: [20201423], // [Malthouse]
    isEndProduct: false,
  },
  20000024: {
    id: 20000024,
    name: "Hop",
    icon: "/assets/icons/hop.webp",
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
    producerIds: [20201524], // [Hop Farm]
    isEndProduct: false,
  },
  20000025: {
    id: 20000025,
    name: "Beer",
    icon: "/assets/icons/beer.webp",
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
    producerIds: [20201625], // [Brewery]
    isEndProduct: true,
  },
  20000026: {
    id: 20000026,
    name: "Quarz Sand",
    icon: "/assets/icons/quarz-sand.webp",
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
    producerIds: [20300126], // [Sand Mine]
    isEndProduct: false,
  },
  20000027: {
    id: 20000027,
    name: "Glass",
    icon: "/assets/icons/glass.webp",
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
    producerIds: [20300227], // [Glassmakers]
    isEndProduct: false,
  },
  20000028: {
    id: 20000028,
    name: "Windows",
    icon: "/assets/icons/windows.webp",
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
    producerIds: [20300328], // [Window Makers]
    isEndProduct: true,
  },
  10000029: {
    id: 10000029,
    name: "Beef",
    icon: "/assets/icons/beef.webp",
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
    producerIds: [10300129], // [Cattle Farm]
    isEndProduct: false,
  },
  20000030: {
    id: 20000030,
    name: "Red Peppers",
    icon: "/assets/icons/red-peppers.webp",
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
    producerIds: [20300430], // [Red Pepper Farm]
    isEndProduct: false,
  },
  20000031: {
    id: 20000031,
    name: "Goulasch",
    icon: "/assets/icons/goulasch.webp",
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
    producerIds: [20300531], // [Artisanal Kitchen]
    isEndProduct: false,
  },
  20000032: {
    id: 20000032,
    name: "Canned Food",
    icon: "/assets/icons/canned-food.webp",
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
    producerIds: [20300632], // [Cannery]
    isEndProduct: true,
  },
  20000033: {
    id: 20000033,
    name: "Sewing Machines",
    icon: "/assets/icons/sewing-machines.webp",
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
    producerIds: [20301333], // [Sewing Machine Factory]
    isEndProduct: true,
  },
  20000034: {
    id: 20000034,
    name: "Furs",
    icon: "/assets/icons/furs.webp",
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
    producerIds: [20302034], // [Hunting Cabin]
    isEndProduct: false,
  },
  20000035: {
    id: 20000035,
    name: "Fur Coats",
    icon: "/assets/icons/fur-coats.webp",
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
    producerIds: [20302135], // [Fur Dealer]
    isEndProduct: true,
  },
  30000036: {
    id: 30000036,
    name: "Fish Oil",
    icon: "/assets/icons/fish-oil.webp",
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
    producerIds: [30100236], // [Fish Oil Factory]
    isEndProduct: false,
  },
  30000037: {
    id: 30000037,
    name: "Plantains",
    icon: "/assets/icons/plantains.webp",
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
    producerIds: [30100337], // [Plantain Plantation]
    isEndProduct: false,
  },
  30000038: {
    id: 30000038,
    name: "Fried Plantains",
    icon: "/assets/icons/fried-plantains.webp",
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
    producerIds: [30100438], // [Fried Plantain Kitchen]
    isEndProduct: true,
  },
  30000039: {
    id: 30000039,
    name: "Pearls",
    icon: "/assets/icons/pearls.webp",
    localText: {
      fr: "",
      pt: "",
      en: "",
      it: "",
      de: "",
      es: "",
      pl: "",
      ru: ""
    },
    producerIds: [30100539], // [Pearl Farm]
    isEndProduct: false,
  },
  30000040: {
    id: 30000040,
    name: "Cotton",
    icon: "/assets/icons/cotton.webp",
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
    producerIds: [30100640], // [Cotton Plantation]
    isEndProduct: false,
  },
  30000041: {
    id: 30000041,
    name: "Cotton Fabric",
    icon: "/assets/icons/cotton-fabric.webp",
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
    producerIds: [30100741], // [Cotton Mill]
    isEndProduct: false,
  },
  30000042: {
    id: 30000042,
    name: "Sugar",
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
    producerIds: [30100842], // [Sugar Cane Plantation]
    isEndProduct: false,
  },
  30000043: {
    id: 30000043,
    name: "Rum",
    icon: "/assets/icons/rum.webp",
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
    producerIds: [30100943], // [Rum Distillery]
    isEndProduct: true,
  },
  30000044: {
    id: 30000044,
    name: "Alpaca Wool",
    icon: "/assets/icons/alpaca-wool.webp",
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
    producerIds: [30101044], // [Alpaca Farm]
    isEndProduct: false,
  },
  30000045: {
    id: 30000045,
    name: "Ponchos",
    icon: "/assets/icons/poncho.webp",
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
    producerIds: [30101145], // [Poncho Darner]
    isEndProduct: true,
  },
  30000046: {
    id: 30000046,
    name: "Caoutchouc",
    icon: "/assets/icons/caoutchouc.webp",
    localText: {
      fr: "",
      pt: "",
      en: "",
      it: "",
      de: "",
      es: "",
      pl: "",
      ru: ""
    },
    producerIds: [30101246], // [Caoutchouc Plantation]
    isEndProduct: false,
  },
}

const languages: string[] = [
  'de',
  'en',
  'es',
  'fr',
  'it',
  'pl',
  'pt',
  'ru',
]

const parameters = {
  population: population,
  buildings: buildings,
  products: products,
  languages: languages,
}

export default parameters
