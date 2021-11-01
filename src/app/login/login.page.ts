import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  popUp = null;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastController
  ) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.auth
      .signin(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.popUp = 'Signed In Succesfully';
        this.openToast('success');
      })
      .catch((err) => {
        console.log(err.message);
        this.popUp = 'Invaild User';
        this.openToast('danger');
      });
  }


  async openToast(color){
    const toastColor = color;
    const toast = await this.toast.create({
      message: this.popUp,
      duration: 2000,
      animated: true,
      color: toastColor,
      mode: 'ios'
    });
    toast.present();
  }


}
