//#region dnd 3.5 loot tables
const TreasureTable = [
	{
		money: [
			{ Min: 1, Max: 14, roll: '1d6', type: 'nothing' },
			{ Min: 15, Max: 29, roll: '1d6*1000', type: 'cp' },
			{ Min: 30, Max: 52, roll: '1d8*100', type: 'sp' },
			{ Min: 53, Max: 95, roll: '2d8*10', type: 'gp' },
			{ Min: 96, Max: 100, roll: '1d4*10', type: 'pp' },
		],
		goods: [
			{ Min: 1, Max: 90, roll: '1d1', type: 'nothing' },
			{ Min: 91, Max: 95, roll: '1d1', type: 'gem' },
			{ Min: 96, Max: 100, roll: '1d1', type: 'art' },
		],
		items: [
			{ Min: 1, Max: 71, roll: '1d1', type: 'nothing' },
			{ Min: 72, Max: 95, roll: '1d1', type: 'mundane' },
			{ Min: 96, Max: 100, roll: '1d1', type: 'minor' },
		],
	},
	{
		money: [
			{ Min: 1, Max: 13, roll: '1d6', type: 'nothing' },
			{ Min: 14, Max: 23, roll: '1d10*1000', type: 'cp' },
			{ Min: 24, Max: 43, roll: '2d10*100', type: 'sp' },
			{ Min: 44, Max: 95, roll: '4d10*10', type: 'gp' },
			{ Min: 96, Max: 100, roll: '2d8*10', type: 'pp' },
		],
		goods: [
			{ Min: 1, Max: 81, roll: '1d1', type: 'nothing' },
			{ Min: 82, Max: 95, roll: '1d3', type: 'gem' },
			{ Min: 96, Max: 100, roll: '1d3', type: 'art' },
		],
		items: [
			{ Min: 1, Max: 49, roll: '1d1', type: 'nothing' },
			{ Min: 50, Max: 85, roll: '1d1', type: 'mundane' },
			{ Min: 86, Max: 100, roll: '1d1', type: 'minor' },
		],
	},
]

const GemsTable = [
	{
		Min: 1,
		Max: 25,
		roll: '4d4',
		type: [
			'Banded eye',
			'Banded moss agate',
			'azurite',
			'blue quartz',
			'hematite',
			'lapis lazuli',
			'malachite',
			'obsidian',
			'rhodochrosite',
			'tiger eye turquoise',
			'freshwater (irregular) pearl',
		],
	},
	{
		Min: 26,
		Max: 50,
		roll: '2d4*10',
		type: [
			'Bloodstone',
			'carnelian',
			'chalcedony',
			'chrysoprase',
			'citrine',
			'iolite',
			'jasper',
			'moonstone',
			'onyx',
			'peridot',
			'rock crystal (clear quartz)',
			'sard',
			'sardonyx',
			'smoky rose quartz',
			'star rose quartz',
			'zircon',
		],
	},
	{
		Min: 51,
		Max: 70,
		roll: '4d4*10',
		type: [
			'Amber',
			'amethyst',
			'chrysoberyl',
			'coral',
			'red garnet',
			'brown-green garnet',
			'jade',
			'jet',
			'white',
			'golden',
			'pink pearl',
			'silver pearl',
			'red spinel',
			'red-brown spinel',
			'deep green spinel',
			'tourmaline',
		],
	},
	{
		Min: 71,
		Max: 90,
		roll: '2d4*100',
		type: [
			'Alexandrite',
			'aquamarine',
			'violet garnet',
			'black pearl',
			'deep blue spinel',
			'golden yellow topaz',
		],
	},
	{
		Min: 91,
		Max: 99,
		roll: '4d4*100',
		type: [
			'Emerald',
			'white opal',
			'black opal',
			'fire opal',
			'blue sapphire',
			'fiery yellow corundum',
			'rich purple corundum',
			'blue star sapphire',
			'black star sapphire',
			'star ruby',
		],
	},
	{
		Min: 100,
		Max: 100,
		roll: '2d4*1000',
		type: [
			'Clearest bright green emerald',
			'blue-white diamond',
			'canary diamond',
			'pink diamond',
			'brown diamond',
			'blue diamond',
			'jacinth',
		],
	},
]

const ArtsTable = [
	{
		Min: 1,
		Max: 10,
		roll: '1d10',
		type: [
			'Silver ewer',
			'carved bone statuette',
			'ivory statuette',
			'finely wrought small gold bracelet',
		],
	},
	{
		Min: 11,
		Max: 25,
		roll: '3d6*10',
		type: [
			'Cloth of gold vestments',
			'black velvet mask with numerous citrines',
			'silver chalice with lapis lazuli gems',
		],
	},
	{
		Min: 26,
		Max: 40,
		roll: '1d6*100',
		type: ['Large well-done wool tapestry', 'brass mug with jade inlays'],
	},
	{
		Min: 41,
		Max: 50,
		roll: '1d10*100',
		type: [
			'Silver comb with moonstones',
			'silver-plated steel longsword with jet jewel in hilt',
		],
	},
	{
		Min: 51,
		Max: 60,
		roll: '2d6*100',
		type: [
			'Carved harp of exotic wood with ivory inlay and zircon gems',
			'solid gold idol (10 lb.)',
		],
	},
	{
		Min: 61,
		Max: 70,
		roll: '3d6*100',
		type: [
			'Gold dragon comb with red garnet eye',
			'gold and topaz bottle stopper cork',
			'ceremonial electrum dagger with a star ruby in the pommel',
		],
	},
	{
		Min: 71,
		Max: 80,
		roll: '4d6*100',
		type: [
			'Eyepatch with mock eye of sapphire and moonstone',
			'fire opal pendant on a fine gold chain',
			'old masterpiece painting',
		],
	},
	{
		Min: 81,
		Max: 85,
		roll: '5d6*100',
		type: [
			'Embroidered silk and velvet mantle with numerous moonstones',
			'sapphire pendant on gold chain',
		],
	},
	{
		Min: 86,
		Max: 90,
		roll: '1d4*1000',
		type: [
			'Embroidered and bejeweled glove',
			'jeweled anklet',
			'gold music box',
		],
	},
	{
		Min: 91,
		Max: 95,
		roll: '1d6*1000',
		type: [
			'Golden circlet with four aquamarines',
			'a string of small pink pearls (necklace)',
		],
	},
	{
		Min: 96,
		Max: 99,
		roll: '2d4*1000',
		type: ['Jeweled gold crown', 'jeweled electrum ring'],
	},
	{
		Min: 100,
		Max: 100,
		roll: '2d6*100',
		type: ['Gold ring', 'ruby ring', 'gold cup set with emeralds'],
	},
]

