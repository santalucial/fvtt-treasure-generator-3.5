//dnd 3.5 loot tables
var treasure = { cp: 0, sp: 0, gp: 0, pp: 0, gems: [], arts: [], items: [] };

const TreasureTable = [
  {
    money: [
      { min: 1, max: 14, roll: "1d6", type: "nothing" },
      { min: 15, max: 29, roll: "1d6*1000", type: "cp" },
      { min: 30, max: 52, roll: "1d8*100", type: "sp" },
      { min: 53, max: 95, roll: "2d8*10", type: "gp" },
      { min: 96, max: 100, roll: "1d4*10", type: "pp" },
    ],
    goods: [
      { min: 1, max: 90, roll: "1d1", type: "nothing" },
      { min: 91, max: 95, roll: "1d1", type: "gem" },
      { min: 96, max: 100, roll: "1d1", type: "art" },
    ],
    items: [
      { min: 1, max: 71, roll: "1d1", type: "nothing" },
      { min: 72, max: 95, roll: "1d1", type: "mundane" },
      { min: 96, max: 100, roll: "1d1", type: "minor" },
    ],
  },
  {
    money: [
      { min: 1, max: 13, roll: "1d6", type: "nothing" },
      { min: 14, max: 23, roll: "1d10*1000", type: "cp" },
      { min: 24, max: 43, roll: "2d10*100", type: "sp" },
      { min: 44, max: 95, roll: "4d10*10", type: "gp" },
      { min: 96, max: 100, roll: "2d8*10", type: "pp" },
    ],
    goods: [
      { min: 1, max: 81, roll: "1d1", type: "nothing" },
      { min: 82, max: 95, roll: "1d3", type: "gem" },
      { min: 96, max: 100, roll: "1d3", type: "art" },
    ],
    items: [
      { min: 1, max: 49, roll: "1d1", type: "nothing" },
      { min: 50, max: 85, roll: "1d1", type: "mundane" },
      { min: 86, max: 100, roll: "1d1", type: "minor" },
    ],
  },
];

const GemsTable = [
  {
    min: 1,
    max: 25,
    roll: "4d4",
    type: [
      "Banded eye",
      "Banded moss agate",
      "azurite",
      "blue quartz",
      "hematite",
      "lapis lazuli",
      "malachite",
      "obsidian",
      "rhodochrosite",
      "tiger eye turquoise",
      "freshwater (irregular) pearl",
    ],
  },
  {
    min: 26,
    max: 50,
    roll: "2d4*10",
    type: [
      "Bloodstone",
      "carnelian",
      "chalcedony",
      "chrysoprase",
      "citrine",
      "iolite",
      "jasper",
      "moonstone",
      "onyx",
      "peridot",
      "rock crystal (clear quartz)",
      "sard",
      "sardonyx",
      "smoky rose quartz",
      "star rose quartz",
      "zircon",
    ],
  },
  {
    min: 51,
    max: 70,
    roll: "4d4*10",
    type: [
      "Amber",
      "amethyst",
      "chrysoberyl",
      "coral",
      "red garnet",
      "brown-green garnet",
      "jade",
      "jet",
      "white",
      "golden",
      "pink pearl",
      "silver pearl",
      "red spinel",
      "red-brown spinel",
      "deep green spinel",
      "tourmaline",
    ],
  },
  {
    min: 71,
    max: 90,
    roll: "2d4*100",
    type: [
      "Alexandrite",
      "aquamarine",
      "violet garnet",
      "black pearl",
      "deep blue spinel",
      "golden yellow topaz",
    ],
  },
  {
    min: 91,
    max: 99,
    roll: "4d4*100",
    type: [
      "Emerald",
      "white opal",
      "black opal",
      "fire opal",
      "blue sapphire",
      "fiery yellow corundum",
      "rich purple corundum",
      "blue star sapphire",
      "black star sapphire",
      "star ruby",
    ],
  },
  {
    min: 100,
    max: 100,
    roll: "2d4*1000",
    type: [
      "Clearest bright green emerald",
      "blue-white diamond",
      "canary diamond",
      "pink diamond",
      "brown diamond",
      "blue diamond",
      "jacinth",
    ],
  },
];

const ArtsTable = [
  {
    min: 1,
    max: 10,
    roll: "1d10",
    type: [
      "Silver ewer",
      "carved bone statuette",
      "ivory statuette",
      "finely wrought small gold bracelet",
    ],
  },
  {
    min: 11,
    max: 25,
    roll: "3d6*10",
    type: [
      "Cloth of gold vestments",
      "black velvet mask with numerous citrines",
      "silver chalice with lapis lazuli gems",
    ],
  },
  {
    min: 26,
    max: 40,
    roll: "1d6*100",
    type: ["Large well-done wool tapestry", "brass mug with jade inlays"],
  },
  {
    min: 41,
    max: 50,
    roll: "1d10*100",
    type: [
      "Silver comb with moonstones",
      "silver-plated steel longsword with jet jewel in hilt",
    ],
  },
  {
    min: 51,
    max: 60,
    roll: "2d6*100",
    type: [
      "Carved harp of exotic wood with ivory inlay and zircon gems",
      "solid gold idol (10 lb.)",
    ],
  },
  {
    min: 61,
    max: 70,
    roll: "3d6*100",
    type: [
      "Gold dragon comb with red garnet eye",
      "gold and topaz bottle stopper cork",
      "ceremonial electrum dagger with a star ruby in the pommel",
    ],
  },
  {
    min: 71,
    max: 80,
    roll: "4d6*100",
    type: [
      "Eyepatch with mock eye of sapphire and moonstone",
      "fire opal pendant on a fine gold chain",
      "old masterpiece painting",
    ],
  },
  {
    min: 81,
    max: 85,
    roll: "5d6*100",
    type: [
      "Embroidered silk and velvet mantle with numerous moonstones",
      "sapphire pendant on gold chain",
    ],
  },
  {
    min: 86,
    max: 90,
    roll: "1d4*1000",
    type: [
      "Embroidered and bejeweled glove",
      "jeweled anklet",
      "gold music box",
    ],
  },
  {
    min: 91,
    max: 95,
    roll: "1d6*1000",
    type: [
      "Golden circlet with four aquamarines",
      "a string of small pink pearls (necklace)",
    ],
  },
  {
    min: 96,
    max: 99,
    roll: "2d4*1000",
    type: ["Jeweled gold crown", "jeweled electrum ring"],
  },
  {
    min: 100,
    max: 100,
    roll: "2d6*100",
    type: ["Gold ring", "ruby ring", "gold cup set with emeralds"],
  },
];

