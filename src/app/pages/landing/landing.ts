import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//import components
import { FeedbackForm } from '../../components/feedback-form/feedback-form';
import { HeroComponent } from './hero/hero'; 
import { TechStack } from './tech-stack/tech-stack';
import { AngularSection } from './angular-section/angular-section';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FeedbackForm, HeroComponent, TechStack, AngularSection],
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