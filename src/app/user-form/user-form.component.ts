import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {


  userForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      budget: ['', Validators.required],
      preference: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post('http://localhost:8080/user/add', this.userForm.value, {
  responseType: 'text'
}).subscribe({
  next: (res) => {
    alert(res); // "User added"
  },
  error: (err) => {
    console.error(err);
    alert('Something went wrong ❌');
  }
});
  }

}
