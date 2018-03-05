import { Component, OnInit } from '@angular/core';
import { Customer } from "./customer";
import { CustomerService } from "./customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerInfo: Customer[]; 
  filteredCustomers : Customer[];

  private _listFilter : string;

  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(value : string) {
      this._listFilter =value;
      this.performFilter(this._listFilter);
  }

  constructor(private customerService : CustomerService) { 
    
  }

  ngOnInit() {
    this.customerService.getCustomer()
    .subscribe((data :Customer[] ) => { 
            this.customerInfo = data;
            this.performFilter(this.listFilter);
          },
        (error : any)  => console.log("Error : :" + error)  
       )      
  }

  performFilter( filterBy? : string ) : void {
    if(filterBy){
      this.filteredCustomers = this.customerInfo.filter((customerInfo : Customer) => 
        customerInfo.email.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1
      )
    } else {
        this.filteredCustomers = this.customerInfo;
    }
}

}
