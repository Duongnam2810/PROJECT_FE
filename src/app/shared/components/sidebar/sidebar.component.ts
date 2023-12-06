import { JwtHelperService } from '@auth0/angular-jwt';
import { MENU, TokenService } from './../../../components/auth/auth.service/token.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavService, Menu } from '../../service/nav.service';
import { MenuOfUserModel } from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[] = [];
  public url: any;
  public fileurl: any;
  private jwtHelper: JwtHelperService;
  constructor(
    private router: Router,
    public navServices: NavService,
    private _sanitizer: DomSanitizer,
    private tokenService: TokenService
  ) {
    this.jwtHelper = new JwtHelperService();
  }

  objData: any;
  imagePath: any;
  ngOnInit() {
    this.objData = this.jwtHelper.decodeToken(this.tokenService.getToken());
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + localStorage.getItem("Avatar")
    );
    const lstMenu = JSON.parse(localStorage.getItem(MENU));
    this.loadMenu(lstMenu);
  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter((menuItem) => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

 // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach((a) => {
        if (this.menuItems.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
      });
    }
    item.active = !item.active;
  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  loadMenu(lst: MenuOfUserModel[]) {
    
    lst.filter((c) => c.parent === null || c.parent === "")
      .forEach((element) => {
        const itemMenu = new Menu();
        itemMenu.title = element.text;
        itemMenu.path = element.state;
        itemMenu.icon = element.iconClass;
        itemMenu.type = element.type;
        itemMenu.id = element.id;
        if (lst.findIndex((x) => x.parent === element.value) !== -1) {
          itemMenu.children = this.loadMenuChildrent(element, lst);
        }
        this.menuItems.push(itemMenu);
      });
    this.navServices.setMenuItem(this.menuItems);
  }

  loadMenuChildrent(item: MenuOfUserModel, lst: MenuOfUserModel[]) {
    const result = [];
    lst.filter(c => c.parent === item.value).forEach(element => {
      const itemChilrent = new Menu();
      itemChilrent.title = element.text;
      itemChilrent.path = element.state;
      itemChilrent.icon = element.iconClass;
      itemChilrent.type = element.type;
      itemChilrent.id = element.id;
      if (lst.findIndex((x) => x.parent === element.value) !== -1) {
        itemChilrent.children = this.loadMenuChildrent(element, lst);
      }
      result.push(itemChilrent);
    });
    return result;
  }
}
