import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealersComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
