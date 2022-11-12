import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestClientService } from '../shared/rest-client.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input() 
  employeeDetails = { name: '', email: '', phone: 0 }

  constructor( public restApi: RestClientService, public router: Router) { 

  }

  ngOnInit() { }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-employee'])
    })
  }

}
