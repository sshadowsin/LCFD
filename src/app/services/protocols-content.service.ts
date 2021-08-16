/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProtocolsContentService {
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

  constructor() {}

  getContent(level) {
    switch (level) {
      case '0':
        this.name = 'Introduction';
        this.providerPoints = null;
        this.providerMainPoints = null;

        this.emtMainPoints = null;

        this.aemtMainPoints = null;
        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = null;

        this.keyPoints = null;

        this.contact = null;

        this.images = null;

        break;

      case '1':
        this.name = 'Protocol 01: AIRWAY AND TRACHEOSTOMY MANAGEMENT';

        this.providerPoints = [
          {
            head: 'Focused history and physical exam',
            points: [
              'Assess ABC’s for evidence of current apnea, airway reflex compromise or difficulty in ventilatory effort.',
              'Assess medical conditions, burns or traumatic injuries that may have or will compromise the airway.',
            ],
          },
          {
            head: 'Continuous cardiac, ETCO2, blood pressure, and pulse oximetry monitoring, when available.',
            points: null,
          },
          {
            head: 'Obtain a 12 Lead EKG when available.',
            points: null,
          },
        ];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: 'Provide basic airway maneuvers to all compromised airways, i.e. jaw-thrust, airway adjuncts, and oxygen.',
              },
              {
                head: 'Provide basic airway maneuvers to all compromised airways, i.e. jaw-thrust, airway adjuncts, and oxygen.',
              },
              {
                head: 'Identify and treat underlying reversible medical conditions (narcotic overdose, hypoglycemia, etc.).',
              },
              {
                head: 'Provide supplemental oxygen and assisted ventilation as needed for the patient to maintain an oxygen saturation of 90-94% and ETCO2 of 35-45.',
              },
              {
                head: 'Always ensure proper care of the C-spine during airway treatment per Protocol 38 Spinal Motion Restriction',
              },
              {
                head: 'Keep NPO. Stop any GI Feedings and do not use GI tube during resuscitation except to vent tube if assisted ventilations being delivered',
              },
              {
                head: 'Infants and young children are primary nose breathers.  Suction oral and nasal passages as needed to keep clear.',
              },
              {
                head: 'BVM is the preferred method of ventilation below the age of 10 years old.',
              },
              {
                head: 'Tracheostomy/Home Ventilator',
                subpoints: [
                  'Primary caretakers and families are your best resource for understanding the equipment they are using.',
                  'Disconnect the ventilator and assist ventilations with BVM if the patient is apneic, unresponsive, or has severe respiratory distress. (Disconnecting a vent poses a very HIGH risk for body fluid exposure and can be dangerous to the patient if done incorrectly, see appendix for more details)',
                  'If unable to ventilate, suction the tracheostomy, then reattempt ventilatory efforts.',
                  'If still unable to ventilate, attempt traditional BVM',
                  'If there is difficulty ventilating a tracheostomy patient, consider “D.O.P.E.”  (Dislodged? Obstruction? Pneumothorax? Equipment failure?)',
                ],
              },
            ],
          },
        ];

        this.emtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                head: 'Ventilate with BVM when apneic or exhibiting respiratory distress.  Consider a nasal or oral airway when not contraindicated (facial fractures, intact gag response, etc.).',
              },
              {
                head: 'Avoid hyperventilation and maintain a ventilatory rate of 10-12 breaths per minute',
              },
            ],
            note: null,
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            note: 'NOTE: Pediatric weight based dosing should not exceed Adult dosing',
            points: [
              {
                head: 'Ventilate with BVM when apneic or exhibiting respiratory distress.  Consider a nasal or oral airway when not contraindicated (facial fractures, intact gag response, etc.).',
              },
              {
                head: 'Avoid hyperventilation - recommended pediatric ventilatory rates:',
                subpoints: [
                  'Infant (0-12 month): 25 breaths per minute',
                  '1-3 yrs.: 20 breaths per minute',
                  '4-6 yrs.: 15 breaths per minute',
                  '>6 years: 12 (Same as adult)',
                ],
              },
            ],
          },
        ];

        this.aemtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                subhead:
                  'Consider an appropriately sized supraglottic airway device if unable to ventilate with BVM.',
              },
              {
                subhead:
                  'CPAP/BiPAP – Consider when the patient is awake but needs assistance with oxygenation and ventilation such as in a CHF/pulmonary edema patient or COPD patient.',
              },
              {
                subhead:
                  'Provide CPAP of 5 cm H2O to begin with and titrate PEEP slowly to maximum of 10 cmH2O',
              },
              {
                subhead:
                  'Higher PEEP can cause a severe reduction in venous return which can result in profound shock--Monitor VS closely',
              },
              { subhead: 'Explain the procedure to the patient' },
              {
                subhead:
                  'If unable to adequately ventilate return to BVM and consider insertion of supraglottic airway and bag ventilation',
              },
              {
                subhead:
                  'Contact OLMC to discuss further settings and treatment above the initial setup',
              },
            ],
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            points: [
              {
                subhead:
                  'Consider an appropriately sized supraglottic airway device if unable to ventilate with BVM ',
              },
              {
                subhead:
                  'CPAP/BiPAP – Only use when the patient is on the machine at home.  Maintain home settings and bring machine with the patient.  If unable to adequately ventilate return to BVM and consider insertion of a supraglottic airway.',
              },
            ],
          },
        ];

        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = [
          {
            head: 'ADULT',
            note: null,
            points: [
              {
                subhead:
                  '<strong>Endotracheal Intubation</strong> - Consider orotracheal intubation using an endotracheal tube (ETT) when indicated.',
                subpoints: [
                  'Document TWO confirmation methods to verify endotracheal placement. (e.g. ETCO2, CO2 detection device, or esophageal intubation detector)',
                  'Secure the ETT for transport',
                  'Consider NG/OG tube placement or opening active G-tubes for all intubated patients',
                  'Consider sedation after intubation',
                  'If endotracheal intubation is unsuccessful, revert to a supraglottic airway device or BVM with appropriate oral/nasal airway.',
                  '<strong>Avoid multiple attempts at intubation.</strong>',
                ],
              },
              {
                subhead:
                  'Surgical Airway - Cricothyrotomy - Consider only when all other methods of oxygenation, ventilation and securing the airway have failed.',
                subpoints: [
                  'Document TWO confirmation methods to verify endotracheal placement. (e.g. ETCO2, CO2 detection device, or esophageal intubation detector)',
                  'Gather all equipment before beginning the procedure Insert appropriately sized ETT. (ie 5.0-6.0)',
                ],
              },
              {
                subhead: 'Tracheostomy Assistance',
                subpoints: [
                  'Provide supplemental oxygen',
                  'Suction the patient appropriately (use in-line suction if available)',
                  'Replace Tracheostomy tube if needed',
                  'IF unable to ventilate, pass an appropriately sized ETT through the stoma 1-2 inches',
                  'IF unable to pass a tracheostomy tube or endotracheal tube use BVM, orotracheal intubation or Supraglottic device to ventilate the patient.',
                  'Contact OLMC for further instructions',
                ],
              },
              {
                subhead: 'Ventilator Management',
                subpoints: [
                  'Work with the family to troubleshoot the machine',
                  'Address tracheostomy as above',
                  'If you need to disconnect for transport provide adequate BVM ventilations similar to home respiratory rate settings',
                  'Contact OLMC for further instructions as needed',
                ],
              },
            ],
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            note: 'NOTE: Pediatric weight based dosing should not exceed Adult dosing',
            points: [
              {
                subhead:
                  'Endotracheal Intubation - Consider orotracheal intubation using an endotracheal tube (ETT) when indicated',
                subpoints: [
                  ' BVM ventilations are the preferred method of ventilation in children, even for long transports. However, if oxygenation or ventilation is inadequate with BVM, a trial of a supraglottic airway is indicated.',
                  'In the rare instance that a supraglottic airway is ineffective, then proceed to ETT',
                  'For longer transports, be aware of gastric distension during BVM, which may limit ventilation. An NG/OG tube can be placed to decompress the stomach',
                  // eslint-disable-next-line @typescript-eslint/quotes
                  "Pediatric ETT's are sized according to age and are in mm:<ul><li>Preemie: 2.5</li><li>0-3 months: 3.0</li><li>3-7 months: 3.5</li><li>7-15 months: 4.0</li><li>15-24 months: 4.5</li><li>2-15 years: Formula is (age+16) / 4</li>",
                  'Document TWO confirmation methods to verify endotracheal placement. (e.g. ETCO2, CO2 detection device, or esophageal intubation detector)',
                  'Secure the ETT for transport',
                  'Consider NG/OG tube placement or opening active G-tubes for all intubated patients',
                  'Consider sedation after intubation',
                  'If endotracheal intubation is unsuccessful, revert to a supraglottic airway device or BVM with appropriate oral/nasal airway. Avoid multiple attempts at intubation.',
                ],
              },
              {
                subhead:
                  '* Surgical Airway – Cricothyrotomy - Consider only when all other methods of oxygenation, ventilation and securing the airway have failed',
                subpoints: [
                  'Open Surgical Cricothyrotomy is contraindicated in ages < 12 years old.',
                  'Needle Cricothyrotomy can be used below 12 years of age.',
                  'Document TWO confirmation methods to verify endotracheal placement. (e.g. ETCO2, CO2 detection device, or esophageal intubation detector).',
                  'Gather all equipment before beginning the procedure.',
                  'Once the procedure is done insert an appropriately sized cuffed ETT and secure.',
                  'Contact OLMC for further instructions as needed.',
                ],
              },
              {
                subhead: 'Tracheostomy Assistance',
                subpoints: [
                  'Provide supplemental oxygen',
                  'Suction the patient appropriately (use in-line suction if available)',
                  'Replace tracheostomy tube, with patient’s back up tracheostomy tube if needed',
                  'IF unable to ventilate, pass an appropriately sized ETT through the stoma 1-2 inches ',
                  'IF unable to pass a tracheostomy tube or ETT use BVM, orotracheal intubation or SGD',
                  'Contact OLMC for further instructions',
                ],
              },
              {
                subhead: 'Ventilator Management',
                subpoints: [
                  'Work with the family to troubleshoot the machine',
                  'Address tracheostomy as above',
                  'If you need to disconnect for transport provide adequate BVM ventilations similar to home respiratory rate settings',
                  'Contact OLMC for further instructions as needed.',
                ],
              },
            ],
          },
        ];

        this.keyPoints = null;

        this.contact = null;

        this.images = null;

        break;

      case '2':
        this.name = 'Protocol 02: ALTERED MENTAL STATUS';

        this.providerPoints = [
          {
            head: 'Focused history and physical exam',
            points: [
              'Blood glucose, oxygen saturation and temperature assessment',
            ],
          },
          {
            head: 'Continuous cardiac, ETCO2, blood pressure, and pulse oximetry monitoring, when available',
            points: null,
          },
          {
            head: 'Obtain a 12 Lead EKG when available.',
            points: null,
          },
        ];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: 'Assess for trauma',
              },
              {
                head: 'Assess for stroke and score per Protocol #24 Suspected Stroke.',
              },
              {
                head: 'Assessment for possible overdose, substance abuse or other potential toxin exposure.  Evaluate the scene for supportive evidence.',
              },
              {
                head: 'Gather and collect any evidence on scene that may assist in the treatment of the patient (medication bottles, pills, notes, etc.)',
              },
            ],
          },
          {
            head: 'Key Considerations',
            points: [
              {
                head: 'Consider non-accidental trauma, especially in pediatric and elderly patients',
              },
              {
                head: 'Consider hypoglycemia in pediatric patient',
              },
              {
                head: 'Pediatric lowest acceptable systolic blood pressures are birth to 1 month = 60mmHg, 1 month to 1 year = 70mmHg, 1 year to 10 years is = 70mmHg + (age x 2) and over 10 years = 90mmHg.',
              },
              {
                head: 'If poisoning is suspected, contact OLMC or you may contact Utah Poison Center at 1-800-222-1222 for guidance.',
              },
              {
                head: 'When evaluating pediatric level of consciousness use A.V.P.U. Alert, Verbal, Pain, Unresponsive',
                subpoints: [
                  '<table><tbody><tr><td>A - Alcohol	</td><td>T – Trauma/Temp</td></tr><tr><td>E - Electrolytes	</td><td>I – Infection</td></tr><tr><td>I – Insulin	</td><td>P – Psychogenic</td></tr><tr><td>O - Opiates</td><td>P – Poison</td></tr><tr><td>U - Uremia	</td><td>S – Shock/Seizure</td></tr></tbody></table>',
                  'AEIOUTIPPS: Possible causes of Altered Mental Status',
                ],
              },
            ],
          },
        ];

        this.emtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                head: 'Apply supplemental oxygen as needed to maintain oxygen saturation of 90-94%',
              },
              {
                head: 'Apply warming or cooling techniques as indicated',
              },
              {
                head: 'Consider physical restraints as needed to protect the patient and/or rescue personnel',
              },
              {
                head: 'Treat hypoglycemia: follow Protocol #19 Glucose emergencies.',
              },
              {
                head: 'Naloxone 0.4 mg per dose IN (intranasal) for suspected narcotic overdose.  May repeat x1',
              },
            ],
            note: null,
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            note: 'NOTE: Pediatric weight based dosing should not exceed Adult dosing',
            points: [
              {
                head: 'Apply supplemental oxygen as needed to maintain oxygen saturation of 90-94%',
              },
              {
                head: 'Apply warming or cooling techniques as indicated',
              },
              {
                head: 'Consider physical restraints as needed to protect the patient and/or rescue personnel',
              },
              {
                head: 'Treat hypoglycemia: follow Protocol #19 Glucose emergencies.',
              },
              {
                head: 'Naloxone 0.1 mg/kg (max 0.4 mg per dose) IN (intranasal) for suspected narcotic overdose',
              },
            ],
          },
        ];

        this.aemtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                subhead: '❑	Advanced airway, vascular access and fluid therapy',
              },
              {
                subhead:
                  '❑	Consider chemical restraints per Protocol #30 Violent Patient/Chemical Restraint, as needed, to protect the patient and/or rescue personnel',
              },
              {
                subhead:
                  '❑	If patient is hypoglycemic, refer to hypoglycemia protocol',
              },
              {
                subhead:
                  '❑	Naloxone (Narcan) IV 0.4-2 mg (per dose) for suspected narcotic overdose.  May repeat x1. Max 4 mg.',
              },
              {
                subhead:
                  '❑	Naloxone (Narcan) IN/IM 2 mg for suspected narcotic overdose.',
              },
            ],
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            points: [
              {
                subhead: '❑	Advanced airway, vascular access and fluid therapy',
              },
              {
                subhead:
                  '❑	If evidence of poor perfusion, give NS 20 mL/kg IV max 1 L',
              },
              {
                subhead:
                  '❑	Consider chemical restraints per Protocol #30 Violent Patient/Chemical Restraint, as needed, to protect the patient and/or rescue personnel',
              },
              {
                subhead:
                  '❑	If patient is hypoglycemic, refer to hypoglycemia protocol',
              },
              {
                subhead: '❑	Naloxone (Narcan) 0.1 mg/kg IM/IN/IV Max 2mg',
              },
            ],
          },
        ];

        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = [
          {
            head: 'ADULT',
            note: null,
            points: [
              {
                subhead: '<strong>Ensure above is completed</strong>',
              },
            ],
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            note: 'NOTE: Pediatric weight based dosing should not exceed Adult dosing',
            points: [
              {
                subhead: 'Ensure above is completed',
              },
            ],
          },
        ];

        this.keyPoints = null;

        this.contact = null;

        this.images = null;

        break;

      case '3':
        this.name =
          'Protocol 03: DEATH DETERMINATION AND TERMINATION OF RESUSCITATION';

        this.providerPoints = [];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: '●	EMS may withhold initiation of resuscitation when:',
                subpoints: [
                  'o	Bodily injury or condition incompatible with life such as:',
                  '▪	Obvious death, decomposition, and/or rigor mortis',
                  '▪	Obvious fatal wounds without signs of life',
                  '▪	Dependent lividity',
                  '▪	OLMC should be consulted for any difficult or questionable case',
                  'o	Any adult patient who is apneic, pulseless, and has an initial rhythm of asystole who also:',
                  '▪	Had an unwitnessed arrest AND an estimated time interval of greater than 15 minutes from collapse to the initiation of CPR',
                  '▪	Could not have resuscitation started within 15 minutes of arrest due to scene difficulties such as extrication, location, or unsafe environment',
                  '▪	Is a patient in a multi-victim incident where insufficient resources preclude initiating resuscitative measures',
                  '▪	Is a drowning victim with a reasonably determined submersion time of greater than one (1) hour prior to exam',
                  '▪	Experienced a traumatic arrest AND all signs of life are absent, including pupillary reflexes, spontaneous movement, response to pain, spontaneous respirations, or organized electrical activity on the cardiac monitor',
                  '▪	OLMC should be consulted for any difficult or questionable case',
                  'o	Written or verbal orders that request no resuscitation:',
                  '▪	A verbal order by a licensed physician in the State of Utah who is present on scene pronouncing the patient dead',
                  '▪	A verbal order by the OLMC physician',
                  '▪	A Do Not Resuscitate (DNR) written order, bracelet, or necklace from any U.S. state.',
                  '▪	A signed Physician/Provider Order for Life-Sustaining Treatment (POLST) form from any U.S. state indicating that the patient does not desire resuscitative efforts',
                  '▪	If able a copy of the DNR or POLST should be uploaded into the Patient Care Report.',
                  '▪	Immediate family member(s) request honoring the patient’s wishes to NOT start CPR, AND has had a known chronic or terminal illness, WITH the general agreement of all relatives present AND EMS personnel on scene AND if needed with concurrence of OLMC. If EMS is uncomfortable with the request, then resuscitative efforts should be started',
                  '▪	OLMC should be consulted for any difficult or questionable case',
                ],
              },
              {
                head: '●	Termination of CPR may be done in the following circumstances with the concurrence of OLMC',
                subpoints: [
                  'o	A valid DNR or POLST form is discovered after resuscitative efforts were initiated',
                  'o	Resuscitative efforts were initiated when criteria to not resuscitate were present (as above)',
                  'o	A verbal order pronouncing the patient dead by a licensed physician in the state of Utah who arrives on scene',
                  'o	Order by the OLMC physician',
                  'o	Adult cardiac arrest - resuscitation attempts may be terminated if the patient is in asystole after 20 minutes of ACLS on scene if ALL of the following criteria are met:',
                  '▪	Arrest was not witnessed by EMS personnel',
                  '▪	No shockable rhythm was identified at any time during the resuscitation',
                  '▪	No ROSC occurred at any time during the resuscitation',
                ],
              },
              {
                head: '●	Special Considerations for Resuscitation',
                subpoints: [
                  'o	All traumatic and non-traumatic pediatric arrests should be transported to the hospital after 15 minutes of on-scene resuscitation with resuscitative efforts carried out en-route, unless it is an obvious death on scene',
                  'o	Arrests not due to cardiac cause or trauma. The following situations require hospital transport and/or prolonged resuscitation attempts:',
                  '▪	Hypothermia',
                  '▪	Pediatrics',
                  '▪	Active Internal Bleeding',
                  '▪	Drug/toxin overdose',
                  '▪	Drowning',
                  '▪	Electrocution or Lightning Strike',
                  'o	Dangerous, violent or otherwise unsafe or difficult scene situation.  EMS personnel safety and patient respect are of the utmost importance. Assessing the scene to insure a safe and secure environment to continue resuscitation is important. If any concerns about scene safety or personnel security, the patient should be promptly loaded and transported to the hospital.',
                  'o	Pregnant mother >25 weeks pregnant.  Initiate early hospital transport for possible advanced care and possible delivery of the baby',
                ],
              },
              {
                head: '●	Following determination of obvious death or termination of resuscitative efforts:',
                subpoints: [
                  'o	Call dispatch to reduce any responding transport(s) to non-emergent',
                  'o	Document time of death and circumstances according to system and agency guidelines',
                  'o	Turn the body over to the appropriate law enforcement agency',
                  'o	Evaluate for, document, and report any indication of non-accidental trauma per Protocol #36 Non-Accidental Trauma/Abuse',
                  'o	Contact the closes patient receiving facility and make them aware of the actions taken, declare a time of death and explain the disposition of the patient',
                ],
              },
            ],
          },
        ];

        this.emtMainPoints = [];

        this.aemtMainPoints = [];

        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = [];

        this.keyPoints = [
          'There will always be patients and circumstances that deserve special consideration (pediatric drowning or pregnant patients for instance).  OLMC should be consulted if there are ever any questions.  Always be sensitive to the patient’s desires, family concerns, and on-scene environment to ensure an understanding by all who observe your actions that everything that could and should have been done to resuscitate the patient was done',
          'All unattended deaths or instances where resuscitation would be futile shall require OLMC consult prior to leaving the scene. The OLMC facility and MD shall be noted on the PCR',
        ];

        this.contact = null;

        this.images = null;

        break;

      case '4':
        this.name = 'Protocol 04: FAMILY CENTERED CARE';

        this.providerPoints = [
          {
            head: '❑	Family Centered Care is a mutually collaborative health care effort between family, patient and provider and has proven to be the gold standard in dealing with the pediatric patient and their families.',
          },
          {
            head: '❑	Demonstration of Family Centered Care is by one’s actions and behaviors when caring for patients.',
          },
        ];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: '●	Family centered care is demonstrated in practice, not just policy development',
                subpoints: [
                  'o	Collaboration with Families: Empower the patient and the family by involving them in the care as well as the decision-making process.',
                  'o	Cultural Competency: Respect, sensitivity, and an understanding of the unique cultural and religious differences.',
                  '▪	Be aware of any language barriers.',
                  '▪	If at all possible, engage an interpreter that is able to understand some of the emotional issues as well as medical terminology associated with the patient.',
                  '▪	An understanding of the hierarchy of the family is key to a positive outcome.',
                  'o	Developmental Competency: Use appropriate language for the age.',
                  '▪	When in pain or hurt children often regress to childhood issues or more infantile responses. They may still need attachment items late in life.',
                  '▪	Describe what you will be doing.',
                  '▪	Use eye contact and touch when appropriate.',
                  '▪	Be respectful at all times.',
                ],
              },
              {
                head: '●	Infants:  General calming measures (Soft voices, gentle pats, pacifiers or rocking), allowing parents to stay close and bonded with the child and help them to anticipate the situation if possible.',
              },
              {
                head: '●	Toddlers:  Use toys, teddy bear, blanket, etc. for comfort.  Parents or family members are often a great source of comfort and nurturing, so allow them to be present.',
              },
              {
                head: '●	School Age: Attachment objects, honesty about procedures, and imaginary/magical (e.g. “I made the car crash,” “I told a lie, and this is why mom is hurt”) perspective of young children. Include the child in conversations about his/her treatment when possible.',
              },
              {
                head: '●	Adolescents: Physician and provider honesty is key as well as paying attention to pain. Help them to participate in their own care and take their views seriously. Focus on giving them some sense of control.  Pain management is important. Adolescents as well as adults are afraid of pain. The anticipation of pain can be worse that the pain itself.  Some transitional objects/toys/stuffed animals can also be useful.  Respect their privacy and modesty as much as possible.  Allow them to discuss what is happening both with and without caregivers around.',
              },
            ],
          },
          {
            head: 'Key Considerations',
            subpoints: [
              '●	Family Centered Care = compassion',
              '●	Include family members in resuscitation and care decision making as they desire and are capable. If possible, designate a crew member to be a liaison to the family in order to facilitate communication and continuity.',
            ],
          },
        ];

        this.emtMainPoints = [];

        this.aemtMainPoints = [];

        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = [];

        this.keyPoints = [];

        this.contact = null;

        this.images = null;

        break;

      case '5':
        this.name = 'Protocol 05: NAUSEA / VOMITING';

        this.providerPoints = [
          {
            head: '❑	Focused history and physical exam',
            points: [
              '    ●	Blood glucose, temperature and oxygen saturation assessment',
            ],
          },
          {
            head: '❑	Continuous cardiac, ETCO2, blood pressure, and pulse oximetry monitoring, when available',
          },
        ];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: '●	Nothing by mouth (NPO)',
              },
              {
                head: '●	Place the patient in an upright or lateral recumbent position',
              },
              {
                head: '●	Obtain a 12 lead EKG, if available, for:',
                subpoints: [
                  'o	Greater than 40 years old',
                  'o	Associated with: chest or abdominal pain, shortness of breath, syncope, or weakness',
                ],
              },
              {
                head: '●	Pediatric lowest acceptable systolic blood pressures are birth to 1 month = 60mmHg, 1 month to 1 year = 70mmHg, 1 year to 10 years is = 70mmHg + (age x 2) and over 10 years = 90mmHg.',
              },
            ],
          },
        ];

        this.emtMainPoints = [];

        this.aemtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                subhead: '❑	Vascular access and fluid therapy',
              },
              {
                subhead:
                  '❑	Document level of consciousness before and after giving medication',
              },
              {
                subhead:
                  '❑	Ondansetron (Zofran) 4 mg IV/IM/PO. May repeat up to 8 mg with medical control approval in 5-10 minutes.',
              },
            ],
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            points: [
              {
                subhead: '❑	Advanced airway, vascular access and fluid therapy',
              },
              {
                subhead:
                  '❑	If evidence of poor perfusion, give NS 20 mL/kg IV max 1 L',
              },
              {
                subhead:
                  '❑	Consider chemical restraints per Protocol #30 Violent Patient/Chemical Restraint, as needed, to protect the patient and/or rescue personnel',
              },
              {
                subhead:
                  '❑	If patient is hypoglycemic, refer to hypoglycemia protocol',
              },
              {
                subhead: '❑	Naloxone (Narcan) 0.1 mg/kg IM/IN/IV Max 2mg',
              },
            ],
          },
        ];

        this.aemtPinkPoint =
          '❑	Promethazine (Phenergan) 12.5-25 mg IV titrated to effect if SBP>100 or peripheral pulse present';
        this.aemtPinkPointSub = [
          'o	Dilute with 5-10 mL of NS and administer over 30 seconds',
          'o	Avoid in elderly patients due to potential for sedation',
          'o	Should be given through AC or larger vessel due to extravasation risk',
          'o	Promethazine 25 mg IM, if no vascular access',
        ];

        this.paramedicMainPoints = [];

        this.keyPoints = [];

        this.contact = null;

        this.images = null;

        break;

      case '6':
        this.name = 'Protocol 06: PAIN & ANXIETY MANAGEMENT';

        this.providerPoints = [
          { head: '❑	Focused history and physical exam' },
          {
            head: '❑	Assess the patient’s pain using verbal and non-verbal cues and appropriate pain scale',
          },
          {
            head: '❑	Continuous cardiac, ETCO2, blood pressure, and pulse oximetry monitoring, when available',
          },
          {
            head: '❑	Implement appropriate treatment guidelines for the chief complaint.',
          },
        ];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: '●	Where applicable consider non-pharmaceutical/family centered comfort measures as indicated, refer to Protocol #4 Family Centered Care',
              },
              {
                head: '●	Immobilize any obvious injuries and place patient in a position of comfort',
              },
              {
                head: '●	Consider ice packs',
              },
              {
                head: '●	Implement pharmaceutical measures',
                subpoints: [
                  'o	Monitor patient vital signs every 5 minutes as this guideline is implemented',
                  'o	Have naloxone available in case of respiratory depression',
                  'o	Avoid or stop giving medications if SBP <100mmHg in adults, SBP <70 + (age in years x 2) mmHg for pediatrics, SaO2 < 90% without oxygen, or GCS <14',
                  'o	Stop pain medication dosing when the patient has adequate relief, pain score <5, adult SBP <100mmHg, peds SBP <70 + (age in years x 2) mmHg, SaO2<90% without oxygen, or GCS <14',
                  'o	If pain and anxiety are both present, attempt to treat pain fully with analgesics alone before using analgesics and sedatives concurrently',
                ],
              },
            ],
          },
          {
            head: 'Key Considerations',
            points: [
              {
                head: '●	Use Wong-Baker Faces scale for pain assessment in patients 3-8 years old',
              },
              {
                head: '●	A FLACC scale can be used to assess pain in infants',
              },
            ],
          },
        ];

        this.emtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                image: 'srcassetsprotocol-6.jpg',
              },
            ],
            table: [
              {
                col: ['Categorie', '', 'FLACC Scoring for Infants', ''],
              },
              {
                col: ['', '0', '1', '2'],
              },
              {
                col: [
                  'Face',
                  'No particular expression or smile	Occasional grimace or frown, withdrawn, disinterested',
                  'Frequent to constant frown, clenched jaw, quivering chin',
                ],
              },
              {
                col: [
                  'Legs',
                  'Normal position or relaxed',
                  'Uneasy, restless, tense',
                  'Kicking, or legs drawn up',
                ],
              },
              {
                col: [
                  'Activity',
                  'Lying quietly, normal position, moves easily',
                  'Squirming, shifting back and forth, tense',
                  'Arched, rigid, or jerking',
                ],
              },
              {
                col: [
                  'Cry',
                  'No cry (awake or asleep)',
                  'Moans or whimpers, occasional complaint',
                  'Crying steadily, screams or sobs, frequent complaints',
                ],
              },
              {
                col: [
                  'Consolability',
                  'Content, relaxed',
                  'Reassured by occasional touching, hugging or talking to, distractible',
                  'Difficult to console or comfort',
                ],
              },
            ],
          },
          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            note: 'NOTE: Pediatric weight based dosing should not exceed Adult dosing',
          },
        ];
        this.aemtMainPoints = [
          {
            head: 'ADULT',
            points: [
              {
                subhead: '❑	Vascular access and fluid therapy',
              },
              {
                subhead:
                  '❑	The order in which medications below are listed is not intended to indicate hierarchy, order, or preference of administration',
              },
              {
                subhead:
                  '❑	Dosages should be reduced by half when there is concern for drug or alcohol intoxication or elderly patient.',
              },
              {
                subhead:
                  '❑	Consider treating with antiemetic’s prior to pain management',
              },
              {
                subhead:
                  '❑	Maximize dosing of a single agent before using additional agents',
              },
              {
                subhead: 'Pain Control',
                subheadPoints: [
                  '❑	Fentanyl IV/IM 1-2 mcg/kg slowly. Expected single does: 25-50 mcg every 5-10 minutes. Max total dose of 200 mcg.',
                  '❑	Morphine Sulfate IV 2-4 mg every 10 minutes titrated to effect. Max 10 mg.',
                  '❑	Acetaminophen (Tylenol) 650-1000mg PO, single dose only',
                  '❑	Ibuprofen 600mg PO, single dose only',
                  '❑	Ketorolac (Toradol) 15mg IV, single dose only',
                ],
              },
              {
                subhead:
                  'Agitation/Anxiety Relief (intubated patient, behavioral emergencies):',
                subheadPoints: [
                  '❑	Midazolam (Versed)',
                  '•	IV – 2.5- 5 mg, may repeat once in 10 minutes, if needed. Total max dose: 10mg',
                  '•	Intranasal (IN) – 10 mg divided between nostrils (Use Atomizer).',
                  '•	Intramuscular (IM) – 5-10 mg once-',
                  '<br>',
                  '❑	Diazepam (Valium)',
                  '•	IV/IO – 5 mg every 10 min to the desired effect or max dosage of 20 mg',
                  '•	Intramuscular (IM) – 10 mg once (IM not preferred, unless no other options)',
                  '<br>',
                  '❑	Lorazepam (Ativan)',
                  '•	IV/IO – 2 mg every 5 min. to the desired effect or max dose of 4 mg',
                  '•	Intramuscular (IM) – 2 mg once',
                ],
              },
              {
                subhead:
                  'Acute non-traumatic muscle spasms and muscle spams associated with a long bone fracture:',
                subheadPoints: [
                  '❑	 Ativan 1 mg IV/IM/IO. May repeat after 5 minutes. Max 2 mg.',
                  '❑	Contact OLMC for dosages above those provided or use of medication NOT fitting the guideline parameters.',
                ],
              },
            ],
          },
          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            points: [
              {
                subhead: '❑	Vascular access and fluid therapy',
              },
              {
                subhead:
                  '❑	The order in which medications below are listed is not intended to indicate hierarchy, order, or preference of administration',
              },
              {
                subhead:
                  '❑	Dosages should be reduced by half when there is concern for drug or alcohol intoxication',
              },
              {
                subhead:
                  '❑	Consider treating with antiemetic’s prior to pain management',
              },
              {
                subhead:
                  '❑	Maximize dosing of a single agent before using additional agents',
              },
              {
                subhead: 'Pain Control',
                subheadPoints: [
                  '❑	Fentanyl IV/IM 0.5-1 mcg/kg slowly. Max 50 mcg.',
                  '❑	Fentanyl IN 2 mcg/kg. Max 100 mcg per. Half in each nostril.',
                  '❑	Morphine Sulfate IV/IM 0.1 mg/kg (max of 4mg per dose) titrated to effect',
                  '❑	For additional doses, contact OLMC',
                  '❑	Acetaminophen (Tylenol) 15mg/kg PO, single dose only. Max dose 650mg',
                  '❑	Ibuprofen 10mg/kg PO ONLY FOR USE in patients over the age of 6 months, single dose only. Max dose 600mg',
                  '❑	Ketorolac (Toradol) 0.5mg/kg IV (max 15mg), single dose only, ONLY FOR USE in patients over the age of 2.',
                ],
              },
              {
                subhead: 'Anxiety Control',
                subheadPoints: [
                  '❑	Midazolam (Versed)',
                  '•	IV/IO - 0.1 mg/kg (max 5 mg), may repeat once in 10 minutes, if needed. Total max dose: 10 mg',
                  '•	Intranasal (IN) - 0.2 mg/kg (max 5 mg), may repeat once in 10 minutes, if needed. Total max dose: 10 mg',
                  '•	Intramuscular (IM) – 0.2 mg/kg (max 10 mg) once',
                  '<br>',
                  '❑	Diazepam (Valium)',
                  '•	IV/IO - 0.1 mg/kg (max 5 mg), may repeat once in 10 minutes, if needed. Total max dose: 10 mg',
                  '•	Intramuscular (IM) – 0.2 mg/kg (max 10 mg) once (IM not preferred unless no other options) )',
                  '<br>',
                  '❑	Lorazepam (Ativan)',
                  '•	IV/IO – 0.05 mg/kg (max 2 mg), may repeat once in 10 minutes, if needed. Total max dose: 2 mg',
                  '•	Intramuscular (IM) – 0.05 mg/kg (max 2 mg) once',
                ],
              },
              {
                subhead: '',
                subheadPoints: [
                  '❑	Contact OLMC for dosages above those provided or use of medication NOT fitting the guideline parameters.',
                ],
              },
            ],
          },
        ];

        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = [
          {
            head: 'ADULT',
            note: null,
            points: [
              {
                subhead:
                  '<strong>❑	Ketamine </strong>30mg diluted in 100mL of normal saline IV/IO infused over 15 minutes OR until analgesia is attained',
              },
            ],
          },

          {
            head: 'PEDIATRIC (<15 YEARS OF AGE)',
            note: 'NOTE: Pediatric weight based dosing should not exceed Adult dosing',
            points: [
              {
                subhead:
                  '❑	Ketamine 0.15-0.3 mg/kg (max 30mg) diluted in 100mL of normal saline IV/IO infused over 15 minutes ONLY FOR USE in patients over the age of 2 years.',
              },
              {
                subhead:
                  '❑	May halt infusion if pain relief obtained before full dose administered. ',
              },
            ],
          },
        ];

        this.keyPoints = [
          'There will always be patients and circumstances that deserve special consideration (pediatric drowning or pregnant patients for instance).  OLMC should be consulted if there are ever any questions.  Always be sensitive to the patient’s desires, family concerns, and on-scene environment to ensure an understanding by all who observe your actions that everything that could and should have been done to resuscitate the patient was done',
          'All unattended deaths or instances where resuscitation would be futile shall require OLMC consult prior to leaving the scene. The OLMC facility and MD shall be noted on the PCR',
        ];

        this.contact = null;

        this.images = null;

        break;

      case '7':
        this.name = 'Protocol 07: PEDIATRIC ASSESSMENT';

        this.providerPoints = [
          {
            head: '❑	The pediatric assessment should be modified for the developmental level of each patient',
          },
          {
            head: '❑	Continuous cardiac, ETCO2, and pulse oximetry monitoring, when available',
          },
          { head: '❑	Obtain a blood glucose level when applicable' },
        ];

        this.providerMainPoints = [
          {
            head: 'Treatment Plan',
            points: [
              {
                head: '●	Use the Pediatric Assessment Triangle (defined by the AAP) to form a general impression',
                subpoints: [
                  'o	Appearance: Evaluate tone, interactiveness, consolability, gaze, and speech or cry',
                  'o	Breathing: Evaluate abnormal airway sounds, abnormal positioning, retractions, and nasal flaring.',
                  'o	Circulation/Skin Color: Evaluate for pallor, mottling, delayed capillary refill and cyanosis',
                ],
              },
              {
                head: '●	If the patient looks ill and has poor perfusion, start CPR when the heart rate is less than:',
                subpoints: [
                  'o	80bpm for infants (up to 1 year of age)',
                  'o	60bpm for children (1 year to 8 years)',
                ],
              },
              {
                head: '●	Look on scene for the CHIRP red bag.  It contains current medical information on the child with special healthcare needs',
              },
              {
                head: '●	Perform the pediatric assessment with guidance from the Family Centered Care Guideline.',
              },
              {
                head: '●	Pay careful attention to the wide variety of normal vital signs.  Do not assume that the pediatric patient is fine when they have vitals meeting the normal adult parameters.',
              },
              {
                table: [
                  {
                    col: [
                      'Age of Patient',
                      'HR',
                      '',
                      'RR',
                      '',
                      'Systolic BP',
                      'Temp',
                      '',
                    ],
                  },
                  {
                    col: [
                      '0 days - < 1 mo.',
                      '<80',
                      '>205',
                      '<30',
                      '>60',
                      '<60',
                      '<36',
                      '>38',
                    ],
                  },
                  {
                    col: [
                      '> 1mo - < 3 mo.	',
                      '<80',
                      '>205',
                      '<30',
                      '>60',
                      '<70',
                      '<36',
                      '>38',
                    ],
                  },
                  {
                    col: [
                      '> 3 mo. - < 1 yr.',
                      '<75',
                      '>190',
                      '<30',
                      '>60',
                      '<70',
                      '<36',
                      '>38.5',
                    ],
                  },
                  {
                    col: [
                      '> 1 yr. - < 2 yrs.',
                      '<75',
                      '>190',
                      '<24',
                      '>40',
                      '<70+(age x 2)',
                      '<36',
                      '>38.5',
                    ],
                  },
                  {
                    col: [
                      '> 2 yrs. - < 4 yrs.',
                      '<60',
                      '>140',
                      '<24',
                      '>40',
                      '<70+(age x 2)',
                      '	<36',
                      '>38.5',
                    ],
                  },
                  {
                    col: [
                      '> 4 yrs. - < 6 yrs.',
                      '<60',
                      '>140',
                      '<22',
                      '>34',
                      '<70+(age x 2)',
                      '	<36',
                      '>38.5',
                    ],
                  },
                  {
                    col: [
                      '> 6 yrs. - < 10 years',
                      '<60',
                      '>140',
                      '<18',
                      '>30',
                      '<70+(age x 2)',
                      '	<36',
                      '>38.5',
                    ],
                  },
                  {
                    col: [
                      '> 10 years - < 13 years',
                      '<60',
                      '>100',
                      '<18',
                      '>30',
                      '<90',
                      '<36',
                      '>38.5',
                    ],
                  },
                  {
                    col: [
                      '> 13 years - < 18 years',
                      '<60',
                      '>100',
                      '<12',
                      '>16',
                      '<90',
                      '<36',
                      '>38.5',
                    ],
                  },
                ],
              },
            ],
          },
          {
            head: 'Key Considerations',
            points: [
              {
                head: '●	Obtaining a full set of vital signs, including blood pressure, should be a priority.',
              },
              {
                head: '●	Parents are often the best resource for a baseline understanding of their child, especially in the case of the child with special healthcare needs.',
              },
            ],
          },
        ];

        this.emtMainPoints = [];
        this.aemtMainPoints = [];

        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = [];

        this.keyPoints = [];

        this.contact = null;

        this.images = null;

        break;

      case '4':
        this.name = 'Protocol 02: ALTERED MENTAL STATUS';

        this.providerPoints = [''];
        this.providerMainPoints = [''];

        this.emtMainPoints = [''];

        this.aemtMainPoints = [''];
        this.aemtPinkPoint = '';
        this.aemtPinkPointSub = [''];

        this.paramedicMainPoints = [''];

        this.keyPoints = [''];

        this.contact = [''];

        this.images = [''];

        break;

      case '5':
        this.name =
          'Protocol 03: DEATH DETERMINATION AND TERMINATION OF RESUSCITATION';

        this.providerPoints = [''];
        this.providerMainPoints = [''];

        this.emtMainPoints = [''];

        this.aemtMainPoints = [''];
        this.aemtPinkPoint = '';
        this.aemtPinkPointSub = [''];

        this.paramedicMainPoints = [''];

        this.keyPoints = [''];

        this.contact = [''];

        this.images = [''];

        break;

      default:
        this.name = null;
        this.providerPoints = null;
        this.providerMainPoints = null;

        this.emtMainPoints = null;

        this.aemtMainPoints = null;
        this.aemtPinkPoint = null;
        this.aemtPinkPointSub = null;

        this.paramedicMainPoints = null;

        this.keyPoints = null;

        this.contact = null;

        this.images = null;

        break;
    }
  }
}
