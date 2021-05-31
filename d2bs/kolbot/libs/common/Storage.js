/**
*	@filename	Storage.js
*	@author		McGod, kolton (small kolbot related edits)
*	@desc		manage inventory, belt, stash, cube
*/

var Container = function (name, width, height, location) {
	var h, w;

	this.name = name;
	this.width = width;
	this.height = height;
	this.location = location;
	this.buffer = [];
	this.itemList = [];
	this.openPositions = this.height * this.width;

	// Initalize the buffer array for use, set all as empty.
	for (h = 0; h < this.height; h += 1) {
		this.buffer.push([]);

		for (w = 0; w < this.width; w += 1) {
			this.buffer[h][w] = 0;
		}
	}

	/* Container.Mark(item)
	 *	Marks the item in the buffer, and adds it to the item list.
	 */
	this.Mark = function (item) {
		var x, y;

		//Make sure it is in this container.
		if (item.location !== this.location || item.mode !== 0) {
			return false;
		}

		//Mark item in buffer.
		for (x = item.x; x < (item.x + item.sizex); x += 1) {
			for (y = item.y; y < (item.y + item.sizey); y += 1) {
				this.buffer[y][x] = this.itemList.length + 1;
				this.openPositions -= 1;
			}
		}

		//Add item to list.
		this.itemList.push(copyUnit(item));

		return true;
	};

	/* Container.isLocked(item)
	 *	Checks if the item is in a locked spot
	 */
	this.IsLocked = function (item, baseRef) {
		var h, w, reference;

		reference = baseRef.slice(0);

		//Make sure it is in this container.
		if (item.mode !== 0 || item.location !== this.location) {
			return false;
		}

		// Make sure the item is ours
		if (!item.getParent() || item.getParent().type !== me.type || item.getParent().gid !== me.gid) {
			return false;
		}

		//Insure valid reference.
		if (typeof (reference) !== "object" || reference.length !== this.buffer.length || reference[0].length !== this.buffer[0].length) {
			throw new Error("Storage.IsLocked: Invalid inventory reference");
		}

		try {
			// Check if the item lies in a locked spot.
			for (h = item.y; h < (item.y + item.sizey); h += 1) {
				for (w = item.x; w < (item.x + item.sizex); w += 1) {
					if (reference[h][w] === 0) {
						return true;
					}
				}
			}
		} catch (e2) {
			throw new Error("Storage.IsLocked error! Item info: " + item.name + " " + item.y + " " + item.sizey + " " + item.x + " " + item.sizex + " " + item.mode + " " + item.location);
		}

		return false;
	};

	this.Reset = function () {
		var h, w;

		for (h = 0; h < this.height; h += 1) {
			for (w = 0; w < this.width; w += 1) {
				this.buffer[h][w] = 0;
			}
		}

		this.itemList = [];
		return true;
	};

	/* Container.CanFit(item)
	 *	Checks to see if we can fit the item in the buffer.
	 */
	this.CanFit = function (item) {
		return (!!this.FindSpot(item));
	};

	/* Container.FindSpot(item)
	 *	Finds a spot available in the buffer to place the item.
	 */
	this.FindSpot = function (item) {
		var x, y, nx, ny;

		//Make sure it's a valid item
		if (!item) {
			return false;
		}

		Storage.Reload();

		//Loop buffer looking for spot to place item.
		for (y = 0; y < this.width - (item.sizex - 1); y += 1) {
Loop:
			for (x = 0; x < this.height - (item.sizey - 1); x += 1) {
				//Check if there is something in this spot.
				if (this.buffer[x][y] > 0) {
					continue;
				}

				//Loop the item size to make sure we can fit it.
				for (nx = 0; nx < item.sizey; nx += 1) {
					for (ny = 0; ny < item.sizex; ny += 1) {
						if (this.buffer[x + nx][y + ny]) {
							continue Loop;
						}
					}
				}

				return ({x: x, y: y});
			}
		}

		return false;
	};

	/* Container.MoveTo(item)	컨테이너 이동 (항목)
	 *	Takes any item and moves it into given buffer.	항목을 가져 와서 주어진 버퍼로 이동합니다.
	 */
	this.MoveTo = function (item) {
		var nPos, n, nDelay, cItem, cube;

		try {
			// 여기에 넣어도 될까요?
			nPos = this.FindSpot(item);

			if (!nPos) {
				return false;
			}

			//큐브-> 보관함, 먼저 인벤토리에 항목을 배치해야합니다.
			if (item.location === 6 && this.location === 7 && !Storage.Inventory.MoveTo(item)) {
				return false;
			}

			//상에있는 물건을 다룰 수 없습니다!
			if (item.mode === 3) {
				return false;
			}

			//이미 커서에있는 항목입니다.
			if (me.itemoncursor && item.mode !== 4) {
				return false;
			}

			//Make sure stash is open 숨김이 열려 있는지 확인
			if (this.location === 7 && !Town.openStash()) {
				return false;
			}

			//Pick to cursor if not already. 아직 선택하지 않은 경우 커서를 선택합니다.
			if (!item.toCursor()) {
				return false;
			}

			//Loop three times to try and place it. 세 번 반복하여 시도하고 배치하십시오.
			for (n = 0; n < 5; n += 1) {
				if (this.location === 6) { // place item into cube 큐브에 항목을 배치
					cItem = getUnit(100);
					cube = me.getItem(549);

					if (cItem !== null && cube !== null) {
						sendPacket(1, 0x2a, 4, cItem.gid, 4, cube.gid);
					}
				} else {
					clickItemAndWait(0, nPos.y, nPos.x, this.location);
				}

				nDelay = getTickCount();

				while ((getTickCount() - nDelay) < Math.max(1000, me.ping * 3 + 500)) {
					if (!me.itemoncursor) {
						print("성공적으로 배치 " + item.name + " X: " + nPos.x + " Y: " + nPos.y);
						delay(200);

						return true;
					}

					delay(10);
				}
			}

			return true;
		} catch (e) {
			return false;
		}
	};

	/* Container.Dump()
	 *	Prints all known information about container.
	 */
	this.Dump = function () {
		var x, y, string;

		print(this.name + " 의 " + this.width + " 너비와 " + this.height + " 높이");
		print(this.name + " 에는 " + this.itemList.length + " 개의 항목이 있고 " + this.openPositions + " 개의 자리가 있습니다.");

		for (x = 0; x < this.height; x += 1) {
			string = "";

			for (y = 0; y < this.width; y += 1) {
				string += (this.buffer[x][y] > 0) ? "ÿc1x" : "ÿc0o";
			}

			print(string);
		}
	};

	/* Container.UsedSpacePercent()
	 *	Returns percentage of the container used.
	 */
	this.UsedSpacePercent = function () {
		var x, y,
			usedSpace = 0,
			totalSpace = this.height * this.width;

		Storage.Reload();

		for (x = 0; x < this.height; x += 1) {
			for (y = 0; y < this.width; y += 1) {
				if (this.buffer[x][y] > 0) {
					usedSpace += 1;
				}
			}
		}

		return usedSpace * 100 / totalSpace;
	};

	/* Container.compare(reference)	컨테이너 비교 (참조)
	 *	Compare given container versus the current one, return all new items in current buffer.	주어진 컨테이너와 현재 컨테이너를 비교하고 현재 버퍼의 모든 새 항목을 반환합니다
	 */
	this.Compare = function (baseRef) {
		var h, w, n, item, itemList, reference;

		Storage.Reload();

		try {
			itemList = [];
			reference = baseRef.slice(0, baseRef.length);

			//Insure valid reference.	유효한 참조를 확인하십시오.
			if (typeof (reference) !== "object" || reference.length !== this.buffer.length || reference[0].length !== this.buffer[0].length) {
				throw new Error("다른 컨테이너를 비교할 수 없습니다.");
			}

			for (h = 0; h < this.height; h += 1) {
Loop:
				for (w = 0; w < this.width; w += 1) {
					item = this.itemList[this.buffer[h][w] - 1];

					if (!item) {
						continue;
					}

					for (n = 0; n < itemList.length; n += 1) {
						if (itemList[n].gid === item.gid) {
							continue Loop;
						}
					}

					//Check if the buffers changed and the current buffer has an item there.	버퍼가 변경되었고 현재 버퍼에 항목이 있는지 확인하십시오.
					if (this.buffer[h][w] > 0 && reference[h][w] > 0) {
						itemList.push(copyUnit(item));
					}
				}
			}

			return itemList;
		} catch (e) {
			return false;
		}
	};

	this.toSource = function () {
		return this.buffer.toSource();
	};
};

