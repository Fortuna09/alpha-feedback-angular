import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import components
import { FeedbackForm } from '../../components/feedback-form/feedback-form';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FeedbackForm],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})


export class Landing {
  isFormVisible = false; 

  openFeedbackForm(): void {
    this.isFormVisible = true;
  }

  closeFeedbackForm(): void {
    this.isFormVisible = false;
  }
}