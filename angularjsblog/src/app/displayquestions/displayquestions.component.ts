import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-displayquestions',
  standalone: true,
  imports: [RouterModule, CommonModule,HeaderComponent],
  templateUrl: './displayquestions.component.html',
  styleUrl: './displayquestions.component.css'
})
export class DisplayquestionsComponent {

}
