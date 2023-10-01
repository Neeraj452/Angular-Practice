import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-send-data-child-component',
  templateUrl: './send-data-child-component.component.html',
  styleUrls: ['./send-data-child-component.component.css']
})
export class SendDataChildComponentComponent {

  @Output() dataEvent = new EventEmitter<string>(); // Create an EventEmitter

  sendDataToParent() {
    const data = 'Data from Child';
    this.dataEvent.emit(data); // Emit an event with the data
  }

  dataToSend = 'Data from Child by viewChild method';

}