const CommonMeleeWeaponTable = [
  { min: 1, max: 4, roll: "1d1", itemType: "Dagger", type: "item", value: 302 },
  {
    min: 5,
    max: 14,
    roll: "1d1",
    itemType: "Greataxe",
    type: "item",
    value: 320,
  },
  {
    min: 15,
    max: 24,
    roll: "1d1",
    itemType: "Greatsword",
    type: "item",
    value: 350,
  },
  { min: 25, max: 28, roll: "1d1", itemType: "Kama", type: "item", value: 302 },
  {
    min: 29,
    max: 41,
    roll: "1d1",
    itemType: "Longsword",
    type: "item",
    value: 315,
  },
  {
    min: 42,
    max: 45,
    roll: "1d1",
    itemType: "Mace, light",
    type: "item",
    value: 305,
  },
  {
    min: 46,
    max: 50,
    roll: "1d1",
    itemType: "Mace, heavy",
    type: "item",
    value: 312,
  },
  {
    min: 51,
    max: 54,
    roll: "1d1",
    itemType: "Nunchaku",
    type: "item",
    value: 302,
  },
  {
    min: 55,
    max: 57,
    roll: "1d1",
    itemType: "Quarterstaff",
    type: "item",
    value: 600,
  },
  {
    min: 58,
    max: 61,
    roll: "1d1",
    itemType: "Rapier",
    type: "item",
    value: 320,
  },
  {
    min: 62,
    max: 66,
    roll: "1d1",
    itemType: "Scimitar",
    type: "item",
    value: 315,
  },
  {
    min: 67,
    max: 70,
    roll: "1d1",
    itemType: "Shortspear",
    type: "item",
    value: 302,
  },
  {
    min: 71,
    max: 74,
    roll: "1d1",
    itemType: "Siangham",
    type: "item",
    value: 303,
  },
  {
    min: 75,
    max: 84,
    roll: "1d1",
    itemType: "Sword, bastard",
    type: "item",
    value: 335,
  },
  {
    min: 85,
    max: 89,
    roll: "1d1",
    itemType: "Sword, short",
    type: "item",
    value: 310,
  },
  {
    min: 90,
    max: 100,
    roll: "1d1",
    itemType: "Waraxe, dwarven",
    type: "item",
    value: 330,
  },
];

const UncommonMeleeWeaponTable = [
  {
    min: 1,
    max: 3,
    roll: "1d1",
    itemType: "Axe, orc double",
    type: "item",
    value: 660,
  },
  {
    min: 4,
    max: 7,
    roll: "1d1",
    itemType: "Battleaxe",
    type: "item",
    value: 310,
  },
  {
    min: 8,
    max: 10,
    roll: "1d1",
    itemType: "Chain, spiked",
    type: "item",
    value: 325,
  },
  { min: 11, max: 12, roll: "1d1", itemType: "Club", type: "item", value: 300 },
  {
    min: 13,
    max: 16,
    roll: "1d1",
    itemType: "Crossbow, hand",
    type: "item",
    value: 400,
  },
  {
    min: 17,
    max: 19,
    roll: "1d1",
    itemType: "Crossbow, repeating",
    type: "item",
    value: 550,
  },
  {
    min: 20,
    max: 21,
    roll: "1d1",
    itemType: "Dagger, punching",
    type: "item",
    value: 302,
  },
  {
    min: 22,
    max: 23,
    roll: "1d1",
    itemType: "Falchion",
    type: "item",
    value: 375,
  },
  {
    min: 24,
    max: 26,
    roll: "1d1",
    itemType: "Flail, dire",
    type: "item",
    value: 690,
  },
  {
    min: 27,
    max: 31,
    roll: "1d1",
    itemType: "Flail, heavy",
    type: "item",
    value: 315,
  },
  {
    min: 32,
    max: 35,
    roll: "1d1",
    itemType: "Flail, light",
    type: "item",
    value: 308,
  },
  {
    min: 36,
    max: 37,
    roll: "1d1",
    itemType: "Gauntlet",
    type: "item",
    value: 302,
  },
  {
    min: 38,
    max: 39,
    roll: "1d1",
    itemType: "Gauntlet, spiked",
    type: "item",
    value: 305,
  },
  {
    min: 40,
    max: 41,
    roll: "1d1",
    itemType: "Glaive",
    type: "item",
    value: 308,
  },
  {
    min: 42,
    max: 43,
    roll: "1d1",
    itemType: "Greatclub",
    type: "item",
    value: 305,
  },
  {
    min: 44,
    max: 45,
    roll: "1d1",
    itemType: "Guisarme",
    type: "item",
    value: 309,
  },
  {
    min: 46,
    max: 48,
    roll: "1d1",
    itemType: "Halberd",
    type: "item",
    value: 310,
  },
  {
    min: 49,
    max: 51,
    roll: "1d1",
    itemType: "Halfspear",
    type: "item",
    value: 301,
  },
  {
    min: 52,
    max: 54,
    roll: "1d1",
    itemType: "Hammer, gnome hooked",
    type: "item",
    value: 620,
  },
  {
    min: 55,
    max: 56,
    roll: "1d1",
    itemType: "Hammer, light",
    type: "item",
    value: 301,
  },
  {
    min: 57,
    max: 58,
    roll: "1d1",
    itemType: "Handaxe",
    type: "item",
    value: 306,
  },
  {
    min: 59,
    max: 61,
    roll: "1d1",
    itemType: "Kukri",
    type: "item",
    value: 308,
  },
  {
    min: 62,
    max: 64,
    roll: "1d1",
    itemType: "Lance",
    type: "item",
    value: 310,
  },
  {
    min: 65,
    max: 67,
    roll: "1d1",
    itemType: "Longspear",
    type: "item",
    value: 305,
  },
  {
    min: 68,
    max: 70,
    roll: "1d1",
    itemType: "Morningstar",
    type: "item",
    value: 308,
  },
  { min: 71, max: 72, roll: "1d1", itemType: "Net", type: "item", value: 320 },
  {
    min: 73,
    max: 74,
    roll: "1d1",
    itemType: "Pick, heavy",
    type: "item",
    value: 308,
  },
  {
    min: 75,
    max: 76,
    roll: "1d1",
    itemType: "Pick, light",
    type: "item",
    value: 304,
  },
  {
    min: 77,
    max: 78,
    roll: "1d1",
    itemType: "Ranseur",
    type: "item",
    value: 310,
  },
  { min: 79, max: 80, roll: "1d1", itemType: "Sap", type: "item", value: 301 },
  {
    min: 81,
    max: 82,
    roll: "1d1",
    itemType: "Scythe",
    type: "item",
    value: 318,
  },
  {
    min: 83,
    max: 84,
    roll: "1d1",
    itemType: "Shuriken",
    type: "item",
    value: 301,
  },
  {
    min: 85,
    max: 86,
    roll: "1d1",
    itemType: "Sickle",
    type: "item",
    value: 306,
  },
  {
    min: 87,
    max: 89,
    roll: "1d1",
    itemType: "Sword, two-bladed",
    type: "item",
    value: 700,
  },
  {
    min: 90,
    max: 91,
    roll: "1d1",
    itemType: "Trident",
    type: "item",
    value: 315,
  },
  {
    min: 92,
    max: 94,
    roll: "1d1",
    itemType: "Urgrosh, dwarven",
    type: "item",
    value: 650,
  },
  {
    min: 95,
    max: 97,
    roll: "1d1",
    itemType: "Warhammer",
    type: "item",
    value: 312,
  },
  {
    min: 98,
    max: 100,
    roll: "1d1",
    itemType: "Whip",
    type: "item",
    value: 301,
  },
];

