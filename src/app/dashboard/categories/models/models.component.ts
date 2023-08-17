import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelsComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

}
