import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {navbarData} from "./data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  navData = navbarData;

}
