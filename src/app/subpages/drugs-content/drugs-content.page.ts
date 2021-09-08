/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { DrugsContentService } from 'src/app/services/drugs-content.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-drugs-content',
  templateUrl: './drugs-content.page.html',
  styleUrls: ['./drugs-content.page.scss'],
})
export class DrugsContentPage implements OnInit {
  level = null;
  searchTerm: string;

  name: string;
  action: string;
  indication: string;
  contradiction: string;
  precaution: string;
  effect: string;
  dose: string[];
  consideration: string[];
  note: string;
  htm: string[];
  refrenceProtocol: any[];


  constructor(
    private route: ActivatedRoute,
    private content: DrugsContentService,
    private navCtrl: NavController,
    private platform: Platform,
    private location: Location
  ) {
    this.level = this.route.snapshot.paramMap.get('level');
    this.content.getContent(this.level);
    console.log('level : ' +  this.level);
    this.platform.backButton.subscribe(
      () => {
        this.searchTerm = null;
        this.navCtrl.navigateBack('inside/tabs/tab2');
      }
    );
  }

  openRefrence(url){
    this.navCtrl.navigateForward(url);
  }

  ngOnInit() {
    // this.level = this.route.snapshot.paramMap.get('level');
    // this.content.getContent(this.level);
    this.name = this.content.name;
    this.action = this.content.action;
    this.indication = this.content.indication;
    this.contradiction = this.content.contradiction;
    this.precaution = this.content.precaution;
    this.effect = this.content.effect;
    this.dose = this.content.dose;
    this.consideration = this.content.consideration;
    this.note = this.content.note;
    this.htm = this.content.htm;
    this.refrenceProtocol = this.content.refrenceProtocol;
    console.log(this.name);
  }

  backButton(){
    this.location.back();
  }


}
