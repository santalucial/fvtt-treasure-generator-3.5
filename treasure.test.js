beforeAll(() => {
	window.getType = (token) => {
		const tof = typeof token
		if (tof === 'object') {
			if (token === null) {
				return 'null'
			}
			let cn = token.constructor.name
			if (['String', 'Number', 'Boolean', 'Array', 'Set'].includes(cn)) {
				return cn
			} else if (/^HTML/.test(cn)) {
				return 'HTMLElement'
			} else {
				return 'Object'
			}
		}
		return tof
	}
	window.mergeObject = (
		original,
		other = {},
		{
			insertKeys = true,
			insertValues = true,
			overwrite = true,
			inplace = true,
			enforceTypes = false,
		} = {},
		_d = 0
	) => {
		other = other || {}
		if (!(original instanceof Object) || !(other instanceof Object)) {
			throw new Error('One of original or other are not Objects!')
		}
		let depth = _d + 1

		// Maybe copy the original data at depth 0
		if (!inplace && _d === 0) {
			original = duplicate(original)
		}

		// Enforce object expansion at depth 0
		if (_d === 0 && Object.keys(original).some((k) => /\./.test(k))) {
			original = expandObject(original)
		}
		if (_d === 0 && Object.keys(other).some((k) => /\./.test(k))) {
			other = expandObject(other)
		}

		// Iterate over the other object
		for (let [k, v] of Object.entries(other)) {
			let tv = getType(v)

			// Prepare to delete
			let toDelete = false
			if (k.startsWith('-=')) {
				k = k.slice(2)
				toDelete = v === null
			}

			// Get the existing object
			let x = original[k]
			let has = original.hasOwnProperty(k)
			let tx = getType(x)

			// Ensure that inner objects exist
			if (!has && tv === 'Object') {
				x = original[k] = {}
				has = true
				tx = 'Object'
			}

			// Case 1 - Key exists
			if (has) {
				// 1.1 - Recursively merge an inner object
				if (tv === 'Object' && tx === 'Object') {
					mergeObject(
						x,
						v,
						{
							insertKeys: insertKeys,
							insertValues: insertValues,
							overwrite: overwrite,
							inplace: true,
							enforceTypes: enforceTypes,
						},
						depth
					)
				}

				// 1.2 - Remove an existing key
				else if (toDelete) {
					delete original[k]
				}

				// 1.3 - Overwrite existing value
				else if (overwrite) {
					if (tx && tv !== tx && enforceTypes) {
						throw new Error(
							`Mismatched data types encountered during object merge.`
						)
					}
					original[k] = v
				}

				// 1.4 - Insert new value
				else if (x === undefined && insertValues) {
					original[k] = v
				}
			}

			// Case 2 - Key does not exist
			else if (!toDelete) {
				let canInsert =
					(depth === 1 && insertKeys) || (depth > 1 && insertValues)
				if (canInsert) {
					original[k] = v
				}
			}
		}

		// Return the object for use
		return original
	}
	window.canvas = { tokens: { controlled: [{ data: { actorId: '0' } }] } }

	window.game = {
		actors: new Map([
			['0', { data: { type: 'npc', data: { details: { cr: 0 } } } }],
		]),
		modules: { get: () => {} },
	}

	window.CONFIG = { debug: {} }
	class ChatMessage {
		static create({}) {}
	}
	window.ChatMessage = ChatMessage

	class Roll {
		constructor(roll) {
			// console.log(roll);
			this.formula = roll
		}
		roll() {
			let diceNo = [...Array(parseInt(this.formula.split('d')[0])).keys()]
			let diceSize = parseInt(
				this.formula.split('d')[1].split('+')[0].split('*')[0]
			)

			var result = 0
			diceNo.forEach(() => {
				result += Math.floor(Math.random() * diceSize) + 1
			})
			if (this.formula.includes('+')) {
				result += parseInt(this.formula.split('d')[1].split('+')[1])
			}
			if (this.formula.includes('*')) {
				result *= parseInt(this.formula.split('d')[1].split('*')[1])
			} // result = Math.max(1, result);

			// console.log(result);
			return { total: result }
		}
	}
	window.Roll = Roll
	require('./treasure.js')
})

