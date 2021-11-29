import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  openUrl(url){
    this.navCtrl.navigateForward(url);
  }

  signOut() {
    this.authService.signOut();
    this.navCtrl.navigateRoot('signin');
  }
  ngOnInit() {
    
  }
}