const baneAbilityTable = [
	{
		Min: 1,
		Max: 5,
		itemType: 'Aberrations',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 46,
		Max: 46,
		itemType: 'Humanoids, gnome',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 77,
		Max: 77,
		itemType: 'Outsiders, earth',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 6,
		Max: 9,
		itemType: 'Animals',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 47,
		Max: 49,
		itemType: 'Humanoids, goblinoid',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 78,
		Max: 80,
		itemType: 'Outsiders, evil',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 10,
		Max: 16,
		itemType: 'Constructs',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 50,
		Max: 50,
		itemType: 'Humanoids, halfling',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 81,
		Max: 81,
		itemType: 'Outsiders, fire',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 17,
		Max: 22,
		itemType: 'Dragons',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 51,
		Max: 54,
		itemType: 'Humanoids, human',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 82,
		Max: 84,
		itemType: 'Outsiders, good',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 23,
		Max: 27,
		itemType: 'Elementals',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 55,
		Max: 57,
		itemType: 'Humanoids, reptilian',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 85,
		Max: 87,
		itemType: 'Outsiders, lawful',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 28,
		Max: 32,
		itemType: 'Fey',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 58,
		Max: 60,
		itemType: 'Humanoids, orc',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 88,
		Max: 88,
		itemType: 'Outsiders, water',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 33,
		Max: 39,
		itemType: 'Giants',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 61,
		Max: 65,
		itemType: 'Magical beasts',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 89,
		Max: 90,
		itemType: 'Plants',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 40,
		Max: 40,
		itemType: 'Humanoids, aquatic',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 66,
		Max: 70,
		itemType: 'Monstrous humanoids',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 91,
		Max: 98,
		itemType: 'Undead',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 41,
		Max: 42,
		itemType: 'Humanoids, dwarf',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 71,
		Max: 72,
		itemType: 'Oozes',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 99,
		Max: 100,
		itemType: 'Vermin',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 43,
		Max: 44,
		itemType: 'Humanoids, elf',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 73,
		Max: 73,
		itemType: 'Outsiders, air',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 45,
		Max: 45,
		itemType: 'Humanoids, gnoll',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
	{
		Min: 74,
		Max: 76,
		itemType: 'Outsiders, chaotic',
		type: 'extraItemDef',
		value: 0,
		enhancement: 0,
	},
]

// https://regex101.com/r/yIjBpB/2
const meleeWeaponsAbilityTable = [
	{
		minorMin: 1,
		minorMax: 10,
		mediumMin: 1,
		mediumMax: 6,
		majorMin: 1,
		majorMax: 3,
		itemType: 'Bane',
		table: baneAbilityTable,
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 11,
		minorMax: 17,
		mediumMin: 7,
		mediumMax: 12,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Defending',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 18,
		minorMax: 27,
		mediumMin: 13,
		mediumMax: 19,
		majorMin: 4,
		majorMax: 6,
		itemType: 'Flaming',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 28,
		minorMax: 37,
		mediumMin: 20,
		mediumMax: 26,
		majorMin: 7,
		majorMax: 9,
		itemType: 'Frost',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 38,
		minorMax: 47,
		mediumMin: 27,
		mediumMax: 33,
		majorMin: 10,
		majorMax: 12,
		itemType: 'Shock',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 48,
		minorMax: 56,
		mediumMin: 34,
		mediumMax: 38,
		majorMin: 13,
		majorMax: 15,
		itemType: 'Ghost touch',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 57,
		minorMax: 67,
		mediumMin: 39,
		mediumMax: 44,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Keen2',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 68,
		minorMax: 71,
		mediumMin: 45,
		mediumMax: 48,
		majorMin: 16,
		majorMax: 19,
		itemType: 'Ki Focus',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 72,
		minorMax: 75,
		mediumMin: 49,
		mediumMax: 50,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Merciful',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 76,
		minorMax: 82,
		mediumMin: 51,
		mediumMax: 54,
		majorMin: 20,
		majorMax: 21,
		itemType: 'Mighty cleaving',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 83,
		minorMax: 87,
		mediumMin: 55,
		mediumMax: 59,
		majorMin: 22,
		majorMax: 24,
		itemType: 'Spell storing',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 88,
		minorMax: 91,
		mediumMin: 60,
		mediumMax: 63,
		majorMin: 25,
		majorMax: 28,
		itemType: 'Throwing',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 92,
		minorMax: 95,
		mediumMin: 64,
		mediumMax: 65,
		majorMin: 29,
		majorMax: 32,
		itemType: 'Thundering',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 96,
		minorMax: 99,
		mediumMin: 66,
		mediumMax: 69,
		majorMin: 33,
		majorMax: 36,
		itemType: 'Vicious',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 70,
		mediumMax: 72,
		majorMin: 37,
		majorMax: 41,
		itemType: 'Anarchic',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 73,
		mediumMax: 75,
		majorMin: 42,
		majorMax: 46,
		itemType: 'Axiomatic',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 76,
		mediumMax: 78,
		majorMin: 47,
		majorMax: 49,
		itemType: 'Disruption3',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 79,
		mediumMax: 81,
		majorMin: 50,
		majorMax: 54,
		itemType: 'Flaming burst',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 82,
		mediumMax: 84,
		majorMin: 55,
		majorMax: 59,
		itemType: 'Icy burst',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 85,
		mediumMax: 87,
		majorMin: 60,
		majorMax: 64,
		itemType: 'Holy',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 88,
		mediumMax: 90,
		majorMin: 65,
		majorMax: 69,
		itemType: 'Shocking burst',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 91,
		mediumMax: 93,
		majorMin: 70,
		majorMax: 74,
		itemType: 'Unholy',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 94,
		mediumMax: 95,
		majorMin: 75,
		majorMax: 78,
		itemType: 'Wounding',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 79,
		majorMax: 83,
		itemType: 'Speed',
		type: 'ability',
		value: 0,
		enhancement: 3,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 84,
		majorMax: 86,
		itemType: 'Brilliant energy',
		type: 'ability',
		value: 0,
		enhancement: 4,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 87,
		majorMax: 88,
		itemType: 'Dancing',
		type: 'ability',
		value: 0,
		enhancement: 4,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 89,
		majorMax: 90,
		itemType: 'Vorpal4',
		type: 'ability',
		value: 0,
		enhancement: 5,
	},
	{
		minorMin: 100,
		minorMax: 100,
		mediumMin: 96,
		mediumMax: 100,
		majorMin: 91,
		majorMax: 100,
		itemType: 'Roll again twice',
		type: 'ability++',
		value: 0,
		enhancement: 5,
	},
]

const rangedWeaponsAbilityTable = [
	{
		minorMin: 1,
		minorMax: 12,
		mediumMin: 1,
		mediumMax: 8,
		majorMin: 1,
		majorMax: 4,
		itemType: 'Bane',
		type: 'ability',
		table: baneAbilityTable,
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 13,
		minorMax: 25,
		mediumMin: 9,
		mediumMax: 16,
		majorMin: 5,
		majorMax: 8,
		itemType: 'Distance',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 26,
		minorMax: 40,
		mediumMin: 17,
		mediumMax: 28,
		majorMin: 9,
		majorMax: 12,
		itemType: 'Flaming',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 41,
		minorMax: 55,
		mediumMin: 29,
		mediumMax: 40,
		majorMin: 13,
		majorMax: 16,
		itemType: 'Frost',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 56,
		minorMax: 60,
		mediumMin: 41,
		mediumMax: 42,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Merciful',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 61,
		minorMax: 68,
		mediumMin: 43,
		mediumMax: 47,
		majorMin: 17,
		majorMax: 21,
		itemType: 'Returning',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 69,
		minorMax: 83,
		mediumMin: 48,
		mediumMax: 59,
		majorMin: 22,
		majorMax: 25,
		itemType: 'Shock',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 84,
		minorMax: 93,
		mediumMin: 60,
		mediumMax: 64,
		majorMin: 26,
		majorMax: 27,
		itemType: 'Seeking',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 94,
		minorMax: 99,
		mediumMin: 65,
		mediumMax: 68,
		majorMin: 28,
		majorMax: 29,
		itemType: 'Thundering',
		type: 'ability',
		value: 0,
		enhancement: 1,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 69,
		mediumMax: 71,
		majorMin: 30,
		majorMax: 34,
		itemType: 'Anarchic',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 72,
		mediumMax: 74,
		majorMin: 35,
		majorMax: 39,
		itemType: 'Axiomatic',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 75,
		mediumMax: 79,
		majorMin: 40,
		majorMax: 49,
		itemType: 'Flaming burst',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 80,
		mediumMax: 82,
		majorMin: 50,
		majorMax: 54,
		itemType: 'Holy',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 83,
		mediumMax: 87,
		majorMin: 55,
		majorMax: 64,
		itemType: 'Icy burst',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 88,
		mediumMax: 92,
		majorMin: 65,
		majorMax: 74,
		itemType: 'Shocking burst',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 93,
		mediumMax: 95,
		majorMin: 75,
		majorMax: 79,
		itemType: 'Unholy',
		type: 'ability',
		value: 0,
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 80,
		majorMax: 84,
		itemType: 'Speed',
		type: 'ability',
		value: 0,
		enhancement: 3,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 85,
		majorMax: 90,
		itemType: 'Brilliant energy',
		type: 'ability',
		value: 0,
		enhancement: 4,
	},
	{
		minorMin: 100,
		minorMax: 100,
		mediumMin: 96,
		mediumMax: 100,
		majorMin: 91,
		majorMax: 100,
		itemType: 'Roll again twice',
		type: 'ability++',
		value: 0,
		enhancement: 5,
	},
]

const CommonMeleeWeaponTable = [
	{
		Min: 1,
		Max: 4,
		roll: '1d1',
		itemType: 'Dagger',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 302,
		id: 'D35E.weapons-and-ammo.fOSuWwRSZLTrROch',
	},
	{
		Min: 5,
		Max: 14,
		roll: '1d1',
		itemType: 'Greataxe',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 320,
		id: 'D35E.weapons-and-ammo.Wx22UaMqWgCrYi7r',
	},
	{
		Min: 15,
		Max: 24,
		roll: '1d1',
		itemType: 'Greatsword',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 350,
		id: 'D35E.weapons-and-ammo.oyUApQSVsAqzyjdz',
	},
	{
		Min: 25,
		Max: 28,
		roll: '1d1',
		itemType: 'Kama',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 302,
		id: 'D35E.weapons-and-ammo.ik99jFlELGHbSryg',
	},
	{
		Min: 29,
		Max: 41,
		roll: '1d1',
		itemType: 'Longsword',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 315,
		id: 'D35E.weapons-and-ammo.zWRlna42PMJVX6un',
	},
	{
		Min: 42,
		Max: 45,
		roll: '1d1',
		itemType: 'Mace, light',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 305,
		id: 'D35E.weapons-and-ammo.Yeli1JRCgnmVyhWT',
	},
	{
		Min: 46,
		Max: 50,
		roll: '1d1',
		itemType: 'Mace, heavy',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 312,
		id: 'D35E.weapons-and-ammo.AbmnL8ilLH6r95Oa',
	},
	{
		Min: 51,
		Max: 54,
		roll: '1d1',
		itemType: 'Nunchaku',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 302,
		id: 'D35E.weapons-and-ammo.Kn9rGMb1KReqJhc1',
	},
	{
		Min: 55,
		Max: 57,
		roll: '1d1',
		itemType: 'Quarterstaff',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 600,
		id: 'D35E.weapons-and-ammo.6eAg4BT0RM8tfyUN',
	},
	{
		Min: 58,
		Max: 61,
		roll: '1d1',
		itemType: 'Rapier',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 320,
		id: 'D35E.weapons-and-ammo.LA6TC5679iOXDNwq',
	},
	{
		Min: 62,
		Max: 66,
		roll: '1d1',
		itemType: 'Scimitar',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 315,
		id: 'D35E.weapons-and-ammo.SjYkpvZqfgvh0EAd',
	},
	{
		Min: 67,
		Max: 70,
		roll: '1d1',
		itemType: 'Shortspear',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 302,
		id: 'D35E.weapons-and-ammo.N37FFAdWjVV6EolR',
	},
	{
		Min: 71,
		Max: 74,
		roll: '1d1',
		itemType: 'Siangham',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 303,
		id: 'D35E.weapons-and-ammo.L4KYkvLrUYAQJcdl',
	},
	{
		Min: 75,
		Max: 84,
		roll: '1d1',
		itemType: 'Sword, bastard',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 335,
		id: 'D35E.weapons-and-ammo.KtgSPHGqIRTwhwZM',
	},
	{
		Min: 85,
		Max: 89,
		roll: '1d1',
		itemType: 'Sword, short',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 310,
		id: 'D35E.weapons-and-ammo.7tGcTtI2fEj1AFaT',
	},
	{
		Min: 90,
		Max: 100,
		roll: '1d1',
		itemType: 'Waraxe, dwarven',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 330,
		id: 'D35E.weapons-and-ammo.NVmHsonsX3jF4ZUi',
	},
]

const UncommonMeleeWeaponTable = [
	{
		Min: 1,
		Max: 3,
		roll: '1d1',
		itemType: 'Axe, orc double',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 660,
		id: 'D35E.weapons-and-ammo.PmiF2bF8uhzghtuz',
	},
	{
		Min: 4,
		Max: 7,
		roll: '1d1',
		itemType: 'Battleaxe',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 310,
		id: 'D35E.weapons-and-ammo.JIljkqPWhmvAPYbI',
	},
	{
		Min: 8,
		Max: 10,
		roll: '1d1',
		itemType: 'Chain, spiked',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 325,
		id: 'D35E.weapons-and-ammo.u6Hv3AYMgkAtR7Jm',
	},
	{
		Min: 11,
		Max: 12,
		roll: '1d1',
		itemType: 'Club',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 300,
		id: 'D35E.weapons-and-ammo.vu3N4zCRDTUJ5FW4',
	},
	{
		Min: 13,
		Max: 16,
		roll: '1d1',
		itemType: 'Crossbow, hand',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 400,
		id: 'D35E.weapons-and-ammo.BgTqaNqyS3tnLGAg',
	},
	{
		Min: 17,
		Max: 18,
		roll: '1d1',
		itemType: 'Light crossbow, repeating',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 550,
		id: 'D35E.weapons-and-ammo.bnM8psLOFegcdWg1',
	},
	{
		Min: 19,
		Max: 19,
		roll: '1d1',
		itemType: 'Heavy crossbow, repeating',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 550,
		id: 'D35E.weapons-and-ammo.iXpBlVYJXAeIxUhW',
	},
	{
		Min: 20,
		Max: 21,
		roll: '1d1',
		itemType: 'Dagger, punching',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 302,
		id: 'D35E.weapons-and-ammo.05NnBuNnkMsaNoXf',
	},
	{
		Min: 22,
		Max: 23,
		roll: '1d1',
		itemType: 'Falchion',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 375,
		id: 'D35E.weapons-and-ammo.v8Ee5Iagp62xsUQZ',
	},
	{
		Min: 24,
		Max: 26,
		roll: '1d1',
		itemType: 'Flail, dire',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 690,
		id: 'D35E.weapons-and-ammo.RY3sfrMSDs0OGLAH',
	},
	{
		Min: 27,
		Max: 31,
		roll: '1d1',
		itemType: 'Flail, heavy',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 315,
		id: 'D35E.weapons-and-ammo.IfotwHH89d60H3pR',
	},
	{
		Min: 32,
		Max: 35,
		roll: '1d1',
		itemType: 'Flail, light',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 308,
		id: 'D35E.weapons-and-ammo.BcY8IkVwo2hXC6ND',
	},
	{
		Min: 36,
		Max: 37,
		roll: '1d1',
		itemType: 'Gauntlet',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 302,
		id: 'D35E.weapons-and-ammo.IdkQOHJcRMq1Rm1r',
	},
	{
		Min: 38,
		Max: 39,
		roll: '1d1',
		itemType: 'Gauntlet, spiked',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 305,
		id: 'D35E.weapons-and-ammo.RSvRoQyG8GpS8vhH',
	},
	{
		Min: 40,
		Max: 41,
		roll: '1d1',
		itemType: 'Glaive',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 308,
		id: 'D35E.weapons-and-ammo.wKIv4yCj8L3ADceU',
	},
	{
		Min: 42,
		Max: 43,
		roll: '1d1',
		itemType: 'Greatclub',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 305,
		id: 'D35E.weapons-and-ammo.TePZuaCtN2A4CzGD',
	},
	{
		Min: 44,
		Max: 45,
		roll: '1d1',
		itemType: 'Guisarme',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 309,
		id: 'D35E.weapons-and-ammo.hBgclgYrnhecN3pX',
	},
	{
		Min: 46,
		Max: 48,
		roll: '1d1',
		itemType: 'Halberd',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 310,
		id: 'D35E.weapons-and-ammo.zLdHrDEnRQGbZJrv',
	},
	{
		Min: 49,
		Max: 51,
		roll: '1d1',
		itemType: 'Halfspear',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 301,
		id: 'D35E.weapons-and-ammo.s0LFk8Jk5CsgOj7V',
	},
	{
		Min: 52,
		Max: 54,
		roll: '1d1',
		itemType: 'Hammer, gnome hooked',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 620,
		id: 'D35E.weapons-and-ammo.VM6EF0t88wdSMQDd',
	},
	{
		Min: 55,
		Max: 56,
		roll: '1d1',
		itemType: 'Hammer, light',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 301,
		id: 'D35E.weapons-and-ammo.Dwk80eD0rB93lPnN',
	},
	{
		Min: 57,
		Max: 58,
		roll: '1d1',
		itemType: 'Handaxe',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 306,
		id: 'D35E.weapons-and-ammo.F9GR4mUpehjkNdMj',
	},
	{
		Min: 59,
		Max: 61,
		roll: '1d1',
		itemType: 'Kukri',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 308,
		id: 'D35E.weapons-and-ammo.Uw42p33QKEUhlSMi',
	},
	{
		Min: 62,
		Max: 64,
		roll: '1d1',
		itemType: 'Lance',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 310,
		id: 'D35E.weapons-and-ammo.wuW25pHWYQGW81jL',
	},
	{
		Min: 65,
		Max: 67,
		roll: '1d1',
		itemType: 'Longspear',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 305,
		id: 'D35E.weapons-and-ammo.awNlvqmRM1TZRVR9',
	},
	{
		Min: 68,
		Max: 70,
		roll: '1d1',
		itemType: 'Morningstar',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 308,
		id: 'D35E.weapons-and-ammo.FADCspPM6J4xZ2Fi',
	},
	{
		Min: 71,
		Max: 72,
		roll: '1d1',
		itemType: 'Net',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 320,
		id: 'D35E.weapons-and-ammo.6oevs2mE3QqqQEAK',
	},
	{
		Min: 73,
		Max: 74,
		roll: '1d1',
		itemType: 'Pick, heavy',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 308,
		id: 'D35E.weapons-and-ammo.Vh5O2NapyCHRzosU',
	},
	{
		Min: 75,
		Max: 76,
		roll: '1d1',
		itemType: 'Pick, light',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 304,
		id: 'D35E.weapons-and-ammo.dSvOrS64ClyN9isO',
	},
	{
		Min: 77,
		Max: 78,
		roll: '1d1',
		itemType: 'Ranseur',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 310,
		id: 'D35E.weapons-and-ammo.naiJiv2t267Xyi09',
	},
	{
		Min: 79,
		Max: 80,
		roll: '1d1',
		itemType: 'Sap',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 301,
		id: 'D35E.weapons-and-ammo.mkwz0g7RwRwWkFkN',
	},
	{
		Min: 81,
		Max: 82,
		roll: '1d1',
		itemType: 'Scythe',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 318,
		id: 'D35E.weapons-and-ammo.dgmR0QtZF8vePzcz',
	},
	{
		Min: 83,
		Max: 84,
		roll: '1d1',
		itemType: 'Shuriken',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 301,
		id: 'D35E.weapons-and-ammo.42M7kFLkyccrj1uf',
	},
	{
		Min: 85,
		Max: 86,
		roll: '1d1',
		itemType: 'Sickle',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 306,
		id: 'D35E.weapons-and-ammo.oAb9EXEzaLRGfYxL',
	},
	{
		Min: 87,
		Max: 89,
		roll: '1d1',
		itemType: 'Sword, two-bladed',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 700,
		id: 'D35E.weapons-and-ammo.4nFjnETINUoBFWKX',
	},
	{
		Min: 90,
		Max: 91,
		roll: '1d1',
		itemType: 'Trident',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 315,
		id: 'D35E.weapons-and-ammo.2mw29eyL5mzZgKqR',
	},
	{
		Min: 92,
		Max: 94,
		roll: '1d1',
		itemType: 'Urgrosh, dwarven',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 650,
		id: 'D35E.weapons-and-ammo.aji2yHRoqFAHHfm6',
	},
	{
		Min: 95,
		Max: 97,
		roll: '1d1',
		itemType: 'Warhammer',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 312,
		id: 'D35E.weapons-and-ammo.pCFqtR5WrJmeZnDF',
	},
	{
		Min: 98,
		Max: 100,
		roll: '1d1',
		itemType: 'Whip',
		type: 'item',
		table: meleeWeaponsAbilityTable,
		value: 301,
		id: 'D35E.weapons-and-ammo.OPTlPwKg2NyQAjhe',
	},
]

const CommonRangedWeaponTable = [
	{
		Min: 1,
		Max: 10,
		roll: '1d1',
		itemType: 'Ammunition',
		table: [
			{
				Min: 1,
				Max: 50,
				roll: '1d1 + 49',
				itemType: 'Arrows',
				type: 'extraItem',
				value: 350,
				id: 'D35E.weapons-and-ammo.23HXFjpPnuLFOylm',
			},
			{
				Min: 51,
				Max: 80,
				roll: '1d1 + 49',
				itemType: 'Bolts, crossbow',
				type: 'extraItem',
				value: 350,
				id: 'D35E.weapons-and-ammo.v04yeRzoqrhYx0G7',
			},
			{
				Min: 81,
				Max: 100,
				roll: '1d1 + 49',
				itemType: 'Bullets, sling',
				type: 'extraItem',
				value: 350,
				id: 'D35E.weapons-and-ammo.UWVXKSouid1jDJSm',
			},
		],
		type: 'ammunition',
		value: 308,
	},

	{
		Min: 11,
		Max: 15,
		roll: '1d1',
		itemType: 'Axe, throwing',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 308,
		id: 'D35E.weapons-and-ammo.gAs85NM90mIR4O4Z',
	},
	{
		Min: 16,
		Max: 25,
		roll: '1d1',
		itemType: 'Crossbow, heavy',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 350,
		id: 'D35E.weapons-and-ammo.vqF4kshibBDN624D',
	},
	{
		Min: 26,
		Max: 35,
		roll: '1d1',
		itemType: 'Crossbow, light',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 335,
		id: 'D35E.weapons-and-ammo.RWbjRwSPsuPAUDhw',
	},
	{
		Min: 36,
		Max: 39,
		roll: '1d1',
		itemType: 'Dart',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 300,
		id: 'D35E.weapons-and-ammo.mCwwHo32SU7kjGyu',
	},
	{
		Min: 40,
		Max: 41,
		roll: '1d1',
		itemType: 'Javelin',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 301,
		id: 'D35E.weapons-and-ammo.KmbhZ4Z674Yk9yIh',
	},
	{
		Min: 42,
		Max: 46,
		roll: '1d1',
		itemType: 'Shortbow',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 330,
		id: 'D35E.weapons-and-ammo.Ata6ajiY9wuAnBLB',
	},
	{
		Min: 47,
		Max: 51,
		roll: '1d1',
		itemType: 'Shortbow, composite (+0 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 375,
		id: 'D35E.weapons-and-ammo.GGS4thGbUH5eKndT',
	}, //TODO no distinct items for different composite shortbows
	{
		Min: 52,
		Max: 56,
		roll: '1d1',
		itemType: 'Shortbow, composite (+1 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 450,
		id: 'D35E.weapons-and-ammo.GGS4thGbUH5eKndT',
	},
	{
		Min: 57,
		Max: 61,
		roll: '1d1',
		itemType: 'Shortbow, composite (+2 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 525,
		id: 'D35E.weapons-and-ammo.GGS4thGbUH5eKndT',
	},
	{
		Min: 62,
		Max: 65,
		roll: '1d1',
		itemType: 'Sling',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 300,
		id: 'D35E.weapons-and-ammo.cJV7OBm9KiF2WWiu',
	},
	{
		Min: 66,
		Max: 75,
		roll: '1d1',
		itemType: 'Longbow',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 375,
		id: 'D35E.weapons-and-ammo.PqJih70EG2A1XNGf',
	},
	{
		Min: 76,
		Max: 80,
		roll: '1d1',
		itemType: 'Longbow, composite',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 400,
		id: 'D35E.weapons-and-ammo.msTiRxZVnecbPCA8',
	},
	{
		//TODO no distinct items for composite longbows
		Min: 81,
		Max: 85,
		roll: '1d1',
		itemType: 'Longbow, composite (+1 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 500,
		id: 'D35E.weapons-and-ammo.msTiRxZVnecbPCA8',
	},
	{
		Min: 86,
		Max: 90,
		roll: '1d1',
		itemType: 'Longbow, composite (+2 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 600,
		id: 'D35E.weapons-and-ammo.msTiRxZVnecbPCA8',
	},
	{
		Min: 91,
		Max: 95,
		roll: '1d1',
		itemType: 'Longbow, composite (+3 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 700,
		id: 'D35E.weapons-and-ammo.msTiRxZVnecbPCA8',
	},
	{
		Min: 96,
		Max: 100,
		roll: '1d1',
		itemType: 'Longbow, composite (+4 Str bonus)',
		type: 'item',
		table: rangedWeaponsAbilityTable,
		value: 800,
		id: 'D35E.weapons-and-ammo.msTiRxZVnecbPCA8',
	},
]

//TODO fix Items ID
const MundaneItemsTable = [
	{
		Min: 1,
		Max: 17,
		roll: '1d1',
		table: [
			{
				Min: 1,
				Max: 12,
				roll: '1d4',
				itemType: 'Alchemist’s fire',
				value: 20,
				type: 'item',
			},
			{
				Min: 13,
				Max: 24,
				roll: '2d4',
				itemType: 'Acid',
				value: 10,
				type: 'item',
			},
			{
				Min: 25,
				Max: 36,
				roll: '1d4',
				itemType: 'Smokesticks',
				value: 20,
				type: 'item',
			},
			{
				Min: 37,
				Max: 48,
				roll: '1d4',
				itemType: 'Holy water',
				value: 25,
				type: 'item',
			},
			{
				Min: 49,
				Max: 62,
				roll: '1d4',
				itemType: 'Antitoxin',
				value: 50,
				type: 'item',
			},
			{
				Min: 63,
				Max: 74,
				roll: '1d1',
				itemType: 'Everburning torch',
				value: 0,
				type: 'item',
			},
			{
				Min: 75,
				Max: 88,
				roll: '1d4',
				itemType: 'Tanglefoot bags',
				value: 50,
				type: 'item',
			},
			{
				Min: 89,
				Max: 100,
				roll: '1d4',
				itemType: 'Thunderstones',
				value: 30,
				type: 'item',
			},
		],
		itemType: 'Alchemical item',
		value: 0,
		type: 'roll',
	},
	{
		Min: 18,
		Max: 50,
		roll: '1d1',
		table: [
			{
				Min: 1,
				Max: 12,
				roll: '1d1',
				itemType: 'Chain shirt',
				value: 100,
				type: 'item',
			},
			{
				Min: 13,
				Max: 18,
				roll: '1d1',
				itemType: 'Masterwork studded leather',
				value: 175,
				type: 'item',
			},
			{
				Min: 19,
				Max: 26,
				roll: '1d1',
				itemType: 'Breastplate',
				value: 200,
				type: 'item',
			},
			{
				Min: 27,
				Max: 34,
				roll: '1d1',
				itemType: 'Banded mail',
				value: 250,
				type: 'item',
			},
			{
				Min: 35,
				Max: 54,
				roll: '1d1',
				itemType: 'Half-plate',
				value: 600,
				type: 'item',
			},
			{
				Min: 55,
				Max: 80,
				roll: '1d1',
				itemType: 'Full plate',
				value: 1500,
				type: 'item',
			},
			{
				Min: 81,
				Max: 90,
				roll: '1d1',
				table: [
					{
						Min: 1,
						Max: 50,
						roll: '1d1',
						itemType: 'Buckler',
						value: 205,
						type: 'item',
						id: 'D35E.magicitems.w7IiEvwHTxwhNWWs',
					},
					{
						Min: 51,
						Max: 100,
						roll: '1d1',
						itemType: 'Shield',
						value: 257,
						type: 'item',
						id: 'D35E.magicitems.hJy8FunC2kvlC19b',
					},
				],
				itemType: 'Darkwood',
				value: 0,
				type: 'roll',
			},
			{
				Min: 91,
				Max: 100,
				roll: '1d1',
				itemType: 'Masterwork',
				table: [
					{
						Min: 1,
						Max: 17,
						roll: '1d1',
						itemType: 'Buckler',
						value: 165,
						type: 'item',
					},
					{
						Min: 18,
						Max: 40,
						roll: '1d1',
						itemType: 'Light wooden shield',
						value: 153,
						type: 'item',
					},
					{
						Min: 41,
						Max: 60,
						roll: '1d1',
						itemType: 'Light steel shield',
						value: 159,
						type: 'item',
					},
					{
						Min: 61,
						Max: 83,
						roll: '1d1',
						itemType: 'Heavy wooden shield',
						value: 157,
						type: 'item',
					},
					{
						Min: 84,
						Max: 100,
						roll: '1d1',
						itemType: 'Heavy steel shield',
						value: 170,
						type: 'item',
					},
				],
				value: 0,
				type: 'roll',
			},
		],
		itemType: '',
		value: 0,
		type: 'roll',
	},
	{
		Min: 51,
		Max: 83,
		roll: '1d1',
		table: [
			{
				Min: 1,
				Max: 50,
				roll: '1d1',
				table: CommonMeleeWeaponTable,
				itemType: 'common melee weapon',
				value: 0,
				type: 'roll',
			},
			{
				Min: 51,
				Max: 70,
				roll: '1d1',
				table: UncommonMeleeWeaponTable,
				itemType: 'uncommon melee weapon',
				value: 0,
				type: 'roll',
			},
			{
				Min: 71,
				Max: 100,
				roll: '1d1',
				table: CommonRangedWeaponTable,
				itemType: 'common ranged weapon',
				value: 0,
				type: 'roll',
			},
		],
		itemType: 'Masterwork',
		value: 0,
		type: 'roll',
	},
	{
		Min: 84,
		Max: 100,
		roll: '1d1',
		table: [
			{
				Min: 1,
				Max: 3,
				roll: '1d1',
				itemType: 'Backpack, empty',
				value: 2,
				type: 'item',
			},
			{
				Min: 4,
				Max: 6,
				roll: '1d1',
				itemType: 'Crowbar',
				value: 2,
				type: 'item',
			},
			{
				Min: 7,
				Max: 11,
				roll: '1d1',
				itemType: 'Lantern, bullseye',
				value: 12,
				type: 'item',
			},
			{
				Min: 12,
				Max: 16,
				roll: '1d1',
				itemType: 'Lock, simple',
				value: 20,
				type: 'item',
			},
			{
				Min: 17,
				Max: 21,
				roll: '1d1',
				itemType: 'Lock, average',
				value: 40,
				type: 'item',
			},
			{
				Min: 22,
				Max: 28,
				roll: '1d1',
				itemType: 'Lock, good',
				value: 80,
				type: 'item',
			},
			{
				Min: 29,
				Max: 35,
				roll: '1d1',
				itemType: 'Lock, superior',
				value: 150,
				type: 'item',
			},
			{
				Min: 36,
				Max: 40,
				roll: '1d1',
				itemType: 'Manacles, masterwork',
				value: 50,
				type: 'item',
			},
			{
				Min: 41,
				Max: 43,
				roll: '1d1',
				itemType: 'Mirror, small steel',
				value: 10,
				type: 'item',
			},
			{
				Min: 44,
				Max: 46,
				roll: '1d1',
				itemType: 'Rope, silk (50 ft.)',
				value: 10,
				type: 'item',
			},
			{
				Min: 47,
				Max: 53,
				roll: '1d1',
				itemType: 'Spyglass',
				value: 1000,
				type: 'item',
			},
			{
				Min: 54,
				Max: 58,
				roll: '1d1',
				itemType: 'Artisan’s tools, masterwork',
				value: 55,
				type: 'item',
			},
			{
				Min: 59,
				Max: 63,
				roll: '1d1',
				itemType: 'Climber’s kit',
				value: 80,
				type: 'item',
			},
			{
				Min: 64,
				Max: 68,
				roll: '1d1',
				itemType: 'Disguise kit',
				value: 50,
				type: 'item',
			},
			{
				Min: 69,
				Max: 73,
				roll: '1d1',
				itemType: 'Healer’s kit',
				value: 50,
				type: 'item',
			},
			{
				Min: 74,
				Max: 77,
				roll: '1d1',
				itemType: 'Holy symbol, silver',
				value: 25,
				type: 'item',
			},
			{
				Min: 78,
				Max: 81,
				roll: '1d1',
				itemType: 'Hourglass',
				value: 25,
				type: 'item',
			},
			{
				Min: 82,
				Max: 88,
				roll: '1d1',
				itemType: 'Magnifying glass',
				value: 100,
				type: 'item',
			},
			{
				Min: 89,
				Max: 95,
				roll: '1d1',
				itemType: 'Musical instrument, masterwork',
				value: 100,
				type: 'item',
			},
			{
				Min: 96,
				Max: 100,
				roll: '1d1',
				itemType: 'Thieves’ tools, masterwork',
				value: 50,
				type: 'item',
			},
		],
		itemType: '',
		value: 0,
		type: 'roll',
	},
]

const armorAbilityTable = [
	{
		minorMin: 1,
		minorMax: 25,
		mediumMin: 1,
		mediumMax: 5,
		majorMin: 1,
		majorMax: 3,
		itemType: 'Glamered',
		type: 'ability',
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
		itemType: 'Fortification, light',
		type: 'ability',
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
		itemType: 'Slick',
		type: 'ability',
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
		itemType: 'Shadow',
		type: 'ability',
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
		itemType: 'Silent moves',
		type: 'ability',
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
		//TODO this kind of ability needs an enchantementLevel data to be passed to the function that applies the ability to the item
		itemType: 'Spell resistance (13)',
		type: 'ability',
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
		itemType: 'Slick, improved',
		type: 'ability',
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
		itemType: 'Shadow, improved',
		type: 'ability',
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
		itemType: 'Silent moves, improved',
		type: 'ability',
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
		itemType: 'Acid resistance',
		type: 'ability',
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
		itemType: 'Cold resistance',
		type: 'ability',
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
		itemType: 'Electricity resistance',
		type: 'ability',
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
		itemType: 'Fire resistance',
		type: 'ability',
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
		itemType: 'Sonic resistance',
		type: 'ability',
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
		itemType: 'Ghost touch',
		type: 'ability',
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
		itemType: 'Invulnerability',
		type: 'ability',
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
		itemType: 'Fortification, moderate',
		type: 'ability',
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
		itemType: 'Spell resistance (15)',
		type: 'ability',
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
		itemType: 'Wild',
		type: 'ability',
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
		itemType: 'Slick, greater',
		type: 'ability',
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
		itemType: 'Shadow, greater',
		type: 'ability',
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
		itemType: 'Silent moves, greater',
		type: 'ability',
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
		itemType: 'Acid resistance, improved',
		type: 'ability',
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
		itemType: 'Cold resistance, improved',
		type: 'ability',
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
		itemType: 'Electricity resistance, improved',
		type: 'ability',
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
		itemType: 'Fire resistance, improved',
		type: 'ability',
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
		itemType: 'Sonic resistance, improved',
		type: 'ability',
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
		itemType: 'Spell resistance (17)',
		type: 'ability',
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
		itemType: 'Etherealness',
		type: 'ability',
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
		itemType: 'Undead controlling',
		type: 'ability',
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
		itemType: 'Fortification, heavy',
		type: 'ability',
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
		itemType: 'Spell resistance (19)',
		type: 'ability',
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
		itemType: 'Acid resistance, greater',
		type: 'ability',
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
		itemType: 'Cold resistance, greater',
		type: 'ability',
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
		itemType: 'Electricity resistance, greater',
		type: 'ability',
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
		itemType: 'Fire resistance, greater',
		type: 'ability',
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
		itemType: 'Sonic resistance, greater',
		type: 'ability',
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
		itemType: 'Roll ability twice',
		type: 'ability++',
		value: 0,
		enhancement: 0,
	},
]

// https://regex101.com/r/yIjBpB/1
const shieldAbilityTable = [
	{
		minorMin: 1,
		minorMax: 20,
		mediumMin: 1,
		mediumMax: 10,
		majorMin: 1,
		majorMax: 5,
		itemType: 'Arrow catching',
		type: 'ability',
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
		itemType: 'Bashing',
		type: 'ability',
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
		itemType: 'Blinding',
		type: 'ability',
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
		itemType: 'Fortification, light',
		type: 'ability',
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
		itemType: 'Arrow deflection',
		type: 'ability',
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
		itemType: 'Animated',
		type: 'ability',
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
		itemType: 'Spell resistance (13)',
		type: 'ability',
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
		itemType: 'Acid resistance',
		type: 'ability',
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
		itemType: 'Cold resistance',
		type: 'ability',
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
		itemType: 'Electricity resistance',
		type: 'ability',
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
		itemType: 'Fire resistance',
		type: 'ability',
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
		itemType: 'Sonic resistance',
		type: 'ability',
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
		itemType: 'Ghost touch',
		type: 'ability',
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
		itemType: 'Fortification, moderate',
		type: 'ability',
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
		itemType: 'Spell resistance (15)',
		type: 'ability',
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
		itemType: 'Wild',
		type: 'ability',
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
		itemType: 'Acid resistance, improved',
		type: 'ability',
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
		itemType: 'Cold resistance, improved',
		type: 'ability',
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
		itemType: 'Electricity resistance, improved',
		type: 'ability',
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
		itemType: 'Fire resistance, improved',
		type: 'ability',
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
		itemType: 'Sonic resistance, improved',
		type: 'ability',
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
		itemType: 'Spell resistance (17)',
		type: 'ability',
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
		itemType: 'Undead controlling',
		type: 'ability',
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
		itemType: 'Fortification, heavy',
		type: 'ability',
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
		itemType: 'Reflecting',
		type: 'ability',
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
		itemType: 'Spell resistance (19)',
		type: 'ability',
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
		itemType: 'Acid resistance, greater',
		type: 'ability',
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
		itemType: 'Cold resistance, greater',
		type: 'ability',
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
		itemType: 'Electricity resistance, greater',
		type: 'ability',
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
		itemType: 'Fire resistance, greater',
		type: 'ability',
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
		itemType: 'Sonic resistance, greater',
		type: 'ability',
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
		itemType: 'Roll ability twice',
		type: 'ability++',
		value: 0,
		enhancement: 0,
	},
]

const shieldTypeTable = [
	{
		Min: 1,
		Max: 10,
		itemType: 'Buckler',
		type: 'item',
		table: shieldAbilityTable,
		value: 165,
		id: 'D35E.armors-and-shields.gsE0PAOmCwivue5A',
	},
	{
		Min: 11,
		Max: 15,
		itemType: 'Shield, light, wooden',
		type: 'item',
		table: shieldAbilityTable,
		value: 153,
		id: 'D35E.armors-and-shields.l1qNkx4xGXelq6yY',
	},
	{
		Min: 16,
		Max: 20,
		itemType: 'Shield, light, steel',
		type: 'item',
		table: shieldAbilityTable,
		value: 159,
		id: 'D35E.armors-and-shields.iRB7ACzHf14VIk4M',
	},
	{
		Min: 21,
		Max: 30,
		itemType: 'Shield, heavy, wooden',
		type: 'item',
		table: shieldAbilityTable,
		value: 157,
		id: 'D35E.armors-and-shields.ioCsEZc3Shc3t4Sv',
	},
	{
		Min: 31,
		Max: 95,
		itemType: 'Shield, heavy, steel',
		type: 'item',
		table: shieldAbilityTable,
		value: 170,
		id: 'D35E.armors-and-shields.2fK608aSYU9QDmzw',
	},
	{
		Min: 96,
		Max: 100,
		itemType: 'Shield, tower',
		type: 'item',
		table: shieldAbilityTable,
		value: 180,
		id: 'D35E.armors-and-shields.3mQTIhwAaZgvJq12',
	},
]

const armorTypeTable = [
	{
		Min: 1,
		Max: 1,
		itemType: 'Padded',
		type: 'item',
		table: armorAbilityTable,
		value: 155,
		id: 'D35E.armors-and-shields.ziXQ1DlDMGTAUOe9',
	},
	{
		Min: 2,
		Max: 2,
		itemType: 'Leather',
		type: 'item',
		table: armorAbilityTable,
		value: 160,
		id: 'D35E.armors-and-shields.6YCQkebsf4vR508H',
	},
	{
		Min: 3,
		Max: 17,
		itemType: 'Studded leather',
		type: 'item',
		table: armorAbilityTable,
		value: 175,
		id: 'D35E.armors-and-shields.xeuREriTfdZR1yCD',
	},
	{
		Min: 18,
		Max: 32,
		itemType: 'Chain shirt',
		type: 'item',
		table: armorAbilityTable,
		value: 250,
		id: 'D35E.armors-and-shields.iGu21zy6QtroUZ4O',
	},
	{
		Min: 33,
		Max: 42,
		itemType: 'Hide',
		type: 'item',
		table: armorAbilityTable,
		value: 165,
		id: 'D35E.armors-and-shields.aI6gSI7gnCLCucw0',
	},
	{
		Min: 43,
		Max: 43,
		itemType: 'Scale mail',
		type: 'item',
		table: armorAbilityTable,
		value: 200,
		id: 'D35E.armors-and-shields.nnDSj5NxUb9Q8z8S',
	},
	{
		Min: 44,
		Max: 44,
		itemType: 'Chainmail',
		type: 'item',
		table: armorAbilityTable,
		value: 300,
		id: 'D35E.armors-and-shields.unY9jt1B8a5bbnzO',
	},
	{
		Min: 45,
		Max: 57,
		itemType: 'Breastplate',
		type: 'item',
		table: armorAbilityTable,
		value: 350,
		id: 'D35E.armors-and-shields.5TzaS38RPAx1oj9p',
	},
	{
		Min: 58,
		Max: 58,
		itemType: 'Splint mail',
		type: 'item',
		table: armorAbilityTable,
		value: 350,
		id: 'D35E.armors-and-shields.CRtBIIyBtNCsxztO',
	},
	{
		Min: 59,
		Max: 59,
		itemType: 'Banded mail',
		type: 'item',
		table: armorAbilityTable,
		value: 400,
		id: 'D35E.armors-and-shields.HpPFigQKr6C6Dej4',
	},
	{
		Min: 60,
		Max: 60,
		itemType: 'Half-plate',
		type: 'item',
		table: armorAbilityTable,
		value: 750,
		id: 'D35E.armors-and-shields.Y10QTnY9wVXg5VCm',
	},
	{
		Min: 61,
		Max: 100,
		itemType: 'Full plate',
		type: 'item',
		table: armorAbilityTable,
		value: 1650,
		id: 'D35E.armors-and-shields.h65qEp22nsyRoeRa',
	},
]

// TODO specific items ids and eventually their stats
// https://regex101.com/r/5PgyZw/2
const specificArmorTable = [
	{
		minorMin: 1,
		minorMax: 50,
		mediumMin: 1,
		mediumMax: 25,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Mithral shirt',
		table: armorAbilityTable,
		type: 'item',
		value: 1100,
		enhancement: 0,
		id: 'D35E.magicitems.jAD73UYJtyiJZlBx',
		//TODO  nothing applied for: Speed while wearing a mithral shirt is 30 feet for Medium creatures, or 20 feet for Small.
		// itemOverride: {
		// 	data: {
		// 		name: 'Mithral shirt',
		// 		data: {
		// 			description: {
		// 				value:
		// 					'<p>A chain shirt protects your torso while leaving your limbs free and mobile. It includes a layer of quilted fabric worn underneath to prevent chafing and to cushion the impact of blows. A chain shirt comes with a steel cap. This extremely light chain shirt is made of very fine mithral links. Speed while wearing a mithral shirt is 30 feet for Medium creatures, or 20 feet for Small. The armor has an arcane spell failure chance of 10%, a maximum Dexterity bonus of +6, and no armor check penalty. It is considered light armor and weighs 10 pounds.</p>',
		// 			},
		// 			weight: 10,
		// 			unidentified: {
		// 				price: 100,
		// 				name: 'Unidentified Chain Shirt',
		// 			},
		// 			identifiedName: 'Mithral shirt',
		// 			armor: { value: 4, dex: 6, acp: 0, enh: 0 },
		// 			spellFailure: 10,
		// 		},
		// 	},
		// },
	},
	{
		minorMin: 51,
		minorMax: 80,
		mediumMin: 26,
		mediumMax: 45,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Dragonhide plate',
		table: armorAbilityTable,
		type: 'item',
		value: 3300,
		enhancement: 0,
		id: 'D35E.magicitems.Dj2ItY5tZZ8PpGH8',
		// itemOverride: {
		// 	data: {
		// 		name: 'Dragonhide plate',
		// 		data: {
		// 			description: {
		// 				value:
		// 					'<p>This armor consists of shaped and fitted metal plates riveted and interlocked to cover the entire body. The suit includes gauntlets, heavy leather boots, a visored helmet, and a thick layer of padding that is worn underneath the armor. Buckles and straps distribute the weight over the body, so full plate hampers movement less than splint mail even though splint is lighter. Each suit of full plate must be individually fitted to its owner by a master armorsmith, although a captured suit can be resized to fit a new owner at a cost of 200 to 800 (2d4 × 100) gold pieces. Full plate is also known as field plate. This suit of full plate is made of dragonhide, rather than metal, so druids can wear it.</p>',
		// 			},
		// 			identifiedName: 'Dragonhide plate',
		// 			unidentified: {
		// 				price: 1500,
		// 				name: 'Unidentified Full Plate',
		// 			},
		// 		},
		// 	},
		// },
	},
	{
		minorMin: 81,
		minorMax: 100,
		mediumMin: 46,
		mediumMax: 57,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Elven chain',
		table: armorAbilityTable,
		type: 'item',
		value: 4150,
		enhancement: 0,
		id: 'D35E.magicitems.6VWhMhntjPitWCmo',
		// itemOverride: {
		// 	data: {
		// 		name: 'Elven chain',
		// 		data: {
		// 			description: {
		// 				value:
		// 					'<p>This armor is made of interlocking metal rings. It includes a layer of quilted fabric worn underneath to prevent chafing and to cushion the impact of blows. Several layers of mail are hung over vital areas. Most of the armor’s weight hangs from the shoulders, making chainmail uncomfortable to wear for long periods of time. The suit includes gauntlets. This extremely light chainmail is made of very fine mithral links. Speed while wearing elven chain is 30 feet for Medium creatures, or 20 feet for Small. The armor has an arcane spell failure chance of 20%, a maximum Dexterity bonus of +4, and an armor check penalty of -2. It is considered light armor and weighs 20 pounds.</p>',
		// 			},
		// 			identifiedName: 'Elven chain',
		// 			unidentified: {
		// 				price: 300,
		// 				name: 'Chainmail',
		// 			},
		// 			armor: { value: 5, dex: 4, acp: 2, enh: 0 },
		// 			spellFailure: 20,
		// 			weight: 20,
		// 			equipmentSubtype: 'lightArmor',
		// 		},
		// 	},
		// },
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 58,
		mediumMax: 67,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Rhino hide',
		table: armorAbilityTable,
		type: 'item',
		value: 5165,
		enhancement: 2,
		id: 'D35E.magicitems.dVIcxQGYoztt36c4',
		// itemOverride: {
		// 	data: {
		// 		name: 'Rhino hide',
		// 		data: {
		// 			description: {
		// 				value:
		// 					'<p>This armor is prepared from multiple layers of leather and animal hides. It is stiff and hard to move in. Druids, who wear only nonmetallic armor, favor hide. This +2 hide armor is made from rhinoceros hide. In addition to granting a +2 enhancement bonus to AC, it has a -1 armor check penalty and deals an additional 2d6 points of damage on any successful charge attack made by the wearer, including a mounted charge.</p>',
		// 			},
		// 			identifiedName: 'Rhino hide',
		// 			unidentified: {
		// 				price: 165,
		// 				name: 'Hide',
		// 			},
		// 			armor: { value: 5, dex: 4, acp: -1, enh: 0 },
		// 			spellFailure: 20,
		// 			weight: 20,
		// 			equipmentSubtype: 'lightArmor',
		// 		},
		// 	},
		// },
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 68,
		mediumMax: 82,
		majorMin: 1,
		majorMax: 10,
		itemType: 'Adamantine breastplate',
		table: armorAbilityTable,
		type: 'item',
		value: 10200,
		id: 'D35E.magicitems.is99PCo6Z9bSbMoP',
		enhancement: 0,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 83,
		mediumMax: 97,
		majorMin: 11,
		majorMax: 20,
		itemType: 'Dwarven plate',
		table: armorAbilityTable,
		type: 'item',
		value: 16500,
		id: 'D35E.magicitems.kfLr3EpVLKOEusZa',
		enhancement: 0,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 98,
		mediumMax: 100,
		majorMin: 21,
		majorMax: 32,
		itemType: 'Banded mail of luck',
		table: armorAbilityTable,
		type: 'item',
		value: 18900,
		id: 'D35E.magicitems.PtBS9oH4PMTmqlLN',
		enhancement: 3,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 33,
		majorMax: 50,
		itemType: 'Celestial armor',
		table: armorAbilityTable,
		type: 'item',
		value: 22400,
		id: 'D35E.magicitems.Tq6ca3rawY6YzLTn',
		enhancement: 3,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 51,
		majorMax: 60,
		itemType: 'Plate armor of the deep',
		table: armorAbilityTable,
		type: 'item',
		value: 24650,
		id: 'D35E.magicitems.K2jz9sfgqdmbJhVp',
		enhancement: 1,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 61,
		majorMax: 75,
		itemType: 'Breastplate of command',
		table: armorAbilityTable,
		type: 'item',
		value: 25400,
		id: 'D35E.magicitems.e5PpIsAb6b52ItF3',
		enhancement: 2,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 76,
		majorMax: 90,
		itemType: 'Mithral full plate of speed',
		table: armorAbilityTable,
		type: 'item',
		value: 26500,
		id: 'D35E.magicitems.EGYUUiDYbDJKn3QB',
		enhancement: 1,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 91,
		majorMax: 100,
		itemType: 'Demon armor',
		table: armorAbilityTable,
		type: 'item',
		value: 52260,
		id: 'D35E.magicitems.UslG3D005KBJoixx',
		enhancement: 4,
	},
]

const specificShieldTable = [
	{
		minorMin: 1,
		minorMax: 30,
		mediumMin: 1,
		mediumMax: 20,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Darkwood buckler',
		table: shieldAbilityTable,
		enhancement: 0,
		type: 'item',
		value: 205,
		id: 'D35E.magicitems.w7IiEvwHTxwhNWWs',
	},
	{
		minorMin: 31,
		minorMax: 80,
		mediumMin: 21,
		mediumMax: 45,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Darkwood shield',
		table: shieldAbilityTable,
		enhancement: 0,
		type: 'item',
		value: 257,
		id: 'D35E.magicitems.hJy8FunC2kvlC19b',
	},
	{
		minorMin: 81,
		minorMax: 95,
		mediumMin: 46,
		mediumMax: 70,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Mithral heavy shield',
		table: shieldAbilityTable,
		enhancement: 0,
		type: 'item',
		value: 1020,
		id: 'D35E.magicitems.XHOyTNHQLvFISOvT',
	},
	{
		minorMin: 96,
		minorMax: 100,
		mediumMin: 71,
		mediumMax: 85,
		majorMin: 1,
		majorMax: 20,
		itemType: 'Caster’s shield',
		table: shieldAbilityTable,
		enhancement: 1,
		type: 'item',
		value: 3153,
		id: 'D35E.magicitems.vQwB4CttHa5J2xsm',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 86,
		mediumMax: 90,
		majorMin: 21,
		majorMax: 40,
		itemType: 'Spined shield',
		table: shieldAbilityTable,
		enhancement: 1,
		type: 'item',
		value: 5580,
		id: 'D35E.magicitems.ZrYV6Vkaf5v91pRD',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 91,
		mediumMax: 95,
		majorMin: 41,
		majorMax: 60,
		itemType: 'Lion’s shield',
		table: shieldAbilityTable,
		enhancement: 2,
		type: 'item',
		value: 9170,
		id: 'D35E.magicitems.3JS7KZSvvR2SNvkQ',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 96,
		mediumMax: 100,
		majorMin: 61,
		majorMax: 90,
		itemType: 'Winged shield',
		table: shieldAbilityTable,
		enhancement: 3,
		type: 'item',
		value: 17257,
		id: 'D35E.magicitems.9X957qdDMOClkCzz',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 91,
		majorMax: 100,
		itemType: 'Absorbing shield',
		table: shieldAbilityTable,
		enhancement: 1,
		type: 'item',
		value: 50170,
		id: 'D35E.magicitems.BVzLvjwdrTQToXV8',
	},
]

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
		itemType: 'shield',
		value: 1000,
		type: 'roll',
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
		itemType: 'armor',
		value: 1000,
		type: 'roll',
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
		itemType: 'shield',
		value: 4000,
		type: 'roll',
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
		itemType: 'armor',
		value: 4000,
		type: 'roll',
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
		itemType: 'shield',
		value: 9000,
		type: 'roll',
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
		itemType: 'armor',
		value: 9000,
		type: 'roll',
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
		itemType: 'shield',
		value: 16000,
		type: 'roll',
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
		itemType: 'armor',
		value: 16000,
		type: 'roll',
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
		itemType: 'shield',
		value: 25000,
		type: 'roll',
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
		itemType: 'armor',
		value: 25000,
		type: 'roll',
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
		itemType: 'Specific armor',
		value: 0,
		type: 'roll',
		table: specificArmorTable,
	},
	{
		minorMin: 90,
		minorMax: 91,
		mediumMin: 61,
		mediumMax: 63,
		majorMin: 61,
		majorMax: 63,
		enhancement: 0,
		itemType: 'Specific shield',
		value: 0,
		type: 'roll',
		table: specificShieldTable,
	},
	{
		minorMin: 92,
		minorMax: 100,
		mediumMin: 64,
		mediumMax: 100,
		majorMin: 64,
		majorMax: 10,
		enhancement: 0,
		itemType: 'Specific ability',
		value: 0,
		type: 'roll+',
	},
]

