import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // return !!localStorage.getItem('token');
    return false;
  }
}
