import { NgModule, ModuleWithProviders } from '@angular/core';

import { FeatureService } from './feature/feature.service';

@NgModule({
  declarations: [
  ],
  exports: [
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [ FeatureService ]
    };
  }
}