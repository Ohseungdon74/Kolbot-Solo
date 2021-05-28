//	/d2bs/kolbot/libs/config/Builds/Assassin.Start.js

/**
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
*
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs:
*
* 	Strength	= 0
* 	Energy		= 1
* 	Dexterity	= 2
* 	Vitality	= 3
*
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) {
	include("common/Cubing.js");
}

if (!isIncluded("common/Prototypes.js")) {
	include("common/Prototypes.js");
}

if (!isIncluded("common/Runewords.js")) {
	include("common/Runewords.js");
}

if (!isIncluded("common/Town.js")) {
	include("common/Town.js");
}

var AutoBuildTemplate = {

	1:	{
		//SkillPoints: [-1],			// This doesn't matter. We don't have skill points to spend at lvl 1
		//StatPoints: [-1,-1,-1,-1,-1],	// This doesn't matter. We don't have stat points to spend at lvl 1
		Update: function () {
			Config.AttackSkill = [-1, 0, 0, 0, 0, 0, 0];
			Config.LowManaSkill = [0, 0];
			Config.TownCheck = me.findItem("tbk", 0, 3);
			Config.BeltColumn = ["hp", "hp", "hp", "hp"];
			Config.HPBuffer = 4;
			Config.MPBuffer = 2;
		}
	},

	2:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];
			Config.LowManaSkill = [0, 0];
			Config.TownCheck = me.findItem("tbk", 0, 3);
			Config.BeltColumn = ["hp", "hp", "mp", "mp"];
			Config.HPBuffer = 2;
			Config.MPBuffer = 6;
		}
	},

	3:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];
			Config.TownCheck = me.findItem("tbk", 0, 3);
		}
	},

	4:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];
			Config.TownCheck = me.findItem("tbk", 0, 3);
		}
	},

	5:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];
			Config.TownCheck = me.findItem("tbk", 0, 3);
			Config.BeltColumn = ["hp", "hp", "mp", "mp"];
		}
	},

	6:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, 0, 251, 0, 0, -1];
			Config.TownCheck = me.findItem("tbk", 0, 3);
			Config.UseBoS = true;

		}
	},

	7:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, 0, 251, 0, 0, -1];
			Config.TownCheck = me.findItem("tbk", 0, 3);
		}
	},

	8:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, 0, 251, 0, 0, -1];
			Config.TownCheck = me.findItem("tbk", 0, 3);
		}
	},

	9:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, 0, 251, 0, 0, -1];
			Config.TownCheck = me.findItem("tbk", 0, 3);
		}
	},

	10:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, 0, 251, 0, 0, -1];
			Config.TownCheck = me.findItem("tbk", 0, 3);
		}
	},

	11:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, 0, 251, 0, 0, -1];

		}
	},

	12:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];
			Config.UseTraps = true;
			Config.Traps = [262, 262, 262, -1, -1]; // Skill IDs for traps to be cast on all mosters except act bosses.
			Config.BossTraps = [262, 262, 262, 262, 262]; // Skill IDs for traps to be cast on act bosses.
		}
	},

	13:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	14:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	15:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	16:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	17:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	18:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	19:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	20:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	21:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	22:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	23:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	24:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},

	25:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
	26:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
	27:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
	28:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
	29:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
	30:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
	31:	{
		SkillPoints: [-1],
		StatPoints: [-1, -1, -1, -1, -1],
		Update: function () {
			Config.AttackSkill = [-1, 251, -1, 251, -1, 0, 0];

		}
	},
};
