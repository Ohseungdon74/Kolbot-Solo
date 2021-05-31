/*
*	@filename	SoloLeveling.js
*	@author		isid0re
*	@desc		Leveling for any class type. Uses predefined build templates.
*/

//---------------- Do Not Touch Below ----------------\\

if (!isIncluded("SoloLeveling/Tools/Tracker.js")) {
	include("SoloLeveling/Tools/Tracker.js");
}

function SoloLeveling () {
	this.setup = function () {
		print('ÿc9솔로레벨링ÿc0 : 설정 시작.');
		me.overhead('설정 시작');
		print("ÿc9솔로레벨링ÿc0 : 퀘스트 아이템 pickits 로드..");
		NTIP.arrayLooping(nipItems.Quest);
		me.overhead('로드 pickits');
		print("ÿc9솔로레벨링ÿc0 : 기본 아이템 pickits 로드..");
		NTIP.arrayLooping(nipItems.General);
		print("ÿc9솔로레벨링ÿc0 : Pickit에 로드된 판매 할 귀중한 품목..");
		NTIP.arrayLooping(nipItems.Selling);
		print('ÿc9솔로레벨링ÿc0 : 시작..');
		me.overhead('실행 시작..');

		if (me.charlvl === 1) {
			let buckler = me.getItem(328);

			if (buckler) {
				if (buckler.location === 1) {
					buckler.drop();
				}
			}
		}

		if (me.hp / me.hpmax < 1) {
			Town.heal();
			me.cancel();
		}

		return true;
	};

	this.runScripts = function () {
		let j, k, updatedDifficulty = Check.nextDifficulty();

		for (k = 0; k < SetUp.scripts.length; k += 1) {
			if (!me.inTown) {
				Town.goToTown();
			}

			if (updatedDifficulty) {
				DataFile.updateStats("setDifficulty", updatedDifficulty);
				D2Bot.setProfile(null, null, null, updatedDifficulty);
			}

			if (Check.Task(SetUp.scripts[k])) {
				if (!isIncluded("SoloLeveling/Scripts/" + SetUp.scripts[k] + ".js")) {
					include("SoloLeveling/Scripts/" + SetUp.scripts[k] + ".js");
				}

				let tick = getTickCount();

				for (j = 0; j < 5; j += 1) {
					if (this[SetUp.scripts[k]]()) {
						break;
					}
				}

				if (j === 5) {
					me.overhead("script " + SetUp.scripts[k] + " failed.");
				}

				if (Developer.logPerformance) {
					Tracker.Script(tick, SetUp.scripts[k]);
				}
			}
		}

		return true;
	};

	// Start Running Script
	this.setup();
	this.runScripts();
	scriptBroadcast('quit');

	return true;
}
