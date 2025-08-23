import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/auth/register/register';
import { LoginComponent } from './pages/auth/login/login'; 
import { DashboardComponent } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  // Página principal
  { path: '', component: Landing },

  // Novas rotas para autenticação
  { path: 'register', component: Register },
  { path: 'login', component: LoginComponent },

  // Rota do painel
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },

  // Adicione uma rota genérica para erros 404 (opcional, mas boa prática)
  { path: '**', redirectTo: '' }
];