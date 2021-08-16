import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';
import { OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.page.html',
  styleUrls: ['./fingerprint.page.scss'],
})
export class FingerprintPage implements OnInit, OnDestroy, AfterViewInit {
  err = '';
  counter = 0;
  backButtonSubscription;

  constructor(
    private navCtrl: NavController,
    private faio: FingerprintAIO,
    private plt: Platform,
    private router: Router
  ) {
    this.fingerprint();
  }

  ngOnInit() {
    // this.fingerprint();
  }

  fingerprint() {
    // this.navCtrl.navigateForward('inside');

    this.faio
      .show({
        title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
        // subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
        description: 'Please authenticate', // optional | Default: null
        fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
        // When disableBackup is true defaults to "Cancel"
        disableBackup: false, // optional | default: false
        // clientId: '',
        // clientSecret: 'password',
        // localizedFallBackTitle: 'Use Pin',
        // localizedReason: 'Please Authenticate'
      })
      .then(() => {
        this.navCtrl.navigateRoot('inside');
        // this.navCtrl.navigateForward('inside');
      })
      .catch((error: any) => {
        console.log(error);
        this.err = error;
        this.counter += this.counter;

        if (this.counter === 3) {
          this.counter = 0;
          // eslint-disable-next-line @typescript-eslint/dot-notation
          navigator['app'].exitApp();
        }
      });
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.plt.backButton.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === '/') {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        navigator['app'].exitApp();
      } else {
        this.navCtrl.back();
      }
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }
}
