import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { DashComponent } from './dash.component'

const routes: Routes = [
	// { path: 'crisis-center', component: CrisisListComponent },
	// { path: 'hero/:id',      component: HeroDetailComponent },
	// {
	//   path: 'heroes',
	//   component: HeroListComponent,
	//   data: { title: 'Heroes List' }
	// },
	// { path: '',
	//   redirectTo: '/home',
	//   pathMatch: 'full'
	// },
	// {
	//   path: 'home',
	//   component: HomeComponent ,
	//   data: { title: 'Heroes List' }
	// },
	
	{ path: '', component: DashComponent,
     children: [
     		{ path: 'home', component: HomeComponent },
        { path: '**', redirectTo:'home' } //if you leave out the slash it becomes a relative link
        // { path: '**', component: HomeComponent },
        // { path: 'graphs', component: GraphsComponent },
     ]
  },
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