//TODO arrows amount?
const specificWeaponTable = [
	{
		minorMin: 1,
		minorMax: 15,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Sleep arrow',
		amount: 20,
		table: rangedWeaponsAbilityTable,
		type: 'item',
		value: 132,
		enhancement: 0,
		id: 'D35E.magicitems.3FoRpIEn7F1gY4v2',
	},
	{
		minorMin: 16,
		minorMax: 25,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Screaming bolt',
		amount: 20,
		table: rangedWeaponsAbilityTable,
		type: 'item',
		value: 267,
		enhancement: 0,
		id: 'D35E.magicitems.f2XxNkWjxcEDhIdU',
	},
	{
		minorMin: 26,
		minorMax: 45,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Silver dagger, masterwork',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 322,
		enhancement: 0,
		id: 'D35E.magicitems.d16sug8RYT91mNfF',
	},
	{
		minorMin: 46,
		minorMax: 65,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Cold iron longsword, masterwork',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 330,
		enhancement: 0,
		id: 'D35E.magicitems.Jj8U2x0l8IeQfpYU',
	},
	{
		minorMin: 66,
		minorMax: 75,
		mediumMin: 1,
		mediumMax: 9,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Javelin of lightning',
		table: rangedWeaponsAbilityTable,
		type: 'item',
		value: 1500,
		enhancement: 0,
		id: 'D35E.magicitems.cVhskNEiVT9QwTst',
	},
	{
		minorMin: 76,
		minorMax: 80,
		mediumMin: 10,
		mediumMax: 15,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Slaying arrow',
		amount: 20,
		table: rangedWeaponsAbilityTable,
		type: 'item',
		value: 2282,
		enhancement: 0,
		id: 'D35E.magicitems.EF4H9mIvLO4zndMu',
	},
	{
		minorMin: 81,
		minorMax: 90,
		mediumMin: 16,
		mediumMax: 24,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Adamantine dagger',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 3002,
		enhancement: 0,
		id: 'D35E.magicitems.NHlM8MS6Q7OQMXvR',
	},
	{
		minorMin: 91,
		minorMax: 100,
		mediumMin: 25,
		mediumMax: 33,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Adamantine battleaxe',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 3010,
		enhancement: 0,
		id: 'D35E.magicitems.Ih96VEecwtRp5gb7',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 34,
		mediumMax: 37,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Slaying arrow (greater)',
		amount: 20,
		table: rangedWeaponsAbilityTable,
		type: 'item',
		value: 4057,
		enhancement: 0,
		id: 'D35E.magicitems.EF4H9mIvLO4zndMu',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 38,
		mediumMax: 40,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Shatterspike',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 4315,
		enhancement: 0,
		id: 'D35E.magicitems.BcFtLaCHxW2ZxKCs',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 41,
		mediumMax: 46,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Dagger of venom',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 8302,
		enhancement: 0,
		id: 'D35E.magicitems.wvRmCNINFroJi7Cu',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 47,
		mediumMax: 51,
		majorMin: 0,
		majorMax: 0,
		itemType: 'Trident of warning',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 10115,
		enhancement: 0,
		id: 'D35E.magicitems.LdViwZ9coU4fh5Ht',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 52,
		mediumMax: 57,
		majorMin: 1,
		majorMax: 4,
		itemType: 'Assassin’s dagger',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 10302,
		enhancement: 0,
		id: 'D35E.magicitems.9IKHzFGLwnA6B8dd',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 58,
		mediumMax: 62,
		majorMin: 5,
		majorMax: 7,
		itemType: 'Shifter’s sorrow',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 12780,
		enhancement: 0,
		id: 'D35E.magicitems.kawFZRBpJZQNAmHB',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 63,
		mediumMax: 66,
		majorMin: 8,
		majorMax: 9,
		itemType: 'Trident of fish command',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 18650,
		enhancement: 0,
		id: 'D35E.magicitems.kpPVgJJxszyYviuv',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 67,
		mediumMax: 74,
		majorMin: 10,
		majorMax: 13,
		itemType: 'Flame tongue',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 20715,
		enhancement: 0,
		id: 'D35E.magicitems.47kuvXipGQMtRsfL',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 75,
		mediumMax: 79,
		majorMin: 14,
		majorMax: 17,
		itemType: 'Luck blade (0 wishes)',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 22060,
		enhancement: 0,
		id: 'D35E.magicitems.d7mxmwoU922b7s3Z',
		itemOverride: {
			data: {
				name: 'Luck blade (0 wishes)',
				data: {
					identifiedName: 'Luck blade (0 wishes)',
				},
			},
		},
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 80,
		mediumMax: 86,
		majorMin: 18,
		majorMax: 24,
		itemType: 'Sword of subtlety',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 22310,
		enhancement: 0,
		id: 'D35E.magicitems.l3vI1GqaEOMXNlik',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 87,
		mediumMax: 91,
		majorMin: 25,
		majorMax: 31,
		itemType: 'Sword of the planes',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 22315,
		enhancement: 0,
		id: 'D35E.magicitems.1pO8JB9h7XJgHtxV',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 92,
		mediumMax: 95,
		majorMin: 32,
		majorMax: 37,
		itemType: 'Nine lives stealer',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 23057,
		enhancement: 0,
		id: 'D35E.magicitems.kmA6vOu6uGZWuy13',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 96,
		mediumMax: 98,
		majorMin: 38,
		majorMax: 42,
		itemType: 'Sword of life stealing',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 25715,
		enhancement: 0,
		id: 'D35E.magicitems.k36XYpIRycSonxvQ',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 99,
		mediumMax: 100,
		majorMin: 43,
		majorMax: 46,
		itemType: 'Oathbow',
		table: rangedWeaponsAbilityTable,
		type: 'item',
		value: 25600,
		enhancement: 0,
		id: 'D35E.magicitems.Q5mFEYDjt9kUvzua',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 47,
		majorMax: 51,
		itemType: 'Mace of terror',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 38552,
		enhancement: 0,
		id: 'D35E.magicitems.1Htk8570u6KY1hvN',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 52,
		majorMax: 57,
		itemType: 'Life-drinker',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 40320,
		enhancement: 0,
		id: 'D35E.magicitems.WS6GkO3dasHmIUsd',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 58,
		majorMax: 62,
		itemType: 'Sylvan scimitar',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 47315,
		enhancement: 0,
		id: 'D35E.magicitems.He8si0D5mnEVHVUg',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 63,
		majorMax: 67,
		itemType: 'Rapier of puncturing',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 50320,
		enhancement: 0,
		id: 'D35E.magicitems.jx1AfXX4HRFn7vuM',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 68,
		majorMax: 73,
		itemType: 'Sun blade',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 50335,
		enhancement: 0,
		id: 'D35E.magicitems.4OmDfUDNvBIGFCnc',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 74,
		majorMax: 79,
		itemType: 'Frost brand',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 54475,
		enhancement: 0,
		id: 'D35E.magicitems.MKD5oUEDL8hm6sEz',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 80,
		majorMax: 84,
		itemType: 'Dwarven thrower',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 60312,
		enhancement: 0,
		id: 'D35E.magicitems.iOMeOjoLiLEzGbPn',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 85,
		majorMax: 91,
		itemType: 'Luck blade (1 wish)',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 62360,
		enhancement: 0,
		//TODO Handle wish number
		id: 'D35E.magicitems.d7mxmwoU922b7s3Z',
		itemOverride: {
			data: {
				name: 'Luck blade (1 wishes)',
				data: {
					identifiedName: 'Luck blade (1 wishes)',
				},
			},
		},
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 92,
		majorMax: 95,
		itemType: 'Mace of smiting',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 75312,
		enhancement: 0,
		id: 'D35E.magicitems.Zb6VLW6pf0ZfsX1L',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 96,
		majorMax: 97,
		itemType: 'Luck blade (2 wishes)',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 102660,
		enhancement: 0,
		id: 'D35E.magicitems.d7mxmwoU922b7s3Z',
		itemOverride: {
			data: {
				name: 'Luck blade (2 wishes)',
				data: {
					identifiedName: 'Luck blade (2 wishes)',
				},
			},
		},
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 98,
		majorMax: 99,
		itemType: 'Holy avenger',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 120630,
		enhancement: 0,
		id: 'D35E.magicitems.DX6NyLEnI1ecclNo',
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 100,
		majorMax: 100,
		itemType: 'Luck blade (3 wishes)',
		table: meleeWeaponsAbilityTable,
		type: 'item',
		value: 142960,
		enhancement: 0,
		id: 'D35E.magicitems.d7mxmwoU922b7s3Z',
		itemOverride: {
			data: {
				name: 'Luck blade (3 wishes)',
				data: {
					identifiedName: 'Luck blade (3 wishes)',
				},
			},
		},
	},
]

