import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostpageRoutingModule } from './postpage-routing.module';
import { PostpageComponent } from './postpage.component';
//import { BaseComponent } from '../../components/base/base.component';

@NgModule({
  declarations: [PostpageComponent],
  imports: [CommonModule, PostpageRoutingModule],
})
export class PostpageModule {}
