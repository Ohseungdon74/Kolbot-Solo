/*
*	@filename	eye.js
*	@author		isid0re
*	@desc		get the eye for khalims will
*/

function eye () {
	Town.townTasks();
	print('ÿc9솔로레벨링ÿc0 : starting eye');
	me.overhead("eye");

	if (!Pather.checkWP(76)) {
		Pather.getWP(76);
	} else {
		Pather.useWaypoint(76);
	}

	Precast.doPrecast(true);

	if (!Pather.moveToExit([76, 85], true)) {
		print('ÿc9솔로레벨링ÿc0 : Failed to get the eye');
	}

	Town.doChores();
	Town.buyPots(10, "Antidote"); // antidote
	Town.drinkPots();
	Pather.usePortal(85, me.name);
	Pather.moveToPreset(me.area, 2, 407);
	Attack.clear(0x7);
	Quest.collectItem(553, 407);
	Quest.stashItem(553);

	return true;
}
