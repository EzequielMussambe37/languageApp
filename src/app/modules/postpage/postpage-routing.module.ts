import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostpageComponent } from './postpage.component';

const routes: Routes = [{ path: '', component: PostpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostpageRoutingModule { }
