import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  searchTerm2: string = null;

  protocols = [
    {
      name: 'Introduction to CCEMS Protocols',
      level: 0,
    },
    {
      name: 'Protocol 01: AIRWAY AND TRACHEOSTOMY MANAGEMENT',
      level: 1,
    },
    {
      name: 'Protocol 02: ALTERED MENTAL STATUS',
      level: 2,
    },
    {
      name: 'Protocol 03:DEATH DETERMINATION AND TERMINATION OF RESUSCITATION',
      level: 3,
    },
    { name: 'Protocol 04: FAMILY CENTERED CARE', level: 4 },
    { name: 'Protocol 05: NAUSEA / VOMITING', level: 5 },
    { name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT', level: 6 },
    { name: 'Protocol 07: PEDIATRIC ASSESSMENT', level: 7 },
    { name: 'Protocol 08: SHOCK, SEPSIS, & FLUID THERAPY', level: 8 },
    { name: 'Protocol 09: CARDIAC ARREST', level: 9 },
    { name: 'Protocol 10: BRADYCARDIA (Symptomatic)', level: 10 },
    {
      name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
      level: 11,
    },
    {
      name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
      level: 12,
    },
    { name: 'Protocol 13: NEWBORN RESUSCITATION', level: 13 },
    { name: 'Protocol 14: POST CARDIAC ARREST (ROSC)', level: 14 },
    { name: 'Protocol 15: TACHYCARDIA (With a Pulse)', level: 15 },
    { name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS', level: 16 },
    { name: 'Protocol 17 : DROWNING OR SUBMERSION', level: 17 },
    { name: 'Protocol 18: FEVER MANAGEMENT', level: 18 },
    { name: 'Protocol 19: GLUCOSE EMERGENCIES', level: 19 },
    { name: 'Protocol 20: OBSTETRICAL EMERGENCIES', level: 20 },
    { name: 'Protocol 21: OPIOID OVERDOSE', level: 21 },
    { name: 'Protocol 22: RESPIRATORY DISTRESS', level: 22 },
    { name: 'Protocol 23: SEIZURES', level: 23 },
    { name: 'Protocol 24: SUSPECTED STROKE', level: 24 },
    {
      name: 'Protocol 25: TEMPERATURE AND ENVIRONMENTAL EMERGENCIES',
      level: 25,
    },
    { name: 'Protocol 26: TOXIC EXPOSURE - CARBON MONOXIDE', level: 26 },
    { name: 'Protocol 27: TOXIC EXPOSURE – CYANIDE', level: 27 },
    { name: 'Protocol 28: TOXIC EXPOSURE - HYDROFLUORIC ACID', level: 28 },
    {
      name: 'Protocol 29: TOXIC EXPOSURE - ORGANOPHOSPHATES / NERVE AGENTS',
      level: 29,
    },
    {
      name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
      level: 30,
    },
    { name: 'Protocol 31: GENERAL TRAUMA MANAGEMENT', level: 31 },
    { name: 'Protocol 32: AMPUTATIONS / TOOTH AVULSIONS', level: 32 },
    {
      name: 'Protocol 33: BURNS – THERMAL / ELECTRICAL / LIGHTNING',
      level: 33,
    },
    { name: 'Protocol 34: HEAD INJURY (TRAUMATIC BRAIN INJURY)', level: 34 },
    {
      name: 'Protocol 35: HEMORRHAGE CONTROL, EXTREMITY AND CRUSH INJURIES',
      level: 35,
    },
    { name: 'Protocol 36: NON-ACCIDENTAL TRAUMA/ABUSE', level: 36 },
    { name: 'Protocol 37: SNAKE BITES', level: 37 },
    { name: 'Protocol 38: SPINAL MOTION RESTRICTION (SMR)', level: 38 },
  ];
  constructor(private navCtrl: NavController, private platform: Platform) {
    this.platform.backButton.subscribe(() => {
      this.searchTerm2 = null;
      this.navCtrl.navigateBack('inside/tabs/tab1');
    });
  }

  openProtocol(routurl) {
    this.searchTerm2 = null;
    this.navCtrl.navigateForward(routurl);
  }
}
