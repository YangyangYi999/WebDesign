import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponentComponent} from './login-component/login-component.component'
import {HomeComponentComponent} from './home-component/home-component.component'
import {ItemComponentComponent} from './item-component/item-component.component'

const appRoutes: Routes = [
    { path: 'home', component: HomeComponentComponent},  
    { path: 'account/login', component: LoginComponentComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
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