import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})


export class HeroComponent {
  @Output() feedbackClick = new EventEmitter<void>();

  onFeedbackButtonClick(): void {
    this.feedbackClick.emit();
  }
}