var Storage = new function () {
	this.Init = function () {
		this.StashY = me.gametype === 0 ? 4 : 8;
		this.Inventory = new Container("Inventory", 10, 4, 3);
		this.TradeScreen = new Container("Inventory", 10, 4, 5);
		this.Stash = new Container("Stash", 6, this.StashY, 7);
		this.Belt = new Container("Belt", 4 * this.BeltSize(), 1, 2);
		this.Cube = new Container("Horadric Cube", 3, 4, 6);
		this.InvRef = [];

		this.Reload();
	};

	this.BeltSize = function () {
		var item = me.getItem(-1, 1); // get equipped item

		if (!item) { // nothing equipped
			return 1;
		}

		do {
			if (item.bodylocation === 8) { // belt slot
				switch (item.code) {
				case "lbl": // sash
				case "vbl": // light belt
					return 2;
				case "mbl": // belt
				case "tbl": // heavy belt
					return 3;
				default: // everything else
					return 4;
				}
			}
		} while (item.getNext());

		return 1; // no belt
	};
	// 인벤토리와 거래기능
		
	this.Reload = function () {
		this.Inventory.Reset();
		this.Stash.Reset();
		this.Belt.Reset();
		this.Cube.Reset();
		this.TradeScreen.Reset();

		var item = me.getItem();

		if (!item) {
			return false;
		}

		do {
			switch (item.location) {
			case 3:
				this.Inventory.Mark(item);

				break;
			case 5:
				this.TradeScreen.Mark(item);

				break;
			case 2:
				this.Belt.Mark(item);

				break;
			case 6:
				this.Cube.Mark(item);

				break;
			case 7:
				this.Stash.Mark(item);

				break;
			}
		} while (item.getNext());

		return true;
	};
};