const weaponsTypeTable = [
	{
		Min: 1,
		Max: 70,
		itemType: 'Common melee weapon',
		type: 'roll',
		table: CommonMeleeWeaponTable,
		value: 0,
	},
	{
		Min: 71,
		Max: 80,
		itemType: 'Uncommon weapon',
		type: 'roll',
		table: UncommonMeleeWeaponTable,
		value: 0,
	},
	{
		Min: 81,
		Max: 100,
		itemType: 'Common ranged weapon',
		type: 'roll',
		table: CommonRangedWeaponTable,
		value: 0,
	},
]

// https://regex101.com/r/mpV2EF/2
const weaponsTable = [
	{
		minorMin: 1,
		minorMax: 70,
		mediumMin: 1,
		mediumMax: 10,
		majorMin: 0,
		majorMax: 0,
		enhancement: 1,
		itemType: '',
		value: 2000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 71,
		minorMax: 85,
		mediumMin: 11,
		mediumMax: 29,
		majorMin: 0,
		majorMax: 0,
		enhancement: 2,
		itemType: '',
		value: 8000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 30,
		mediumMax: 58,
		majorMin: 1,
		majorMax: 20,
		enhancement: 3,
		itemType: '',
		value: 18000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 59,
		mediumMax: 62,
		majorMin: 21,
		majorMax: 38,
		enhancement: 4,
		itemType: '',
		value: 32000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 39,
		majorMax: 49,
		enhancement: 5,
		itemType: '',
		value: 50000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		enhancement: 6,
		itemType: '',
		value: 72000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		enhancement: 7,
		itemType: '',
		value: 98000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		enhancement: 8,
		itemType: '',
		value: 128000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		enhancement: 9,
		itemType: '',
		value: 162000,
		type: 'roll',
		table: weaponsTypeTable,
	},
	{
		minorMin: 0,
		minorMax: 0,
		mediumMin: 0,
		mediumMax: 0,
		majorMin: 0,
		majorMax: 0,
		enhancement: 10,
		itemType: '',
		value: 200000,
		type: 'roll',
		table: weaponsTypeTable,
	},

	{
		minorMin: 86,
		minorMax: 90,
		mediumMin: 63,
		mediumMax: 68,
		majorMin: 50,
		majorMax: 63,
		enhancement: 0,
		itemType: 'Specific weapon',
		value: 0,
		type: 'roll',
		table: specificWeaponTable,
	},
	{
		minorMin: 91,
		minorMax: 100,
		mediumMin: 69,
		mediumMax: 100,
		majorMin: 64,
		majorMax: 100,
		enhancement: 0,
		itemType: 'Special ability and roll again',
		value: 0,
		type: 'roll+',
	},
]

