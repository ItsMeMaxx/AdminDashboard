import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router) {
  }

  login(email: string, password: string): Promise<void | boolean>{
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(async () => {
        this.router.navigateByUrl('/home')
      })
  }

  logout() {
    this.angularFireAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
