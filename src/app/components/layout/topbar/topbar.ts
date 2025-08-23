import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; 
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})


export class TopbarComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Método para verificar o estado de login
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Método para fazer logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}