import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [RouterModule, CommonModule,HeaderComponent,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  constructor(private http: HttpClient) {}

  submitForm(ev: Event) {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonObject: { [key: string]: any } = {};

    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    this.http.post('http://localhost:4201/question', jsonObject)
      .subscribe({
        next: (response: any) => alert(response.message),
        error: (error) => alert(error.error.message),
        complete: () => console.log('Sent values')
      });
  }
}