const CommonRangedWeaponTable = [
  {
    min: 1,
    max: 10,
    roll: "1d1",
    itemType: "Ammunition",
    table: [
      {
        min: 1,
        max: 50,
        roll: "1d1",
        itemType: "Arrows (50)",
        type: "item",
        value: 350,
      },
      {
        min: 51,
        max: 80,
        roll: "1d1",
        itemType: "Bolts, crossbow (50)",
        type: "item",
        value: 350,
      },
      {
        min: 81,
        max: 100,
        roll: "1d1",
        itemType: "Bullets, sling (50)",
        type: "item",
        value: 350,
      },
    ],
    type: "roll+",
    value: 308,
  },

  {
    min: 11,
    max: 15,
    roll: "1d1",
    itemType: "Axe, throwing",
    type: "item",
    value: 308,
  },
  {
    min: 16,
    max: 25,
    roll: "1d1",
    itemType: "Crossbow, heavy",
    type: "item",
    value: 350,
  },
  {
    min: 26,
    max: 35,
    roll: "1d1",
    itemType: "Crossbow, light",
    type: "item",
    value: 335,
  },
  { min: 36, max: 39, roll: "1d1", itemType: "Dart", type: "item", value: 300 },
  {
    min: 40,
    max: 41,
    roll: "1d1",
    itemType: "Javelin",
    type: "item",
    value: 301,
  },
  {
    min: 42,
    max: 46,
    roll: "1d1",
    itemType: "Shortbow",
    type: "item",
    value: 330,
  },
  {
    min: 47,
    max: 51,
    roll: "1d1",
    itemType: "Shortbow, composite (+0 Str bonus)",
    type: "item",
    value: 375,
  },
  {
    min: 52,
    max: 56,
    roll: "1d1",
    itemType: "Shortbow, composite (+1 Str bonus)",
    type: "item",
    value: 450,
  },
  {
    min: 57,
    max: 61,
    roll: "1d1",
    itemType: "Shortbow, composite (+2 Str bonus)",
    type: "item",
    value: 525,
  },
  {
    min: 62,
    max: 65,
    roll: "1d1",
    itemType: "Sling",
    type: "item",
    value: 300,
  },
  {
    min: 66,
    max: 75,
    roll: "1d1",
    itemType: "Longbow",
    type: "item",
    value: 375,
  },
  {
    min: 76,
    max: 80,
    roll: "1d1",
    itemType: "Longbow, composite",
    type: "item",
    value: 400,
  },
  {
    min: 81,
    max: 85,
    roll: "1d1",
    itemType: "Longbow, composite (+1 Str bonus)",
    type: "item",
    value: 500,
  },
  {
    min: 86,
    max: 90,
    roll: "1d1",
    itemType: "Longbow, composite (+2 Str bonus)",
    type: "item",
    value: 600,
  },
  {
    min: 91,
    max: 95,
    roll: "1d1",
    itemType: "Longbow, composite (+3 Str bonus)",
    type: "item",
    value: 700,
  },
  {
    min: 96,
    max: 100,
    roll: "1d1",
    itemType: "Longbow, composite (+4 Str bonus)",
    type: "item",
    value: 800,
  },
];

