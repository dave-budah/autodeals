import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {fadeInOut, INavbarData} from "./helper";
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-submenu',
 template: `<ul *ngIf="collapsed && data.items && data.items.length > 0"
        [@submenu]="expanded ? {value: 'visible',
         params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '*'}} :
     {value: 'hidden', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)', height: '0'}}" class="submenu">
      <li class="submenu-item" (click)="handleClick(item)" *ngFor="let item of data.items">
            <a class="submenu-link" *ngIf="item.items && item.items.length > 0" [ngClass]="getActiveClass(item)">
              <i class="bi bi-dot submenu-link-icon"></i>
              <span class="submenu-link-text" @fadeInOut *ngIf="collapsed">{{ item.label }}</span>
              <i *ngIf="item.items && collapsed" class="menu-collapse-icon"
              [ngClass]="!item.expanded ? 'bi bi-caret-right' : 'bi bi-caret-down'"
              ></i>
            </a>
        <a class="submenu-link" *ngIf="!item.items || (item.items && item.items.length === 0)" [routerLink]="[item.routerLink]" routerLinkActive="active-sublevel" [routerLinkActiveOptions]="{ exact: true }">
          <i class="bi bi-dot submenu-link-icon"></i>
          <span class="submenu-link-text" @fadeInOut *ngIf="collapsed">{{ item.label }}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
            <app-submenu
              [data]="data"
              [collapsed]="collapsed"
              [multiple]="multiple"
              [expanded]="item.expanded"
              >
            </app-submenu>
        </div>
      </li>
    </ul>`,
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}), animate('{{ transitionParams }}')]),
      transition('void => *', animate(0))
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmenuComponent implements OnInit {
 @Input() data: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }

  handleClick(item: any) {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for(let modeItem of this.data.items) {
          if (item !== modeItem && modeItem.expanded) {
            modeItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
  getActiveClass(item: INavbarData): string {
    return item.expanded && this.router.url.includes(item.routerLink) ? 'active-sublevel' : '';
  }
}
