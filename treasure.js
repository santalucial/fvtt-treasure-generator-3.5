import {
	TreasureTable,
	GemsTable,
	ArtsTable,
	MagicItemTable,
	MundaneItemsTable,
	weaponsTable,
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
		this._treasureErr = {
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

	toChat(treasure = this._treasure) {
		var TreasureString = '<div class="D35E chat-card item-card">'
		//#region gold section
		if (treasure.cp + treasure.sp + treasure.gp + treasure.pp > 0) {
			TreasureString += `<header class="card-header flexrow">
	<img src="systems/D35E/icons/items/inventory/Loot_129.png" title="Money" width="36" height="36">
	<h3 class="item-name">Money</h3>
	</header> <div><p>`
			if (treasure.cp > 0) {
				TreasureString +=
					'<span class="fontstyle0">cp: ' +
					treasure.cp +
					'</span><br>'
			}
			if (treasure.sp > 0) {
				TreasureString +=
					'<span class="fontstyle0">sp: ' +
					treasure.sp +
					'</span><br>'
			}
			if (treasure.gp > 0) {
				TreasureString +=
					'<span class="fontstyle0">gp: ' +
					treasure.gp +
					'</span><br>'
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
		ChatMessage.create({ content: TreasureString })
	}

	async _makeItem(item) {
		if (item.id) {
			if (item.consumableType) {
				//TODO handle caster Level, not every item has it defined, others have it at 0 when not needed (been added automatically)
				try {
					let it = await getItem(item.id)
					it.data.data.quantity = item.amount

					let consumableItem = ItemPf.toConsumable(
						it,
						item.consumableType
					)
					if (item.itemOverride) {
						mergeObject(consumableItem, item.itemOverride)
					}

					return consumableItem
				} catch (err) {
					console.error(
						`error fetching item ${item.type} - ${item.id}`
					)
					console.error(err)
					this._treasureErr.items.push(item)
				}
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

				try {
					let it = await ItemPF.getMagicItem(item.id, enhancements)
					it.data.data.quantity = item.amount
					if (item.itemOverride) {
						mergeObject(it, item.itemOverride)
					}

					return it
				} catch (err) {
					console.error(
						`error fetching magic item ${item.type} - ${item.id}`
					)
					console.error(err)
					this._treasureErr.items.push(item)
				}
			} else {
				try {
					let it = await getItem(item.id)
					it.data.data.quantity = item.amount

					if (item.itemOverride) {
						mergeObject(it, item.itemOverride)
					}

					return it
				} catch (err) {
					console.error(
						`error fetching item ${item.type} - ${item.id}`
					)
					console.error(err)
					this._treasureErr.items.push(item)
				}
			}
		} else {
			console.error(`no item generated for ${item.type}`)
			this._treasureErr.items.push(item)
		}
	}

	toItemPfArr() {
		let promises = []

		for (let item of this._treasure.items) {
			promises.push(this._makeItem(item))
		}

		return Promise.all(promises)
	}

	toPuSContainer(position = { gridX: 0, gridY: 0 }) {
		let pikUpStiXModule = game.modules.get('pick-up-stix')
		var treasureErr = {
			cp: 0,
			sp: 0,
			gp: 0,
			pp: 0,
			gems: [],
			arts: [],
			items: [],
		}

		this.toItemPfArr()
			.then((itemsObjects) => {
				pikUpStiXModule.apis.makeContainer(
					itemsObjects.filter((el) => el !== undefined),
					{
						cp: this._treasure.cp,
						sp: this._treasure.sp,
						gp: this._treasure.gp,
						pp: this._treasure.pp,
					},
					position
				)
			})
			.then(() => {
				if (treasureErr.items.length > 0) {
					this.treasureToChat(this._treasureErr)
				}
			})
	}

	rollItem(
		table,
		grade,
		prefix = '',
		forceRolls = [],
		options,
		itemDamageType = []
	) {
		let magicItemRoll = new Roll('1d100').roll().total
		if (forceRolls && forceRolls.length > 0) {
			magicItemRoll = forceRolls.shift()
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

		this._rolls.push({
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
						damageType: magicItemData.damageType,
					})
					if (magicItemData.roll && magicItemData.roll !== '1d1') {
						let ItemAmount = new Roll(magicItemData.roll).roll()
							.total
						if (forceRolls && forceRolls.length > 0) {
							ItemAmount = forceRolls.shift()
						}
						result.amount = ItemAmount
					}
					return result
				case 'roll':
					roll = this.rollItem(
						magicItemData.table,
						grade,
						(
							(prefix || '') +
							' ' +
							(magicItemData.itemType || '')
						).trim(),
						forceRolls,
						options
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
					}

					Object.assign(result, {
						value:
							result.value +
							(magicItemData.value || 0) +
							valueBonus,
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
						mergeObject(
							result.itemOverride,
							magicItemData.itemOverride
						)
					}

					if (magicItemData.casterLevel) {
						Object.assign(result, {
							casterLevel: magicItemData.casterLevel,
						})
					}

					return cleanObj(result)
				case 'ammunition':
					this.rollItem(
						magicItemData.table,
						grade,
						prefix,
						forceRolls,
						options
					)
					return this.rollItem(
						table,
						grade,
						prefix,
						forceRolls,
						options
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
					this._treasure.items.push(extraItem)
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
					if (forceRolls && forceRolls.length > 0) {
						scrollAmountRoll = forceRolls.shift()
					}

					times(scrollAmountRoll).forEach((step) => {
						let result2 = {
							value: 0,
							enhancement: 0,
							type: '',
							ability: [],
							valueBonus: 0,
						}
						roll = this.rollItem(
							magicItemData.table,
							grade,
							(
								(prefix || '') +
								' ' +
								(magicItemData.itemType || '')
							).trim(),
							forceRolls,
							options
						)
						Object.assign(result2, roll)

						if (step === 0) {
							result = cleanObj(result2)
						} else {
							this._treasure.items.push(cleanObj(result2))
						}
					})
					return result
					break
				case 'roll+':
					//item roll
					roll = this.rollItem(
						table,
						grade,
						prefix,
						forceRolls,
						options
					)

					//ability roll
					let abilityRoll = this.rollItem(
						roll.table,
						grade,
						'',
						forceRolls,
						options,
						roll.damageType
					)

					for (let ability of abilityRoll) {
						if (
							roll.ability.filter(
								(ab) => ab.itemType === ability.itemType
							).length === 0
						) {
							Object.assign(result, {
								value: result.value + ability.value,
								valueBonus:
									result.valueBonus + ability.enhancement,
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
					roll = this.rollItem(
						table,
						grade,
						prefix,
						forceRolls,
						options,
						itemDamageType
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

					roll = this.rollItem(
						table,
						grade,
						prefix,
						forceRolls,
						options,
						itemDamageType
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
						} = this.rollItem(
							magicItemData.table,
							grade,
							prefix,
							forceRolls,
							options
						)
						ret.itemType += ', ' + itemTypeExtra
						ret.id = idOverride
						ret.itemOverride = itemOverride //might be an issue if there were case in which both ability and extraItemDef(only used for typing bane ability) use it
					}

					if (
						magicItemData.damageTypeWhitelist &&
						itemDamageType.length > 0 &&
						magicItemData.damageTypeWhitelist.length > 0
					) {
						let allowed = false
						itemDamageType.forEach((dt) => {
							if (
								magicItemData.damageTypeWhitelist.includes(dt)
							) {
								allowed = true
							}
						})
						if (!allowed) {
							return this.rollItem(
								table,
								grade,
								prefix,
								forceRolls,
								options,
								itemDamageType
							)
						}
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

	/**
	 *
	 * @param {Array} TreasureLevels Represents the monsters against which to run the generation algorithm e.g. [{
		cr = 1,
		moneyMultiplier = 1,
		goodsMultiplier = 1,
		itemsMultiplier = 1,
	}]
	 * @param {Object} Options e.g. { identified = false, tradeGoodsToGold = false, overrideNames = true },
	 `identified` specifies wether magic items creted should be marked as identified by default, `tradeGoodsToGold` specifies
	 wether to make items for trade goods or directly add their gold value to the treasure, `overrideNames` specifies wether
	 to override the final item name with the name obtained from the tables (some items require it such as *Necklace of fireballs type II*
	 where the compendium item is *Necklace of fireballs* but there are 7 types)
	 * @param {Array} ItemRollFudge Overrides rolls maintaining array order, used for automated testing e.g. [1,5,5]
	 */
	makeTreasureFromCR(
		TreasureLevels,
		{ identified = false, tradeGoodsToGold = false, overrideNames = true },
		ItemRollFudge = []
	) {
		TreasureLevels.forEach((TreasureLevel) => {
			let treasureRow =
				TreasureTable[
					Math.min(Math.max(Math.floor(TreasureLevel.cr), 1), 30) - 1
				]

			//#region Roll for money
			times(TreasureLevel.moneyMultiplier).forEach(() => {
				let moneyRoll = new Roll('1d100').roll().total
				let moneyResult = treasureRow.money.find(
					(r) => r.Min <= moneyRoll && r.Max >= moneyRoll
				)

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
								this._addItem({
									...this.rollItem(
										MundaneItemsTable,
										itemsResult.type,
										'',
										ItemRollFudge,
										{
											identified: true,
											overrideNames: overrideNames,
										}
									),
									ability: [],
									enhancement: 0,
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
								this._addItem(
									this.rollItem(
										MagicItemTable,
										itemsResult.type,
										'',
										ItemRollFudge,
										{
											identified: identified,
											// TODO are potions rings etc ok to be masterwork as well?
											masterwork: true,
											overrideNames: overrideNames,
										}
									)
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
						this._addItem(
							this.rollItem(
								MagicItemTable,
								'major',
								'',
								ItemRollFudge,
								{
									identified: identified,
									// TODO are potions rings etc ok to be masterwork as well?
									masterwork: true,
									overrideNames: overrideNames,
								}
							)
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
		log(this.treasure)
		return this
	}

	_addItem(obj) {
		this.treasure.items.push(
			cleanObj({
				value: obj.value,
				type: obj.type,
				ability: obj.ability,
				enhancement: obj.enhancement,
				amount: obj.amount || 1,
				id: obj.id,
				itemOverride: obj.itemOverride,
				consumableType: obj.consumableType,
				casterLevel: obj.casterLevel,
			})
		)
	}
}

//#region example

function getActorCrAndMultiplier(actor) {
	let cr = actor.data.data.details.cr
	//#region Options Validation
	// moneyMultiplier = Math.floor(Math.max(moneyMultiplier, 1))
	// goodsMultiplier = Math.floor(Math.max(goodsMultiplier, 1))
	// itemsMultiplier = Math.floor(Math.max(itemsMultiplier, 1))
	//#endregion
	//TODO fetch actual multiplier data
	return {
		cr: cr,
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

/**
 * Treasure Generator Usage Example.
 * @param {Object} options e.g. { identified = false, tradeGoodsToGold = false, overrideNames = true }
 */
export function genTreasureFromSelectedNpcsCr(
	options = {
		identified: false,
		tradeGoodsToGold: false,
		overrideNames: true,
	}
) {
	if (getSelectedNpcs().length !== 0) {
		let TreasureLevels = []
		getSelectedNpcs().forEach((t) => {
			let actor = game.actors.get(t.data.actorId)
			let TreasureLevel = getActorCrAndMultiplier(actor)
			TreasureLevels.push(TreasureLevel)
		})
		let treasureGen = new TreasureGenerator()
		let treasure = treasureGen.makeTreasureFromCR(TreasureLevels, options)
			.treasure

		let pikUpStiXModule = game.modules.get('pick-up-stix')

		if (pikUpStiXModule && pikUpStiXModule.active) {
			let treasurePosition = {
				gridX: getSelectedNpcs()[0].data.x,
				gridY:
					getSelectedNpcs()[0].data.y -
					getSelectedNpcs()[0].scene.data.grid,
			}
			treasureGen.toPuSContainer(treasurePosition)
		} else {
			treasureGen.toChat()
		}
		return treasure
	}
}

/**
 * Example for generating vendor merchandise, pass vendor and amount of items to generate,
 * it is incomplete, it's missing adding items to vendor inventory.
 * @param {Token} vendorToken
 * @param {int} noMundaneItems
 * @param {int} noMinorItems
 * @param {int} noMediumItems
 * @param {int} noMajorItems
 */
export function genWeaponSmithItems(
	vendorToken,
	noMundaneItems,
	noMinorItems,
	noMediumItems,
	noMajorItems
) {
	let treasureGen = new TreasureGenerator()

	times(noMundaneItems).forEach(() => {
		treasureGen._addItem({
			...treasureGen.rollItem(MundaneItemsTable, 'mundane', '', [51], {
				//51 forces the first roll to be 51, falling into the weapons section of the MundaneItemsTable, avoiding other mundane items
				identified: true,
				masterwork: false,
				overrideNames: true,
			}),
			ability: [],
			enhancement: 0,
		})
	})

	times(noMinorItems).forEach(() => {
		treasureGen._addItem(
			treasureGen.rollItem(weaponsTable, 'medium', '', [], {
				identified: true,
				masterwork: true,
				overrideNames: true,
			})
		)
	})

	times(noMediumItems).forEach(() => {
		treasureGen._addItem(
			treasureGen.rollItem(weaponsTable, 'medium', '', [], {
				identified: true,
				masterwork: true,
				overrideNames: true,
			})
		)
	})

	times(noMajorItems).forEach(() => {
		treasureGen._addItem(
			treasureGen.rollItem(weaponsTable, 'major', '', [], {
				identified: true,
				masterwork: true,
				overrideNames: true,
			})
		)
	})

	treasureGen
		.toItemPfArr()
		// eslint-disable-next-line no-unused-vars
		.then((items) => {
			//TODO add items to vendorToken
			vendorToken
		})
		.catch((err) => {
			throw err
		})
}

//#endregion
