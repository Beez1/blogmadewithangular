import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
    model: Model[] = [];
    searchQuery: string = '';
  
    constructor(private http: HttpClient, private route: ActivatedRoute) {}
  
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
