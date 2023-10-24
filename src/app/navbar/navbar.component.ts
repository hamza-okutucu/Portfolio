import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  toggleBtnIconClass = 'fa-solid fa-bars';
  shouldHideNav: boolean = false;
  shouldHideNavBackground: boolean = false;
  prevScrollPos: number = window.pageYOffset;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBtnIconClass = this.isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      this.shouldHideNavBackground = true;
    } else {
      if (this.prevScrollPos < currentScrollPos) {
        this.shouldHideNav = true;
      } else {
        this.shouldHideNav = false;
      }
      this.shouldHideNavBackground = false;
    }

    this.prevScrollPos = currentScrollPos;
  }
}
