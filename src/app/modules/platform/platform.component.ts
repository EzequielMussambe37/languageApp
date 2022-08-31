import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { BaseComponent } from '../../components/base/base.component';

@Component({
  selector: 'app-platform',
  templateUrl: '../../components/base/base.component.html',
  // './platform.component.html',
  styleUrls: [
    './platform.component.css',
    // '../../components/base/base.component.css'
  ],
})
export class PlatformComponent extends BaseComponent implements OnInit {
  //templateUrl: './platform.component.html',
  // ../../components/base/base.component.html
  hello:any = "string"
  override heading = "now this is new"
  constructor() {

    super()
  }
  //./base.component.html
  //@ViewChild('home') homeH: ElementRef | undefined;
  //name: string = 'This is Ezequiel';

  // public override 
  ngOnInit(): void {
    // https://medium.com/javascript-everyday/tip-32-ts-override-keyword-79de6341db8c
    // override the ngOnit
    //console.log(this.name)

  }

  // ngAfterViewInit() {
  //   //console.log(this.homeH.nativeElement)
  // }
}
