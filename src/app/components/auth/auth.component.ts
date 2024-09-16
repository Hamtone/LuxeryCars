import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm: FormGroup;
  isLoginMode = true;
  isLoggedIn = false; //pour stocker l'etat de connexion

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = this.fb.group({
      email: [''],
      password: [''],
    });

    //pour mettre a jour en temps reel de l'etat de connexion
    this.authService.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      //appel au service pour se connecter
      this.authService.login();
      this.router.navigate(['/']); //redirection apres connexion reussie
    } else {
      console.log('inscription non implementer');
    }
    console.log(this.authForm.value);
  }

  onLogout() {
    //appel au service pour se deconnecter
    this.authService.logout();
    this.router.navigate(['/']); //redirection apres deconnexion
  }
}