const MundaneItemsTable = [
  {
    min: 1,
    max: 17,
    roll: "1d1",
    table: [
      {
        min: 1,
        max: 12,
        roll: "1d4",
        itemType: "Alchemist’s fire",
        value: 20,
        type: "item",
      },
      {
        min: 13,
        max: 24,
        roll: "2d4",
        itemType: "Acid",
        value: 10,
        type: "item",
      },
      {
        min: 25,
        max: 36,
        roll: "1d4",
        itemType: "Smokesticks",
        value: 20,
        type: "item",
      },
      {
        min: 37,
        max: 48,
        roll: "1d4",
        itemType: "Holy water",
        value: 25,
        type: "item",
      },
      {
        min: 49,
        max: 62,
        roll: "1d4",
        itemType: "Antitoxin",
        value: 50,
        type: "item",
      },
      {
        min: 63,
        max: 74,
        roll: "1d1",
        itemType: "Everburning torch",
        value: 0,
        type: "item",
      },
      {
        min: 75,
        max: 88,
        roll: "1d4",
        itemType: "Tanglefoot bags",
        value: 50,
        type: "item",
      },
      {
        min: 89,
        max: 100,
        roll: "1d4",
        itemType: "Thunderstones",
        value: 30,
        type: "item",
      },
    ],
    itemType: "Alchemical item",
    value: 0,
    type: "roll",
  },
  {
    min: 18,
    max: 50,
    roll: "1d1",
    table: [
      {
        min: 1,
        max: 12,
        roll: "1d1",
        itemType: "Chain shirt",
        value: 100,
        type: "item",
      },
      {
        min: 13,
        max: 18,
        roll: "1d1",
        itemType: "Masterwork studded leather",
        value: 175,
        type: "item",
      },
      {
        min: 19,
        max: 26,
        roll: "1d1",
        itemType: "Breastplate",
        value: 200,
        type: "item",
      },
      {
        min: 27,
        max: 34,
        roll: "1d1",
        itemType: "Banded mail",
        value: 250,
        type: "item",
      },
      {
        min: 35,
        max: 54,
        roll: "1d1",
        itemType: "Half-plate",
        value: 600,
        type: "item",
      },
      {
        min: 55,
        max: 80,
        roll: "1d1",
        itemType: "Full plate",
        value: 1500,
        type: "item",
      },
      {
        min: 81,
        max: 90,
        roll: "1d1",
        table: [
          {
            min: 1,
            max: 50,
            roll: "1d1",
            itemType: "Buckler",
            value: 205,
            type: "item",
          },
          {
            min: 51,
            max: 100,
            roll: "1d1",
            itemType: "Shield",
            value: 257,
            type: "item",
          },
        ],
        itemType: "Darkwood",
        value: 0,
        type: "roll",
      },
      {
        min: 91,
        max: 100,
        roll: "1d1",
        itemType: "Masterwork",
        table: [
          {
            min: 1,
            max: 17,
            roll: "1d1",
            itemType: "Buckler",
            value: 165,
            type: "item",
          },
          {
            min: 18,
            max: 40,
            roll: "1d1",
            itemType: "Light wooden shield",
            value: 153,
            type: "item",
          },
          {
            min: 41,
            max: 60,
            roll: "1d1",
            itemType: "Light steel shield",
            value: 159,
            type: "item",
          },
          {
            min: 61,
            max: 83,
            roll: "1d1",
            itemType: "Heavy wooden shield",
            value: 157,
            type: "item",
          },
          {
            min: 84,
            max: 100,
            roll: "1d1",
            itemType: "Heavy steel shield",
            value: 170,
            type: "item",
          },
        ],
        value: 0,
        type: "roll",
      },
    ],
    itemType: "",
    value: 0,
    type: "roll",
  },
  {
    min: 51,
    max: 83,
    roll: "1d1",
    table: [
      {
        min: 1,
        max: 50,
        roll: "1d1",
        table: CommonMeleeWeaponTable,
        itemType: "common melee weapon",
        value: 0,
        type: "roll",
      },
      {
        min: 51,
        max: 70,
        roll: "1d1",
        table: UncommonMeleeWeaponTable,
        itemType: "uncommon melee weapon",
        value: 0,
        type: "roll",
      },
      {
        min: 71,
        max: 100,
        roll: "1d1",
        table: CommonRangedWeaponTable,
        itemType: "common ranged weapon",
        value: 0,
        type: "roll",
      },
    ],
    itemType: "Masterwork",
    value: 0,
    type: "roll",
  },
  {
    min: 84,
    max: 100,
    roll: "1d1",
    table: [
      {
        min: 1,
        max: 3,
        roll: "1d1",
        itemType: "Backpack, empty",
        value: 2,
        type: "item",
      },
      {
        min: 4,
        max: 6,
        roll: "1d1",
        itemType: "Crowbar",
        value: 2,
        type: "item",
      },
      {
        min: 7,
        max: 11,
        roll: "1d1",
        itemType: "Lantern, bullseye",
        value: 12,
        type: "item",
      },
      {
        min: 12,
        max: 16,
        roll: "1d1",
        itemType: "Lock, simple",
        value: 20,
        type: "item",
      },
      {
        min: 17,
        max: 21,
        roll: "1d1",
        itemType: "Lock, average",
        value: 40,
        type: "item",
      },
      {
        min: 22,
        max: 28,
        roll: "1d1",
        itemType: "Lock, good",
        value: 80,
        type: "item",
      },
      {
        min: 29,
        max: 35,
        roll: "1d1",
        itemType: "Lock, superior",
        value: 150,
        type: "item",
      },
      {
        min: 36,
        max: 40,
        roll: "1d1",
        itemType: "Manacles, masterwork",
        value: 50,
        type: "item",
      },
      {
        min: 41,
        max: 43,
        roll: "1d1",
        itemType: "Mirror, small steel",
        value: 10,
        type: "item",
      },
      {
        min: 44,
        max: 46,
        roll: "1d1",
        itemType: "Rope, silk (50 ft.)",
        value: 10,
        type: "item",
      },
      {
        min: 47,
        max: 53,
        roll: "1d1",
        itemType: "Spyglass",
        value: 1000,
        type: "item",
      },
      {
        min: 54,
        max: 58,
        roll: "1d1",
        itemType: "Artisan’s tools, masterwork",
        value: 55,
        type: "item",
      },
      {
        min: 59,
        max: 63,
        roll: "1d1",
        itemType: "Climber’s kit",
        value: 80,
        type: "item",
      },
      {
        min: 64,
        max: 68,
        roll: "1d1",
        itemType: "Disguise kit",
        value: 50,
        type: "item",
      },
      {
        min: 69,
        max: 73,
        roll: "1d1",
        itemType: "Healer’s kit",
        value: 50,
        type: "item",
      },
      {
        min: 74,
        max: 77,
        roll: "1d1",
        itemType: "Holy symbol, silver",
        value: 25,
        type: "item",
      },
      {
        min: 78,
        max: 81,
        roll: "1d1",
        itemType: "Hourglass",
        value: 25,
        type: "item",
      },
      {
        min: 82,
        max: 88,
        roll: "1d1",
        itemType: "Magnifying glass",
        value: 100,
        type: "item",
      },
      {
        min: 89,
        max: 95,
        roll: "1d1",
        itemType: "Musical instrument, masterwork",
        value: 100,
        type: "item",
      },
      {
        min: 96,
        max: 100,
        roll: "1d1",
        itemType: "Thieves’ tools, masterwork",
        value: 50,
        type: "item",
      },
    ],
    itemType: "",
    value: 0,
    type: "roll",
  },
];

const armorAbilityTable = [
  {
    minorMin: 1,
    minorMax: 25,
    mediumMin: 1,
    mediumMax: 5,
    majorMin: 1,
    majorMax: 3,
    itemType: "Glamered",
    type: "ability",
    value: 2700,
    enhancement: 0,
  },
  {
    minorMin: 26,
    minorMax: 32,
    mediumMin: 6,
    mediumMax: 8,
    majorMin: 4,
    majorMax: 4,
    itemType: "Fortification, light",
    type: "ability",
    value: 0,
    enhancement: 1,
  },
  {
    minorMin: 33,
    minorMax: 52,
    mediumMin: 9,
    mediumMax: 11,
    majorMin: 0,
    majorMax: 0,
    itemType: "Slick",
    type: "ability",
    value: 3750,
    enhancement: 0,
  },
  {
    minorMin: 53,
    minorMax: 72,
    mediumMin: 12,
    mediumMax: 14,
    majorMin: 0,
    majorMax: 0,
    itemType: "Shadow",
    type: "ability",
    value: 3750,
    enhancement: 0,
  },
  {
    minorMin: 73,
    minorMax: 92,
    mediumMin: 15,
    mediumMax: 17,
    majorMin: 0,
    majorMax: 0,
    itemType: "Silent moves",
    type: "ability",
    value: 3750,
    enhancement: 0,
  },
  {
    minorMin: 93,
    minorMax: 96,
    mediumMin: 18,
    mediumMax: 19,
    majorMin: 0,
    majorMax: 0,
    itemType: "Spell resistance (13)",
    type: "ability",
    value: 0,
    enhancement: 2,
  },
  {
    minorMin: 97,
    minorMax: 97,
    mediumMin: 20,
    mediumMax: 29,
    majorMin: 5,
    majorMax: 7,
    itemType: "Slick, improved",
    type: "ability",
    value: 15000,
    enhancement: 0,
  },
  {
    minorMin: 98,
    minorMax: 98,
    mediumMin: 30,
    mediumMax: 39,
    majorMin: 8,
    majorMax: 10,
    itemType: "Shadow, improved",
    type: "ability",
    value: 15000,
    enhancement: 0,
  },
  {
    minorMin: 99,
    minorMax: 99,
    mediumMin: 40,
    mediumMax: 49,
    majorMin: 11,
    majorMax: 13,
    itemType: "Silent moves, improved",
    type: "ability",
    value: 15000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 50,
    mediumMax: 54,
    majorMin: 14,
    majorMax: 16,
    itemType: "Acid resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 55,
    mediumMax: 59,
    majorMin: 17,
    majorMax: 19,
    itemType: "Cold resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 60,
    mediumMax: 64,
    majorMin: 20,
    majorMax: 22,
    itemType: "Electricity resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 65,
    mediumMax: 69,
    majorMin: 23,
    majorMax: 25,
    itemType: "Fire resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 70,
    mediumMax: 74,
    majorMin: 26,
    majorMax: 28,
    itemType: "Sonic resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 75,
    mediumMax: 79,
    majorMin: 29,
    majorMax: 33,
    itemType: "Ghost touch",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 80,
    mediumMax: 84,
    majorMin: 34,
    majorMax: 35,
    itemType: "Invulnerability",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 85,
    mediumMax: 89,
    majorMin: 36,
    majorMax: 40,
    itemType: "Fortification, moderate",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 90,
    mediumMax: 94,
    majorMin: 41,
    majorMax: 42,
    itemType: "Spell resistance (15)",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 95,
    mediumMax: 99,
    majorMin: 43,
    majorMax: 43,
    itemType: "Wild",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 44,
    majorMax: 48,
    itemType: "Slick, greater",
    type: "ability",
    value: 33750,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 49,
    majorMax: 53,
    itemType: "Shadow, greater",
    type: "ability",
    value: 33750,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 54,
    majorMax: 58,
    itemType: "Silent moves, greater",
    type: "ability",
    value: 33750,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 59,
    majorMax: 63,
    itemType: "Acid resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 64,
    majorMax: 68,
    itemType: "Cold resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 69,
    majorMax: 73,
    itemType: "Electricity resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 74,
    majorMax: 78,
    itemType: "Fire resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 79,
    majorMax: 83,
    itemType: "Sonic resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 84,
    majorMax: 88,
    itemType: "Spell resistance (17)",
    type: "ability",
    value: 0,
    enhancement: 4,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 89,
    majorMax: 89,
    itemType: "Etherealness",
    type: "ability",
    value: 49000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 90,
    majorMax: 90,
    itemType: "Undead controlling",
    type: "ability",
    value: 49000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 91,
    majorMax: 92,
    itemType: "Fortification, heavy",
    type: "ability",
    value: 0,
    enhancement: 5,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 93,
    majorMax: 94,
    itemType: "Spell resistance (19)",
    type: "ability",
    value: 0,
    enhancement: 5,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 95,
    majorMax: 95,
    itemType: "Acid resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 96,
    majorMax: 96,
    itemType: "Cold resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 97,
    majorMax: 97,
    itemType: "Electricity resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 98,
    majorMax: 98,
    itemType: "Fire resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 99,
    majorMax: 99,
    itemType: "Sonic resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 100,
    minorMax: 100,
    mediumMin: 100,
    mediumMax: 100,
    majorMin: 100,
    majorMax: 100,
    itemType: "",
    type: "ability++",
    value: 0,
    enhancement: 0,
  },
];

