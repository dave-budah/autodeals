import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'errormessage',
  template: '<div class="alert alert-danger" role="alert">{{ message }}</div>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrormessageComponent {
   @Input() message: string = 'Something went wrong.'
}
