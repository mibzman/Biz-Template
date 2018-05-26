import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

const MODULES = [CommonModule, MaterialModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES],
	declarations: []
})
export class SharedModule {}
