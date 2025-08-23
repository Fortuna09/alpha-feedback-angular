import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//interface
export interface Feedback {
  _id: string;
  name: string;
  email: string;
  rating: number;
  message: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private http = inject(HttpClient);

  private apiUrl = 'https://alpha-pbuc.onrender.com/api/feedbacks';

  constructor() { }

  submitFeedback(feedbackData: Feedback): Observable<any> {
    return this.http.post(this.apiUrl, feedbackData);
  }

  // Busca todos os feedbacks
  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }
}