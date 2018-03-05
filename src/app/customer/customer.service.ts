import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Customer } from './customer';


@Injectable()
export class CustomerService {

  private baseURL = "assets/data.json" 

  constructor(private http : HttpClient) {  
    // this.getCustomer().subscribe( data => {
      
    // })
  }

  public getCustomer() : Observable<Customer[]> {
      return this.http
      .get(this.baseURL)
      .catch(this.handleError);
  }
  private handleError(error: Response) {
     return Observable.throw(error.statusText);
  }

}
