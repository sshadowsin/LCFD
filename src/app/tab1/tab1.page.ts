import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoryItemService } from '../services/category-item.service';
import { Platform } from '@ionic/angular';
import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy, AfterViewInit {
  backButtonSubscription;
  constructor(
    private navCtrl: NavController,
    private categoryService: CategoryItemService,
    private platform: Platform,
    private router: Router
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    // this.items = this.categoryService.getItems();
  }

  public openItem(routurl: string): void {
    this.navCtrl.navigateForward(routurl);
  }

  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === '/inside/tabs/tab1') {
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
