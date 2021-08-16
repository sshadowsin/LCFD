import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RefrenceContentService {
  name: string;
  images: string[];
  headings: string[];
  contacts: string[];

  constructor() {}

  getContent(level) {
    switch (level) {
      case '0':
        this.name = 'MIST';
        this.images = ['lead1.jpg'];
        this.headings = null;
        this.contacts = ['+11 987654321','+3 9874566321'];
        break;

      case '1':
        this.name = '12 Leads';
        this.images = ['lead1.jpg', 'lead2.png'];
        this.headings = ['Precordial Lead Placement'];
        this.contacts = null;
        break;
      case '2':
        // eslint-disable-next-line @typescript-eslint/quotes
        this.name = "Rule of 9's";
        this.images = ['rule1.jpg'];
        this.headings = ['Precordial Lead Placement'];
        this.contacts = null;
        break;
      case '3':
        this.name = 'Glasgow Coma Score';
        this.images = ['glasgow1.jpg', 'glasgow2.jpg'];
        this.headings = ['Precordial Lead Placement'];
        this.contacts = null;
        break;
      case '4':
        this.name = 'Vital Signs';
        this.images = ['vital1.jpg'];
        this.headings = ['Precordial Lead Placement'];
        this.contacts = null;
        break;
      case '5':
        this.name = 'Common Lab Values';
        this.images = ['lead1.jpg', 'lead2.png'];
        this.headings = ['Precordial Lead Placement'];
        this.contacts = null;
        break;
      case '6':
        this.name = 'APGAR';
        this.images = ['apgar1.jpg'];
        this.headings = ['Precordial Lead Placement'];
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
