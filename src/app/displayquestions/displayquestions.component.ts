import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';

interface Model {
  _id: string;
  username: string;
  title: string;
  question: string;
  category: string;
  createdAt: string | number | Date;
  updatedAt: string | number | Date;
}

@Component({
  selector: 'app-displayquestions',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent],
  templateUrl: './displayquestions.component.html',
  styleUrls: ['./displayquestions.component.css']
})
export class DisplayquestionsComponent implements OnInit {

  model: Model[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchModel(); // Fetch questions when component initializes
  }

  fetchModel() {
    let apiUrl = 'http://localhost:4201/model';

    if (this.searchQuery.trim() !== '') {
      apiUrl += `?search=${this.searchQuery.trim()}`;
    }

    this.http.get<{questions: Model[]}>(apiUrl)
      .subscribe({
        next: (response) => {
          this.model = response.questions;
          console.log('Questions fetched successfully:');
        },
        error: (error) => {
          console.error('Error fetching questions:', error);
        }
      });
  }
}
