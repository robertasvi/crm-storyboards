import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (true) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}