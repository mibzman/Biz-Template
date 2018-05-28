import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash/dash.component'

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
	{ path: '**', loadChildren: './dash/dash.module#DashModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