// https://regex101.com/r/5PgyZw/1
const MagicItemTable = [
	{
		minorMin: 1,
		minorMax: 4,
		mediumMin: 1,
		mediumMax: 10,
		majorMin: 1,
		majorMax: 10,
		itemType: 'Armor and shields',
		type: 'roll',
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
		itemType: 'Weapons',
		type: 'roll',
		table: weaponsTable,
		value: 0,
	},
	{
		minorMin: 10,
		minorMax: 44,
		mediumMin: 21,
		mediumMax: 30,
		majorMin: 21,
		majorMax: 25,
		itemType: 'Potions',
		type: 'roll',
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
		itemType: 'Rings',
		type: 'roll',
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
		itemType: 'Rods',
		type: 'roll',
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
		itemType: 'Scrolls',
		type: 'roll',
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
		itemType: 'Staffs',
		type: 'roll',
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
		itemType: 'Wands',
		type: 'roll',
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
		itemType: 'Wondrous items',
		type: 'roll',
		table: [],
		value: 0,
	},
]
//#endregion

//#region utility functions
function log(message) {
	if (CONFIG.debug['treasure-gen']) {
		// eslint-disable-next-line no-console
		console.log(message)
	}
}

function rollMagicItem(
	table,
	grade,
	prefix = '',
	testRolls = [],
	treasure,
	options
) {
	let magicItemRoll = new Roll('1d100').roll().total
	//TODO disable in production, automated testing purpose only
	if (testRolls && testRolls.length > 0) {
		magicItemRoll = testRolls.shift()
		// console.log("fudged dice roll = " + magicItemRoll)
	}

	let magicItemData = table.find(
		(r) =>
			r[grade + 'Min'] <= magicItemRoll &&
			r[grade + 'Max'] >= magicItemRoll
	)
	if (magicItemData === undefined) {
		//fallback for a table withoud minor-medium-major distinction
		magicItemData = table.find(
			(r) => r['Min'] <= magicItemRoll && r['Max'] >= magicItemRoll
		)
	} else {
		prefix = ''
	}

	window.rolls.push({
		roll: magicItemRoll,
		itemType: magicItemData.itemType || 'none',
	})

	// console.debug(
	//   "magicItemRoll: " + magicItemRoll + " " + magicItemData.itemType
	// );
	let result = {
		value: 0,
		enhancement: 0,
		type: '',
		ability: [],
		valueBonus: 0,
	}
	let roll = {}
	let abilities = []
	try {
		switch (magicItemData.type) {
			case 'item':
				Object.assign(result, {
					type: magicItemData.itemType.trim(),
					value: magicItemData.value || 0,
					table: magicItemData.table,
					id: magicItemData.id,
					itemOverride: magicItemData.itemOverride,
					amount: magicItemData.amount,
				})
				return result
			case 'roll':
				roll = rollMagicItem(
					magicItemData.table,
					grade,
					(prefix + ' ' + magicItemData.itemType).trim(),
					testRolls,
					treasure,
					options
				)
				Object.assign(result, roll)
				let valueBonus = 0
				if (roll.valueBonus > 0) {
					valueBonus =
						(Math.pow(roll.enhancement + roll.valueBonus, 2) -
							Math.pow(roll.enhancement, 2)) *
						1000
					if (magicItemData.itemType === 'Weapons') {
						valueBonus *= 2
					}
					// console.log(`adding bonus value ${valueBonus} for ${magicItemData.itemType}`);
				}

				Object.assign(result, {
					value: result.value + magicItemData.value + valueBonus,
					enhancement:
						result.enhancement ||
						0 + magicItemData.enhancement ||
						0,
				})
				let extraOverride = {
					data: {
						data: {
							identified: options.identified,
							price: result.value,
							masterwork: options.masterwork,
						},
					},
				}
				if (result.itemOverride) {
					mergeObject(result.itemOverride, extraOverride)
				} else {
					result.itemOverride = extraOverride
				}

				return result
			case 'ammunition':
				rollMagicItem(
					magicItemData.table,
					grade,
					prefix,
					testRolls,
					treasure,
					options
				)
				return rollMagicItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options
				)
			case 'extraItem':
				let extraItem = {
					value: magicItemData.value,
					type: (prefix + ' ' + magicItemData.itemType).trim(),
					amount: new Roll(magicItemData.roll).roll().total,
					ability: [],
					enhancement: 0,
					id: magicItemData.id,
				}
				extraItem.itemOverride = {
					data: {
						data: {
							price: Math.floor(
								extraItem.value / extraItem.amount
							),
							masterwork: options.masterwork,
						},
					},
				}
				treasure.items.push(extraItem)
				break
			case 'roll+':
				//item roll
				roll = rollMagicItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options
				)
				// console.log(roll)
				//ability roll
				let abilityRoll = rollMagicItem(
					roll.table,
					grade,
					'',
					testRolls,
					treasure,
					options
				)

				for (let ability of abilityRoll) {
					Object.assign(result, {
						value: result.value + ability.value,
						valueBonus: result.valueBonus + ability.enhancement,
					})
					abilities.push(ability)
				}

				Object.assign(result, {
					value: result.value + roll.value,
					enhancement: result.enhancement + roll.enhancement,
					valueBonus: result.valueBonus + roll.valueBonus,
					type: prefix + ' ' + roll.type,
					ability: abilities.concat(roll.ability),
					table: roll.table,
					id: roll.id,
					itemOverride: roll.itemOverride,
					amount: roll.amount,
				})

				return result
			case 'ability++':
				roll = rollMagicItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options
				)
				// Object.assign(result, roll);
				// for (let ability of roll) {
				//   if (abilities.indexOf(ability) === -1) {
				//     abilities.push(ability);
				//   }
				// }
				for (let ability of roll) {
					if (
						abilities.filter(
							(ab) => ab.itemType === ability.itemType
						).length === 0
					) {
						abilities.push(ability)
					}
				}

				roll = rollMagicItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options
				)

				for (let ability of roll) {
					if (
						abilities.filter(
							(ab) => ab.itemType === ability.itemType
						).length === 0
					) {
						abilities.push(ability)
					}
				}
				return abilities
			case 'ability':
				let ret = {
					itemType: magicItemData.itemType,
					type: magicItemData.type,
					value: magicItemData.value,
					enhancement: magicItemData.enhancement,
					id: magicItemData.id,
					enhancementLevel: magicItemData.enhancementLevel,
					itemOverride: magicItemData.itemOverride,
				}

				if (magicItemData.table) {
					let {
						itemTypeExtra,
						idOverride,
						itemOverride,
					} = rollMagicItem(
						magicItemData.table,
						grade,
						prefix,
						testRolls,
						treasure,
						options
					)
					ret.itemType += ', ' + itemTypeExtra
					ret.id = idOverride
					ret.itemOverride = itemOverride //might be an issue if there were case in which both ability and extraItemDef(only used for typing bane ability) use it
				}

				abilities.push(ret)
				return abilities
			case 'extraItemDef':
				return {
					itemTypeExtra: magicItemData.itemType,
					idOverride: magicItemData.id,
					itemOverride: magicItemData.itemOverride,
				}
		}
	} catch (err) {
		// console.error(magicItemData)
		err.message += ' ' + magicItemRoll
		throw err
	}
}

