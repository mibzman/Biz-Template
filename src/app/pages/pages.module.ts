import { NgModule } from "@angular/core";
import { SharedModule } from '../shared'

//index.ts allows for collecting a bunch of stuff at a dir level instead of a file level
import {HomeComponent} from './'

const PAGES = [HomeComponent];

@NgModule({
	imports: [SharedModule],
	exports: [PAGES],
	declarations: [PAGES]
})
export class PagesModule {}
