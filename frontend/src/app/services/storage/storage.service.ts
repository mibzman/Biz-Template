import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  Set(key: string, value) {
  	localStorage.setItem(key, value);
  }

  Get(key: string): any {
  	return JSON.parse(localStorage.getItem(key))
  }

  Del(key:string) {
  	localStorage.removeItem(key)
  }
}
