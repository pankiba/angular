import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestClientService } from '../shared/rest-client.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId = this.actRoute.snapshot.params['id'];

  employeeData: any = {};

  constructor( public restClient: RestClientService, public actRoute: ActivatedRoute, public router: Router)
  { 
    
  }

  ngOnInit() { 
    this.restClient.getEmployee(this.employeeId).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }

  // Update employee data
  updateEmployee() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restClient.updateEmployee(this.employeeId, this.employeeData).subscribe(data => {
        this.router.navigate(['/list-employee'])
      })
    }
  }
}
