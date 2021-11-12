import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { CategoryItemService } from 'src/app/services/category-item.service';
// import { HighlightPipe } from 'src/app/models/text-highlight';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.page.html',
  styleUrls: ['./category-content.page.scss'],
})
export class CategoryContentPage implements OnInit {
  level = null;
  searchTerm: string;
  name: string;
  discription: string;
  subPointsHeading: string[];
  subPoints: any[];
  footerText: string;
  protocols: string[];
  protocolLevel: number;
  introduction: boolean;


  constructor(
    private route: ActivatedRoute,
    private content: CategoryItemService,
    private navCtrl: NavController,
    private location: Location
  ) {
    this.level = this.route.snapshot.paramMap.get('level');
    this.content.getContent(this.level);
    console.log(this.content);

    switch (this.level) {
      case '1':
        this.protocolLevel = 1;
        break;

      case '2':
        this.protocolLevel = 9;
        break;
      case '3':
        this.protocolLevel = 16;
        break;
      case '4':
        this.protocolLevel = 31;
        break;

      default:
        this.protocolLevel = 0;
        break;
    }
  }

  openProtocol(routurl,i) {
    this.navCtrl.navigateForward(routurl + (this.protocolLevel + i));
  }

  openInfo(infoUrl){
    this.navCtrl.navigateForward(infoUrl);
  }

  sublink(url){
    this.navCtrl.navigateForward(url);
  }

  ngOnInit() {
    this.name = this.content.name;
    this.discription = this.content.discription;
    this.subPointsHeading = this.content.subPointsHeading;
    this.subPoints = this.content.subPoints;
    this.footerText = this.content.footerText;
    this.protocols = this.content.protocols;
    this.introduction = this.content.introduction;
  }

  backButton(){
    this.location.back();
  }


}
