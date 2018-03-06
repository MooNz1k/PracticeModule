import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Customer } from "./customer";
import { CustomerService } from "./customer.service";
import { NgModel } from '@angular/forms';
import { CriteriaComponent } from './criteria/criteria.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerInfo: Customer[]; 
  filteredCustomers : Customer[];

  includeDetail: boolean = true;
  // parentListFilter : string;
  // @ViewChild(CriteriaComponent) filterComponent : CriteriaComponent;

  constructor(private customerService : CustomerService) { 
    
  }
  // ngAfterViewInit() : void {
  //   this.parentListFilter = this.filterComponent.listFilter;
  // }
  ngOnInit() {
    this.customerService.getCustomer()
    .subscribe((data :Customer[] ) => { 
            this.customerInfo = data;
            this.performFilter();
          },
        (error : any)  => console.log("Error : :" + error)  
       )      
  }
  
  onValueChange(value : string){
    this.performFilter(value);
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
