import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import components
import { FeedbackForm } from './components/feedback-form/feedback-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('alpha-feedback-angular');
}