// https://regex101.com/r/yIjBpB/1
const shieldAbilityTable = [
  {
    minorMin: 1,
    minorMax: 20,
    mediumMin: 1,
    mediumMax: 10,
    majorMin: 1,
    majorMax: 5,
    itemType: "Arrow catching",
    type: "ability",
    value: 0,
    enhancement: 1,
  },
  {
    minorMin: 21,
    minorMax: 40,
    mediumMin: 11,
    mediumMax: 20,
    majorMin: 6,
    majorMax: 8,
    itemType: "Bashing",
    type: "ability",
    value: 0,
    enhancement: 1,
  },
  {
    minorMin: 41,
    minorMax: 50,
    mediumMin: 21,
    mediumMax: 25,
    majorMin: 9,
    majorMax: 10,
    itemType: "Blinding",
    type: "ability",
    value: 0,
    enhancement: 1,
  },
  {
    minorMin: 51,
    minorMax: 75,
    mediumMin: 26,
    mediumMax: 40,
    majorMin: 11,
    majorMax: 15,
    itemType: "Fortification, light",
    type: "ability",
    value: 0,
    enhancement: 1,
  },
  {
    minorMin: 76,
    minorMax: 92,
    mediumMin: 41,
    mediumMax: 50,
    majorMin: 16,
    majorMax: 20,
    itemType: "Arrow deflection",
    type: "ability",
    value: 0,
    enhancement: 2,
  },
  {
    minorMin: 93,
    minorMax: 97,
    mediumMin: 51,
    mediumMax: 57,
    majorMin: 21,
    majorMax: 25,
    itemType: "Animated",
    type: "ability",
    value: 0,
    enhancement: 2,
  },
  {
    minorMin: 98,
    minorMax: 99,
    mediumMin: 58,
    mediumMax: 59,
    majorMin: 0,
    majorMax: 0,
    itemType: "Spell resistance (13)",
    type: "ability",
    value: 0,
    enhancement: 2,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 60,
    mediumMax: 63,
    majorMin: 26,
    majorMax: 28,
    itemType: "Acid resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 64,
    mediumMax: 67,
    majorMin: 29,
    majorMax: 31,
    itemType: "Cold resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 68,
    mediumMax: 71,
    majorMin: 32,
    majorMax: 34,
    itemType: "Electricity resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 72,
    mediumMax: 75,
    majorMin: 35,
    majorMax: 37,
    itemType: "Fire resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 76,
    mediumMax: 79,
    majorMin: 38,
    majorMax: 40,
    itemType: "Sonic resistance",
    type: "ability",
    value: 18000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 80,
    mediumMax: 85,
    majorMin: 41,
    majorMax: 46,
    itemType: "Ghost touch",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 86,
    mediumMax: 95,
    majorMin: 47,
    majorMax: 56,
    itemType: "Fortification, moderate",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 96,
    mediumMax: 98,
    majorMin: 57,
    majorMax: 58,
    itemType: "Spell resistance (15)",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 59,
    majorMax: 59,
    itemType: "Wild",
    type: "ability",
    value: 0,
    enhancement: 3,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 60,
    majorMax: 64,
    itemType: "Acid resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 65,
    majorMax: 69,
    itemType: "Cold resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 70,
    majorMax: 74,
    itemType: "Electricity resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 75,
    majorMax: 79,
    itemType: "Fire resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 80,
    majorMax: 84,
    itemType: "Sonic resistance, improved",
    type: "ability",
    value: 42000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 85,
    majorMax: 86,
    itemType: "Spell resistance (17)",
    type: "ability",
    value: 0,
    enhancement: 4,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 87,
    majorMax: 87,
    itemType: "Undead controlling",
    type: "ability",
    value: 49000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 88,
    majorMax: 91,
    itemType: "Fortification, heavy",
    type: "ability",
    value: 0,
    enhancement: 5,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 92,
    majorMax: 93,
    itemType: "Reflecting",
    type: "ability",
    value: 0,
    enhancement: 5,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 94,
    majorMax: 94,
    itemType: "Spell resistance (19)",
    type: "ability",
    value: 0,
    enhancement: 5,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 95,
    majorMax: 95,
    itemType: "Acid resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 96,
    majorMax: 96,
    itemType: "Cold resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 97,
    majorMax: 97,
    itemType: "Electricity resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 98,
    majorMax: 98,
    itemType: "Fire resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 99,
    majorMax: 99,
    itemType: "Sonic resistance, greater",
    type: "ability",
    value: 66000,
    enhancement: 0,
  },
  {
    minorMin: 100,
    minorMax: 100,
    mediumMin: 100,
    mediumMax: 100,
    majorMin: 100,
    majorMax: 100,
    itemType: "",
    type: "ability++",
    value: 0,
    enhancement: 0,
  },
];

