import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureService, AuthService, StorageService } from './';

@NgModule({
  declarations: [
  ],
  imports: [RouterModule],
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