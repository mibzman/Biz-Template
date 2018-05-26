import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages'

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
	{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
