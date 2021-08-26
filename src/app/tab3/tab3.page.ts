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
    },
    {
      name: 'Protocol 01: AIRWAY AND TRACHEOSTOMY MANAGEMENT',
    },
    {
      name: 'Protocol 02: ALTERED MENTAL STATUS',
    },
    {
      name: 'Protocol 03:DEATH DETERMINATION AND TERMINATION OF RESUSCITATION',
    },
    { name: 'Protocol 04: FAMILY CENTERED CARE' },
    { name: 'Protocol 05: NAUSEA / VOMITING' },
    { name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT' },
    { name: 'Protocol 07: PEDIATRIC ASSESSMENT' },
    { name: 'Protocol 08: SHOCK, SEPSIS, & FLUID THERAPY' },
    { name: 'Protocol 09: CARDIAC ARREST' },
    { name: 'Protocol 10: BRADYCARDIA (Symptomatic)' },
    { name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)' },
    { name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA' },
    { name: 'Protocol 13: NEWBORN RESUSCITATION' },
    { name: 'Protocol 14: POST CARDIAC ARREST (ROSC)' },
    { name: 'Protocol 15: TACHYCARDIA (With a Pulse)' },
    { name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS' },
    { name: 'Protocol 17 : DROWNING OR SUBMERSION' },
    { name: 'Protocol 18: FEVER MANAGEMENT' },
    { name: 'Protocol 19: GLUCOSE EMERGENCIES' },
    { name: 'Protocol 20: OBSTETRICAL EMERGENCIES' },
    { name: 'Protocol 21: OPIOID OVERDOSE' },
    { name: 'Protocol 22: RESPIRATORY DISTRESS' },
    { name: 'Protocol 23: SEIZURES' },
    { name: 'Protocol 24: SUSPECTED STROKE' },
    { name: 'Protocol 25: TEMPERATURE AND ENVIRONMENTAL EMERGENCIES' },
    { name: 'Protocol 26: TOXIC EXPOSURE - CARBON MONOXIDE' },
    { name: 'Protocol 27: TOXIC EXPOSURE – CYANIDE' },
    { name: 'Protocol 28: TOXIC EXPOSURE - HYDROFLUORIC ACID' },
    { name: 'Protocol 29: TOXIC EXPOSURE - ORGANOPHOSPHATES / NERVE AGENTS' },
    {
      name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
    },
    { name: 'Protocol 31: GENERAL TRAUMA MANAGEMENT' },
    { name: 'Protocol 32: AMPUTATIONS / TOOTH AVULSIONS' },
    { name: 'Protocol 33: BURNS – THERMAL / ELECTRICAL / LIGHTNING' },
    { name: 'Protocol 34: HEAD INJURY (TRAUMATIC BRAIN INJURY)' },
    { name: 'Protocol 35: HEMORRHAGE CONTROL, EXTREMITY AND CRUSH INJURIES' },
    { name: 'Protocol 36: NON-ACCIDENTAL TRAUMA/ABUSE' },
    { name: 'Protocol 37: SNAKE BITES' },
    { name: 'Protocol 38: SPINAL MOTION RESTRICTION (SMR)' },
  ];
  constructor(
    private navCtrl: NavController,
    private platform: Platform
    ) {
      this.platform.backButton.subscribe(
        () => {
          this.searchTerm2 = null;
          this.navCtrl.navigateBack('inside/tabs/tab1');
        }
      );
    }

  openProtocol(routurl) {
    this.searchTerm2 = null;
    this.navCtrl.navigateForward(routurl);
  }

}
