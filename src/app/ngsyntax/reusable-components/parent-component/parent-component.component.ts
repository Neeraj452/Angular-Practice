import { Component } from '@angular/core';
import dataType from 'src/app/Interface/interface';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {

 users:dataType={
  name:"Neeraj",
  age:"25",
  address:"Noida"
}

// parentData = 'Data from parent';

}
