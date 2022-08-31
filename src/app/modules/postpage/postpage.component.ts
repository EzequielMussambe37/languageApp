import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../components/base/base.component';

@Component({
  selector: 'app-postpage',
  templateUrl: '../../components/base/base.component.html',
  //'./postpage.component.html',
  styleUrls: ['./postpage.component.css']
})
export class PostpageComponent extends BaseComponent implements OnInit {

  constructor() { 

    super()
  }
  override heading = ""
  ngOnInit(): void {
  }

}
