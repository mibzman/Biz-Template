import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";
import { ServicesModule } from '../services/services.module'

const MODULES = [CommonModule, MaterialModule, ServicesModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: []
})
export class SharedModule {}
