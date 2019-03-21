
interface LocalTextType {
  french: string,
  portuguese: string,
  english: string,
  brazilian: string,
  japanese: string,
  chinese: string,
  korean: string,
  taiwanese: string,
  italian: string,
  german: string,
  spanish: string,
  polish: string,
  russian: string,
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

interface ProductType {
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
      "french": "Population : Ancien Monde",
      "portuguese": "Moderate Population",
      "english": "Population: Old World",
      "brazilian": "Moderate Population",
      "japanese": "人口: 旧世界",
      "chinese": "人口：旧世界",
      "korean": "인구: 구대륙",
      "taiwanese": "人口：舊世界",
      "italian": "Popolazione: Vecchio Mondo",
      "german": "Bevölkerung: Alte Welt",
      "spanish": "Población: Viejo Mundo",
      "polish": "Populacja: Stary Świat",
      "russian": "Население: Старый Свет"
    },
    classes: {
      20100000: {
        id: 20100000,
        name: "Farmers",
        icon: "/assets/icons/farmers.webp",
        localText: {
          "french": "Fermiers",
          "portuguese": "Farmers",
          "english": "Farmers",
          "brazilian": "Farmers",
          "japanese": "農家",
          "chinese": "农夫",
          "korean": "농부",
          "taiwanese": "農夫",
          "italian": "Contadini",
          "german": "Bauern",
          "spanish": "Granjeros",
          "polish": "Farmerzy",
          "russian": "Фермеры"
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
          "french": "Ouvriers",
          "portuguese": "Workers",
          "english": "Workers",
          "brazilian": "Workers",
          "japanese": "労働者",
          "chinese": "工人",
          "korean": "노동자",
          "taiwanese": "工人",
          "italian": "Lavoratori",
          "german": "Arbeiter",
          "spanish": "Trabajadores",
          "polish": "Robotnicy",
          "russian": "Рабочие"
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
          "french": "Artisans",
          "portuguese": "Artisans",
          "english": "Artisans",
          "brazilian": "Artisans",
          "japanese": "職人",
          "chinese": "工匠",
          "korean": "직공",
          "taiwanese": "工匠",
          "italian": "Artigiani",
          "german": "Handwerker",
          "spanish": "Artesanos",
          "polish": "Rzemieślnicy",
          "russian": "Ремесленники"
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
          "french": "Engineers",
          "portuguese": "Engineers",
          "english": "Engineers",
          "brazilian": "Engineers",
          "japanese": "Engineers",
          "chinese": "Engineers",
          "korean": "Engineers",
          "taiwanese": "Engineers",
          "italian": "Engineers",
          "german": "Engineers",
          "spanish": "Engineers",
          "polish": "Engineers",
          "russian": "Engineers",
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
          "french": "Investors",
          "portuguese": "Investors",
          "english": "Investors",
          "brazilian": "Investors",
          "japanese": "Investors",
          "chinese": "Investors",
          "korean": "Investors",
          "taiwanese": "Investors",
          "italian": "Investors",
          "german": "Investors",
          "spanish": "Investors",
          "polish": "Investors",
          "russian": "Investors",
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
      "french": "Population : Nouveau Monde",
      "portuguese": "Colony Population",
      "english": "Population: New World",
      "brazilian": "Colony Population",
      "japanese": "人口: 新世界",
      "chinese": "人口：新世界",
      "korean": "인구: 신대륙",
      "taiwanese": "人口：新世界",
      "italian": "Popolazione: Nuovo Mondo",
      "german": "Bevölkerung: Neue Welt",
      "spanish": "Población: Nuevo Mundo",
      "polish": "Populacja: Nowy Świat",
      "russian": "Население: Новый Свет"
    },
    classes: {
      30100000: {
        id: 30100000,
        name: "Jornaleros",
        icon: "/assets/icons/jornaleros.webp",
        localText: {
          "french": "Jornaleros",
          "portuguese": "Jornaleros",
          "english": "Jornaleros",
          "brazilian": "Jornaleros",
          "japanese": "ジョルナレロス",
          "chinese": "计日工人",
          "korean": "식민지 노동자",
          "taiwanese": "計日工人",
          "italian": "Jornaleros",
          "german": "Jornaleros",
          "spanish": "Jornaleros",
          "polish": "Jornaleros",
          "russian": "Хорналеро"
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
          "french": "Obreros",
          "portuguese": "Obreros",
          "english": "Obreros",
          "brazilian": "Obreros",
          "japanese": "オブレロス",
          "chinese": "工人",
          "korean": "식민지 직공",
          "taiwanese": "工人",
          "italian": "Obreros",
          "german": "Obreros",
          "spanish": "Obreros",
          "polish": "Obreros",
          "russian": "Обреро"
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
        "french": "Cabane de bûcheron",
        "portuguese": "Lumberjack's Hut",
        "english": "Lumberjack's Hut",
        "brazilian": "Lumberjack's Hut",
        "japanese": "木こりの小屋",
        "chinese": "伐木工人棚屋",
        "korean": "벌목꾼의 오두막",
        "taiwanese": "伐木工人棚屋",
        "italian": "Capanno del taglialegna",
        "german": "Holzfällerhütte",
        "spanish": "Cabaña de leñador",
        "polish": "Chata drwala",
        "russian": "Хижина лесоруба"
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
        "french": "Scierie",
        "portuguese": "Sawmill",
        "english": "Sawmill",
        "brazilian": "Sawmill",
        "japanese": "製材所",
        "chinese": "锯木厂",
        "korean": "제재소",
        "taiwanese": "鋸木廠",
        "italian": "Segheria",
        "german": "Sägewerk",
        "spanish": "Serrería",
        "polish": "Tartak",
        "russian": "Лесопилка"
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
        "french": "Pêcherie",
        "portuguese": "Fishery",
        "english": "Fishery",
        "brazilian": "Fishery",
        "japanese": "漁場",
        "chinese": "养鱼场",
        "korean": "양어장",
        "taiwanese": "養魚場",
        "italian": "Area di pesca",
        "german": "Fischerei",
        "spanish": "Pescadería",
        "polish": "Dom rybaka",
        "russian": "Рыболовецкая гавань"
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
        "french": "Exploitation de pommes de terre",
        "portuguese": "Potato Farm",
        "english": "Potato Farm",
        "brazilian": "Potato Farm",
        "japanese": "ジャガイモ農場",
        "chinese": "马铃薯农场",
        "korean": "감자 농장",
        "taiwanese": "馬鈴薯農場",
        "italian": "Fattoria di patate",
        "german": "Kartoffelhof",
        "spanish": "Granja de patatas",
        "polish": "Uprawa ziemniaków",
        "russian": "Картофельная ферма"
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
        "french": "Distillerie",
        "portuguese": "Schnapps Distillery",
        "english": "Schnapps Distillery",
        "brazilian": "Schnapps Distillery",
        "japanese": "アルコール蒸留所",
        "chinese": "烈酒酿酒厂",
        "korean": "슈냅스 양조장",
        "taiwanese": "烈酒釀酒廠",
        "italian": "Distilleria di liquori",
        "german": "Schnapsbrennerei",
        "spanish": "Destilería de licor",
        "polish": "Gorzelnia",
        "russian": "Винокурня"
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
        "french": "Élevage de moutons",
        "portuguese": "Sheep Farm",
        "english": "Sheep Farm",
        "brazilian": "Sheep Farm",
        "japanese": "羊の牧草地",
        "chinese": "绵羊牧场",
        "korean": "양 농장",
        "taiwanese": "綿羊牧場",
        "italian": "Allevamento di pecore",
        "german": "Schäferei",
        "spanish": "Granja ovina",
        "polish": "Farma owiec",
        "russian": "Овцеферма"
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
        "french": "Filature",
        "portuguese": "Framework Knitters",
        "english": "Framework Knitters",
        "brazilian": "Framework Knitters",
        "japanese": "織物工場",
        "chinese": "纺织工厂",
        "korean": "편물 공장",
        "taiwanese": "紡織工廠",
        "italian": "Maglieriste",
        "german": "Schneiderei",
        "spanish": "Telar de marco",
        "polish": "Szwalnia",
        "russian": "Жилье вязальщиц"
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
        "french": "Carrière d'argile",
        "portuguese": "Clay Pit",
        "english": "Clay Pit",
        "brazilian": "Clay Pit",
        "japanese": "粘土穴",
        "chinese": "陶土矿场",
        "korean": "점토 채취장",
        "taiwanese": "陶土礦場",
        "italian": "Cava di argilla",
        "german": "Lehmgrube",
        "spanish": "Cantera de arcilla",
        "polish": "Wyrobisko gliny",
        "russian": "Глиняный карьер"
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
        "french": "Briqueterie",
        "portuguese": "Brick Factory",
        "english": "Brick Factory",
        "brazilian": "Brick Factory",
        "japanese": "レンガ工場",
        "chinese": "砖块工厂",
        "korean": "벽돌 공장",
        "taiwanese": "磚塊工廠",
        "italian": "Fabbrica di mattoni",
        "german": "Ziegelei",
        "spanish": "Fábrica de ladrillos",
        "polish": "Cegielnia",
        "russian": "Кирпичный завод"
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
        "french": "Élevage de porcs",
        "portuguese": "Pig Farm",
        "english": "Pig Farm",
        "brazilian": "Pig Farm",
        "japanese": "豚の牧草地",
        "chinese": "养猪场",
        "korean": "돼지 농장",
        "taiwanese": "養豬場",
        "italian": "Allevamento di maiali",
        "german": "Schweinezucht",
        "spanish": "Granja porcina",
        "polish": "Farma świń",
        "russian": "Свиноферма"
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
        "french": "Boucherie",
        "portuguese": "Butcher's",
        "english": "Slaughterhouse",
        "brazilian": "Butcher's",
        "japanese": "肉屋",
        "chinese": "肉铺",
        "korean": "도축장",
        "taiwanese": "肉鋪",
        "italian": "Macelleria",
        "german": "Metzgerei",
        "spanish": "Carnicería",
        "polish": "Rzeźnik",
        "russian": "Мясная лавка"
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
        "french": "Voilerie",
        "portuguese": "Sailmakers",
        "english": "Sailmakers",
        "brazilian": "Sailmakers",
        "japanese": "帆布工場",
        "chinese": "船帆制造厂",
        "korean": "돛 제작소",
        "taiwanese": "船帆製造廠",
        "italian": "Velai",
        "german": "Segelweberei",
        "spanish": "Fabricante de velas",
        "polish": "Żaglomistrz",
        "russian": "Парусная фабрика"
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
        french: "Ferme céréalière",
        portuguese: "Grain Farm",
        english: "Grain Farm",
        brazilian: "Grain Farm",
        japanese: "穀物農場",
        chinese: "谷物农场",
        korean: "곡물 농장",
        taiwanese: "穀物農場",
        italian: "Fattoria di grano",
        german: "Getreidefarm",
        spanish: "Granja de trigo",
        polish: "Uprawa zboża",
        russian: "Ферма",
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
        "french": "Moulin",
        "portuguese": "Flour Mill",
        "english": "Flour Mill",
        "brazilian": "Flour Mill",
        "japanese": "製粉所",
        "chinese": "磨坊",
        "korean": "제분소",
        "taiwanese": "磨坊",
        "italian": "Mulino",
        "german": "Mühle",
        "spanish": "Molino de harina",
        "polish": "Wiatrak",
        "russian": "Мельница"
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
        "french": "Boulangerie",
        "portuguese": "Bakery",
        "english": "Bakery",
        "brazilian": "Bakery",
        "japanese": "パン屋",
        "chinese": "面包店",
        "korean": "제과점",
        "taiwanese": "麵包店",
        "italian": "Panificio",
        "german": "Bäckerei",
        "spanish": "Panadería",
        "polish": "Piekarnia",
        "russian": "Пекарня"
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
        "french": "Fonderie de suif",
        "portuguese": "Rendering Works",
        "english": "Rendering Works",
        "brazilian": "Rendering Works",
        "japanese": "獣脂加工所",
        "chinese": "精炼工作坊",
        "korean": "축산 가공장",
        "taiwanese": "精煉工作坊",
        "italian": "Scorticatoio",
        "german": "Wasenmeisterei",
        "spanish": "Extractor de grasa",
        "polish": "Wytwórnia łoju",
        "russian": "Салотопный завод"
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
        "french": "Savonnerie",
        "portuguese": "Soap Factory",
        "english": "Soap Factory",
        "brazilian": "Soap Factory",
        "japanese": "石鹸工場",
        "chinese": "肥皂工厂",
        "korean": "비누 공장",
        "taiwanese": "肥皂工廠",
        "italian": "Fabbrica di sapone",
        "german": "Seifensiederei",
        "spanish": "Fábrica de jabón",
        "polish": "Wytwórnia mydła",
        "russian": "Мыловарня"
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
        "french": "Mine de fer",
        "portuguese": "Iron Mine",
        "english": "Iron Mine",
        "brazilian": "Iron Mine",
        "japanese": "鉄鉱",
        "chinese": "铁矿",
        "korean": "철광산",
        "taiwanese": "鐵礦",
        "italian": "Miniera di ferro",
        "german": "Eisenmine",
        "spanish": "Mina de hierro",
        "polish": "Kopalnia żelaza",
        "russian": "Железный рудник"
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
        "french": "Charbonnière",
        "portuguese": "Charcoal Kiln",
        "english": "Charcoal Kiln",
        "brazilian": "Charcoal Kiln",
        "japanese": "木炭窯",
        "chinese": "炭窑",
        "korean": "숯가마",
        "taiwanese": "炭窯",
        "italian": "Forno a carbone",
        "german": "Köhlerei",
        "spanish": "Horno de carbonización",
        "polish": "Mielerz",
        "russian": "Углевыжигательная печь"
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
        "french": "Fourneau",
        "portuguese": "Furnace",
        "english": "Furnace",
        "brazilian": "Furnace",
        "japanese": "溶鉱炉",
        "chinese": "高炉",
        "korean": "제철소",
        "taiwanese": "高爐",
        "italian": "Fornace",
        "german": "Hochofen",
        "spanish": "Alto horno",
        "polish": "Piec hutniczy",
        "russian": "Плавильня"
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
        "french": "Aciérie",
        "portuguese": "Steelworks",
        "english": "Steelworks",
        "brazilian": "Steelworks",
        "japanese": "鉄鉱所",
        "chinese": "炼钢厂",
        "korean": "제강소",
        "taiwanese": "煉鋼廠",
        "italian": "Acciaieria",
        "german": "Stahlwerk",
        "spanish": "Acerería",
        "polish": "Stalownia",
        "russian": "Сталелитейный завод"
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
        "french": "Usine d'armements",
        "portuguese": "Weapon Factory",
        "english": "Weapon Factory",
        "brazilian": "Weapon Factory",
        "japanese": "武器工場",
        "chinese": "武器工厂",
        "korean": "무기 공장",
        "taiwanese": "武器工廠",
        "italian": "Fabbrica di armi",
        "german": "Waffenfabrik",
        "spanish": "Fábrica de armas",
        "polish": "Fabryka broni",
        "russian": "Оружейный завод"
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
        "french": "Malterie",
        "portuguese": "Malthouse",
        "english": "Malthouse",
        "brazilian": "Malthouse",
        "japanese": "麦芽製造所",
        "chinese": "麦芽加工厂",
        "korean": "맥아 저장고",
        "taiwanese": "麥芽加工廠",
        "italian": "Malteria",
        "german": "Mälzerei",
        "spanish": "Maltería",
        "polish": "Słodownia",
        "russian": "Солодильня"
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
        "french": "Houblonnière",
        "portuguese": "Hop Farm",
        "english": "Hop Farm",
        "brazilian": "Hop Farm",
        "japanese": "ホップ農場",
        "chinese": "啤酒花农场",
        "korean": "홉 농장",
        "taiwanese": "啤酒花農場",
        "italian": "Fattoria di luppoli",
        "german": "Hopfenplantage",
        "spanish": "Granja de lúpulo",
        "polish": "Uprawa chmielu",
        "russian": "Ферма хмеля"
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
        "french": "Brasserie",
        "portuguese": "Brewery",
        "english": "Brewery",
        "brazilian": "Brewery",
        "japanese": "醸造所",
        "chinese": "酿酒厂",
        "korean": "양조장",
        "taiwanese": "釀酒廠",
        "italian": "Birrificio",
        "german": "Brauerei",
        "spanish": "Cervecería",
        "polish": "Browar",
        "russian": "Пивоварня"
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
        "french": "Mine de silice",
        "portuguese": "Sand Mine",
        "english": "Sand Mine",
        "brazilian": "Sand Mine",
        "japanese": "砂採取場",
        "chinese": "沙矿",
        "korean": "모래 광산",
        "taiwanese": "沙礦",
        "italian": "Miniera di sabbia",
        "german": "Quarzgrube",
        "spanish": "Mina de arena",
        "polish": "Kopalnia piasku",
        "russian": "Песчаный карьер"
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
        "french": "Verrerie",
        "portuguese": "Glassmakers",
        "english": "Glassmakers",
        "brazilian": "Glassmakers",
        "japanese": "ガラス工場",
        "chinese": "玻璃制造厂",
        "korean": "유리 제조소",
        "taiwanese": "玻璃製造廠",
        "italian": "Vetrai",
        "german": "Glashütte",
        "spanish": "Cristalero",
        "polish": "Huta szkła",
        "russian": "Стекольная фабрика"
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
        "french": "Vitrerie",
        "portuguese": "Window-Makers",
        "english": "Window Makers",
        "brazilian": "Window-Makers",
        "japanese": "窓製造所",
        "chinese": "窗户制造厂",
        "korean": "창문 공장",
        "taiwanese": "窗戶製造廠",
        "italian": "Produttori di finestre",
        "german": "Fenster-Manufaktur",
        "spanish": "Fabricante de ventanas",
        "polish": "Wytwórnia okien",
        "russian": "Оконная фабрика"
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
        "french": "Élevage de gros bétail",
        "portuguese": "Cattle Farm",
        "english": "Cattle Farm",
        "brazilian": "Cattle Farm",
        "japanese": "牛の牧草地",
        "chinese": "牛牧场",
        "korean": "가축 농장",
        "taiwanese": "牛牧場",
        "italian": "Allevamento di bestiame",
        "german": "Rinderfarm",
        "spanish": "Granja vacuna",
        "polish": "Farma bydła",
        "russian": "Скотоферма"
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
        "french": "Ferme de poivrons rouges",
        "portuguese": "Red Pepper Farm",
        "english": "Red Pepper Farm",
        "brazilian": "Red Pepper Farm",
        "japanese": "赤トウガラシ農園",
        "chinese": "红辣椒农场",
        "korean": "피망 농장",
        "taiwanese": "紅辣椒農場",
        "italian": "Fattoria di peperoncini",
        "german": "Paprikafarm",
        "spanish": "Granja de pimientos rojos",
        "polish": "Uprawa czerwonej papryki",
        "russian": "Перечная ферма"
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
        "french": "Cuisine artisanale",
        "portuguese": "Artisanal Kitchen",
        "english": "Artisanal Kitchen",
        "brazilian": "Artisanal Kitchen",
        "japanese": "職人キッチン",
        "chinese": "工匠厨房",
        "korean": "직공 주방",
        "taiwanese": "工匠廚房",
        "italian": "Cucina artigianale",
        "german": "Großküche",
        "spanish": "Cocina artesanal",
        "polish": "Kuchnia tradycyjna",
        "russian": "Кухня"
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
        "french": "Conserverie",
        "portuguese": "Cannery",
        "english": "Cannery",
        "brazilian": "Cannery",
        "japanese": "缶詰工場",
        "chinese": "罐头工厂",
        "korean": "통조림 공장",
        "taiwanese": "罐頭工廠",
        "italian": "Conservificio",
        "german": "Konservenfabrik",
        "spanish": "Fábrica de conservas",
        "polish": "Fabryka konserw",
        "russian": "Консервный завод"
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
        "french": "Mine de charbon",
        "portuguese": "Coal Mine",
        "english": "Coal Mine",
        "brazilian": "Coal Mine",
        "japanese": "炭鉱",
        "chinese": "煤矿",
        "korean": "석탄 광산",
        "taiwanese": "煤礦",
        "italian": "Miniera di carbone",
        "german": "Kohlemine",
        "spanish": "Mina de carbón",
        "polish": "Kopalnia węgla",
        "russian": "Угольная шахта"
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
        "french": "Usine de machines à coudre",
        "portuguese": "Sewing Machine Factory",
        "english": "Sewing Machine Factory",
        "brazilian": "Sewing Machine Factory",
        "japanese": "ミシン工場",
        "chinese": "缝纫机器工厂",
        "korean": "재봉틀 공장",
        "taiwanese": "縫紉機器工廠",
        "italian": "Fabbrica di macchine da cucire",
        "german": "Nähmaschinenfabrik",
        "spanish": "Fábrica de máquinas de costura",
        "polish": "Fabryka maszyn do szycia",
        "russian": "Фабрика швейных машин"
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
        "french": "Cabane de chasse",
        "portuguese": "Hunting Cabin",
        "english": "Hunting Cabin",
        "brazilian": "Hunting Cabin",
        "japanese": "狩猟小屋",
        "chinese": "狩猎小屋",
        "korean": "사냥꾼 오두막",
        "taiwanese": "狩獵小屋",
        "italian": "Capanno da caccia",
        "german": "Jagdhütte",
        "spanish": "Cabaña de cazador",
        "polish": "Chata myśliwska",
        "russian": "Хижина охотника"
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
        "french": "Pelleterie",
        "portuguese": "Fur Dealer",
        "english": "Fur Dealer",
        "brazilian": "Fur Dealer",
        "japanese": "毛皮商",
        "chinese": "皮草贸易商",
        "korean": "모피상",
        "taiwanese": "皮草貿易商",
        "italian": "Mercante di pellicce",
        "german": "Fellhändler",
        "spanish": "Tratante de pieles",
        "polish": "Zakład futrzarski",
        "russian": "Меховщик"
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
        "french": "Fabrique d'huile de poisson",
        "portuguese": "Fish Oil Factory",
        "english": "Fish Oil Factory",
        "brazilian": "Fish Oil Factory",
        "japanese": "漁油工場",
        "chinese": "鱼油工厂",
        "korean": "어유 공장",
        "taiwanese": "魚油工廠",
        "italian": "Fabbrica olio di pesce",
        "german": "Fischölfabrik",
        "spanish": "Fábrica de aceite de pescado",
        "polish": "Fabryka tranu",
        "russian": "Фабрика рыбьего жира"
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
        "french": "Plantation de bananes",
        "portuguese": "Banana Plantation",
        "english": "Plantain Plantation",
        "brazilian": "Banana Plantation",
        "japanese": "バナナ農園",
        "chinese": "大蕉园",
        "korean": "플랜테인 농장",
        "taiwanese": "大蕉園",
        "italian": "Piantagione di banane",
        "german": "Bananenplantage",
        "spanish": "Plantación de plátanos",
        "polish": "Plantacja bananów",
        "russian": "Банановая плантация"
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
        "french": "Cuisine de plantains frits",
        "portuguese": "Fried Plantain Kitchen",
        "english": "Fried Plantain Kitchen",
        "brazilian": "Fried Banana Kitchen",
        "japanese": "フライドバナナキッチン",
        "chinese": "炸大蕉饼店",
        "korean": "플랜테인 튀김 주방",
        "taiwanese": "炸大蕉餅店",
        "italian": "Cucina banane fritte",
        "german": "Backbananen-Küche",
        "spanish": "Freiduría de plátano",
        "polish": "Kuchnia pieczonych bananów",
        "russian": "Кухня для поджарки бананов"
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
        "french": "",
        "portuguese": "",
        "english": "",
        "brazilian": "",
        "japanese": "",
        "chinese": "",
        "korean": "",
        "taiwanese": "",
        "italian": "",
        "german": "",
        "spanish": "",
        "polish": "",
        "russian": ""
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
        "french": "Plantation de coton",
        "portuguese": "Cotton Plantation",
        "english": "Cotton Plantation",
        "brazilian": "Cotton Plantation",
        "japanese": "綿花農園",
        "chinese": "棉花园",
        "korean": "목화 농장",
        "taiwanese": "棉花園",
        "italian": "Piantagione di cotone",
        "german": "Baumwollplantage",
        "spanish": "Plantación de algodón",
        "polish": "Plantacja bawełny",
        "russian": "Плантация хлопка"
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
        "french": "Filature de coton",
        "portuguese": "Cotton Mill",
        "english": "Cotton Mill",
        "brazilian": "Cotton Mill",
        "japanese": "紡績工場",
        "chinese": "棉纺织厂",
        "korean": "방적 공장",
        "taiwanese": "棉紡織廠",
        "italian": "Cotonificio",
        "german": "Baumwollweberei",
        "spanish": "Molino de algodón",
        "polish": "Przędzalnia bawełny",
        "russian": "Хлопкопрядильная фабрика"
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
        "french": "Plantation de canne à sucre",
        "portuguese": "Sugar Cane Plantation",
        "english": "Sugar Cane Plantation",
        "brazilian": "Sugar Cane Plantation",
        "japanese": "さとうきび農園",
        "chinese": "甘蔗园",
        "korean": "사탕수수 농장",
        "taiwanese": "甘蔗園",
        "italian": "Piantagione di canne da zucchero",
        "german": "Zuckerrohrplantage",
        "spanish": "Plantación de caña de azúcar",
        "polish": "Plantacja trzciny cukrowej",
        "russian": "Плантация тростника"
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
        "french": "Rhumerie",
        "portuguese": "Rum Distillery",
        "english": "Rum Distillery",
        "brazilian": "Rum Distillery",
        "japanese": "ラム酒蒸留所",
        "chinese": "兰姆酒工厂",
        "korean": "럼주 양조장",
        "taiwanese": "蘭姆酒工廠",
        "italian": "Distilleria di rum",
        "german": "Rumbrennerei",
        "spanish": "Destilería de ron",
        "polish": "Destylarnia rumu",
        "russian": "Фабрика рома"
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
        "french": "Élevage d'alpagas",
        "portuguese": "Alpaca Farm",
        "english": "Alpaca Farm",
        "brazilian": "Alpaca Farm",
        "japanese": "アルパカ牧場",
        "chinese": "羊驼牧场",
        "korean": "알파카 농장",
        "taiwanese": "羊駝牧場",
        "italian": "Fattoria di alpaca",
        "german": "Alpakafarm",
        "spanish": "Granja de alpacas",
        "polish": "Farma alpak",
        "russian": "Ферма альпак"
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
        "french": "Fabricant de ponchos",
        "portuguese": "Poncho Darner",
        "english": "Poncho Darner",
        "brazilian": "Poncho Darner",
        "japanese": "ポンチョ修繕場",
        "chinese": "斗篷缝补厂",
        "korean": "판초 제작소",
        "taiwanese": "斗篷縫補廠",
        "italian": "Rammendatore di poncho",
        "german": "Ponchoweberei",
        "spanish": "Tejedor de ponchos",
        "polish": "Wytwórca poncz",
        "russian": "Фабрика пончо"
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
        "french": "",
        "portuguese": "",
        "english": "",
        "brazilian": "",
        "japanese": "",
        "chinese": "",
        "korean": "",
        "taiwanese": "",
        "italian": "",
        "german": "",
        "spanish": "",
        "polish": "",
        "russian": ""
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
      "french": "Bois",
      "portuguese": "Wood",
      "english": "Wood",
      "brazilian": "Wood",
      "japanese": "丸太",
      "chinese": "原木",
      "korean": "나무",
      "taiwanese": "原木",
      "italian": "Legno",
      "german": "Holz",
      "spanish": "Madera",
      "polish": "Drewno",
      "russian": "Древесина"
    },
    producerIds: [10100401], // [Lumberjack's Hut]
    isEndProduct: false,
  },
  10000002: {
    id: 10000002,
    name: "Timber",
    icon: "/assets/icons/timber.webp",
    localText: {
      "french": "Planches",
      "portuguese": "Timber",
      "english": "Timber",
      "brazilian": "Timber",
      "japanese": "木板",
      "chinese": "木材",
      "korean": "목재",
      "taiwanese": "木材",
      "italian": "Legname",
      "german": "Bretter",
      "spanish": "Tablones",
      "polish": "Deski",
      "russian": "Доски"
    },
    producerIds: [10100502], // [Sawmill]
    isEndProduct: true,
  },
  20000003: {
    id: 20000003,
    name: "Fish",
    icon: "/assets/icons/fish.webp",
    localText: {
      "french": "Poisson",
      "portuguese": "Fish",
      "english": "Fish",
      "brazilian": "Fish",
      "japanese": "魚",
      "chinese": "鱼",
      "korean": "생선",
      "taiwanese": "魚",
      "italian": "Pesce",
      "german": "Fische",
      "spanish": "Pescado",
      "polish": "Ryby",
      "russian": "Рыба"
    },
    producerIds: [20100203], // Fishery
    isEndProduct: true,
  },
  20000004: {
    id: 20000004,
    name: "Potatoes",
    icon: "/assets/icons/potato.webp",
    localText: {
      "french": "Pommes de terre",
      "portuguese": "Potatoes",
      "english": "Potatoes",
      "brazilian": "Potatoes",
      "japanese": "ジャガイモ",
      "chinese": "马铃薯",
      "korean": "감자",
      "taiwanese": "馬鈴薯",
      "italian": "Patate",
      "german": "Kartoffeln",
      "spanish": "Patatas",
      "polish": "Ziemniaki",
      "russian": "Картофель"
    },
    producerIds: [20100304], // [Potato Farm]
    isEndProduct: false,
  },
  20000005: {
    id: 20000005,
    name: "Schnapps",
    icon: "/assets/icons/schnapps.webp",
    localText: {
      "french": "Eau-de-vie",
      "portuguese": "Schnapps",
      "english": "Schnapps",
      "brazilian": "Schnapps",
      "japanese": "シュナップス",
      "chinese": "烈酒",
      "korean": "슈냅스",
      "taiwanese": "烈酒",
      "italian": "Liquore",
      "german": "Schnaps",
      "spanish": "Licor",
      "polish": "Alkohol",
      "russian": "Шнапс"
    },
    producerIds: [20100405], // [Schnapps Distillery]
    isEndProduct: true,
  },
  20000006: {
    id: 20000006,
    name: "Wool",
    icon: "/assets/icons/wool.webp",
    localText: {
      "french": "Laine",
      "portuguese": "Wool",
      "english": "Wool",
      "brazilian": "Wool",
      "japanese": "羊毛",
      "chinese": "羊毛",
      "korean": "양모",
      "taiwanese": "羊毛",
      "italian": "Lana",
      "german": "Wolle",
      "spanish": "Lana",
      "polish": "Wełna",
      "russian": "Шерсть"
    },
    producerIds: [20100506], // [Sheep Farm]
    isEndProduct: false,
  },
  20000007: {
    id: 20000007,
    name: "Work Clothes",
    icon: "/assets/icons/work-clothes.webp",
    localText: {
      "french": "Vêtements de travail",
      "portuguese": "Work Clothes",
      "english": "Work Clothes",
      "brazilian": "Work Clothes",
      "japanese": "作業着",
      "chinese": "工作服",
      "korean": "작업복",
      "taiwanese": "工作服",
      "italian": "Abiti da lavoro",
      "german": "Arbeitskleidung",
      "spanish": "Ropas de trabajo",
      "polish": "Ubrania robocze",
      "russian": "Рабочая одежда"
    },
    producerIds: [20100607],  // [Framework Knitters]
    isEndProduct: true,
  },
  10000008: {
    id: 10000008,
    name: "Clay",
    icon: "/assets/icons/clay.webp",
    localText: {
      "french": "Argile",
      "portuguese": "Clay",
      "english": "Clay",
      "brazilian": "Clay",
      "japanese": "粘土",
      "chinese": "瓷土",
      "korean": "점토",
      "taiwanese": "瓷土",
      "italian": "Creta",
      "german": "Lehm",
      "spanish": "Arcilla",
      "polish": "Glina",
      "russian": "Глина"
    },
    producerIds: [10200208],  // [Clay Pit]
    isEndProduct: false,
  },
  10000009: {
    id: 10000009,
    name: "Bricks",
    icon: "/assets/icons/bricks.webp",
    localText: {
      "french": "Briques",
      "portuguese": "Bricks",
      "english": "Bricks",
      "brazilian": "Bricks",
      "japanese": "レンガ",
      "chinese": "砖块",
      "korean": "벽돌",
      "taiwanese": "磚塊",
      "italian": "Mattoni",
      "german": "Ziegelsteine",
      "spanish": "Ladrillos",
      "polish": "Cegły",
      "russian": "Кирпичи"
    },
    producerIds: [10200309],  // [Brick Factory]
    isEndProduct: true,
  },
  20000010: {
    id: 20000010,
    name: "Pigs",
    icon: "/assets/icons/pigs.webp",
    localText: {
      "french": "Porcs",
      "portuguese": "Pigs",
      "english": "Pigs",
      "brazilian": "Pigs",
      "japanese": "豚",
      "chinese": "猪只",
      "korean": "돼지",
      "taiwanese": "豬隻",
      "italian": "Maiali",
      "german": "Schweine",
      "spanish": "Cerdos",
      "polish": "Prosięta",
      "russian": "Свиньи"
    },
    producerIds: [20200110], // [Pig Farm]
    isEndProduct: false,
  },
  20000011: {
    id: 20000011,
    name: "Sausages",
    icon: "/assets/icons/sausages.webp",
    localText: {
      "french": "Saucisses",
      "portuguese": "Sausages",
      "english": "Sausages",
      "brazilian": "Sausages",
      "japanese": "ソーセージ",
      "chinese": "香肠",
      "korean": "소시지",
      "taiwanese": "香腸",
      "italian": "Salsicce",
      "german": "Würstchen",
      "spanish": "Salchichas",
      "polish": "Kiełbasy",
      "russian": "Колбаски"
    },
    producerIds: [20200211], // [Slaughterhouse]
    isEndProduct: true,
  },
  10000012: {
    id: 10000012,
    name: "Sails",
    icon: "/assets/icons/sails.webp",
    localText: {
      "french": "Voiles",
      "portuguese": "Sails",
      "english": "Sails",
      "brazilian": "Sails",
      "japanese": "帆布",
      "chinese": "船帆",
      "korean": "돛",
      "taiwanese": "船帆",
      "italian": "Vele",
      "german": "Segel",
      "spanish": "Velas",
      "polish": "Żagle",
      "russian": "Паруса"
    },
    producerIds: [10201012], // [Sailmakers]
    isEndProduct: true,
  },
  20000013: {
    id: 20000013,
    name: "Grain",
    icon: "/assets/icons/grain.webp",
    localText: {
      "french": "Blé",
      "portuguese": "Grain",
      "english": "Grain",
      "brazilian": "Grain",
      "japanese": "穀物",
      "chinese": "谷物",
      "korean": "곡물",
      "taiwanese": "穀物",
      "italian": "Grano",
      "german": "Getreide",
      "spanish": "Trigo",
      "polish": "Zboże",
      "russian": "Зерно"
    },
    producerIds: [20200313], // [Grain Farm]
    isEndProduct: false,
  },
  20000014: {
    id: 20000014,
    name: "Flour",
    icon: "/assets/icons/flour.webp",
    localText: {
      "french": "Farine",
      "portuguese": "Flour",
      "english": "Flour",
      "brazilian": "Flour",
      "japanese": "小麦粉",
      "chinese": "小麦粉",
      "korean": "밀가루",
      "taiwanese": "小麥粉",
      "italian": "Farina",
      "german": "Mehl",
      "spanish": "Harina",
      "polish": "Mąka",
      "russian": "Мука"
    },
    producerIds: [20200414], // [Flour Mill]
    isEndProduct: false,
  },
  20000015: {
    id: 20000015,
    name: "Bread",
    icon: "/assets/icons/bread.webp",
    localText: {
      "french": "Pain",
      "portuguese": "Bread",
      "english": "Bread",
      "brazilian": "Bread",
      "japanese": "パン",
      "chinese": "面包",
      "korean": "빵",
      "taiwanese": "麵包",
      "italian": "Pane",
      "german": "Brote",
      "spanish": "Pan",
      "polish": "Chleb",
      "russian": "Хлеб"
    },
    producerIds: [20200515], // [Bakery]
    isEndProduct: true,
  },
  20000016: {
    id: 20000016,
    name: "Tallow",
    icon: "/assets/icons/tallow.webp",
    localText: {
      "french": "Suif",
      "portuguese": "Tallow",
      "english": "Tallow",
      "brazilian": "Tallow",
      "japanese": "獣脂",
      "chinese": "动物性油脂",
      "korean": "수지",
      "taiwanese": "動物性油脂",
      "italian": "Sego",
      "german": "Schweinefett",
      "spanish": "Sebo",
      "polish": "Łój",
      "russian": "Сало"
    },
    producerIds: [20200716], // [Rendering Works]
    isEndProduct: false,
  },
  20000017: {
    id: 20000017,
    name: "Soap",
    icon: "/assets/icons/soap.webp",
    localText: {
      "french": "Savon",
      "portuguese": "Soap",
      "english": "Soap",
      "brazilian": "Soap",
      "japanese": "石鹸",
      "chinese": "肥皂",
      "korean": "비누",
      "taiwanese": "肥皂",
      "italian": "Sapone",
      "german": "Seife",
      "spanish": "Jabón",
      "polish": "Mydło",
      "russian": "Мыло"
    },
    producerIds: [20200817], // [Soap Factory]
    isEndProduct: true,
  },
  20000018: {
    id: 20000018,
    name: "Iron",
    icon: "/assets/icons/iron.webp",
    localText: {
      "french": "Fer",
      "portuguese": "Iron",
      "english": "Iron",
      "brazilian": "Iron",
      "japanese": "鉄",
      "chinese": "铁",
      "korean": "철",
      "taiwanese": "鐵",
      "italian": "Ferro",
      "german": "Eisen",
      "spanish": "Hierro",
      "polish": "Żelazo",
      "russian": "Железо"
    },
    producerIds: [20200918], // [Iron Mine]
    isEndProduct: false
  },
  20000019: {
    id: 20000019,
    name: "Coal",
    icon: "/assets/icons/coal.webp",
    localText: {
      "french": "Charbon",
      "portuguese": "Coal",
      "english": "Coal",
      "brazilian": "Coal",
      "japanese": "石炭",
      "chinese": "煤",
      "korean": "석탄",
      "taiwanese": "煤",
      "italian": "Carbone",
      "german": "Steinkohle",
      "spanish": "Carbón",
      "polish": "Węgiel",
      "russian": "Уголь"
    },
    producerIds: [20201019, 20301219], // [Charcoal Kiln, Coal Mine]
    isEndProduct: false,
  },
  20000020: {
    id: 20000020,
    name: "Steel",
    icon: "/assets/icons/steel.webp",
    localText: {
      "french": "Acier",
      "portuguese": "Steel",
      "english": "Steel",
      "brazilian": "Steel",
      "japanese": "鋼鉄",
      "chinese": "钢铁",
      "korean": "강철",
      "taiwanese": "鋼鐵",
      "italian": "Acciaio",
      "german": "Stahl",
      "spanish": "Acero",
      "polish": "Stal",
      "russian": "Сталь"
    },
    producerIds: [20201120], // [Furnace]
    isEndProduct: false,
  },
  20000021: {
    id: 20000021,
    name: "Steel Beams",
    icon: "/assets/icons/steel-beams.webp",
    localText: {
      "french": "Poutres d'acier",
      "portuguese": "Beams",
      "english": "Steel Beams",
      "brazilian": "Beams",
      "japanese": "鉄骨材",
      "chinese": "钢梁",
      "korean": "철재",
      "taiwanese": "鋼樑",
      "italian": "Travi d'acciaio",
      "german": "Stahlträger",
      "spanish": "Vigas de acero",
      "polish": "Stalowe belki",
      "russian": "Стальные балки"
    },
    producerIds: [20201221], // [Steelworks]
    isEndProduct: true,
  },
  20000022: {
    id: 20000022,
    name: "Weapons",
    icon: "/assets/icons/weapons.webp",
    localText: {
      "french": "Armes",
      "portuguese": "Weapons",
      "english": "Weapons",
      "brazilian": "Weapons",
      "japanese": "武器",
      "chinese": "武器",
      "korean": "무기",
      "taiwanese": "武器",
      "italian": "Armi",
      "german": "Waffen",
      "spanish": "Armas",
      "polish": "Uzbrojenie",
      "russian": "Оружие"
    },
    producerIds: [20201322], // [Weapon Factory]
    isEndProduct: true,
  },
  20000023: {
    id: 20000023, 
    name: "Malt",
    icon: "/assets/icons/malt.webp",
    localText: {
      "french": "Malt",
      "portuguese": "Malt",
      "english": "Malt",
      "brazilian": "Malt",
      "japanese": "麦芽",
      "chinese": "麦芽",
      "korean": "맥아",
      "taiwanese": "麥芽",
      "italian": "Malto",
      "german": "Malz",
      "spanish": "Malta",
      "polish": "Słód",
      "russian": "Солод"
    },
    producerIds: [20201423], // [Malthouse]
    isEndProduct: false,
  },
  20000024: {
    id: 20000024,
    name: "Hop",
    icon: "/assets/icons/hop.webp",
    localText: {
      "french": "Houblon",
      "portuguese": "Hops",
      "english": "Hops",
      "brazilian": "Hops",
      "japanese": "ホップ",
      "chinese": "啤酒花",
      "korean": "홉",
      "taiwanese": "啤酒花",
      "italian": "Luppoli",
      "german": "Hopfen",
      "spanish": "Lúpulo",
      "polish": "Chmiel",
      "russian": "Хмель"
    },
    producerIds: [20201524], // [Hop Farm]
    isEndProduct: false,
  },
  20000025: {
    id: 20000025,
    name: "Beer",
    icon: "/assets/icons/beer.webp",
    localText: {
      "french": "Bière",
      "portuguese": "Beer",
      "english": "Beer",
      "brazilian": "Beer",
      "japanese": "ビール",
      "chinese": "啤酒",
      "korean": "맥주",
      "taiwanese": "啤酒",
      "italian": "Birra",
      "german": "Bier",
      "spanish": "Cerveza",
      "polish": "Piwo",
      "russian": "Пиво"
    },
    producerIds: [20201625], // [Brewery]
    isEndProduct: true,
  },
  20000026: {
    id: 20000026,
    name: "Quarz Sand",
    icon: "/assets/icons/quarz-sand.webp",
    localText: {
      "french": "Sable de quartz",
      "portuguese": "Quartz Sand",
      "english": "Quartz Sand",
      "brazilian": "Quartz Sand",
      "japanese": "けい砂",
      "chinese": "石英沙",
      "korean": "규사",
      "taiwanese": "石英沙",
      "italian": "Sabbia di quarzo",
      "german": "Quarzsand",
      "spanish": "Arena de cuarzo",
      "polish": "Piasek kwarcowy",
      "russian": "Кварцевый песок"
    },
    producerIds: [20300126], // [Sand Mine]
    isEndProduct: false,
  },
  20000027: {
    id: 20000027,
    name: "Glass",
    icon: "/assets/icons/glass.webp",
    localText: {
      "french": "Verre",
      "portuguese": "Glass",
      "english": "Glass",
      "brazilian": "Glass",
      "japanese": "ガラス",
      "chinese": "玻璃",
      "korean": "유리",
      "taiwanese": "玻璃",
      "italian": "Vetro",
      "german": "Glas",
      "spanish": "Cristal",
      "polish": "Szkło",
      "russian": "Стекло"
    },
    producerIds: [20300227], // [Glassmakers]
    isEndProduct: false,
  },
  20000028: {
    id: 20000028,
    name: "Windows",
    icon: "/assets/icons/windows.webp",
    localText: {
      "french": "Fenêtres",
      "portuguese": "Windows",
      "english": "Windows",
      "brazilian": "Windows",
      "japanese": "窓",
      "chinese": "窗户",
      "korean": "창문",
      "taiwanese": "窗戶",
      "italian": "Finestre",
      "german": "Fenster",
      "spanish": "Ventanas",
      "polish": "Okna",
      "russian": "Окна"
    },
    producerIds: [20300328], // [Window Makers]
    isEndProduct: true,
  },
  10000029: {
    id: 10000029,
    name: "Beef",
    icon: "/assets/icons/beef.webp",
    localText: {
      "french": "Bœuf",
      "portuguese": "Beef",
      "english": "Beef",
      "brazilian": "Beef",
      "japanese": "牛肉",
      "chinese": "牛肉",
      "korean": "소고기",
      "taiwanese": "牛肉",
      "italian": "Manzo",
      "german": "Rindfleisch",
      "spanish": "Ternera",
      "polish": "Wołowina",
      "russian": "Говядина"
    },
    producerIds: [10300129], // [Cattle Farm]
    isEndProduct: false,
  },
  20000030: {
    id: 20000030,
    name: "Red Peppers",
    icon: "/assets/icons/red-peppers.webp",
    localText: {
      "french": "Poivrons rouges",
      "portuguese": "Red Peppers",
      "english": "Red Peppers",
      "brazilian": "Red Peppers",
      "japanese": "赤トウガラシ",
      "chinese": "红辣椒",
      "korean": "피망",
      "taiwanese": "紅辣椒",
      "italian": "Peperoncini",
      "german": "Paprika",
      "spanish": "Pimientos rojos",
      "polish": "Czerwona papryka",
      "russian": "Перец"
    },
    producerIds: [20300430], // [Red Pepper Farm]
    isEndProduct: false,
  },
  20000031: {
    id: 20000031,
    name: "Goulasch",
    icon: "/assets/icons/goulasch.webp",
    localText: {
      "french": "Goulasch",
      "portuguese": "Goulash",
      "english": "Goulash",
      "brazilian": "Goulash",
      "japanese": "グーラッシュ",
      "chinese": "辣椒炖肉",
      "korean": "굴라시",
      "taiwanese": "辣椒燉肉",
      "italian": "Gulasch",
      "german": "Gulasch",
      "spanish": "Goulash",
      "polish": "Gulasz",
      "russian": "Гуляш"
    },
    producerIds: [20300531], // [Artisanal Kitchen]
    isEndProduct: false,
  },
  20000032: {
    id: 20000032,
    name: "Canned Food",
    icon: "/assets/icons/canned-food.webp",
    localText: {
      "french": "Conserves",
      "portuguese": "Canned Food",
      "english": "Canned Food",
      "brazilian": "Canned Food",
      "japanese": "缶詰",
      "chinese": "罐头食物",
      "korean": "통조림",
      "taiwanese": "罐頭食物",
      "italian": "Cibo in scatola",
      "german": "Konservendosen",
      "spanish": "Comida en conserva",
      "polish": "Konserwy",
      "russian": "Консервы"
    },
    producerIds: [20300632], // [Cannery]
    isEndProduct: true,
  },
  20000033: {
    id: 20000033,
    name: "Sewing Machines",
    icon: "/assets/icons/sewing-machines.webp",
    localText: {
      "french": "Machines à coudre",
      "portuguese": "Sewing Machines",
      "english": "Sewing Machines",
      "brazilian": "Sewing Machines",
      "japanese": "ミシン",
      "chinese": "缝纫机器",
      "korean": "재봉틀",
      "taiwanese": "縫紉機器",
      "italian": "Macchine da cucire",
      "german": "Nähmaschinen",
      "spanish": "Máquinas de costura",
      "polish": "Maszyny do szycia",
      "russian": "Швейные машины"
    },
    producerIds: [20301333], // [Sewing Machine Factory]
    isEndProduct: true,
  },
  20000034: {
    id: 20000034,
    name: "Furs",
    icon: "/assets/icons/furs.webp",
    localText: {
      "french": "Fourrures",
      "portuguese": "Furs",
      "english": "Furs",
      "brazilian": "Furs",
      "japanese": "毛皮",
      "chinese": "毛皮",
      "korean": "모피",
      "taiwanese": "毛皮",
      "italian": "Pellicce",
      "german": "Felle",
      "spanish": "Pieles",
      "polish": "Futra",
      "russian": "Меха"
    },
    producerIds: [20302034], // [Hunting Cabin]
    isEndProduct: false,
  },
  20000035: {
    id: 20000035,
    name: "Fur Coats",
    icon: "/assets/icons/fur-coats.webp",
    localText: {
      "french": "Manteaux de fourrure",
      "portuguese": "Fur Coats",
      "english": "Fur Coats",
      "brazilian": "Fur Coats",
      "japanese": "毛皮のコート",
      "chinese": "皮草大衣",
      "korean": "모피 코트",
      "taiwanese": "皮草大衣",
      "italian": "Abiti di pelliccia",
      "german": "Pelzmäntel",
      "spanish": "Abrigos de piel",
      "polish": "Płaszcze futrzane",
      "russian": "Шубы"
    },
    producerIds: [20302135], // [Fur Dealer]
    isEndProduct: true,
  },
  30000036: {
    id: 30000036,
    name: "Fish Oil",
    icon: "/assets/icons/fish-oil.webp",
    localText: {
      "french": "Huile de poisson",
      "portuguese": "Fish Oil",
      "english": "Fish Oil",
      "brazilian": "Fish Oil",
      "japanese": "魚油",
      "chinese": "鱼油",
      "korean": "어유",
      "taiwanese": "魚油",
      "italian": "Olio di pesce",
      "german": "Fischöl",
      "spanish": "Aceite de pescado",
      "polish": "Tran",
      "russian": "Рыбий жир"
    },
    producerIds: [30100236], // [Fish Oil Factory]
    isEndProduct: false,
  },
  30000037: {
    id: 30000037,
    name: "Plantains",
    icon: "/assets/icons/plantains.webp",
    localText: {
      "french": "Plantains",
      "portuguese": "Bananas",
      "english": "Plantains",
      "brazilian": "Bananas",
      "japanese": "バナナ",
      "chinese": "大蕉",
      "korean": "플랜테인",
      "taiwanese": "大蕉",
      "italian": "Banane",
      "german": "Bananen",
      "spanish": "Plátanos",
      "polish": "Bananowce",
      "russian": "Бананы"
    },
    producerIds: [30100337], // [Plantain Plantation]
    isEndProduct: false,
  },
  30000038: {
    id: 30000038,
    name: "Fried Plantains",
    icon: "/assets/icons/fried-plantains.webp",
    localText: {
      "french": "Plantains frits",
      "portuguese": "Fried Bananas",
      "english": "Fried Plantains",
      "brazilian": "Fried Bananas",
      "japanese": "揚げバナナ",
      "chinese": "炸大蕉饼",
      "korean": "플랜테인 튀김",
      "taiwanese": "炸大蕉餅",
      "italian": "Banane fritte",
      "german": "Gebackene Bananen",
      "spanish": "Plátanos fritos",
      "polish": "Pieczone banany",
      "russian": "Жареные бананы"
    },
    producerIds: [30100438], // [Fried Plantain Kitchen]
    isEndProduct: true,
  },
  30000039: {
    id: 30000039,
    name: "Pearls",
    icon: "/assets/icons/pearls.webp",
    localText: {
      "french": "",
      "portuguese": "",
      "english": "",
      "brazilian": "",
      "japanese": "",
      "chinese": "",
      "korean": "",
      "taiwanese": "",
      "italian": "",
      "german": "",
      "spanish": "",
      "polish": "",
      "russian": ""
    },
    producerIds: [30100539], // [Pearl Farm]
    isEndProduct: false,
  },
  30000040: {
    id: 30000040,
    name: "Cotton",
    icon: "/assets/icons/cotton.webp",
    localText: {
      "french": "Coton",
      "portuguese": "Cotton",
      "english": "Cotton",
      "brazilian": "Cotton",
      "japanese": "木綿",
      "chinese": "棉花",
      "korean": "목화",
      "taiwanese": "棉花",
      "italian": "Cotone",
      "german": "Baumwolle",
      "spanish": "Algodón",
      "polish": "Bawełna",
      "russian": "Хлопок"
    },
    producerIds: [30100640], // [Cotton Plantation]
    isEndProduct: false,
  },
  30000041: {
    id: 30000041,
    name: "Cotton Fabric",
    icon: "/assets/icons/cotton-fabric.webp",
    localText: {
      "french": "Fabrique de coton",
      "portuguese": "Cotton Fabric",
      "english": "Cotton Fabric",
      "brazilian": "Cotton Fabric",
      "japanese": "綿布",
      "chinese": "棉织物",
      "korean": "면직물",
      "taiwanese": "棉織物",
      "italian": "Tessuto di cotone",
      "german": "Baumwollstoff",
      "spanish": "Tela de algodón",
      "polish": "Tkanina bawełniana",
      "russian": "Ткань"
    },
    producerIds: [30100741], // [Cotton Mill]
    isEndProduct: false,
  },
  30000042: {
    id: 30000042,
    name: "Sugar",
    icon: "/assets/icons/sugar-cane.webp",
    localText: {
      "french": "Canne à sucre",
      "portuguese": "Sugar Cane",
      "english": "Sugar Cane",
      "brazilian": "Sugar Cane",
      "japanese": "さとうきび",
      "chinese": "甘蔗",
      "korean": "사탕수수",
      "taiwanese": "甘蔗",
      "italian": "Canna da zucchero",
      "german": "Zuckerrohr",
      "spanish": "Caña de azúcar",
      "polish": "Trzcina cukrowa",
      "russian": "Сахарный тростник"
    },
    producerIds: [30100842], // [Sugar Cane Plantation]
    isEndProduct: false,
  },
  30000043: {
    id: 30000043,
    name: "Rum",
    icon: "/assets/icons/rum.webp",
    localText: {
      "french": "Rhum",
      "portuguese": "Rum",
      "english": "Rum",
      "brazilian": "Rum",
      "japanese": "ラム酒",
      "chinese": "兰姆酒",
      "korean": "럼주",
      "taiwanese": "蘭姆酒",
      "italian": "Rum",
      "german": "Rum",
      "spanish": "Ron",
      "polish": "Rum",
      "russian": "Ром"
    },
    producerIds: [30100943], // [Rum Distillery]
    isEndProduct: true,
  },
  30000044: {
    id: 30000044,
    name: "Alpaca Wool",
    icon: "/assets/icons/alpaca-wool.webp",
    localText: {
      "french": "Laine d'alpaga",
      "portuguese": "Alpaca Wool",
      "english": "Alpaca Wool",
      "brazilian": "Alpaca Wool",
      "japanese": "アルパカ生地",
      "chinese": "羊驼毛",
      "korean": "알파카 양모",
      "taiwanese": "羊駝毛",
      "italian": "Lana di alpaca",
      "german": "Alpakawolle",
      "spanish": "Lana de alpaca",
      "polish": "Wełna alpaki",
      "russian": "Шерсть альпака"
    },
    producerIds: [30101044], // [Alpaca Farm]
    isEndProduct: false,
  },
  30000045: {
    id: 30000045,
    name: "Ponchos",
    icon: "/assets/icons/poncho.webp",
    localText: {
      "french": "Ponchos",
      "portuguese": "Ponchos",
      "english": "Ponchos",
      "brazilian": "Ponchos",
      "japanese": "ポンチョ",
      "chinese": "斗篷",
      "korean": "판초",
      "taiwanese": "斗篷",
      "italian": "Poncho",
      "german": "Ponchos",
      "spanish": "Ponchos",
      "polish": "Poncza",
      "russian": "Пончо"
    },
    producerIds: [30101145], // [Poncho Darner]
    isEndProduct: true,
  },
  30000046: {
    id: 30000046,
    name: "Caoutchouc",
    icon: "/assets/icons/caoutchouc.webp",
    localText: {
      "french": "",
      "portuguese": "",
      "english": "",
      "brazilian": "",
      "japanese": "",
      "chinese": "",
      "korean": "",
      "taiwanese": "",
      "italian": "",
      "german": "",
      "spanish": "",
      "polish": "",
      "russian": ""
    },
    producerIds: [30101246], // [Caoutchouc Plantation]
    isEndProduct: false,
  },
}

const languages: string[] = [
  "brazilian",
  "chinese",
  "english",
  "french",
  "german",
  "italian",
  "japanese",
  "korean",
  "polish",
  "portuguese",
  "russian",
  "spanish",
  "taiwanese"
]

const parameters = {
  population: population,
  buildings: buildings,
  products: products,
  languages: languages,
}

export default parameters
