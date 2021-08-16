import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  popUp = null;

  constructor(private router: Router,
              private auth: AuthService,
              ) {}

  ngOnInit() {
  }



  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.auth
      .signin(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.popUp = 'Signed In Succesfully';
      })
      .catch((err) => {
        console.log(err.message);
        this.popUp = 'Sign In Failed';
      });
  }
}
