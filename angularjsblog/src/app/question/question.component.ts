import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [RouterModule, CommonModule,HeaderComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

}
