/**
 *    @filename		paladin.levelingBuild.js
 *	  @author	  	isid0re
 *    @desc			paladin build for hammerdin.
 * 					skills based on https://www.diabloii.net/forums/threads/max-damage-hammerdin-guide-by-captain_bogus-repost.127596/
 */

var build = {
	caster: true,
	skillstab: 32, // Combat
	wantedskills: [152], //Berserk, Whirlwind
	usefulskills: [138, 149, 155], //Howl, Battle Orders, Battle Command
	mercAuraName: "Might",
	mercAuraWanted: 98,
	mercDiff: 1,
	stats: [
		["vitality", 60], ["dexterity", 30], ["strength", 50],
		["vitality", 91], ["dexterity", 44], ["strength", 80],
		["vitality", 120], ["dexterity", 59], ["strength", 120],
		["vitality", 150], ["dexterity", 77], ["strength", 150],
		["vitality", 180], ["dexterity", 100], ["strength", 160],
		["vitality", "all"]
	],
	skills: [
		[126, 1], // Bash
		[127, 1], // Sword Mastery
		[130, 1], // Howl
		[127, 2], // Sword Mastery
		[138, 1], // Shout
		[132, 1], // Leap
		[139, 1], // Stun
		[141, 1], // Increased Stamina
		[143, 1], // Leap Attack
		[144, 1], // Concentrate
		[145, 1], // Iron Skin
		[148, 1], // Increased Speed
		[149, 1], // Battle Orders
		[151, 1], // Whirlwind
		[152, 1], // Berserk
		[153, 1], // Natural Resistance
		[155, 1], // Battle Command
		[138, 5], // Shout
		[127, 5], // Sword Mastery
		[151, 5], // Whirlwind
		[130, 5], // Howl
		[149, 5], // Battle Orders
		[145, 5], //Iron Skin
		[145, 10], //Iron Skin
		[151, 10], // Whirlwind
		[149, 10], // Battle Orders
		[138, 10], // Shout
		[151, 15], // Whirlwind
		[127, 15], // Sword Mastery		
		[149, 20], // Max battle orders
		[138, 20], // Max shout
		[151, 20], // Max Whirlwind
		[127, 20] // Sword Mastery
	]
};
