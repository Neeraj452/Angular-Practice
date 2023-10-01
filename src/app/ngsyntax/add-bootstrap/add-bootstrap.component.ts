import { Component } from '@angular/core';
interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];
@Component({
  selector: 'app-add-bootstrap',
  templateUrl: './add-bootstrap.component.html',
  styleUrls: ['./add-bootstrap.component.css']
})
export class AddBootstrapComponent {
  alerts: Alert[]=[];

	constructor() {
		this.reset();
	}

	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}

}

// Notes


// 1.Initialize the alerts property in the class directly:
// alerts: Alert[] = [];

// constructor() {
//     this.reset();
// }

// 2. Initialize the alerts property in the constructor:

// alerts: Alert[];

// constructor() {
//     this.alerts = [];
//     this.reset();
// }


// 3. Use the non-null assertion operator (!) to tell TypeScript that you guarantee the property will be assigned in the constructor:

// alerts!: Alert[];

