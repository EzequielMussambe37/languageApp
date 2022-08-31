import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BaseComponent } from '../../components/base/base.component';

@NgModule({
  declarations: [HomePageComponent,PlatformComponent,BaseComponent],
  // 
  imports: [CommonModule, PlatformRoutingModule],
})
export class PlatformModule {}
