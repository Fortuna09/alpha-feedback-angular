import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//interface
export interface Feedback {
  name: string;
  email: string;
  rating: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private http = inject(HttpClient);

  private apiUrl = 'https://alpha-feedback-api.onrender.com/api/feedbacks';

  constructor() { }

  submitFeedback(feedbackData: Feedback): Observable<any> {
    return this.http.post(this.apiUrl, feedbackData);
  }
}