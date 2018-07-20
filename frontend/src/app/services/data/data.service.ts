import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DataService {
	constructor() {}

	public GetData(paramater: string): Observable<any> {
		return Observable.create(observer => {
			setTimeout(function() {
				if (paramater == "Thing One") {
					observer.next({
						Data: "Some Value!",
						"MoreData": "Some Other Value!"
					});
					observer.complete();
				} else {
					observer.error("NO!  I want Thing One!")
				}
			}, 2000);
		});
	}
}
