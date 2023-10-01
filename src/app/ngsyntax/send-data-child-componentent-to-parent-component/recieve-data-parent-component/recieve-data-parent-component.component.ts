import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { SendDataChildComponentComponent } from '../send-data-child-component/send-data-child-component.component';
@Component({
  selector: 'app-recieve-data-parent-component',
  templateUrl: './recieve-data-parent-component.component.html',
  styleUrls: ['./recieve-data-parent-component.component.css']
})
export class RecieveDataParentComponentComponent {
  receivedData!: string;

  receiveDataFromChild(data: string) {
    this.receivedData = data; // Handle data received from child
  }

  @ViewChild('childComponent') childComponent!: SendDataChildComponentComponent;
}
