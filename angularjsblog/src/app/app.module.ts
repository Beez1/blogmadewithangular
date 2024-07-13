import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if needed
 // Adjust path as per your project structure
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        RouterModule
       // Import DisplayquestionsComponent instead of declaring it
        // Other modules as needed
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
