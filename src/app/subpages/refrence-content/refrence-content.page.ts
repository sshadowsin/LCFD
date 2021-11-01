import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefrenceContentService } from 'src/app/services/refrence-content.service';

@Component({
  selector: 'app-refrence-content',
  templateUrl: './refrence-content.page.html',
  styleUrls: ['./refrence-content.page.scss'],
})
export class RefrenceContentPage implements OnInit {
 level = null;

 name: string;
 images: string[];
 headings: string[];
 contacts: any[];

 constructor(
    private content: RefrenceContentService,
    private route: ActivatedRoute,
    private location: Location
    ) {
    this.level = this.route.snapshot.paramMap.get('level');
    this.content.getContent(this.level);
   }

  ngOnInit() {
    this.name = this.content.name;
    this.images = this.content.images;
    this.headings = this.content.headings;
    this.contacts = this.content.contacts;
  }

  backButton(){
    this.location.back();
  }

}
