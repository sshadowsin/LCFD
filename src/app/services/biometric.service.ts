import { Injectable } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { FingerprintPage } from '../fingerprint/fingerprint.page';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private plt: Platform
  ) {
    // this.plt.resume.subscribe(() => {
    //   this.lockApp();
    // });
  }

  async lockApp(){
    const modal = await this.modalCtrl.create({
      component: FingerprintPage,
    });
    await modal.present();
    modal.onDidDismiss().then(
      result => {
        if(result.data && result.data.reset){
          this.navCtrl.navigateForward('');
        }
      }
    );
  }
}