beforeEach(() => {
	window.treasure = {}
})

describe('Magic armor rolls', () => {
	it('test roll', async () => {
		let treasure = window.rollTreasure([
			98,
			2,
			95,
			61,
			43,
			100,
			94,
			100,
			63,
			96,
		])

		expect(treasure.items[0]).toMatchInlineSnapshot(`
		Object {
		  "ability": Array [
		    Object {
		      "enhancement": 2,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Spell resistance (13)",
		      "type": "ability",
		      "value": 0,
		    },
		    Object {
		      "enhancement": 0,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Shadow",
		      "type": "ability",
		      "value": 3750,
		    },
		  ],
		  "amount": 1,
		  "enhancement": 1,
		  "id": "D35E.armors-and-shields.nnDSj5NxUb9Q8z8S",
		  "itemOverride": Object {
		    "data": Object {
		      "data": Object {
		        "identified": false,
		        "masterwork": true,
		        "price": 12950,
		      },
		    },
		  },
		  "type": " Scale mail",
		  "value": 12950,
		}
	`)
	})

	it('test roll 2', async () => {
		let treasure = window.rollTreasure([98, 2, 62, 12])

		expect(treasure.items[0]).toMatchInlineSnapshot(`
		Object {
		  "ability": Array [],
		  "amount": 1,
		  "enhancement": 1,
		  "id": "D35E.armors-and-shields.xeuREriTfdZR1yCD",
		  "itemOverride": Object {
		    "data": Object {
		      "data": Object {
		        "identified": false,
		        "masterwork": true,
		        "price": 1175,
		      },
		    },
		  },
		  "type": "Studded leather",
		  "value": 1175,
		}
	`)
	})

	it('test double ability', async () => {
		let treasure = window.rollTreasure([98, 2, 92, 60, 15, 100, 5, 30])

		expect(treasure.items[0]).toMatchInlineSnapshot(`
		Object {
		  "ability": Array [
		    Object {
		      "enhancement": 1,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Arrow catching",
		      "type": "ability",
		      "value": 0,
		    },
		    Object {
		      "enhancement": 1,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Bashing",
		      "type": "ability",
		      "value": 0,
		    },
		  ],
		  "amount": 1,
		  "enhancement": 1,
		  "id": "D35E.armors-and-shields.l1qNkx4xGXelq6yY",
		  "itemOverride": Object {
		    "data": Object {
		      "data": Object {
		        "identified": false,
		        "masterwork": true,
		        "price": 9153,
		      },
		    },
		  },
		  "type": " Shield, light, wooden",
		  "value": 9153,
		}
	`)
	})

	it('test double ability 2', async () => {
		let treasure = window.rollTreasure([
			98,
			2,
			92,
			92,
			60,
			15,
			100,
			5,
			30,
			70,
		])

		expect(treasure.items[0]).toMatchInlineSnapshot(`
		Object {
		  "ability": Array [
		    Object {
		      "enhancement": 1,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Fortification, light",
		      "type": "ability",
		      "value": 0,
		    },
		    Object {
		      "enhancement": 1,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Arrow catching",
		      "type": "ability",
		      "value": 0,
		    },
		    Object {
		      "enhancement": 1,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Bashing",
		      "type": "ability",
		      "value": 0,
		    },
		  ],
		  "amount": 1,
		  "enhancement": 1,
		  "id": "D35E.armors-and-shields.l1qNkx4xGXelq6yY",
		  "itemOverride": Object {
		    "data": Object {
		      "data": Object {
		        "identified": false,
		        "masterwork": true,
		        "price": 16153,
		      },
		    },
		  },
		  "type": "  Shield, light, wooden",
		  "value": 16153,
		}
	`)
	})

	it('test double ability 3', async () => {
		let treasure = window.rollTreasure([98, 2, 96, 100, 89, 59, 25, 70])
		expect(treasure.items[0]).toMatchInlineSnapshot(`
		Object {
		  "ability": Array [
		    Object {
		      "enhancement": 0,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Shadow",
		      "type": "ability",
		      "value": 3750,
		    },
		    Object {
		      "enhancement": 0,
		      "enhancementLevel": undefined,
		      "id": undefined,
		      "itemOverride": undefined,
		      "itemType": "Glamered",
		      "type": "ability",
		      "value": 2700,
		    },
		  ],
		  "amount": 1,
		  "enhancement": 0,
		  "id": "D35E.magicitems.Dj2ItY5tZZ8PpGH8",
		  "itemOverride": Object {
		    "data": Object {
		      "data": Object {
		        "identified": false,
		        "masterwork": true,
		        "price": 9750,
		      },
		    },
		  },
		  "type": "  Dragonhide plate",
		  "value": 9750,
		}
	`)
	})

	it('full roll magic armor table', async () => {
		//Array.from({length: 100}, (_, i) => i + 1).forEach(t7_2 =>{})
		Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_2) => {
			window.rollTreasure([98, 2, t7_2])
		})
	})

	it('full roll magic armor abilty table', async () => {
		Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_5) => {
			window.rollTreasure([98, 2, 100, 61, t7_5])
		})
	})

	it('full roll magic shield abilty table', async () => {
		Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_6) => {
			window.rollTreasure([98, 2, 100, 1, t7_6])
		})
	})

	// it("full roll magic weapon table", async () => {
	//   //Array.from({length: 10}, (_, i) => i + 1).forEach(t7_2 =>{})
	//   Array.from({ length: 10 }, (_, i) => i + 1).forEach((t7_2) => {
	//     window.ItemRollFudge = [98, 2, t7_2];
	//     window.rollTreasure();
	//   });
	// });
})

