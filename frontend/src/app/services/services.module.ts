import { NgModule, ModuleWithProviders } from '@angular/core';

import { FeatureService, AuthService, StorageService } from './';

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
      providers: [ FeatureService, AuthService, StorageService ]
    };
  }
}