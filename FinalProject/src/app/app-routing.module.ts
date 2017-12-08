import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponentComponent} from './login-component/login-component.component'

const appRoutes: Routes = [
    { path: 'account/login', component: LoginComponentComponent },
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
      // path: 'heroes',
      // component: HeroListComponent,
      // data: { title: 'Heroes List' }
    // },
    // { path: '',
      // redirectTo: '/heroes',
      // pathMatch: 'full'
    // },
    // { path: '**', component: PageNotFoundComponent }
  ];

  @NgModule({
    imports: [ 
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
          ) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}