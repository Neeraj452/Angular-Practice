import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Import form-related classes

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {
  userForm: FormGroup;  // Declare a FormGroup to handle form validation

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      user: ['', Validators.required],      // Add validation rules
      age: [null, [Validators.required, Validators.min(1)]],
      address: ['', Validators.required]
    });
  }
  userValues: any = {  // Initialize an object to hold form values
    user: 'John Doe',  // Initial values
    age: 30,
    address: '123 Main St'
  };

  isEditing = false;  // A flag to control editing

  getValues() {
    console.log(this.userForm.value);  // Log the form values
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;  // Toggle the editing mode
  }
  
// Function to check if a control has an error
hasError(controlName: string, errorName: string): boolean {
  const control = this.userForm.get(controlName);
  return !!control?.hasError(errorName) && !!control?.touched;
}

}
