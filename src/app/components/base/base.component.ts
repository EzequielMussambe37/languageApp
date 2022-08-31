import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base',
  template:'',
})
export class BaseComponent {

  @Input() employees: any[] = [];
  @Output() select = new EventEmitter();

  heading = '';

  selectEmployee(employee: any) {

    console.log("this is the selected emplye")
    this.select.emit(employee);
  }

}
