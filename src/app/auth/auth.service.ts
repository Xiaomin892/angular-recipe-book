import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  public signupUser(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }

  public signinUser(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then((token: string) => this.token = token);
        })
      .catch(error => console.log(error));
  }

  public logOut(): void {
    firebase.auth().signOut();
    this.token = null;
  }

  public getToken(): string {
    firebase.auth().currentUser.getToken()
      .then((token: string) => this.token = token);
      return this.token;
  }

  public isAuthenticated(): boolean {
    return this.token != null;
  }


}
