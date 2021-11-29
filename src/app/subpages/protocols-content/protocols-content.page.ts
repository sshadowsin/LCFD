import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-protocols-content',
  templateUrl: './protocols-content.page.html',
  styleUrls: ['./protocols-content.page.scss'],
})
export class ProtocolsContentPage implements OnInit {
  level = null;
  searchTerm: string = null;
  caseSensitive = false;
  name: string;
  currentUrl: string;

  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private navCtrl: NavController,
    private router: Router,
    private location: Location
  ) {
    this.level = this.route.snapshot.paramMap.get('level');
    this.currentUrl = this.router.url;
    this.platform.backButton.subscribe(
      () => {
        this.searchTerm = null;
        this.navCtrl.navigateBack('inside/tabs/tab3');
      }
    );
  }

  sublink(url){
    this.navCtrl.navigateForward(url);
  }

  clearTerm(){
    this.searchTerm = null;
  }

  ngOnInit() {
  }

  backButton(){
    this.location.back();
  }

  epi_drip_rate_table=[
    {ml_per_hr:30},
    {ml_per_hr:60},
    {ml_per_hr:90},
    {ml_per_hr:120},
    {ml_per_hr:150},
    {ml_per_hr:180},
    {ml_per_hr:210},
    {ml_per_hr:240},
    {ml_per_hr:270},
    {ml_per_hr:300},
  ];


}
