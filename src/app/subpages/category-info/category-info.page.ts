import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryItemService } from 'src/app/services/category-item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.page.html',
  styleUrls: ['./category-info.page.scss'],
})
export class CategoryInfoPage implements OnInit {
  level = null;
  name: string;
  discription: string;
  subPointsHeading: string[];
  subPoints: any[];
  footerText: string;
  image: string;

  constructor(
    private route: ActivatedRoute,
    private content: CategoryItemService,
    private location: Location
) {
  this.level = this.route.snapshot.paramMap.get('level');
  this.content.getContent(this.level);
 }

  ngOnInit() {
    this.name = this.content.name;
    this.discription = this.content.discription;
    this.subPointsHeading = this.content.subPointsHeading;
    this.subPoints = this.content.subPoints;
    this.footerText = this.content.footerText;
    this.image =  this.content.image;
  }

  backButton(){
    this.location.back();
  }


}
