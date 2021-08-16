import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { CategoryItemService } from 'src/app/services/category-item.service';
import { ProtocolsContentService } from 'src/app/services/protocols-content.service';

@Component({
  selector: 'app-protocols-content',
  templateUrl: './protocols-content.page.html',
  styleUrls: ['./protocols-content.page.scss'],
})
export class ProtocolsContentPage implements OnInit {
  level = null;
  searchTerm: string;

  name: string;

  providerPoints: any[];
  providerMainPoints: any[];

  emtMainPoints: any[];

  aemtMainPoints: any[];
  aemtPinkPoint: string;
  aemtPinkPointSub: string[];

  paramedicMainPoints: any[];

  keyPoints: string[];

  contact: any[];

  images: string[];

  constructor(
    private route: ActivatedRoute,
    private platform: Platform,
    private content: ProtocolsContentService
  ) {
    this.level = this.route.snapshot.paramMap.get('level');
    this.content.getContent(this.level);
  }

  ngOnInit() {
    this.name = this.content.name;
    this.providerPoints = this.content.providerPoints;
    this.providerMainPoints = this.content.providerMainPoints;
    this.emtMainPoints = this.content.emtMainPoints;
    this.aemtMainPoints = this.content.aemtMainPoints;
    this.aemtPinkPoint = this.content.aemtPinkPoint;
    this.aemtPinkPointSub = this.content.aemtPinkPointSub;
    this.paramedicMainPoints = this.content.paramedicMainPoints;
    this.keyPoints = this.content.keyPoints;

    this.contact = this.content.contact;

    this.images = this.content.images;
  }
}
