import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BackendErrorsInterface} from "../../shared/backenderrors.interface";

@Component({
  selector: 'backenderrormessages',
  templateUrl: './backenderrormessages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BackenderrormessagesComponent implements OnInit{
  @Input() backendErrors: BackendErrorsInterface = {}

  errorMessages: string[] = []

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join('')
      return `${name} ${messages}`
    })
  }
}

