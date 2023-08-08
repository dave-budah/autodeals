import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent implements OnInit {
  isSideNavCollapsed = false;
  screenWidth  = 0;
  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleSidenav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