const shieldTypeTable = [
  {
    Min: 1,
    Max: 10,
    itemType: "Buckler",
    type: "item",
    table: shieldAbilityTable,
    value: 165,
  },
  {
    Min: 11,
    Max: 15,
    itemType: "Shield, light, wooden",
    type: "item",
    table: shieldAbilityTable,
    value: 153,
  },
  {
    Min: 16,
    Max: 20,
    itemType: "Shield, light, steel",
    type: "item",
    table: shieldAbilityTable,
    value: 159,
  },
  {
    Min: 21,
    Max: 30,
    itemType: "Shield, heavy, wooden",
    type: "item",
    table: shieldAbilityTable,
    value: 157,
  },
  {
    Min: 31,
    Max: 95,
    itemType: "Shield, heavy, steel",
    type: "item",
    table: shieldAbilityTable,
    value: 170,
  },
  {
    Min: 96,
    Max: 100,
    itemType: "Shield, tower",
    type: "item",
    table: shieldAbilityTable,
    value: 180,
  },
];

const armorTypeTable = [
  {
    Min: 1,
    Max: 1,
    itemType: "Padded",
    type: "item",
    table: armorAbilityTable,
    value: 155,
  },
  {
    Min: 2,
    Max: 1,
    itemType: "Leather",
    type: "item",
    table: armorAbilityTable,
    value: 160,
  },
  {
    Min: 3,
    Max: 17,
    itemType: "Studded leather",
    type: "item",
    table: armorAbilityTable,
    value: 175,
  },
  {
    Min: 18,
    Max: 32,
    itemType: "Chain shirt",
    type: "item",
    table: armorAbilityTable,
    value: 250,
  },
  {
    Min: 33,
    Max: 42,
    itemType: "Hide",
    type: "item",
    table: armorAbilityTable,
    value: 165,
  },
  {
    Min: 43,
    Max: 43,
    itemType: "Scale mail",
    type: "item",
    table: armorAbilityTable,
    value: 200,
  },
  {
    Min: 44,
    Max: 44,
    itemType: "Chainmail",
    type: "item",
    table: armorAbilityTable,
    value: 300,
  },
  {
    Min: 45,
    Max: 57,
    itemType: "Breastplate",
    type: "item",
    table: armorAbilityTable,
    value: 350,
  },
  {
    Min: 58,
    Max: 58,
    itemType: "Splint mail",
    type: "item",
    table: armorAbilityTable,
    value: 350,
  },
  {
    Min: 59,
    Max: 59,
    itemType: "Banded mail",
    type: "item",
    table: armorAbilityTable,
    value: 400,
  },
  {
    Min: 60,
    Max: 60,
    itemType: "Half-plate",
    type: "item",
    table: armorAbilityTable,
    value: 750,
  },
  {
    Min: 61,
    Max: 100,
    itemType: "Full plate",
    type: "item",
    table: armorAbilityTable,
    value: 1650,
  },
];

// https://regex101.com/r/mpV2EF/1
const armorAndShieldsTable = [
  {
    minorMin: 1,
    minorMax: 60,
    mediumMin: 1,
    mediumMax: 5,
    majorMin: 0,
    majorMax: 0,
    enhancement: 1,
    itemType: "shield",
    value: 1000,
    type: "roll",
    table: shieldTypeTable,
  },
  {
    minorMin: 61,
    minorMax: 80,
    mediumMin: 6,
    mediumMax: 10,
    majorMin: 0,
    majorMax: 0,
    enhancement: 1,
    itemType: "armor",
    value: 1000,
    type: "roll",
    table: armorTypeTable,
  },
  {
    minorMin: 81,
    minorMax: 85,
    mediumMin: 11,
    mediumMax: 20,
    majorMin: 0,
    majorMax: 0,
    enhancement: 2,
    itemType: "shield",
    value: 4000,
    type: "roll",
    table: shieldTypeTable,
  },
  {
    minorMin: 86,
    minorMax: 87,
    mediumMin: 21,
    mediumMax: 30,
    majorMin: 0,
    majorMax: 0,
    enhancement: 2,
    itemType: "armor",
    value: 4000,
    type: "roll",
    table: armorTypeTable,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 31,
    mediumMax: 40,
    majorMin: 1,
    majorMax: 8,
    enhancement: 3,
    itemType: "shield",
    value: 9000,
    type: "roll",
    table: shieldTypeTable,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 41,
    mediumMax: 50,
    majorMin: 9,
    majorMax: 16,
    enhancement: 3,
    itemType: "armor",
    value: 9000,
    type: "roll",
    table: armorTypeTable,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 51,
    mediumMax: 55,
    majorMin: 17,
    majorMax: 27,
    enhancement: 4,
    itemType: "shield",
    value: 16000,
    type: "roll",
    table: shieldTypeTable,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 56,
    mediumMax: 57,
    majorMin: 28,
    majorMax: 38,
    enhancement: 4,
    itemType: "armor",
    value: 16000,
    type: "roll",
    table: armorTypeTable,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 39,
    majorMax: 49,
    enhancement: 5,
    itemType: "shield",
    value: 25000,
    type: "roll",
    table: shieldTypeTable,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 0,
    mediumMax: 0,
    majorMin: 50,
    majorMax: 57,
    enhancement: 5,
    itemType: "armor",
    value: 25000,
    type: "roll",
    table: armorTypeTable,
  },

  {
    minorMin: 88,
    minorMax: 89,
    mediumMin: 58,
    mediumMax: 60,
    majorMin: 58,
    majorMax: 60,
    enhancement: 0,
    itemType: "Specific armor",
    value: 25000,
    type: "roll",
    table: [],
  },
  {
    minorMin: 90,
    minorMax: 91,
    mediumMin: 61,
    mediumMax: 63,
    majorMin: 61,
    majorMax: 63,
    enhancement: 0,
    itemType: "Specific shield",
    value: 25000,
    type: "roll",
    table: [],
  },
  {
    minorMin: 92,
    minorMax: 100,
    mediumMin: 64,
    mediumMax: 100,
    majorMin: 64,
    majorMax: 10,
    enhancement: 0,
    itemType: "Specific ability",
    value: 25000,
    type: "roll+",
    table: armorAbilityTable,
  },
];

