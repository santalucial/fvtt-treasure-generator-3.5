import {
	TreasureTable,
	GemsTable,
	ArtsTable,
	MagicItemTable,
	MundaneItemsTable,
} from './treasureTables'

//#region utility functions
function log(message) {
	if (CONFIG.debug['treasure-gen']) {
		// eslint-disable-next-line no-console
		console.log(message)
	}
}

function cleanObj(obj) {
	Object.keys(obj).forEach((key) => {
		if (obj[key] && typeof obj[key] === 'object') {
			cleanObj(obj[key])
		} else if (obj[key] === undefined) {
			delete obj[key]
		}
	})
	return obj
}

function times(x) {
	return [...Array(x).keys()]
}

function rollItem(
	table,
	grade,
	prefix = '',
	testRolls = [],
	treasure,
	options,
	rolls
) {
	let magicItemRoll = new Roll('1d100').roll().total
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

	rolls.push({
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
					type: (
						(prefix || '') +
						' ' +
						(magicItemData.itemType || '')
					).trim(),
					value: magicItemData.value || 0,
					table: magicItemData.table,
					id: magicItemData.id,
					itemOverride: magicItemData.itemOverride,
					amount: magicItemData.amount,
					consumableType: magicItemData.consumableType,
					casterLevel: magicItemData.casterLevel,
				})
				if (magicItemData.roll && magicItemData.roll !== '1d1') {
					let ItemAmount = new Roll(magicItemData.roll).roll().total
					if (testRolls && testRolls.length > 0) {
						ItemAmount = testRolls.shift()
					}
					result.amount = ItemAmount
				}
				return result
			case 'roll':
				roll = rollItem(
					magicItemData.table,
					grade,
					(
						(prefix || '') +
						' ' +
						(magicItemData.itemType || '')
					).trim(),
					testRolls,
					treasure,
					options,
					rolls
				)
				Object.assign(result, roll)
				let valueBonus = 0
				if (roll.valueBonus && roll.valueBonus > 0) {
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
					value:
						result.value + (magicItemData.value || 0) + valueBonus,
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

				if (options.overrideNames) {
					mergeObject(result.itemOverride, {
						data: {
							data: {
								identifiedName: result.type,
							},
						},
					})
				}

				if (magicItemData.itemOverride) {
					mergeObject(result.itemOverride, magicItemData.itemOverride)
				}

				if (magicItemData.casterLevel) {
					Object.assign(result, {
						casterLevel: magicItemData.casterLevel,
					})
				}

				return cleanObj(result)
			case 'ammunition':
				rollItem(
					magicItemData.table,
					grade,
					prefix,
					testRolls,
					treasure,
					options,
					rolls
				)
				return rollItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options,
					rolls
				)
			case 'extraItem':
				let extraItem = {
					value: magicItemData.value,
					type: (
						(prefix || '') +
						' ' +
						(magicItemData.itemType || '')
					).trim(),
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
			case 'rollScroll':
				let amountFormula = ''
				switch (grade) {
					case 'minor':
						amountFormula = '1d3'
						break
					case 'medium':
						amountFormula = '1d4'
						break
					case 'major':
						amountFormula = '1d6'
						break
				}
				let scrollAmountRoll = new Roll(amountFormula).roll().total
				if (testRolls && testRolls.length > 0) {
					scrollAmountRoll = testRolls.shift()
				}

				times(scrollAmountRoll).forEach((step) => {
					let result2 = {
						value: 0,
						enhancement: 0,
						type: '',
						ability: [],
						valueBonus: 0,
					}
					roll = rollItem(
						magicItemData.table,
						grade,
						(
							(prefix || '') +
							' ' +
							(magicItemData.itemType || '')
						).trim(),
						testRolls,
						treasure,
						options,
						rolls
					)
					Object.assign(result2, roll)

					if (step === 0) {
						result = cleanObj(result2)
					} else {
						treasure.items.push(cleanObj(result2))
					}
				})
				return result
				break
			case 'roll+':
				//item roll
				roll = rollItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options,
					rolls
				)
				// console.log(roll)
				//ability roll
				let abilityRoll = rollItem(
					roll.table,
					grade,
					'',
					testRolls,
					treasure,
					options,
					rolls
				)

				for (let ability of abilityRoll) {
					if (
						roll.ability.filter(
							(ab) => ab.itemType === ability.itemType
						).length === 0
					) {
						Object.assign(result, {
							value: result.value + ability.value,
							valueBonus: result.valueBonus + ability.enhancement,
						})
						abilities.push(ability)
					}
				}

				Object.assign(result, {
					value: result.value + roll.value,
					enhancement: result.enhancement + roll.enhancement,
					valueBonus: result.valueBonus + roll.valueBonus,
					type: ((prefix || '') + ' ' + (roll.type || '')).trim(),
					ability: abilities.concat(roll.ability),
					table: roll.table,
					id: roll.id,
					itemOverride: roll.itemOverride,
					amount: roll.amount,
				})

				return cleanObj(result)
			case 'ability++':
				roll = rollItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options,
					rolls
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

				roll = rollItem(
					table,
					grade,
					prefix,
					testRolls,
					treasure,
					options,
					rolls
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
					let { itemTypeExtra, idOverride, itemOverride } = rollItem(
						magicItemData.table,
						grade,
						prefix,
						testRolls,
						treasure,
						options,
						rolls
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

function treasureToPuSContainer(
	pikUpStiXModule,
	treasure,
	position = { gridX: 0, gridY: 0 }
) {
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
	let lastPromise = new Promise((resolve) => resolve())
	var promisesFinished = 0
	for (let item of treasure.items) {
		if (item.id) {
			if (item.consumableType) {
				lastPromise = getItem(item.id)
					.then((it) => {
						it.data.data.quantity = item.amount

						let consumableItem = ItemPf.toConsumable(
							it,
							item.consumableType
						)
						if (item.itemOverride) {
							mergeObject(consumableItem, item.itemOverride)
						}

						itemsObjects.push(consumableItem)
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
			} else if (item.ability.length > 0 || item.enhancement > 0) {
				let enhancements = []

				if (item.ability.length > 0) {
					for (let itemAbility of item.ability) {
						enhancements.push({
							id: itemAbility.id,
							enhancement: itemAbility.enhancementLevel,
						})
					}
				}

				if (item.enhancement > 0) {
					if (item.id.includes('armors-and-shields')) {
						enhancements.push({
							id: 'iOhtLsgtgmt2l9CM',
							enhancement: item.enhancement,
						})
					} else {
						enhancements.push({
							id: 'Ng5AlRupmkMOgqQi',
							enhancement: item.enhancement,
						})
					}
				}

				lastPromise = ItemPF.getMagicItem(item.id, enhancements)
					.then((it) => {
						it.data.data.quantity = item.amount
						if (item.itemOverride) {
							mergeObject(it, item.itemOverride)
						}

						itemsObjects.push(it)
						promisesFinished++
					})
					.catch((err) => {
						console.error(
							`error fetching magic item ${item.type} - ${item.id}`
						)
						console.error(err)
						treasureErr.items.push(item)
						promisesFinished++
					})
			} else {
				lastPromise = getItem(item.id)
					.then((it) => {
						it.data.data.quantity = item.amount

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
			}
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
		if (promisesFinished >= treasure.items.length) {
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
					position
				)
			})
		} else {
			await sleep(200)
			return loopPromises(lp)
		}
	}
	loopPromises(lastPromise)
	if (treasureErr.items.length > 0) {
		treasureToChat(treasureErr)
	}
}

function getActorCrAndMultiplier(actor) {
	let cr = actor.data.data.details.cr
	//#region Options Validation
	// moneyMultiplier = Math.floor(Math.max(moneyMultiplier, 1))
	// goodsMultiplier = Math.floor(Math.max(goodsMultiplier, 1))
	// itemsMultiplier = Math.floor(Math.max(itemsMultiplier, 1))
	//#endregion
	//TODO fetch actual multiplier data
	return {
		cr: Math.min(Math.max(Math.floor(cr), 1), 30) - 1,
		moneyMultiplier: 1,
		goodsMultiplier: 1,
		itemsMultiplier: 1,
	}
}

function getSelectedNpcs() {
	return canvas.tokens.controlled.filter(
		(t) => game.actors.get(t.data.actorId).data.type === 'npc'
	)
}

function rollMoney(rollFormula) {
	return new Roll(rollFormula).roll().total
}

function rollTradeGoods(table) {
	let goodsData = table[Math.floor(Math.random() * table.length)]
	let goodsValue = new Roll(goodsData.roll).roll().total
	let goodsType =
		goodsData.type[Math.floor(Math.random() * goodsData.type.length)]
	return {
		value: goodsValue,
		type: goodsType,
	}
}
//#endregion

export default class TreasureGenerator {
	constructor() {
		this._treasure = {
			cp: 0,
			sp: 0,
			gp: 0,
			pp: 0,
			gems: [],
			arts: [],
			items: [],
		}
		this._rolls = []
	}

	get treasure() {
		return this._treasure
	}

	makeTreasureFromCR(
		TreasureLevels,
		{ identified = false, tradeGoodsToGold = false, overrideNames = true },
		ItemRollFudge
	) {
		TreasureLevels.forEach((TreasureLevel) => {
			let treasureRow = TreasureTable[TreasureLevel.cr]

			//#region Roll for money
			times(TreasureLevel.moneyMultiplier).forEach(() => {
				let moneyRoll = new Roll('1d100').roll().total
				let moneyResult = treasureRow.money.find(
					(r) => r.Min <= moneyRoll && r.Max >= moneyRoll
				)

				// console.debug("moneyRoll: " + moneyRoll + " - " + moneyResult.roll);

				if (moneyResult.type !== 'nothing') {
					this.treasure[moneyResult.type] += rollMoney(
						moneyResult.roll
					)
				}
			})
			//#endregion

			//#region Roll for goods
			times(TreasureLevel.goodsMultiplier).forEach(() => {
				let goodsRoll = new Roll('1d100').roll().total
				let goodsResult = treasureRow.goods.find(
					(r) => r.Min <= goodsRoll && r.Max >= goodsRoll
				)
				let goodsNo = new Roll(goodsResult.roll).roll().total
				times(goodsNo).forEach(() => {
					let goods = null
					switch (goodsResult.type) {
						case 'nothing':
							break
						case 'gems':
							goods = rollTradeGoods(GemsTable)
							break
						case 'arts':
							goods = rollTradeGoods(ArtsTable)

							break
					}
					if (goodsResult.type !== 'nothing') {
						if (tradeGoodsToGold) {
							this.treasure.gp += goods.value
						} else {
							this.treasure[goodsResult.type].push(goods)
						}
					}
					// console.debug(
					//   "goodsRoll: " +
					//     goodsRoll +
					//     " - " +
					//     goodsResult.roll +
					//     " - " +
					//     artType
					// );
				})
			})
			//#endregion

			//#region Roll for items
			times(TreasureLevel.itemsMultiplier).forEach(() => {
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
							try {
								let {
									value,
									type,
									id,
									itemOverride,
									amount,
								} = rollItem(
									MundaneItemsTable,
									itemsResult.type,
									'',
									ItemRollFudge,
									this.treasure,
									{
										identified: true,
										overrideNames: overrideNames,
									},
									this._rolls
								)
								this.treasure.items.push({
									value: value,
									type: type,
									amount: amount || 1,
									id: id,
									ability: [],
									enhancement: 0,
									itemOverride: itemOverride,
								})
							} catch (err) {
								err.message +=
									' --- ' + JSON.stringify(this._rolls)
								console.error(this._rolls)
								throw err
							}
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
									consumableType,
									casterLevel,
								} = rollItem(
									MagicItemTable,
									itemsResult.type,
									'',
									ItemRollFudge,
									this.treasure,
									{
										identified: identified,
										// TODO are potions rings etc ok to be masterwork as well?
										masterwork: true,
										overrideNames: overrideNames,
									},
									this._rolls
								)
								this.treasure.items.push(
									cleanObj({
										value: value,
										type: type,
										ability: ability,
										enhancement: enhancement,
										amount: amount || 1,
										id: id,
										itemOverride: itemOverride,
										consumableType: consumableType,
										casterLevel: casterLevel,
									})
								)
							} catch (err) {
								err.message +=
									' --- ' + JSON.stringify(this._rolls)
								console.error(this._rolls)
								throw err
							}

							break
					}
				})
			})

			if (treasureRow.extraItems) {
				let extraItemsNo = treasureRow.extraItems
				times(extraItemsNo).forEach(() => {
					try {
						let {
							value,
							enhancement,
							ability,
							type,
							id,
							itemOverride,
							amount,
							consumableType,
							casterLevel,
						} = rollItem(
							MagicItemTable,
							'major',
							'',
							ItemRollFudge,
							this.treasure,
							{
								identified: identified,
								// TODO are potions rings etc ok to be masterwork as well?
								masterwork: true,
								overrideNames: overrideNames,
							},
							this._rolls
						)
						this.treasure.items.push(
							cleanObj({
								value: value,
								type: type,
								ability: ability,
								enhancement: enhancement,
								amount: amount || 1,
								id: id,
								itemOverride: itemOverride,
								consumableType: consumableType,
								casterLevel: casterLevel,
							})
						)
					} catch (err) {
						err.message += ' --- ' + JSON.stringify(this._rolls)
						console.error(this._rolls)
						throw err
					}
				})
			}
			//#endregion
		})
		return this
	}

	genTreasureFromSelectedNpcsCr(
		ItemRollFudge = [],
		options = {
			identified: false,
			tradeGoodsToGold: false,
			overrideNames: true,
		}
	) {
		// var treasure = { cp: 0, sp: 0, gp: 0, pp: 0, gems: [], arts: [], items: [] }
		if (getSelectedNpcs().length !== 0) {
			let TreasureLevels = []
			getSelectedNpcs().forEach((t) => {
				let actor = game.actors.get(t.data.actorId)
				let TreasureLevel = getActorCrAndMultiplier(actor)
				TreasureLevels.push(TreasureLevel)
			})

			let treasure = this.makeTreasureFromCR(
				TreasureLevels,
				options,
				ItemRollFudge
			)

			log(treasure)

			let pikUpStiXModule = game.modules.get('pick-up-stix')

			if (pikUpStiXModule && pikUpStiXModule.active) {
				let treasurePosition = {
					gridX: getSelectedNpcs()[0].data.x,
					gridY:
						getSelectedNpcs()[0].data.y -
						getSelectedNpcs()[0].scene.data.grid,
				}
				treasureToPuSContainer(
					pikUpStiXModule,
					treasure,
					treasurePosition
				)
			} else {
				treasureToChat(treasure)
			}
			return treasure
		}
	}
}