function rollMundaneItem(table, prefix = '', testRolls) {
	let mundaneItemRoll = new Roll('1d100').roll().total
	//TODO disable in production, automated testing purpose only
	if (testRolls && testRolls.length > 0) {
		mundaneItemRoll = testRolls.shift()
	}
	let mundaneItemData = table.find(
		(r) => r.Min <= mundaneItemRoll && r.Max >= mundaneItemRoll
	)
	// console.debug(
	//   "mundaneItemRoll: " + mundaneItemRoll + " " + mundaneItemData.itemType
	// );
	let result = []
	let roll = []
	switch (mundaneItemData.type) {
		case 'item':
			let mundaneItemValue = mundaneItemData.value
			let mundaneItemType = (
				prefix +
				' ' +
				mundaneItemData.itemType
			).trim()
			let mundaneItemAmount = new Roll(mundaneItemData.roll).roll().total
			return [mundaneItemValue, mundaneItemType, mundaneItemAmount]
		case 'roll':
			roll = rollMundaneItem(
				mundaneItemData.table,
				(prefix + ' ' + mundaneItemData.itemType).trim(),
				testRolls
			)
			if (Array.isArray(roll[0])) {
				result = result.concat(roll)
			} else {
				result.push(roll)
			}

			return result
		case 'ammunition':
			return rollMundaneItem(
				mundaneItemData.table,
				(prefix + ' ' + mundaneItemData.itemType).trim(),
				testRolls
			)
		case 'roll+':
		case 'extraItem':
			roll = rollMundaneItem(
				mundaneItemData.table,
				(prefix + ' ' + mundaneItemData.itemType).trim(),
				testRolls
			)
			if (Array.isArray(roll[0])) {
				result = result.concat(roll)
			} else {
				result.push(roll)
			}
			//reroll
			roll = rollMundaneItem(table, prefix, testRolls)
			if (Array.isArray(roll[0])) {
				result = result.concat(roll)
			} else {
				result.push(roll)
			}
			return result
			break
	}
}

