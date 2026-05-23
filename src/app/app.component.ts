import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { MealPlannerComponentComponent } from './meal-planner-component/meal-planner-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule,UserFormComponent,MealPlannerComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userInput = '';
  messages: any[] = [];
  loading = false; // optional (for typing indicator)

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ text: this.userInput, sender: 'user' });

    const input = this.userInput;
    this.userInput = '';
    this.loading = true;

    // 🔥 FIX 1: responseType 'text'
    this.http.post(
      'http://localhost:8080/api/ai/chat',
      { message: input },
      { responseType: 'text' }   // ⭐ IMPORTANT FIX
    ).subscribe({

      next: (res: string) => {
        this.messages.push({
          text: res,
          sender: 'bot'
        });
        this.loading = false;
      },

      error: (err) => {
        console.error("API ERROR:", err); // ⭐ DEBUG

        this.messages.push({
          text: '⚠️ Backend not reachable / CORS issue',
          sender: 'bot'
        });
        this.loading = false;
      }

    });
  }

  sendMAIL()
{
  
}}