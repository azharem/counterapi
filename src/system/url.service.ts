import {Injectable} from "@angular/core";

@Injectable()


export class UrlService {
    private baseEndpoint : string = "https://api.countapi.xyz/"
    private hitPath : string = "hit"
    private apiKey : string = "ccb732e-b55a-4404-ad3f-0f99c02fe44e"

        constructor() {}

        public get increaseCounterUrl () : string {
            return this.baseEndpoint + this.hitPath + "/" + this.apiKey;
        }
}
