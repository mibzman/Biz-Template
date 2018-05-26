import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module'


import {HomeComponent} from './pages'

const PAGES = [HomeComponent];

@NgModule({
	imports: [SharedModule],
	exports: [PAGES],
	declarations: [PAGES]
})
export class PagesModule {}
