import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {PopularTagsType} from "../models/popularTags.type";

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent {
  @Input() tags: PopularTagsType[] = []
}
