import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {UtilsService} from "../services/utils.service";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent  implements OnInit {
  @Input() total: number = 0
  @Input() limit: number = 20
  @Input() currentPage: number = 1
  @Input() url: string = ''

  pagesCount: number = 1
  pages: number[] = []

  constructor(private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : []
    console.log(this.pages)
  }

}