function getItem(link) {
	let entity = null

	// Target 1 - Compendium Link
	if (link.includes('.')) {
		let parts = link.split('.')
		let id = parts.pop()
		let packId = parts.join('.')
		const pack = game.packs.get(packId)
		entity = id ? pack.getEntity(id) : null
	} // Target 2 - Item Link
	else {
		let id = link
		entity = id ? game.items.get(id) : null
	}

	return entity
}

function treasureToChat(treasure) {
	var TreasureString = '<div class="D35E chat-card item-card">'
	//#region gold section
	if (treasure.cp + treasure.sp + treasure.gp + treasure.pp > 0) {
		TreasureString += `<header class="card-header flexrow">
<img src="systems/D35E/icons/items/inventory/Loot_129.png" title="Money" width="36" height="36">
<h3 class="item-name">Money</h3>
</header> <div><p>`
		if (treasure.cp > 0) {
			TreasureString +=
				'<span class="fontstyle0">cp: ' + treasure.cp + '</span><br>'
		}
		if (treasure.sp > 0) {
			TreasureString +=
				'<span class="fontstyle0">sp: ' + treasure.sp + '</span><br>'
		}
		if (treasure.gp > 0) {
			TreasureString +=
				'<span class="fontstyle0">gp: ' + treasure.gp + '</span><br>'
		}
		if (treasure.pp > 0) {
			TreasureString +=
				'<span class="fontstyle0">pp: ' + treasure.pp + '<br>'
		}

		TreasureString +=
			'</p></div><hr><span class="fontstyle0"> total value = ' +
			Math.floor(
				treasure.cp / 100 +
					treasure.sp / 10 +
					treasure.gp +
					treasure.pp * 10
			) +
			' gp</span>'
	}
	//#endregion

	//#region goods section
	if (treasure.gems.length > 0) {
		let totalValue = 0
		TreasureString += `<header class="card-header flexrow">
<img src="systems/D35E/icons/items/inventory/Quest_102.png" title="Gems" width="36" height="36">
<h3 class="item-name">Gems</h3>
</header> <div><p>`
		treasure.gems.forEach((gem) => {
			totalValue += gem.value
			TreasureString += `<span class="fontstyle0">${gem.type} (${gem.value} gp) </span><br>`
		})
		TreasureString +=
			'</p></div><hr><span class="fontstyle0">total value = ' +
			totalValue +
			' gp</span>'
	}
	if (treasure.arts.length > 0) {
		let totalValue = 0
		TreasureString += `<header class="card-header flexrow">
<img src="systems/D35E/icons/items/inventory/Quest_48.png" title="Arts" width="36" height="36">
<h3 class="item-name">Arts</h3>
</header> <div><p>`
		treasure.arts.forEach((art) => {
			totalValue += art.value
			TreasureString += `<span class="fontstyle0">${art.type} (${art.value} gp) </span><br>`
		})
		TreasureString +=
			'</p></div><hr><span class="fontstyle0">total value = ' +
			totalValue +
			' gp</span>'
	}
	//#endregion

	//#region items section
	if (treasure.items.length > 0) {
		TreasureString += `<header class="card-header flexrow">
<img src="systems/D35E/icons/items/inventory/Loot_102.png" title="Items" width="36" height="36">
<h3 class="item-name">Items</h3>
</header> <div class="card-content"><p>`

		treasure.items.forEach((item) => {
			TreasureString += `<span class="fontstyle0">${
				(item.amount > 1 && item.amount + 'x ') || ''
			}${item.type} ${
				(item.enhancement > 0 && '+' + item.enhancement) || ''
			} `
			if (item.ability.length > 0) {
				TreasureString += `[${item.ability
					.map((it) => it.itemType)
					.join(', ')}]`
			}
			TreasureString += ` (${item.value} gp) </span><br style="font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;orphans:2;text-align:-webkit-auto;text-indent:0px;text-transform:none;white-space:normal;widows:2;word-spacing:0px;-webkit-text-size-adjust:auto;-webkit-text-stroke-width:0px"><br>`
		})
		TreasureString += '</p></div>'
	}
	//#endregion
	TreasureString += '</div>'
	//  console.log(TreasureString);
	ChatMessage.create({ content: TreasureString })
}

