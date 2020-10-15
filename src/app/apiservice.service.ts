import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Posts} from "./api/classes/posts";
import {catchError, map} from "rxjs/operators";
import {stringify} from "querystring";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http:HttpClient) { }

  apiCall():Observable<any>{
    return this.http.get('../assets/jsondata.json');
  }
  apiCallbyParameter(): Observable<any>{
    let paramss = new HttpParams().set('userId',"1");
    return this.http.get('../assets/parameterget.json',{params:paramss});
  }
  deleteGet(id:string):Observable<number>{
    return this.http.delete<number>('../assets/jsondata.json' + id);
  }
  getAll(id) {
    this.http.get('../assets/jsondata.json' + id)
    // this.http.get('../assets/jsondata.json' + id).pipe(map(data => {})).subscribe(result => {
    //   console.log(result);
    // });
  }
  updateAll(id,data):Observable<any>{
    debugger;
    return this.http.put('../assets/jsondata.json' + id , data);
    console.log(data);
  }
}
