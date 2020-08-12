import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()

export class CounterService {

    constructor(private http : HttpClient, private urlService) {}

    public increaseCounter () {
        let url = this.urlService.increaseCounter();
        return this.http.get(url, {headers : {}}).pipe(map((response:any)=>{
            return response;
        }), catchError((err) => throwError(err)));
    }
}
