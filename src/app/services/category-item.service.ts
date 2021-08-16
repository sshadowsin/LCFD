/* eslint-disable max-len */
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CategoryItemService {
  name: string;
  discription: string;
  subPointsHeading: string[];
  subPoints: any[];
  footerText: string;
  protocols: string[];

  introduction: boolean;

  constructor() {}

  getContent(level) {
    switch (level) {
      case '0':
        this.name = 'Introduction';
        this.introduction = true;
        this.discription = null;
        this.subPointsHeading = null;
        this.subPoints = null;
        this.footerText = null;
        this.protocols = null;
        break;

      case '1':
        this.name = 'General Patient Care Guidelines';
        this.introduction = false;
        this.discription =
          'These guidelines were created to provide direction to each level of certified provider in caring for all types of patients.  All of these directions, dosages and provisions are subject to change with a later notice or revision of the guidelines.  The OLMC physician will always be the final word on treatment in the field.  If there are ever any discrepancies between the guidelines and the OLMC physician these should be documented and brought to the attention of the physician at the receiving hospital.  If the explanation is not sufficient, the provider should bring the issue to their medical director or the BEMSP for review. ';
        this.subPointsHeading = [
          'General Approach to General Patient Care Guidelines',
          'General Pediatric Considerations',
        ];
        this.subPoints = [
          {
            points: [
              '●	Assess your patient prior to initiating a guideline.',
              '●	More than one guideline may apply.',
              '●	If conflicts arise between treatment guidelines, contact OLMC for clarification.',
              '●	Providers may provide treatment up to the level of their certification only.',
              '●	Air Medical Transport Service personnel function under their own clinical guidelines.',
              '●	Contact the receiving hospital and OLMC as soon as clinically possible for each patient.',
              '●	OLMC physician may change your treatment plan.',
              '●	Any variations to a guideline by the OLMC or physician should be clarified to ensure that the EMS provider has properly characterized the situation and document on the PCR.',
              '●	The OLMC Physician has the final word on treatment once contact is made.',
              '●	OLMC physician must approve usage of dosages in excess of the guideline.',
            ],
          },
          {
            points: [
              '●	Pediatric reference based dosing is preferred over calculated dosages for infants and children as approved by the offline medical director. (ie. Broselow tape, Pedi Stat)',
              '●	Pediatric lowest acceptable systolic blood pressures are: birth to 1 month = 60mmHg, 1 month to 1 year = 70mmHg, 1 year to 10 years is = 70mmHg + (age x 2) and over 10 years = 90mmHg.  ',
            ],
          },
        ];
        this.footerText =
          'Magenta highlights means drugs we currently don’t carry.';

        this.protocols = [
          'Protocol 01: AIRWAY AND TRACHEOSTOMY MANAGEMENT',
          'Protocol 02: ALTERED MENTAL STATUS',
          'Protocol 03: DEATH DETERMINATION AND TERMINATION OF RESUSCITATION',
          'Protocol 04: FAMILY CENTERED CARE',
          'Protocol 05: NAUSEA / VOMITING',
          'Protocol 06: PAIN & ANXIETY MANAGEMENT',
          'Protocol 07: PEDIATRIC ASSESSMENT',
          'Protocol 08: SHOCK, SEPSIS, & FLUID THERAPY',
        ];
        break;

      case '2':
        this.name = 'Cardiac Patient Care Guidelines';
        this.introduction = false;
        this.discription =
          'These guidelines were created to provide direction for each level of certified provider in caring for cardiac patients.  All of these directions, dosages and provisions are subject to change with a later notice or revision of the guidelines.  The OLMC physician will always be the final word on treatment in the field.  If there are ever any discrepancies between the guidelines and the OLMC physician these should be documented and brought to the attention of the physician at the receiving hospital.  If the explanation is not sufficient to the provider, then they may bring the issue to their medical director or the BEMSP for review.';
        this.subPointsHeading = [
          'General Approach to Cardiac Patient Care Guidelines',
          'General Pediatric Considerations',
        ];
        this.subPoints = [
          {
            points: [
              '●	Assess your patient prior to initiating a guideline.',
              '●	More than one guideline may apply.',
              '●	If conflicts arise between treatment guidelines, contact OLMC for clarification.',
              '●	Providers may provide treatment up to the level of their certification only.',
              '●	Air Medical Transport Service personnel function under their own clinical guidelines.',
              '●	Contact the receiving hospital and OLMC as soon as clinically possible for each patient.',
              '●	OLMC physician may change your treatment plan.',
              '●	Any variations to a guideline by the OLMC or physician should be clarified to ensure that the EMS provider has properly characterized the situation and document on the PCR.',
              '●	The OLMC Physician has the final word on treatment once contact is made.',
              '●	OLMC physician must approve usage of dosages in excess of the guideline.',
            ],
          },
          {
            points: [
              '●	Pediatric lowest acceptable systolic blood pressures are: birth to 1 month = 60mmHg, 1 month to 1 year = 70mmHg, 1 year to 10 years is = 70mmHg + (age x 2) and over 10 years = 90mmHg.  ',
            ],
          },
        ];
        this.footerText =
          'Magenta highlights means drugs we currently don’t carry.';

        this.protocols = [
          'Protocol 09: CARDIAC ARREST',
          'Protocol 10: BRADYCARDIA (Symptomatic)',
          'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
          'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
          'Protocol 13: NEWBORN RESUSCITATION',
          'Protocol 14: POST CARDIAC ARREST (ROSC)',
          'Protocol 15: TACHYCARDIA (With a Pulse)',
        ];
        break;

      case '3':
        this.name = 'Medical Patient Care Guidelines';
        this.introduction = false;
        this.discription =
          'These guidelines were created to provide direction for each level of certified provider in caring for medical patients.  All of these directions, dosages and provisions are subject to change with a later notice or revision of the guidelines.  The OLMC physician will always be the final word on treatment in the field. If there are ever any discrepancies between the guidelines and the OLMC physician these should be documented and brought to the attention of the physician at the receiving hospital.  If the explanation is not sufficient, the provider should bring the issue to their medical director or the BEMSP for review.';
        this.subPointsHeading = [
          'General Approach to Medical Patient Care Guidelines',
          'General Pediatric Considerations',
        ];
        this.subPoints = [
          {
            points: [
              '●	Assess your patient prior to initiating a guideline.',
              '●	More than one guideline may apply.',
              '●	If conflicts arise between treatment guidelines, contact OLMC for clarification.',
              '●	Providers may provide treatment up to the level of their certification only.',
              '●	Air Medical Transport Service personnel function under their own clinical guidelines.',
              '●	Contact the receiving hospital and OLMC as soon as clinically possible for each patient.',
              '●	OLMC physician may change your treatment plan.',
              '●	Any variations to a guideline by the OLMC or physician should be clarified to ensure that the EMS provider has properly characterized the situation and document on the PCR.',
              '●	The OLMC Physician has the final word on treatment once contact is made.',
              '●	OLMC physician must approve usage of dosages in excess of the guideline.',
            ],
          },
          {
            points: [
              '●	Pediatric reference-based tape dosing is preferred over calculated dosages for infants and children  as approved by the offline medical director. (ie. Broselow tape, Pedi Stat)',
            ],
          },
        ];
        this.footerText =
          'Magenta highlights means drugs we currently don’t carry.';

        this.protocols = [
          'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS',
          'Protocol 17 : DROWNING OR SUBMERSION',
          'Protocol 18: FEVER MANAGEMENT',
          'Protocol 19: GLUCOSE EMERGENCIES',
          'Protocol 20: OBSTETRICAL EMERGENCIES',
          'Protocol 21: OPIOID OVERDOSE',
          'Protocol 22: RESPIRATORY DISTRESS',
          'Protocol 23: SEIZURES',
          'Protocol 24: SUSPECTED STROKE',
          'Protocol 25: TEMPERATURE AND ENVIRONMENTAL EMERGENCIES',
          'Protocol 26: TOXIC EXPOSURE - CARBON MONOXIDE',
          'Protocol 27: TOXIC EXPOSURE – CYANIDE',
          'Protocol 28: TOXIC EXPOSURE - HYDROFLUORIC ACID',
          'Protocol 29: TOXIC EXPOSURE - ORGANOPHOSPHATES / NERVE AGENTS',
          'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
        ];
        break;

      case '4':
        this.name = 'Trauma Patient Care Guidelines';
        this.introduction = false;
        this.discription =
          'These guidelines were created to provide direction for each level of certified provider in caring for trauma patients.  All of these directions, dosages, and provisions are subject to change with later notice or revision of the guidelines.  The OLMC physician will always be the final word on treatment in the field.  If there are ever any discrepancies between the guidelines and the OLMC physician these should be documented and brought to the attention of the physician at the receiving hospital.  If the explanation is not sufficient, the provider should bring the issue to their medical director or the BEMSP for review';
        this.subPointsHeading = [
          'General Approach to Trauma Patient Care Guidelines',
          'General Pediatric Considerations',
        ];
        this.subPoints = [
          {
            points: [
              '●	Assess your patient prior to initiating a guideline.',
              '●	Destination decisions for trauma patients should be in accordance with the Utah Trauma Field Triage Guidelines.',
              '●	Early notification allows the receiving physician to activate the receiving hospital’s trauma alert system.',
              '●	Providers should describe: vital signs, including GCS/AVPU, injuries, mechanism of injury and any complicating factors that will affect treatment (as per the Utah Trauma Field Triage Guidelines) so that the hospital may activate the appropriate level of trauma response.',
              '●	Consider air transport for critically injured patients with long transport times to a trauma center (over (60 minutes).',
              '●	Consider delivery to the nearest hospital if your patient is too unstable for a prolonged transport or the patient has a compromised airway that you cannot secure.',
              '●	More than one guideline may apply.',
              '●	If conflicts arise between treatment guidelines, contact OLMC for clarification.',
              '●	Providers may provide treatment up to the level of their certification only.',
              '●	Air Medical Transport Service personnel function under their own clinical guidelines.',
              '●	Contact the receiving hospital and OLMC as soon as clinically possible for each patient.',
              '●	OLMC physician may change your treatment plan.',
              '●	Any variations to a guideline by the OLMC or physician should be clarified to ensure that the EMS provider has properly characterized the situation and document on the PCR.',
              '●	The OLMC Physician has the final word on treatment once contact is made.',
              '●	OLMC physician must approve usage of dosages in excess of the guideline.',
            ],
          },
          {
            points: [
              '●	Pediatric reference based dosing is preferred over calculated dosages for infants and children as approved by the offline medical director. (ie. Broselow tape, Pedi Stat)',
              '●	Pediatric lowest acceptable systolic blood pressures are: birth to 1 month = 60mmHg, 1 month to 1 year = 70mmHg, 1 year to 10 years is = 70mmHg + (age x 2) and over 10 years = 90mmHg.  These are the blood pressures to use for Pediatrics (<15 years old) under step one of the Utah Trauma Field Triage Guidelines.',
            ],
          },
        ];
        this.footerText =
          'Magenta highlights means drugs we currently don’t carry.';

        this.protocols = [
          'Protocol 31: GENERAL TRAUMA MANAGEMENT',
          'Protocol 32: AMPUTATIONS / TOOTH AVULSIONS',
          'Protocol 33: BURNS – THERMAL / ELECTRICAL / LIGHTNING',
          'Protocol 34: HEAD INJURY (TRAUMATIC BRAIN INJURY)',
          'Protocol 35: HEMORRHAGE CONTROL, EXTREMITY AND CRUSH INJURIES',
          'Protocol 36: NON-ACCIDENTAL TRAUMA/ABUSE',
          'Protocol 37: SNAKE BITES',
          'Protocol 38: SPINAL MOTION RESTRICTION (SMR)',
        ];
        break;

      default:
        this.name = 'Default';
        this.discription = null;
        this.subPointsHeading = null;
        this.subPoints = null;
        this.footerText = null;
        this.protocols = null;
        this.introduction = false;
        break;
    }
  }
}
