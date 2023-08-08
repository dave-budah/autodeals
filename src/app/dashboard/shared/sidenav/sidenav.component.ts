import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {navbarData} from "./data";
import {fadeInOut, INavbarData} from "./helper";
import {Router} from "@angular/router";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
     fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'}),
          ])
          )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = true;
  screenWidth = 0;
   navLinks = navbarData;
  multiple: boolean = false;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      })
    }
  }
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  closeSidenav() {
    this.collapsed = false;
     this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    })
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

 handleClick(item: INavbarData) {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData) {
    return this.router.url.includes(data.routerLink) ? 'active' : '';
  }
  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navLinks) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
