/*
 *    @filename   amazon.JavazonBuild.js
 *	  @author	  isid0re
 *    @desc       Bowzon build
 *	  @활아마 35레벨 후 스킬,스탯초기화 후 스탯, 스킬 분배	
 */

var build = {
	caster: false,
	skillstab: 0, // Bow N Crossbow Skills
	wantedskills: [11, 9], // Cold Arrow, critical strike
	usefulskills: [12, 13], // multishot, dodge
	mercAuraName: "Might",
	mercAuraWanted: 98,
	mercDiff: 1,
	stats: [
		["str", 35], ["vit", 55], ["dex", 40],
		["str", 45], ["vit", 75], ["dex", 55],
		["str", 60], ["vit", 125], ["dex", 75],
		["str", 85], ["vit", 150],
		["str", 100], ["dex", 109], ["vit", 200],
		["str", 125], ["vit", 225],
		["str", 156], ["vit", "all"]
	],
	skills: [
		[6, 1], // magic arrow
		[9, 1], // Critical Strike
		[8, 1], // Inner Sight
		[6, 3], // magic arrow
		[11, 1], // Cold Arrow
		[9, 5], // Critical Strike
		[12, 1], // Multiple Shot
		[13, 1], // Dodge
		[18, 1], // Avoid
		[17, 1], //	Slow Missiles
		[12, 5], // Multiple Shot
		[22, 1], // Guided Arrow
		[23, 1], // Penetrate
		[26, 1], // Strafe
		[28, 1], // Dopplezon
		[29, 1], // Evade
		[26, 5], // Strafe
		[33, 1], // Pierce
		[26, 20], // Strafe
		[9, 20], // Critical Strike
		[23, 20], // Penetrate
		[33, 11] // Pierce
	],
	autoEquipTiers: [ // autoequip final gear
		//weapon
		"[name] == diamondbow && [quality] == unique # [fireresist] == 40 # [tier] == 110000", // WitchWild String up'd
		//Helmet
		"[name] == casque && [quality] == unique  && [flag] != ethereal # [ias] == 10 && [lifeleech] >= 5 # [tier] == 110000", //griffons
		//boots
		"[name] == battleboots && [quality] == unique && [flag] != ethereal # [itemmagicbonus] >= 30 # [tier] == 100000", //war traveler
		//belt
		"[name] == vampirefangbelt && [quality] == unique && [flag] != ethereal # [lifeleech] >= 5 # [tier] == 110000", //arach's
		//armor
		"[type] == armor && [flag] == runeword  && [flag] != ethereal # [fireresist] == 65 && [hpregen] == 7 # [tier] == 110000", //CoH
		//shield - N/A
		//ammy
		"[type] == amulet && [quality] == unique # [dexterity] == 25 # [tier] == 110000", // cat's eye
		//rings
		"[type] == ring && [quality] == unique # [dexterity] == 20 && [tohit] == 250 # [tier] == # [tier] == 110000", // raven frost
		"[name] == ring && [quality] == unique # [maxstamina] == 50 && [lifeleech] >= 3 # [tier] == 110000", //bk ring
	]
};
