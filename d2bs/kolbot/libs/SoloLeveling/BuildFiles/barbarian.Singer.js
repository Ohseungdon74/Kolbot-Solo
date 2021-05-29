/*
 *    @filename   	barbarian.Singer.js
 *	  @author	  	isid0re
 *    @desc       	Warcry (Singer/Shout) build
 *    @credits		ebner20
 */

var build = {
	caster: true,
	skillstab: 32, // Combat
	wantedskills: [154, 138], //warcry, shout
	usefulskills: [148, 153], //increased speed, natural resistance
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
	autoEquipTiers: [ // autoequip final gear
		//weapon
		"[Type] == sword && [flag] == runeword # [FCR] == 40 # [tier] == 100000", // HotO x2 dual weild
		//Helmet
		"[name] == shako && [quality] == unique && [flag] != ethereal # [DamageResist] == 10 # [tier] == 100000", // harlequin's crest
		//belt
		"[name] == spiderwebsash && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 90 # [tier] == 100000", //arach's
		//boots
		"[Name] == MeshBoots && [Quality] == Unique && [Flag] != Ethereal # [frw] >= 30 # [tier] == 100000", //silkweave
		//armor
		"[type] == armor && [flag] != ethereal && [flag] == runeword # [frw] >= 45 # [tier] == 100000", //Enigma
		//gloves
		"[name] == gauntlets && [quality] == unique && [flag] != ethereal # [enhanceddefense] >= 10 # [tier] == 100000", //frostburns
		//ammy
		"[type] == amulet && [quality] == unique # [strength] == 5 && [coldresist] >= 30 # [tier] == 100000", //maras
		//rings
		"[type] == ring && [quality] == unique # [itemmaxmanapercent] == 25 # [tier] == 100000", //soj
		"[type] == ring && [quality] == unique # [lifeleech] >= 3 && [maxstamina] == 50 # [tier] == 100000", // bul-kathos' wedding band
	]
};
