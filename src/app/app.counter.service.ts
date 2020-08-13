import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {UrlService} from "../system/url.service";

@Injectable()

export class CounterService {

    constructor(private http : HttpClient, private urlService : UrlService) {}

    public hitCounter () {
        let url = this.urlService.counterUrl();
        return this.http.get(url, {headers : {}}).pipe(map((response:any)=>{
            return response;
        }), catchError((err) => throwError(err)));
    }
}
