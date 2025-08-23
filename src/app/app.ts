import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import components
import { TopbarComponent } from './components/layout/topbar/topbar'; 
import { Footer } from './components/layout/footer/footer';
import { FeedbackForm } from './components/feedback-form/feedback-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, Footer, FeedbackForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
}
