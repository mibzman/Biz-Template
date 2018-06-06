import { Injectable } from '@angular/core';

import { StorageService } from '../storage/storage.service'

const DATAKEY = "isLoggedIn";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  	public storSer: StorageService
  	) { 
  	if (!this.isLoggedIn) {
  	}

  }

  get isLoggedIn() {
  	return this.storSer.Get(DATAKEY)
  }

  Login(username: string, password: string): boolean {
  	this.storSer.Set(DATAKEY, true);
  	return true
  }

  Logout(){
  	this.storSer.Set(DATAKEY, false);
  }
}
