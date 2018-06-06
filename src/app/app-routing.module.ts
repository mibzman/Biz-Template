import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryGuard } from './entry.guard'

// import { DashComponent } from './dash/dash.component'
import { LoginComponent } from './entry/login/login.component'
import { SignupComponent } from './entry/signup/signup.component'

const routes: Routes = [
	// { path: 'crisis-center', component: CrisisListComponent },
	// { path: 'hero/:id',      component: HeroDetailComponent },
	// {
	//   path: 'heroes',
	//   component: HeroListComponent,
	//   data: { title: 'Heroes List' }
	// },
	// { path: '',
	//   redirectTo: '/heroes',
	//   pathMatch: 'full'
	// },
	// { path: 'DashComponent', component: DashComponent },
	{ path: 'login', component: LoginComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: 'dash', loadChildren: './dash/dash.module#DashModule', canActivate: [EntryGuard]}
	{ path: '**', redirectTo:"dash"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
