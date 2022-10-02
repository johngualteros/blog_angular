import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }
  loginwithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  loginwithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }
  loginwithGithub(){
    return signInWithPopup(this.auth, new GithubAuthProvider());
  }

  getDataOfUser() {
    return this.auth.currentUser;
  }
}
