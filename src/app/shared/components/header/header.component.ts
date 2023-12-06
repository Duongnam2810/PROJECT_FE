import { Router } from '@angular/router';
import { AuthService } from './../../../components/auth/auth.service/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavService } from '../../service/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public right_sidebar = false;
  public open = false;
  public openNav = false;
  public isOpenMobile : boolean;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(
    public navServices: NavService,
    private _sanitizer: DomSanitizer,
    private authService: AuthService,
    private router: Router
  ) { }

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar
    this.rightSidebarEvent.emit(this.right_sidebar)
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  onclick() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]).then((_) => false);
  }

  imagePath: any;
  ngOnInit() { 
    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/jpg;base64," + localStorage.getItem("Avatar")
    );
  }

}