// https://regex101.com/r/5PgyZw/1
const MagicItemTable = [
  {
    minorMin: 1,
    minorMax: 4,
    mediumMin: 1,
    mediumMax: 10,
    majorMin: 1,
    majorMax: 10,
    itemType: "Armor and shields",
    type: "roll",
    table: armorAndShieldsTable,
    value: 0,
  },
  {
    minorMin: 5,
    minorMax: 9,
    mediumMin: 11,
    mediumMax: 20,
    majorMin: 11,
    majorMax: 20,
    itemType: "Weapons",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 10,
    minorMax: 44,
    mediumMin: 21,
    mediumMax: 30,
    majorMin: 21,
    majorMax: 25,
    itemType: "Potions",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 45,
    minorMax: 46,
    mediumMin: 31,
    mediumMax: 40,
    majorMin: 26,
    majorMax: 35,
    itemType: "Rings",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 41,
    mediumMax: 50,
    majorMin: 36,
    majorMax: 45,
    itemType: "Rods",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 47,
    minorMax: 81,
    mediumMin: 51,
    mediumMax: 65,
    majorMin: 46,
    majorMax: 55,
    itemType: "Scrolls",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 0,
    minorMax: 0,
    mediumMin: 66,
    mediumMax: 68,
    majorMin: 56,
    majorMax: 75,
    itemType: "Staffs",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 82,
    minorMax: 91,
    mediumMin: 69,
    mediumMax: 83,
    majorMin: 76,
    majorMax: 80,
    itemType: "Wands",
    type: "roll",
    table: [],
    value: 0,
  },
  {
    minorMin: 92,
    minorMax: 100,
    mediumMin: 84,
    mediumMax: 100,
    majorMin: 81,
    majorMax: 100,
    itemType: "Wondrous items",
    type: "roll",
    table: [],
    value: 0,
  },
];

//TODO: fix Specific ability, currently rolled in wrong order, item -> ability, should be ability->item
//TODO: add Specific shield
//TODO: add Specific armor
function rollMagicItem(table, grade, prefix = "", testRolls = []) {
  let magicItemRoll = new Roll("1d100").roll().total;
  if (testRolls.length > 0) {
    magicItemRoll = testRolls.shift();
  }
  let magicItemData = table.find(
    (r) =>
      r[grade + "Min"] <= magicItemRoll && r[grade + "Max"] >= magicItemRoll
  );
  if (magicItemData === undefined) {
    magicItemData = table.find(
      (r) => r["Min"] <= magicItemRoll && r["Max"] >= magicItemRoll
    );
  } else {
    prefix = "";
  }
  console.log("magicItemRoll: " + magicItemRoll + " " + prefix);
  let result = {
    value: 0,
    enhancement: 0,
    type: "",
    ability: [],
    valueBonus: 0,
  };
  let roll = {};
  let abilities = [];
  try {
    switch (magicItemData.type) {
      case "item":
        Object.assign(result, {
          value: magicItemData.value || 0,
        });

        //ability roll
        roll = rollMagicItem(
          magicItemData.table,
          grade,
          magicItemData.itemType,
          testRolls
        );
        // console.log(roll)
        for (let ability of roll) {
          Object.assign(result, {
            value: result.value + ability.value,
            valueBonus: result.valueBonus + ability.enhancement,
            // ability: result.ability.concat(roll.ability),
          });
          abilities.push(ability.itemType);
        }
        // console.log(result)
        Object.assign(result, {
          type: magicItemData.itemType.trim(),
          ability: abilities,
        });
        return result;
      case "roll":
        Object.assign(result, {
          value: magicItemData.value || 0 + result.value,
          enhancement: magicItemData.enhancement || 0 + result.value,
        });
        roll = rollMagicItem(
          magicItemData.table,
          grade,
          (prefix + " " + magicItemData.itemType).trim(),
          testRolls
        );

        let valueBonus = 0;
        if (roll.valueBonus > 0) {
          console.log("adding bonus value");
          valueBonus =
            Math.pow(result.enhancement + roll.valueBonus, 2) -
            Math.pow(result.enhancement, 2);
        }

        Object.assign(result, {
          value: result.value + roll.value + valueBonus * 1000,
          type: roll.type,
          enhancement: result.enhancement + roll.enhancement,
          ability: result.ability.concat(roll.ability),
        });

        return result;
      case "roll+":
        console.error("unimplemented");
      // roll = rollMagicItem(
      //   magicItemData.table,
      //   grade,
      //   (prefix + " " + magicItemData.itemType).trim(),
      //   testRolls
      // );

      // //reroll
      // roll = rollMagicItem(table, grade, prefix, testRolls);
      // if (Array.isArray(roll[0])) {
      //   result = result.concat(roll);
      // } else {
      //   result.push(roll);
      // }
      // return result;
      case "ability++":
        roll = rollMagicItem(table, grade, prefix, testRolls);
        // Object.assign(result, roll);
        for (let ability of roll) {
          if (abilities.indexOf(ability) === -1) {
            abilities.push(ability);
          }
        }
        roll = rollMagicItem(table, grade, prefix, testRolls);

        for (let ability of roll) {
          if (abilities.indexOf(ability) === -1) {
            abilities.push(ability);
          }
        }
        // Object.assign(result, {
        //   value: result.value + roll.value,
        //   valueBonus: result.enhancement + roll.enhancement,
        //   ability: result.ability.concat(roll.ability),
        // });
        return abilities;
      case "ability":
        // Object.assign(result, {
        //   value: magicItemData.value,
        //   valueBonus: magicItemData.enhancement,
        //   ability: [magicItemData.itemType],
        // });
        abilities.push(magicItemData);
        return abilities;
    }
  } catch (err) {
    console.log("Error rollMagicItem, roll: " + magicItemRoll);
    throw err;
  }
}

function rollMundaneItem(table, prefix = "") {
  let mundaneItemRoll = new Roll("1d100").roll().total;
  let mundaneItemData = table.find(
    (r) => r.min <= mundaneItemRoll && r.max >= mundaneItemRoll
  );
  console.log("mundaneItemRoll: " + mundaneItemRoll + " " + prefix);
  let result = [];
  let roll = [];
  switch (mundaneItemData.type) {
    case "item":
      let mundaneItemValue = mundaneItemData.value;
      let mundaneItemType = (prefix + " " + mundaneItemData.itemType).trim();
      let mundaneItemAmount = new Roll(mundaneItemData.roll).roll().total;
      return [mundaneItemValue, mundaneItemType, mundaneItemAmount];
    case "roll":
      roll = rollMundaneItem(
        mundaneItemData.table,
        (prefix + " " + mundaneItemData.itemType).trim()
      );
      if (Array.isArray(roll[0])) {
        result = result.concat(roll);
      } else {
        result.push(roll);
      }

      return result;
    case "roll+":
      roll = rollMundaneItem(
        mundaneItemData.table,
        (prefix + " " + mundaneItemData.itemType).trim()
      );
      if (Array.isArray(roll[0])) {
        result = result.concat(roll);
      } else {
        result.push(roll);
      }
      //reroll
      roll = rollMundaneItem(table, prefix);
      if (Array.isArray(roll[0])) {
        result = result.concat(roll);
      } else {
        result.push(roll);
      }
      return result;
      break;
  }
}

