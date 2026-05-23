import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-meal-planner-component',
   imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './meal-planner-component.component.html',
  styleUrl: './meal-planner-component.component.css'
})
export class MealPlannerComponentComponent {

 form: FormGroup;
  loading = false;
  mealPlan: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      budget: ['', Validators.required],
      preference: ['', Validators.required]
    });
  }

  generatePlan() {
    if (this.form.invalid) return;

    this.loading = true;

    // simulate API delay
    setTimeout(() => {
      this.mealPlan = {
        breakfast: 'Poha + Tea',
        lunch: 'Dal Rice + Aloo Sabzi',
        dinner: 'Roti + Paneer Curry',
        groceryList: ['Rice', 'Potato', 'Paneer', 'Onion', 'Spices']
      };
      this.loading = false;
    }, 1200);
  }

  reset() {
    this.mealPlan = null;
    this.form.reset();
  }

}
