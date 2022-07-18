import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostpageRoutingModule } from './postpage-routing.module';
import { PostpageComponent } from './postpage.component';


@NgModule({
  declarations: [
    PostpageComponent
  ],
  imports: [
    CommonModule,
    PostpageRoutingModule
  ]
})
export class PostpageModule { }
