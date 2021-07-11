/*
*	@filename	brain.js
*	@author		isid0re
*	@desc		get brain for khalims will
*/

function brain () {
	Town.townTasks();
	print('ÿc9솔로레벨링ÿc0 : starting brain');
	me.overhead("brain");

	if (!Pather.checkWP(78)) {
		Pather.getWP(78);
	} else {
		Pather.useWaypoint(78);
	}

	Precast.doPrecast(true);

	if (!Pather.moveToExit([88, 89, 91], true) || !Pather.moveToPreset(me.area, 2, 406)) {
		print('ÿc9솔로레벨링ÿc0 : Failed to get the Brain');
	}

	Attack.clear(0x7);
	Quest.collectItem(555, 406);
	Quest.stashItem(555);

	return true;
}
