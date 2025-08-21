import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//import ferramenta
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

//service
import { FeedbackService, Feedback } from '../../services/feedback';


@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.scss'
})


export class FeedbackForm {
  private fb = inject(FormBuilder);
  private feedbackService = inject(FeedbackService);

  //formulário de feedback - inicialização
  feedbackForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [
      Validators.required, 
      Validators.email,
      Validators.pattern(/.+\@.+\..+/)
    ]],
    rating: [null, Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  stars = [1, 2, 3, 4, 5];

  //metodo para atribuir a nota
  rate(rating: number): void {
    this.feedbackForm.get('rating')?.setValue(rating);
  }

  //variavel para exibir mensagem de sucesso
  formSubmitted = false;

  //metodo para enviar o formulario
  onSubmit(): void {
    if (this.feedbackForm.valid) {
      const feedbackData: Feedback = this.feedbackForm.value;

      this.feedbackService.submitFeedback(feedbackData)
        .subscribe({
          next: (response) => {
            console.log('Feedback enviado com sucesso!', response);
            this.formSubmitted = true;
          },
          error: (err) => {
            console.error('Falha ao enviar feedback:', err);
          }
        });

    } else {
      this.feedbackForm.markAllAsTouched();
    }
  }

  //metodo para resetar o formulario
  resetForm(): void {
    this.formSubmitted = false;
    this.feedbackForm.reset();
  }
}