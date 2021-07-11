/**
*	@filename	Worldstone.js
*	@author		kolton
*	@desc		Clear Worldstone levels
*/

function Worldstone() {
	Town.doChores();
	Pather.useWaypoint(129);
	Precast.doPrecast(true);
	Attack.clearLevel(Config.ClearType);
	//월드 스톤 1층 사냥 주석
/* 	if (Pather.moveToExit(128, true)) {
		Attack.clearLevel(Config.ClearType);
	} */

	if (Pather.moveToExit([129, 130], true)) {
		Attack.clearLevel(Config.ClearType);
	}

	return true;
}