function treasureToPuSContainer(pikUpStiXModule, treasure) {
	var treasureErr = {
		cp: 0,
		sp: 0,
		gp: 0,
		pp: 0,
		gems: [],
		arts: [],
		items: [],
	}
	let itemsObjects = []
	let lastPromise = null
	let promisesFinished = 0
	for (let item of treasure.items) {
		if (item.id) {
			lastPromise = getItem(item.id)
				.then((it) => {
					it.data.data.quantity = item.amount
					//TODO apply magic enhancemetns //ItemPF.getMagicItem(itemId, compendium,[{enhancementId:id, enchancementLevel:1 },{enhancementId:id2, enchancementLevel:1 }]
					//TODO evaluate possible side effects of merging itemOverride data from specific items with usage of ItemPF.getMagicItem to apply an ability
					// to be released in 0.87.11
					if (item.itemOverride) {
						mergeObject(it, item.itemOverride)
					}
					itemsObjects.push(it)
					promisesFinished++
				})
				.catch((err) => {
					console.error(
						`error fetching item ${item.type} - ${item.id}`
					)
					console.error(err)
					treasureErr.items.push(item)
					promisesFinished++
				})
		} else {
			console.error(`no item generated for ${item.type}`)
			treasureErr.items.push(item)
			promisesFinished++
		}
	}

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	async function loopPromises(lp) {
		if (promisesFinished < treasure.items.length) {
			lp.then(() => {
				// console.log(itemsObjects);
				pikUpStiXModule.apis.makeContainer(
					itemsObjects,
					{
						cp: treasure.cp,
						sp: treasure.sp,
						gp: treasure.gp,
						pp: treasure.pp,
					},
					{ gridX: 0, gridY: 0 }
				)
			})
		} else {
			await sleep(200)
			return lp
		}
	}
	loopPromises(lastPromise)
	if (treasureErr.items.length > 0) {
		treasureToChat(treasureErr)
	}
}

function getActorCr(actor) {
	let cr = actor.data.data.details.cr
	return Math.min(Math.max(Math.floor(cr), 1), 31) - 1
}

const getSelectedNpcs = () =>
	canvas.tokens.controlled.filter(
		(t) => game.actors.get(t.data.actorId).data.type === 'npc'
	)

const times = (x) => [...Array(x).keys()]
//#endregion

//#region main function
function genTreasureFromSelectedNpcsCr(
	ItemRollFudge = [],
	options = {
		identified: false,
		tradeGoodsToGold: false,
		moneyMultiplier: 1,
		goodsMultiplier: 1,
		itemsMultiplier: 1,
	}
) {
	var treasure = { cp: 0, sp: 0, gp: 0, pp: 0, gems: [], arts: [], items: [] }
	//#region Options Validation
	options.moneyMultiplier =
		(options.moneyMultiplier &&
			Math.floor(Math.max(options.moneyMultiplier, 1))) ||
		1
	options.goodsMultiplier =
		(options.goodsMultiplier &&
			Math.floor(Math.max(options.goodsMultiplier, 1))) ||
		1
	options.itemsMultiplier =
		(options.itemsMultiplier &&
			Math.floor(Math.max(options.itemsMultiplier, 1))) ||
		1
	options.identified = options.identified || false
	options.tradeGoodsToGold = options.tradeGoodsToGold || false
	//#endregion
	window.rolls = []
	if (getSelectedNpcs().length !== 0) {
		getSelectedNpcs().forEach((t) => {
			let actor = game.actors.get(t.data.actorId)
			let TreasureLevel = getActorCr(actor)
			//console.log(TreasureLevel);
			let treasureRow = TreasureTable[TreasureLevel]

			//#region Roll for money
			times(options.moneyMultiplier).forEach(() => {
				let moneyRoll = new Roll('1d100').roll().total
				let moneyResult = treasureRow.money.find(
					(r) => r.Min <= moneyRoll && r.Max >= moneyRoll
				)

				// console.debug("moneyRoll: " + moneyRoll + " - " + moneyResult.roll);

				if (moneyResult.type !== 'nothing') {
					treasure[moneyResult.type] += new Roll(
						moneyResult.roll
					).roll().total
				}
			})
			//#endregion

			//#region Roll for goods
			times(options.goodsMultiplier).forEach(() => {
				let goodsRoll = new Roll('1d100').roll().total
				let goodsResult = treasureRow.goods.find(
					(r) => r.Min <= goodsRoll && r.Max >= goodsRoll
				)
				let goodsNo = new Roll(goodsResult.roll).roll().total
				times(goodsNo).forEach(() => {
					switch (goodsResult.type) {
						case 'nothing':
							break
						case 'gem':
							let gemData =
								GemsTable[
									Math.floor(Math.random() * GemsTable.length)
								]
							let gemValue = new Roll(gemData.roll).roll().total
							let gemType =
								gemData.type[
									Math.floor(
										Math.random() * gemData.type.length
									)
								]
							if (options.tradeGoodsToGold) {
								treasure.gp += gemValue
							} else {
								treasure.gems.push({
									value: gemValue,
									type: gemType,
								})
							}
							// console.debug(
							//   "goodsRoll: " +
							//     goodsRoll +
							//     " - " +
							//     goodsResult.roll +
							//     " - " +
							//     gemType
							// );
							break
						case 'art':
							let artData =
								ArtsTable[
									Math.floor(Math.random() * ArtsTable.length)
								]
							let artValue = new Roll(artData.roll).roll().total
							let artType =
								artData.type[
									Math.floor(
										Math.random() * artData.type.length
									)
								]
							if (options.tradeGoodsToGold) {
								treasure.gp += artValue
							} else {
								treasure.arts.push({
									value: artValue,
									type: artType,
								})
							}
							// console.debug(
							//   "goodsRoll: " +
							//     goodsRoll +
							//     " - " +
							//     goodsResult.roll +
							//     " - " +
							//     artType
							// );
							break
					}
				})
			})
			//#endregion

			//#region Roll for items
			times(options.itemsMultiplier).forEach(() => {
				let itemsRoll = new Roll('1d100').roll().total
				if (ItemRollFudge.length > 0) {
					itemsRoll = ItemRollFudge.shift()
					// console.debug("fudged Dice roll = " + itemsRoll);
				}
				let itemsResult = treasureRow.items.find(
					(r) => r.Min <= itemsRoll && r.Max >= itemsRoll
				)
				let itemsNo = new Roll(itemsResult.roll).roll().total
				times(itemsNo).forEach(() => {
					switch (itemsResult.type) {
						case 'nothing':
							break
						case 'mundane':
							rollMundaneItem(
								MundaneItemsTable,
								'',
								ItemRollFudge
							).forEach(
								([
									mundaneItemValue,
									mundaneItemType,
									mundaneItemAmount,
								]) =>
									treasure.items.push({
										value: mundaneItemValue,
										type: mundaneItemType,
										amount: mundaneItemAmount,
										ability: [],
										enhancement: 0,
									})
							)
							break
						case 'minor':
						case 'medium':
						case 'major':
							try {
								let {
									value,
									enhancement,
									ability,
									type,
									id,
									itemOverride,
									amount,
								} = rollMagicItem(
									MagicItemTable,
									itemsResult.type,
									'',
									ItemRollFudge,
									treasure,
									{
										identified: options.identified,
										masterwork: true,
									}
								)
								treasure.items.push({
									value: value,
									type: type,
									ability: ability,
									enhancement: enhancement,
									amount: amount || 1,
									id: id,
									itemOverride: itemOverride,
								})
							} catch (err) {
								err.message +=
									' --- ' + JSON.stringify(window.rolls)
								console.error(window.rolls)
								throw err
							}

							break
					}
				})
			})
			//#endregion
		})

		log(treasure)

		let pikUpStiXModule = game.modules.get('pick-up-stix')

		if (pikUpStiXModule && pikUpStiXModule.active) {
			treasureToPuSContainer(pikUpStiXModule, treasure)
		} else {
			treasureToChat(treasure)
		}
	}
	return treasure
}
//#endregion

//crossbow and arrow
//genTreasureFromSelectedNpcsCr([98, 5, 100, 1, 99, 1, 2, 26, 1, 28])
//dragonhideplate  "Shadow","Glamered"
//genTreasureFromSelectedNpcsCr([98, 2, 96, 100, 89, 59, 25, 70])

genTreasureFromSelectedNpcsCr([98, 2, 96, 100, 89, 49])
window.rollTreasure = genTreasureFromSelectedNpcsCr
