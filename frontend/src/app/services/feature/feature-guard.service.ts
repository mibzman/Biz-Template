import { Injectable, isDevMode } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FeatureService } from './feature.service';
import { PermissionState } from './'

@Injectable()
export class FeatureGuardService implements CanActivate {

  constructor(
  	public feature: FeatureService, 
  	public router: Router,
  	) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  	let feature = route.data["feature"] as string
  	let result = this.feature.canUseFeature(feature)

    if (result.result == PermissionState.Guard) {
      this.router.navigate(result.upgrade.URL);
      return false;
    } else if (result.result == PermissionState.Hide){
    	return false
    } else if (result.result == PermissionState.Unknown){
    	if (isDevMode()){
    		return true
    	} else {
    		return false	
    	}
    } else if (result.result == PermissionState.Show) {
    	return true;	
    }
    return true
  }
}