/*
 *    @filename   	barbarian.WhirlwindBuild.js
 *	  @author	  	isid0re
 *    @desc       	Whirlwind build
 *    @credits		ebner20
 */

var build = {
	caster: false,
	skillstab: 32, // Barbarian Combat
	wantedskills: [152, 151], // Bash, Whirlwind
	usefulskills: [138, 149, 155], // Shout, Battle Orders, Battle Command
	mercAuraName: "Might",
	mercAuraWanted: 98,
	mercDiff: 1,
	stats: [
		["vit", 40],
		["str", 60],
		["vit", 100],
		["str", 85],
		["vit", 150],
		["dex", 35],
		["str", 100],
		["vit", 180],
		["str", 125],
		["vit", 205],
		["str", 156],
		["vit", "all"]
	],
	skills: [
		[126, 1, false], // Bash
		[127, 1, false], // Sword Mastery
		[130, 1, false], // Howl
		[127, 2, false], // Sword Mastery
		[138, 1, false], // Shout
		[132, 1, false], // Leap
		[139, 1, false], // Stun
		[141, 1, false], // Increased Stamina
		[143, 1, false], // Leap Attack
		[144, 1, false], // Concentrate
		[145, 1, false], // Iron Skin
		[148, 1, false], // Increased Speed
		[149, 1, false], // Battle Orders
		[151, 1, false], // Whirlwind
		[152, 1, false], // Berserk
		[153, 1, false], // Natural Resistance
		[155, 1, false], // Battle Command
		[138, 5, false], // Shout
		[127, 5, false], // Sword Mastery
		[151, 5, false], // Whirlwind
		[130, 5, false], // Howl
		[149, 5, false] // Battle Orders
		[145, 5, false], //Iron Skin
		[145, 10, false], //Iron Skin
		[151, 10, false], // Whirlwind
		[149, 10, false], // Battle Orders
		[138, 10, false], // Shout
		[151, 15, false], // Whirlwind
		[127, 15, false], // Sword Mastery		
		[149, 20, false], // Max battle orders
		[138, 20, false], // Max shout
		[151, 20, false], // Max Whirlwind
		[127, 20, false] // Sword Mastery
	],
	autoEquipTiers: [ // autoequip final gear 자동장비 착용 주석처리시 에러발생
/* 		//weapon
		"[Type] == sword && [flag] == runeword # [ias] >= 30 # [tier] == 100000", //Grief x2 dual weild
		//Helmet
		"[name] == wingedhelm && [quality] == set && [flag] != ethereal # [fhr] >= 30 # [tier] == 100000", // gface
		//belt
		"[name] == spiderwebsash && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 90 # [tier] == 100000", //arach's
		//boots
		"[name] == warboots && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 160 # [tier] == 100000", //gorerider's
		//armor
		"[type] == armor && [flag] != ethereal && [flag] == runeword # [frw] >= 45 # [tier] == 100000", //Enigma
		//gloves
		"[name] == bramblemitts && [quality] == set && [flag] != ethereal # [ias] == 20 # [tier] == 100000", //laying of hands
		//ammy
		"[type] == amulet && [quality] == unique # [lightresist] == 35 # [tier] == 100000", //highlords
		//rings
		"[type] == ring && [quality] == unique # [tohit] >= 180 && [dexterity] >= 15 # [tier] == 100000", // ravenfrost
		"[type] == ring && [quality] == unique # [lifeleech] >= 5 && [maxstamina] == 50 # [tier] == 100000", // bul-kathos' wedding band */
	]
};
