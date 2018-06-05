import { NgModule, ModuleWithProviders } from '@angular/core';

import { FeatureService, AuthService } from './';

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
      providers: [ FeatureService, AuthService ]
    };
  }
}