import {ChangeDetectionStrategy, Component, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {messages, notifications, userItems} from "./data";

@Component({
  selector: 'topnav',
  templateUrl: './topnav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TopnavComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  notifications = notifications;
  messages = messages;
  userItems = userItems;
  isFullScreen = false;
constructor() {
}
@HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
  this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number) {
    this.canShowSearchAsOverlay = innerWidth < 845;
  }
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }
}
