import { Component, OnInit } from '@angular/core';
import { CreateServiceService } from '../../create-service.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-use-service',
  templateUrl: './use-service.component.html',
  styleUrls: ['./use-service.component.css']
})

export class UseServiceComponent {
  name=""
  constructor(private user:CreateServiceService){
    let data=this.user.getData()
    this.name=data.name;
  }
  
}