describe('Magic weapon rolls', () => {
	it('test magic weapon with bane (fey)', async () => {
		let treasure = window.rollTreasure([98, 5, 100, 1, 99, 1, 2, 26, 1, 28])
		expect(treasure.items).toMatchInlineSnapshot(`
		Array [
		  Object {
		    "ability": Array [],
		    "amount": 50,
		    "enhancement": 0,
		    "id": "D35E.weapons-and-ammo.23HXFjpPnuLFOylm",
		    "itemOverride": Object {
		      "data": Object {
		        "data": Object {
		          "masterwork": true,
		          "price": 7,
		        },
		      },
		    },
		    "type": "Common ranged weapon Arrows",
		    "value": 350,
		  },
		  Object {
		    "ability": Array [
		      Object {
		        "enhancement": 1,
		        "enhancementLevel": undefined,
		        "id": undefined,
		        "itemOverride": undefined,
		        "itemType": "Bane, Fey",
		        "type": "ability",
		        "value": 0,
		      },
		    ],
		    "amount": 1,
		    "enhancement": 1,
		    "id": "D35E.weapons-and-ammo.RWbjRwSPsuPAUDhw",
		    "itemOverride": Object {
		      "data": Object {
		        "data": Object {
		          "identified": false,
		          "masterwork": true,
		          "price": 8335,
		        },
		      },
		    },
		    "type": " Crossbow, light",
		    "value": 8335,
		  },
		]
	`)
	})

	it('full roll magic weapon table', async () => {
		//Array.from({length: 100}, (_, i) => i + 1).forEach(t7_2 =>{})
		Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_9) => {
			window.rollTreasure([98, 5, t7_9])
		})
	})

	// it("1000 full roll magic weapon table", async () => {
	//   //Array.from({length: 100}, (_, i) => i + 1).forEach(t7_2 =>{})
	//   Array.from({ length: 1000 }, (_, i) => i + 1).forEach((roll) => {
	//     Array.from({ length: 100 }, (_, i) => i + 1).forEach((t7_9) => {
	//       window.ItemRollFudge = [98, 5, t7_9];
	//       window.rollTreasure();
	//     });
	//   });
	// });
})
