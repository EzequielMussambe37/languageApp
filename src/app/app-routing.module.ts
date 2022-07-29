import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/platform/platform.module').then(
        (m) => m.PlatformModule
      ),
  },
  {
    path: 'userpage',
    loadChildren: () =>
      import('./modules/userpage/userpage.module').then(
        (m) => m.UserpageModule
      ),
  },
  {
    path: 'postpage',
    loadChildren: () =>
      import('./modules/postpage/postpage.module').then(
        (m) => m.PostpageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
