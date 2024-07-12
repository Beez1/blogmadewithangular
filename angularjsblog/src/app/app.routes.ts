import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { DisplayquestionsComponent } from './displayquestions/displayquestions.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'displayquestion', component: DisplayquestionsComponent },
    { path: 'register', component: RegisterComponent },
    { path: '',redirectTo:'home', pathMatch: 'full'}
];
