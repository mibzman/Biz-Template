import { Injectable, NgZone } from "@angular/core";

import { Router } from "@angular/router";
import { filter } from "rxjs/operators";
import * as auth0 from "auth0-js";
import { certs } from './auth0.certs'
import { StorageService } from "../storage/storage.service";
import { Observable } from "rxjs";

(window as any).global = window;

const DATAKEY = "isLoggedIn";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  auth0 = new auth0.WebAuth(certs);

  constructor(
    public storSer: StorageService,
    public router: Router,
    public zone: NgZone
  ) {
    if (!this.isLoggedIn) {
    }
  }

  get isLoggedIn() {
    const expiresAt = JSON.parse(this.storSer.Get("expires_at") || "{}");
    return new Date().getTime() < expiresAt;
  }

  public HandleAuthentication(): void {
    this.Auth0ParseHash().subscribe(
      authResult => {
        window.location.hash = "";
        this.setSession(authResult);
        // this.zone.run(() => );
        // debugger;
        //TODO: rework so setting session returns an observable when all have been saved.
        //otherwise this hits guard and premptivly fails
        setTimeout(() => {
          this.router.navigateByUrl("/dash/home").then(
            nav => {
              console.log("redirect status: ", nav); // true if navigation is successful
            },
            err => {
              console.log(err); // when there's an error
            }
          );
        }, 1000);

        console.log("authed");
      },
      err => {
        this.router.navigate(["/dash"]);
        console.log(err);
      }
    );
  }

  Auth0ParseHash(): Observable<any> {
    return Observable.create(observer => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          observer.next(authResult);
          observer.complete();
        } else if (err) {
          observer.error(err);
        }
      });
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    this.storSer.Set("access_token", authResult.accessToken);
    this.storSer.Set("id_token", authResult.idToken);
    this.storSer.Set("expires_at", expiresAt);
  }

  Login(): boolean {
    this.auth0.authorize();
    // this.storSer.Set(DATAKEY, true);
    return true;
  }

  Logout() {
    // this.storSer.Set(DATAKEY, false);
    this.storSer.Del("access_token");
    this.storSer.Del("id_token");
    this.storSer.Del("expires_at");
    // Go back to the home route
    // this.zone.run(() => {
    this.router.navigate(["/login"]).then(
      nav => {
        console.log("status: ", nav); // true if navigation is successful
      },
      err => {
        console.log(err); // when there's an error
      }
    );
    // });
    // this.router.navigate(["/"]);
  }
}