if (
  canvas.tokens.controlled.filter(
    (t) => game.actors.get(t.data.actorId).data.type === "npc"
  ).length !== 0
) {
  canvas.tokens.controlled.forEach((t) => {
    let actor = game.actors.get(t.data.actorId);
    if (actor.data.type === "npc") {
      let cr = actor.data.data.details.cr;
      let TreasureLevel = Math.min(Math.max(Math.floor(cr), 1), 30) - 1;
      //console.log(TreasureLevel);
      //let roll = game.tables.getName('Treasure').roll();
      let treasureRow = TreasureTable[TreasureLevel];
      // JSON.parse(
      //   game.tables.getName("Treasure").data.results[TreasureLevel].text
      // );

      //Roll for money
      let moneyRoll = new Roll("1d100").roll().total;
      let moneyResult = treasureRow.money.find(
        (r) => r.min <= moneyRoll && r.max >= moneyRoll
      );
      if (moneyResult.type !== "nothing") {
        treasure[moneyResult.type] += new Roll(moneyResult.roll).roll().total;
      }

      //Roll for goods
      let goodsRoll = new Roll("1d100").roll().total;
      let goodsResult = treasureRow.goods.find(
        (r) => r.min <= goodsRoll && r.max >= goodsRoll
      );
      let goodsNo = new Roll(goodsResult.roll).roll().total;
      let goodsSteps = [...Array(goodsNo).keys()];
      goodsSteps.forEach((step) => {
        switch (goodsResult.type) {
          case "nothing":
            break;
          case "gem":
            console.log("gem");
            // let gemData = JSON.parse(
            //   game.tables.getName("Gems").roll().results[0].text
            // );
            let gemData =
              GemsTable[Math.floor(Math.random() * GemsTable.length)];
            let gemValue = new Roll(gemData.roll).roll().total;
            let gemType =
              gemData.type[Math.floor(Math.random() * gemData.type.length)];
            treasure.gems.push({ value: gemValue, type: gemType });
            break;
          case "art":
            console.log("art");
            // let artData = JSON.parse(
            //   game.tables.getName("Arts").roll().results[0].text
            // );
            let artData =
              ArtsTable[Math.floor(Math.random() * ArtsTable.length)];
            let artValue = new Roll(artData.roll).roll().total;
            let artType =
              artData.type[Math.floor(Math.random() * artData.type.length)];
            treasure.arts.push({ value: artValue, type: artType });
            break;
        }
      });

      //Roll for items
      console.log("debug");
      let itemsRoll = new Roll("1d1 + 97").roll().total;
      let itemsResult = treasureRow.items.find(
        (r) => r.min <= itemsRoll && r.max >= itemsRoll
      );
      let itemsNo = new Roll(itemsResult.roll).roll().total;
      let itemSteps = [...Array(itemsNo).keys()];
      itemSteps.forEach((step) => {
        switch (itemsResult.type) {
          case "nothing":
            break;
          case "mundane":
            rollMundaneItem(MundaneItemsTable).forEach(
              ([mundaneItemValue, mundaneItemType, mundaneItemAmount]) =>
                treasure.items.push({
                  value: mundaneItemValue,
                  type: mundaneItemType,
                  amount: mundaneItemAmount,
                  ability: [],
                  enhancement: 0,
                })
            );
            break;
          case "minor":
          case "medium":
          case "major":
            console.log("magic");
            try {
              let {
                value,
                enhancement,
                ability,
                type,
              } = rollMagicItem(MagicItemTable, itemsResult.type, "", [
                2,
                61,
                44,
                100,
                94,
                100,
                63,
                96,
              ]);
              treasure.items.push({
                value: value,
                type: type,
                ability: ability,
                enhancement: enhancement,
                amount: 1,
              });
            } catch (err) {
              console.log("Error rollMagicItem end");
              throw err;
            }
            break;
        }
      });
    }
  });
  console.log(treasure);
  //var treasure = { cp: 0, sp: 0, gp: 0, pp: 0, gems: [], arts: [], items: [] };
  // var TreasureString =
  //   '<div><p>Treasure:</p></div><div style="padding-left: 20px;"><p>';
  var TreasureString = '<div class="D35E chat-card item-card">';
  if (treasure.cp + treasure.sp + treasure.gp + treasure.pp > 0) {
    TreasureString += `<header class="card-header flexrow">
    <img src="systems/D35E/icons/items/inventory/Loot_129.png" title="Money" width="36" height="36">
    <h3 class="item-name">Money</h3>
  </header> <div><p>`;
    if (treasure.cp > 0)
      TreasureString +=
        '<span class="fontstyle0">cp: ' + treasure.cp + "</span><br>";
    if (treasure.sp > 0)
      TreasureString +=
        '<span class="fontstyle0">sp: ' + treasure.sp + "</span><br>";
    if (treasure.gp > 0)
      TreasureString +=
        '<span class="fontstyle0">gp: ' + treasure.gp + "</span><br>";
    if (treasure.pp > 0)
      TreasureString += '<span class="fontstyle0">pp: ' + treasure.pp + "<br>";

    TreasureString +=
      '</p></div><hr><span class="fontstyle0"> total value = ' +
      Math.floor(
        treasure.cp / 100 + treasure.sp / 10 + treasure.gp + treasure.pp * 10
      ) +
      " gp</span>";
  }
  if (treasure.gems.length > 0) {
    let totalValue = 0;
    TreasureString += `<header class="card-header flexrow">
    <img src="systems/D35E/icons/items/inventory/Quest_102.png" title="Gems" width="36" height="36">
    <h3 class="item-name">Gems</h3>
  </header> <div><p>`;
    treasure.gems.forEach((gem) => {
      totalValue += gem.value;
      TreasureString += `<span class="fontstyle0">${gem.type} (${gem.value} gp) </span><br>`;
    });
    TreasureString +=
      '</p></div><hr><span class="fontstyle0">total value = ' +
      totalValue +
      " gp</span>";
  }
  if (treasure.arts.length > 0) {
    let totalValue = 0;
    TreasureString += `<header class="card-header flexrow">
    <img src="systems/D35E/icons/items/inventory/Quest_48.png" title="Arts" width="36" height="36">
    <h3 class="item-name">Arts</h3>
  </header> <div><p>`;
    treasure.arts.forEach((art) => {
      totalValue += art.value;
      TreasureString += `<span class="fontstyle0">${art.type} (${art.value} gp) </span><br>`;
    });
    TreasureString +=
      '</p></div><hr><span class="fontstyle0">total value = ' +
      totalValue +
      " gp</span>";
  }

  if (treasure.items.length > 0) {
    TreasureString += `<header class="card-header flexrow">
    <img src="systems/D35E/icons/items/inventory/Loot_102.png" title="Items" width="36" height="36">
    <h3 class="item-name">Items</h3>
  </header> <div class="card-content"><p>`;

    treasure.items.forEach((item) => {
      TreasureString += `<span class="fontstyle0">${
        (item.amount > 1 && item.amount + "x ") || ""
      }${item.type} ${
        (item.enhancement > 0 && "+" + item.enhancement) || ""
      } [${item.ability.join(", ")}] (${
        item.value
      } gp) </span><br style="font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;orphans:2;text-align:-webkit-auto;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px"><br>`;
    });
    TreasureString += "</p></div>";
  }
  TreasureString += "</div>";
  //  console.log(TreasureString);
  ChatMessage.create({ content: TreasureString });
}
