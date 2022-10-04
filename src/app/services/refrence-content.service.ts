import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RefrenceContentService {
  name: string;
  images: string[];
  headings: string[];
  contacts: any[];

  constructor() {}

  getContent(level) {
    switch (level) {
      case '0':
        this.name = 'MIST';
        this.images = ['mist1.jpg'];
        this.headings = [''];
        this.contacts = [
          {
            name: 'Cache Valley Hospital',
            no:'(435) 753-2847'
          },
          {
            name: 'Logan Regional Hospital',
            no:'(435) 755-6642'
          }
        ];
        break;

      case '1':
        this.name = '12 Leads';
        this.images = ['lead1.jpg', 'lead2.png'];
        this.headings = ['Precordial Lead Placement',''];
        this.contacts = null;
        break;
      case '2':
        // eslint-disable-next-line @typescript-eslint/quotes
        this.name = "Rule of 9's";
        this.images = ['rule1.jpg'];
        this.headings = [''];
        this.contacts = null;
        break;
      case '3':
        this.name = 'Glasgow Coma Score';
        this.images = ['glasgow1.jpg', 'glasgow2.jpg'];
        this.headings = ['Adult','Pediatric'];
        this.contacts = null;
        break;
      case '4':
        this.name = 'Vital Signs';
        this.images = ['vital1.jpg'];
        this.headings = [''];
        this.contacts = null;
        break;
      case '5':
        this.name = 'Common Lab Values';
        this.images = ['common1.jpg'];
        this.headings = [''];
        this.contacts = null;
        break;
      case '6':
        this.name = 'APGAR';
        this.images = ['apgar1.jpg'];
        this.headings = [''];
        this.contacts = null;
        break;
      case '7':
          this.name = 'Trauma Level Criteria (I, II, III)';
          this.images = ['2022.jpg'];
          this.headings = [''];
          this.contacts = null;
          break;  
      case '8':
        this.name = '913: Needle Decompression Prodecure';
        this.images = ['913ND.pdf'];
        this.headings = [' '];
        this.contacts = null;
        break;
      case '9':
        this.name = '914: I/O Procedure';
        this.images = ['914IO1.pdf', '914IO2.pdf', '914IO3.pdf', '914IO4.pdf', '914IO5.pdf', '914IO6.pdf', '914IO7.pdf'];
        this.headings = ['-', '-', '-', '-', '-', '-', '-'];
        this.contacts = null;
        break;
      case '10':
          this.name = '915: Sucking Chest Wound Procedure';
          this.images = ['915Suck.pdf'];
          this.headings = [''];
          this.contacts = null;
          break;  
      default:
        this.name = 'Default';
        this.images = null;
        this.headings = null;
        this.contacts = null;

        break;
    }
  }
}
