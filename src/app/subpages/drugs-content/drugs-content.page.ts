/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugsContentService } from 'src/app/services/drugs-content.service';

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


  constructor(
    private route: ActivatedRoute,
    private content: DrugsContentService
  ) {
    this.level = this.route.snapshot.paramMap.get('level');
    this.content.getContent(this.level);
    console.log('level : ' +  this.level);
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
    console.log(this.name);
  }
}
