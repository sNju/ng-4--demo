import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
  private URL : string ='./apidata/empData.json';

  constructor(private _http : Http){}
  
  getData(){
    return this._http.get(this.URL).map((response: Response) => response.json());
        }



}
