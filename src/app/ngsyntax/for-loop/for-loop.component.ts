import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
title= "Blog"
data=[{
  name:"Neeraj",
  age:25,
},{
  name:"Anish",
  age:30,
},{
  name:"Tabark",
  age:40,
},{
  name:"Ajay",
  age:34,
},]
}
