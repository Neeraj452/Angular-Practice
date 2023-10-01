import { Component,Input } from '@angular/core';
import dataType from 'src/app/Interface/interface';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
@Input() data!:dataType

}