import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    const productImg = document.getElementById('defaultImg');
    const smallImg = document.getElementsByClassName('smallImg');
    // @ts-ignore
    smallImg[0].onclick = function ()
    {
      // @ts-ignore
      productImg.src = smallImg[0].src;
    }
    // @ts-ignore
    smallImg[1].onclick = function ()
    {
      // @ts-ignore
      productImg.src = smallImg[1].src;
    }
    // @ts-ignore
    smallImg[2].onclick = function ()
    {
      // @ts-ignore
      productImg.src = smallImg[2].src;
    }
  }
}
