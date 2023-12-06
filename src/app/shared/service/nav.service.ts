import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from "./windows.service";
// Menu
export class Menu {
	id: string;
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any;
	public collapseSidebar = false;
	private menuItemsChangedCallback: BehaviorSubject<Menu[]>;
	constructor(
		@Inject(WINDOW) private window
	) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true;
		}
	}

	getMenuItem(): Observable<Menu[]> {
		return this.menuItemsChangedCallback;
	}

	setMenuItem(lstMenu: Menu[]) {
		new BehaviorSubject<Menu[]>(lstMenu);
	}

	// Windows width
	@HostListener("window:resize", ["$event"])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

}
