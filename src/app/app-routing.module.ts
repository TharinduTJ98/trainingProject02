import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExBaseComponent } from './Components/ex-base/ex-base.component';
import { InBaseComponent } from './Components/in-base/in-base.component';

const routes: Routes = [
  {
    path: '',
    component: ExBaseComponent
  },
  {
    path: 'dashboard',
    component: InBaseComponent,
    children: [
      {
        path: 'reg',
        loadChildren: () => import('./Modules/registration/registration.module').then(m => m.RegistrationModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
