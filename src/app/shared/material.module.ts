import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';

import {MatListModule} from '@angular/material/list';

const MODULES = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule
]

@NgModule({
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class MaterialModule {}