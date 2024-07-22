import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'; // Import HttpClientModule if needed
 // Adjust path as per your project structure
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        QuestionComponent
       // Import DisplayquestionsComponent instead of declaring it
        // Other modules as needed
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
