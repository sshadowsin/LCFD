/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrugsContentService {
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
  refrenceProtocol: any[];

  constructor() {}

  getContent(level) {
    switch (level) {
      case '0': {
        this.name = 'Acetaminophen (Tylenol)';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
          {
            name: 'Protocol 18: FEVER MANAGEMENT',
            link: 'inside/tabs/protocols-content/18',
          },
        ];
        this.action =
          'An analgesic/antipyretic that has weak anti-inflammatory activity and no effects on platelets or bleeding time.  Acetaminophen acts both centrally and peripherally via multiple enzymatic processes. The most significant appears to be peroxidase inhibition which yields COX-2 inhibitor-like effects';
        this.indication = 'Fever. Minor pain.';
        this.contradiction =
          'Known liver disease (relative). Hypersensitivity.';
        this.precaution = 'Do not administer if used in the last 4 hours.';
        this.effect = 'Gastric irritation (rare)';
        this.dose = [
          '<strong>Adult:</strong> PO/Rectal 650-1000mg',
          '<strong>Pediatric:</strong> 15mg/kg PO/Rectal; Max 650 mg',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }
      case '1': {
        this.name = 'Adenosine (Adenocard)';
        this.action =
          'A naturally occurring nucleotide that acts on the AC node to slow conduction and inhibit reentry pathways. Useful in PSVT. Rapidly metabolized—Half-life is <5 seconds';
        this.indication =
          'To convert acute PSVT to normal sinus rhythm. Diagnostic agent for distinguishing supraventricular from ventricular tachycardia, as well as broad QRS complex tachycardia’s. ';
        this.contradiction =
          'Patients with hypersensitivity to the drug. Those in second or third degree heart block, sick sinus syndrome, or symptomatic bradycardia. Unstable patients with SVT are treated with synchronized cardioversion. ';
        this.precaution =
          'Could produce bronchoconstriction in-patients with asthma. Patients who develop high level heart block after a single dose should not receive additional doses. Use with caution in-patients receiving digoxin and verapamil in combination. Therapeutic levels of theophylline and methylxanthines affect the response of adenosine Dipyridamole potentiates its effect.';
        this.effect =
          'Chest pain, PVC’s, dizziness, dyspnea and or shortness of breath, facial flushing, headache, lightheadedness, blurred vision, nausea, metallic taste, and numbness. More serious symptoms are persistent arrhythmias, bronchospasm, and hypotension.';
        this.dose = [
          'Rapid bolus over 1-3 seconds. The dose should be followed quickly by a 20 ml saline flush',
          '●	<strong>Adult:</strong> The initial dose is 6-mg. rapid bolus over 1-3 seconds.',
          '●	The dose should be followed quickly by a 20-ml saline flush. Then elevate the extremity',
          '●	Repeat 12mg. in 1-2 minutes if needed. ',
          '●	<strong>Pediatric:</strong> Initial- 0.1 mg/kg (Max 6mg), if not effective- 0.2 mg/kg (Max 12mg) ',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        this.refrenceProtocol = [
          {
            name: 'Protocol 15: TACHYCARDIA (With a Pulse)',
            link: 'inside/tabs/protocols-content/15',
          },
        ];
        break;
      }

      case '2': {
        this.name = 'Albuterol (Ventolin/Proair/Proventil) ';
        this.action =
          'Relaxes bronchial, uterine, and vascular smooth muscle by stimulating beta2-adrenergic receptors.';
        this.indication =
          'For the relief of bronchospasm in patients two years of age and older with reversible obstructive airway disease and acute attacks of bronchospasm. Not for use in croup.  High-risk preterm labor when delivery is imminent with medical control consulted. ';
        this.contradiction = 'Hypersensitivity to the drug.';
        this.precaution =
          'Used with caution in patients with cardiovascular disorders, especially coronary insufficiency, cardiac arrhythmias and hypertension. MAO inhibitors, tricyclic antidepressants, may potentiate action on the CV system. Propranolol, and other beta blockers inhibit the effect of albuterol.';
        this.effect =
          'Tachycardia, hypertension, bronchospasm, bronchitis, nasal congestion, tremors, dizziness, nervousness, headache, and sleeplessness. ';
        this.consideration = [
          '⮚	Consult OLMC if baseline heart rate > 100 and increases more than 20 BPM.',
          '⮚	Consult OLMC if systolic blood pressure Systolic BP > 180 or Diastolic BP > 100.',
          '⮚	Monitor vital signs before and after treatment.',
        ];
        this.dose = [
          '●	Adult and pediatric: 2.5 mg nebulized every 10-20 minutes as needed, (Max total= 7.5 mg or 3 nebs) ',
          '●	Nebulized solution will usually be delivered over approximately 5 to 15 minutes depending on flow rate.',
        ];
        this.note = null;
        this.htm = null;
        this.refrenceProtocol = [
          {
            name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS',
            link: 'inside/tabs/protocols-content/16',
          },
          {
            name: 'Protocol 17 : DROWNING OR SUBMERSION',
            link: 'inside/tabs/protocols-content/17',
          },
          {
            name: 'Protocol 20: OBSTETRICAL EMERGENCIES',
            link: 'inside/tabs/protocols-content/20',
          },
          {
            name: 'Protocol 22: RESPIRATORY DISTRESS',
            link: 'inside/tabs/protocols-content/22',
          },
        ];
        break;
      }

      case '3': {
        this.name = 'Amiodarone Hydrochloride (Cordarone) ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 09: CARDIAC ARREST',
            link: 'inside/tabs/protocols-content/9',
          },
          {
            name: 'Protocol 15: TACHYCARDIA (With a Pulse)',
            link: 'inside/tabs/protocols-content/15',
          },
        ];
        this.action =
          'Blocks sodium channels at rapid pacing frequencies, causing an increase in the duration of the myocardial cell action potential and refractory period, as well as alpha- and beta-adrenergic blockade. The drug decreases sinus rate increases PR and QT intervals, results in development of U waves, and changes T-wave contour. After IV use, amiodarone relaxes vascular smooth muscle, reduces peripheral vascular resistance (afterload), and increases cardiac index slightly. ';
        this.indication =
          'Antiarrhythmics are indicated for shockable rhythms that are unresponsive to defibrillation and are recommended after defibrillation and epinephrine in cardiac arrest with ventricular fibrillation and pulseless ventricular tachycardia. ';
        this.contradiction =
          'Marked sinus bradycardia due to severe sinus node dysfunction, second- or third-degree AV block, syncope caused by bradycardia (except when used with a pacemaker). Cardiogenic shock. Lactation.  ';
        this.precaution =
          'May produce vasodilation and hypotension. May have negative inotropic effects. May prolong QT interval. Do not routinely use with other drugs that prolong QT interval. Use with caution if renal failure is present';
        this.effect =
          'Cough and progressive dyspnea. Worsening of arrhythmias, symptomatic bradycardia, sinus arrest, SA node dysfunction, CHF edema, hypotension, cardiac conduction abnormalities, cardiac arrest, abnormal involuntary movements, headache, N&V, abdominal pain, flushing, and shock.  ';
        this.consideration = [
          '⮚	DO NOT ALTERNATE WITH LIDOCAINE- CAN CAUSE ASYSTOLE ',
          '⮚	Follow administration with a fluid bolus to enhance distribution',
          '⮚	Elevate the extremity to facilitate drug delivery.',
        ];
        this.dose = [
          'Adult Dose-Cardiac Arrest:',
          '●	300mg IV push.',
          '●	Consider repeating 150 mg IV push in 3-5 minutes.',
          '●	Wide complex tachycardia (stable): 150 mg rapid infusion IV (15 mg/min) over the first 10 minutes. May repeat 150 mg rapid infusion IV every 10 minutes as needed.',
          '●	Pediatric:  IV/IO: 5 mg/kg (maximum: 300 mg/dose) rapid bolus; may repeat twice up to a maximum total dose of 15 mg/kg (total max 450 mg)',
        ];
        this.note = null;
        this.htm = null;
        break;
      }

      case '4': {
        this.name = 'Aspirin (Ecotrin)  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
            link: 'inside/tabs/protocols-content/11',
          },
        ];
        this.action =
          'Irreversibly inhibits cyclooxygenase-1 and 2 (COX-1 and 2) enzymes, via acetylation, which results in decreased formation of prostaglandin precursors; irreversibly inhibits formation of prostaglandin derivative, thromboxane A2, via acetylation of platelet cyclooxygenase, thus inhibiting platelet aggregation; analgesic, and anti-inflammatory properties';
        this.indication = 'Cardiac chest pain patients fitting criteria ';
        this.contradiction =
          'Hypersensitivity to NSAIDs; patients with asthma, rhinitis, and nasal polyps; NOT FOR USE in children or teenagers for viral infections, with or without fever';
        this.precaution =
          'Documentation of allergenic cross-reactivity for salicylates is limited. However, because of similarities in chemical structure and/or pharmacologic actions, the possibility of cross-sensitivity cannot be ruled out with certainty.';
        this.effect =
          'Bleeding gums, signs of GI bleeding, and petechiae. Aspirin will increase bleeding time. ';
        this.dose = [
          '●	Adult: 162 mg-325 mg oral- chewed once (chewable tabs preferred) ',
          '●	Pediatric: Do not use unless ordered by OLMC',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '5': {
        this.name = 'Atropine';
        this.refrenceProtocol = [
          {
            name: 'Protocol 10: BRADYCARDIA (Symptomatic)',
            link: 'inside/tabs/protocols-content/10',
          },
          {
            name: 'Protocol 29: TOXIC EXPOSURE - ORGANOPHOSPHATES / NERVE AGENTS',
            link: 'inside/tabs/protocols-content/29',
          },
        ];
        this.action =
          'Anticholinergic that inhibits acetylcholine at the parasympathetic neuroeffector junction, blocking vagal effects on the SA and AV nodes; this enhances conduction through the AV node and speeds heart rate, increases heart contractility, improves automaticity, and dilates peripheral vessels which increases cardiac output. Atropine dries secretions by reversing the muscarinic effects of cholinergic poisoning due to agents with acetylcholinesterase inhibitor activity by acting as a competitive antagonist of acetylcholine at muscarinic receptors. The primary goal in cholinergic poisonings is reversal of bronchorrhea and bronchoconstriction. Atropine has no effect on the nicotinic receptors responsible for muscle weakness, fasciculations, and paralysis.';
        this.indication =
          'Treatment of symptomatic sinus bradycardia, second and third degree heart block, or ventricular asystole.  Antidote in organophosphate poisoning.';
        this.contradiction =
          'Hypersensitivity to the drug, unstable cardiovascular status, myocardial ischemia, glaucoma, and COPD  Hypothermic Bradycardia';
        this.precaution =
          'Use with caution in presence of myocardial ischemia and hypoxia. Avoid in hypothermic bradycardia. Usually not effective in second degree block type II and third degree blocks with wide QRS complexes. Antacids decrease absorption of med.';
        this.effect =
          'Postural hypotension, Blurred vision, dryness of the mouth, GI reflux, nausea, vomiting, tachyarrhythmias, and urinary retention. May also cause ventricular tachycardia or ventricular fibrillation.  ';
        this.dose = [
          'Dose Symptomatic Bradycardia:',
          '●	Adult: 0.5mg IV/IO every three to five minutes as needed, up to a total of 3mg. ',
          '●	Pediatric: 0.02 mg/kg IV/IO up to 0.5 mg for child or 1mg for adolescent (minimum dose 0.1mg). May be repeated once in 5 minutes',
          'Dose Organophosphate Poisonings:',
          'Atropine sulfate 2 mg rapid IV (preferred) or IM repeated every 10 minutes until you have:',
          '●	Control of bronchorrhea (excessive watery sputum)',
          '●	Control of bronchoconstriction, (as reflected by level of oxygenation and ease of ventilation) ',
          '●	Reversed dangerous bradyarrhythmia’s or AV-blocks',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '6': {
        this.name = 'Calcium Chloride/ Calcium Gluconate ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 09: CARDIAC ARREST',
            link: 'inside/tabs/protocols-content/9',
          },
          {
            name: 'Protocol 28: TOXIC EXPOSURE - HYDROFLUORIC ACID',
            link: 'inside/tabs/protocols-content/28',
          },
        ];
        this.action =
          'Electrolyte. Calcium is a positively charged ion involved in multiple physiologic functions. Calcium is required for muscle contraction, nerve impulse transmission, hormone secretion, blood coagulation, cell division, cell motility and wound healing. In vascular smooth muscle, calcium is involved in the maintenance of vascular tone. Calcium is also required for cardiac muscle contraction. The entry of calcium into cardiac cells during depolarization triggers additional intracellular calcium release from the sarcoplasmic reticulum, leading to myocardial contraction. The cardiac pacemaker cells of the SA and AV nodes depend on an inward calcium current for depolarization. Calcium antagonizes the effects of both potassium and magnesium at the cell membrane. In hyperkalemia, calcium antagonizes cardiac membrane excitability. It has no effect on the serum potassium level. The effect of cardiac membrane stabilization is temporary (20-40 min) and some patients may require a repeat dose.  ';
        this.indication =
          'Hyperkalemia.  Hydrofluoric acid (HF) exposure.  Calcium channel blocker toxicity.  Beta blocker toxicity.  Cardiac Arrest with presumed hyperkalemic cause (i.e. dialysis patient overdue for dialysis).  Hypermagnesemia. ';
        this.contradiction = ' Known hypersensitivity.  Digitalis toxicity ';
        this.precaution =
          'Calcium chloride contains three times more elemental calcium than calcium gluconate (1 gm of calcium chloride is equivalent to 3 gm of calcium gluconate). Administer slowly if not in cardiac arrest.  **Calcium chloride and calcium gluconate are two commonly used parenteral formations of calcium. In the EMS setting, the two preparations may be used interchangeably, but it should be noted that calcium chloride contains three times more elemental calcium than does calcium gluconate (1 gm of calcium chloride is equivalent to 3 gm of calcium gluconate).  Calcium chloride has greater bioavailability but is more likely to cause tissue damage if extravasation occurs.  Ideally use AC or larger vessel. Sodium bicarbonate and calcium preparations are not compatible and should be given through separate IV lines if possible. If they must be administered via the same IV line, the line should be flushed in between the administration of each.  ';
        this.effect =
          ' Bradycardia. Ventricular fibrillation. Extravasation necrosis. Abdominal pain. Nausea/vomiting. ';
        this.dose = [
          '●	Adult: ',
          'o	Calcium Chloride: 1 gm SLOW PUSH IV/IO. May repeat once after 5 min.  ',
          'o	Calcium Gluconate: 3 gm SLOW PUSH IV/IO.  May repeat once after 5 min.',
          '●	Pediatric: ',
          'Atropine sulfate 2 mg rapid IV (preferred) or IM repeated every 10 minutes until you have:',
          'o	Calcium Chloride: 20mg/kg (max 1 gm/dose) SLOW PUSH IV/IO. May      repeat once after 10 minutes',
          'o	Calcium Gluconate: 100 mg/kg IV/IO (max 3 grams/dose). May repeat once after 10 min.',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '8': {
        this.name = 'Diphenhydramine (Benadryl)  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS',
            link: 'inside/tabs/protocols-content/16',
          },
        ];
        this.action =
          'Competes with histamine for H1-receptor sites on effector cells. Prevents, but does not reverse, histamine-mediated responses. It also has anticholinergic (antispasmodic), antiemetic, and sedative effects. It has a rapid onset and is widely distributed throughout the body. ';
        this.indication =
          'Supplemental therapy to epinephrine in anaphylaxis and other uncomplicated allergic reactions requiring prompt treatment.';
        this.contradiction =
          'Hypersensitivity to the drug, during acute asthmatic attacks, in newborns, premature neonates, or breastfeeding women. Avoid use in patients taking MAO inhibitors. Also, patients with glaucoma, peptic ulcer, and COPD ';
        this.precaution =
          'Use with extreme caution in patients with asthma or COPD, increased intraocular pressure, hyperthyroidism, CV disease, hypertension. Drug and alcohol use cause increased CNS depression';
        this.effect =
          'Palpitations, hypotension, tachycardia, confusion, decreased level of consciousness, insomnia, headache, vertigo, restlessness, tremor, seizures, blurred vision, nausea and vomiting, thickened bronchial secretions, and anaphylactic shock ';
        this.dose = [
          '●	Adult: 25-50mg IV/IO/IM once  ',
          '●	Pediatric: 1 mg/kg IM/IV/PO (Max 50mg) ',
          '●	Children may be more prone to paradoxical responses than adults',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '9': {
        this.name = 'Dextrose  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 13: NEWBORN RESUSCITATION',
            link: 'inside/tabs/protocols-content/13',
          },
          {
            name: 'Protocol 19: GLUCOSE EMERGENCIES',
            link: 'inside/tabs/protocols-content/19',
          },
        ];
        this.action =
          'Dextrose provides calories and increases blood glucose concentrations.  ';
        this.indication =
          'Diabetics who are unable to take oral fluids due to altered level of consciousness and low blood glucose. ';
        this.contradiction =
          'Hypersensitivity to dextrose, corn or corn products, or any component of the formulation; hypertonic solutions in patients with intracranial or intraspinal hemorrhage, diabetic coma, or delirium tremens, especially if dehydrated; severe dehydration; glucose-galactose malabsorption syndrome';
        this.precaution =
          'Use with caution in patients with cardiac or pulmonary disease, hypertension, renal insufficiency, urinary obstruction, or hypovolemia. Avoid extravasation may cause tissue sloughing, necrosis, and phlebitis.';
        this.effect =
          'Pulmonary edema, exacerbated hypertension, heart failure, Hyperglycemia, (during infusion), hyperosmolar syndrome (mental confusion, loss of consciousness), hypokalemia, reactive hypoglycemia (after infusion). ';
        this.dose = [
          '●	Adult: One prefilled syringe of D50W- 50mL (25 gm) IV—may repeat as appropriate  ',
          '●	Pediatric: ',
          'o	D10W 5 ml/kg (0.5 gm/kg) IV- Max 12.5 gm (125 ml) [Preferred for everyone] ',
          'o	D25W 2ml/kg (0.5 gm/kg) IV (only for >1year old) Max 12.5gm(50mL)',
        ];
        this.consideration = null;
        this.htm = null;
        this.note = null;
        break;
      }

      case '10': {
        this.name = 'Epinephrine (Adrenaline)  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 09: CARDIAC ARREST',
            link: 'inside/tabs/protocols-content/9',
          },
          {
            name: 'Protocol 10: BRADYCARDIA (Symptomatic)',
            link: 'inside/tabs/protocols-content/10',
          },
          {
            name: 'Protocol 13: NEWBORN RESUSCITATION',
            link: 'inside/tabs/protocols-content/13',
          },
          {
            name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS',
            link: 'inside/tabs/protocols-content/16',
          },
          {
            name: 'Protocol 22: RESPIRATORY DISTRESS',
            link: 'inside/tabs/protocols-content/22',
          },
        ];
        this.action =
          'Stimulates alpha and beta-adrenergic receptors within the sympathetic nervous system. A potent cardiac stimulant, it strengthens the myocardial contraction (positive inotropic effect) and increases cardiac rate (positive chronotropic effect). Increases myocardial and cerebral blood flow during CPR. ';
        this.indication =
          'Cardiac arrest: VF, pulseless VT, asystole, pulseless electrical activity. Anaphylaxis, severe allergic reactions, and profound bradycardia or hypotension after other drugs tried may be used as a gtt';
        this.contradiction =
          'None when used in a life-threatening situation <br> Patients with angle-closure glaucoma, shock (other than anaphylactic shock), organic brain damage, cardiac dilation, coronary insufficiency, cerebral arteriosclerosis or labor and delivery. Do not use to treat overdose of adrenergic blocking agents.';
        this.precaution =
          'High doses do not improve survival or neurologic outcome and may contribute to post-resuscitation myocardial dysfunction. Raising blood pressure and increasing heart rate may cause myocardial ischemia, angina and increased myocardial oxygen demand. Higher doses may be required to treat poison/drug-induced shock. The effects of the drug may be potentiated by tricyclic antidepressants.';
        this.effect =
          'Nervousness, tremor, headache, agitation, dizziness, weakness, cerebral hemorrhage, palpitations, hypertension, tachycardia, anginal pain, nausea and vomiting, and dyspnea.  ';
        this.dose = [
          'Dose Symptomatic Bradycardia:',
          '●	Adult: Cardiac Arrest Epinephrine 1mg (10ml of 1:10,000) every 3-5 min as long as the patient remains pulseless. Unless a clear response to epinephrine is observed, consider a limit of 3 total doses.  ',
          'o	For WHEEZING(Asthma): Epinephrine 0.3-0.5 mg IM every 20 minutes as needed for acute severe asthma unresponsive to multiple doses of inhaled beta-agonists',
          'o	For STRIDOR(Croup): Epinephrine 2mg (1 mg/mL; Epi 1:1000 dilution) mixed with 3mL of normal saline nebulized',
          'o	Anaphylaxis: 0.3-0.5 mg (1mg/mL; Epi 1:1000 dilution) IM every 10 minutes as needed ',
          '●	Pediatric: Cardiac arrest- Epinephrine 0.01 mg/kg (0.1 ml/kg of 0.1mg/mL; 1:10,000) push (Max dose= 1 mg or 10 mL) every 3-5 min as long as the patient remains pulseless. Unless a clear response to epinephrine is observed, consider a limit of 3 total doses.',
          'o	For WHEEZING: Epinephrine IM 0.01 mg/kg every 20 minutes as needed for Acute severe asthma unresponsive to inhaled beta-agonist  ',
          'o	For STRIDOR: Epinephrine 2mg (2mL of 1 mg/mL; 1:1000) added to 3mL of Normal Saline via nebulizer.',
          'o	 For Anaphylaxis: 0.01 mg/kg (0.01 mL/kg of 1 mg/mL; 1:1000) IM up to 0.3 mg if the patient was exposed to a commonly recognized allergen and has respiratory distress or hypotension.',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }
      case '12': {
        this.name = 'Epinephrine – “Push Dose” Pressor Administration';
        this.refrenceProtocol = [
          {
            name: 'Protocol 08: SHOCK, SEPSIS, & FLUID THERAPY',
            link: 'inside/tabs/protocols-content/8',
          },
          {
            name: 'Protocol 10: BRADYCARDIA (Symptomatic)',
            link: 'inside/tabs/protocols-content/10',
          },
          {
            name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
            link: 'inside/tabs/protocols-content/12',
          },
          {
            name: 'Protocol 17 : DROWNING OR SUBMERSION',
            link: 'inside/tabs/protocols-content/17',
          },
          {
            name: 'Protocol 21: OPIOID OVERDOSE',
            link: 'inside/tabs/protocols-content/21',
          },
          {
            name: 'Protocol 26: TOXIC EXPOSURE - CARBON MONOXIDE',
            link: 'inside/tabs/protocols-content/26',
          },
          {
            name: 'Protocol 27: TOXIC EXPOSURE – CYANIDE',
            link: 'inside/tabs/protocols-content/27',
          },
          {
            name: 'Protocol 34: HEAD INJURY (TRAUMATIC BRAIN INJURY)',
            link: 'inside/tabs/protocols-content/34',
          },
          {
            name: 'Protocol 37: SNAKE BITES',
            link: 'inside/tabs/protocols-content/37',
          },
        ];
        this.action =
          'Stimulates alpha and beta-adrenergic receptors within the sympathetic nervous system. A potent cardiac stimulant, it strengthens the myocardial contraction (positive inotropic effect) and increases cardiac rate (positive chronotropic effect). ';
        this.indication =
          'Immediate/temporizing treatment of hypotension, not due to hypovolemia, while preparing IV pressor’s.';
        this.contradiction =
          'None when used in a life-threatening situation. Patients with angle-closure glaucoma, shock (other than anaphylactic shock), organic brain damage, cardiac dilation, coronary insufficiency, cerebral arteriosclerosis or labor and delivery. Do not use to treat overdose of adrenergic blocking agents. ';
        this.precaution =
          'If patients condition continues to worsen (decreasing mental status, increasing breathing difficulty, decreasing blood pressure) obtain medical direction to administer additional dose of epinephrine, treat for shock (hypoperfusion) and prepare to initiate basic life support measures (CPR, AED) If patient’s condition improves, provide oxygen and treat for shock. Transport immediately.';
        this.effect =
          'Nervousness, tremor, headache, agitation, dizziness, weakness, cerebral hemorrhage, palpitations, hypertension, tachycardia, anginal pain, nausea and vomiting, and dyspnea.  ';
        this.dose = [
          '●	Adult: 10 mcg( 0.1mg/ml of 1:10,000) IV/IO as needed to maintain a SBP &gt;100 mmHg after a fluid bolus of 500 ml, may give every 3-5 minutes.',
          '●	Pediatric: IV Push Dose Epinephrine: 1 mcg/kg (1:10,000 Epi) as needed to maintain a SBP &gt;70 mmHg + age in yrs. x 2, after a fluid bolus of 20 ml/kg, may give every 3-5 minutes. ** NOTE-Requires OLMC consultation prior to administration. ',
        ];
        this.htm = [
          '●	Recipe 1 =10mL',
          'o	Take a 10 ml syringe with 9 ml of normal saline',
          'o	Into this syringe, draw up 1 ml of epinephrine from the cardiac amp (Cardiac amp contains Epinephrine 100 mcg/ml)',
          'o	Now you have 10 ml of Epinephrine 10 mcg/ml ',
          '●	Recipe 2 =50mL',
          'o	Take a 50 ml syringe with 45 ml of normal saline',
          'o	Into this syringe, draw up 5 ml of epinephrine from the cardiac amp (Cardiac amp contains Epinephrine 100 mcg/ml) ',
          'o	Now you have 50 mls of Epinephrine 10 mcg/ml',
          '●	Recipe 3 = 100mL',
          'o	Draw up epinephrine 1 mg (preferred 1mg/mL but can use Cardiac amp contains Epinephrine 100 mcg/ml) ',
          'o	Inject epinephrine 1mg into NS 100 mL bag',
          'o	You now have 100 mL of epinephrine 10mcg/mL',
        ];
        this.consideration = null;
        this.note = null;
        break;
      }

      case '13': {
        this.name = 'Fentanyl';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
          {
            name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
            link: 'inside/tabs/protocols-content/11',
          },
        ];
        this.action =
          'Fentanyl is a potent synthetic narcotic with similar actions to those of Morphine and Demerol, but action is more prompt (<5min) and less prolonged (half-life 90 min). Fentanyl exhibits less hemodynamic effects than does Morphine or Demerol. Fentanyl is also less likely to cause nausea/vomiting.  ';
        this.indication =
          'Patients with significant pain due to injury or medical condition';
        this.contradiction =
          'Known allergy to Fentanyl or hypersensitivity to opiates. Major trauma to head, chest, abdomen or pelvis. Airway compromise, respiratory depression/insufficiency. Evidence of shock (hypotension). Myasthenia Gravis ';
        this.precaution =
          'Continuously monitor vitals, oximetry, and mental status before and after administration. Fentanyl should be administered SLOWLY (over 2 minutes). High doses may cause chest wall and jaw muscular rigidity with resultant difficult ventilation. Respiratory depression may outlast pain control effects. Caution with the elderly pts and smaller framed pts, begin   with a lower dose.';
        this.effect =
          'Sedation/decreased level of consciousness, respiratory depression/arrest, bradycardia, hypotension or hypertension, mild nausea and/or vomiting, increased intracranial pressure. Rule out significant trauma prior to administration.  ';
        this.note = '½ the dose when combined with Benzos/Opioid cocktail.';
        this.dose = [
          '●	Adult: 1-2 mcg/kg slowly IV/IM. Expected single dose: 25-50 mcg every 5-10 minutes.  Max Total Dose: 200 mcg  ',
          '●	Pediatric: 0.5-1 mcg/km slowly IV/IM. Max Dose: 50 mcg. ',
          'o	2 mcg/kg Nasal Max Dose= 100 mcg (administer ½ in each nostril)',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '14': {
        this.name = 'Glucagon (GlucaGen)';
        this.refrenceProtocol = [
          {
            name: 'Protocol 19: GLUCOSE EMERGENCIES',
            link: 'inside/tabs/protocols-content/19',
          },
        ];
        this.action =
          'Induces liver glycogen breakdown, releasing glucose from the liver. Blood glucose is raised within 10 minutes. Has a half-life of 8 to 18 minutes.  ';
        this.indication = 'Treatment of severe hypoglycemia';
        this.contradiction =
          'Known hypersensitivity to drug, and in patients with pheochromocytoma or with insulinoma (tumor of pancreas).  ';
        this.precaution =
          'Give with caution to patients that have low levels of releasable glucose (e.g., adrenal insufficiency, chronic hypoglycemia, and prolonged fasting). Potentiates oral anticoagulants. Depletes glycogen stores especially in children and adolescents.';
        this.effect =
          'Hyperglycemia (excessive dosage), nausea and vomiting, hypersensitivity reactions (anaphylaxis, dyspnea, hypotension, rash), increased blood pressure, and pulse; this maybe greater in patients taking beta-blockers. ';
        this.dose = [
          '●	Adult: Give 1 mg. IM, after reconstituting powder and sterile water, for symptomatic diabetic patient whose IV access has been difficult.  ',
          '●	Pediatric: 0.01-0.02 mg/kg (max dose of 1 mg) IM if no IV/IO access after reconstituting powder and sterile water, for symptomatic diabetic patient whose IV access has been difficult.',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '15': {
        this.name = 'Haloperidol (Haldol)';
        this.refrenceProtocol = [
          {
            name: 'Protocol 30: Violent Patient/Chemical Sedation/Taser Barb Removal',
            link: 'inside/tabs/protocols-content/30',
          },
        ];
        this.action =
          '1. Depresses cerebral cortex.<br>2. Aids in reducing aggression.  ';
        this.indication =
          '1. Depresses cerebral cortex<br>2. Aids in reducing agression';
        this.contradiction =
          '1. Hypersensitivity<br>2. Alcohol or sedative drug usage is detected.  ';
        this.precaution = 'None';
        this.effect =
          '1. Seizures<br>2. Hypotension<br>3. Sudden cardiac arrest - more common in elderly or use of psychotropic medications<br>4. Laryngospasm - respiratory depressiony ';
        this.dose = [
          '●	Adult: 5-10 mg IM or 2-5mg IV  ',
          '●	Pediatric: <br>1. 6-12 years old: 1-3mg dose IM.<br>2. 12 years and older: 5-10 mg IM or 2-5mg IV/IO.<br>3. <6 years old - NOT RECOMMENDED',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '17': {
        this.name = 'Ibuprofen (Motrin/Advil) ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
            link: 'inside/tabs/protocols-content/30',
          },
        ];
        this.action =
          'Ibuprofen is a non-steroidal anti-inflammatory agent (NSAID) with analgesic effects, anti-inflammatory, and antipyretic effects. NSAIDs are thought to exert their effects by inhibiting prostaglandin synthesis by inhibiting the cyclooxygenase (COX) enzyme, which catalyzes the conversion of arachidonic acid to prostaglandin and endoperoxide. Prostaglandins are a modulator of inflammation and are also involved in thermoregulation, pain transmission, and platelet aggregation. ';
        this.indication = 'Mild to moderate pain.  Fever Control.';
        this.contradiction =
          'Avoid NSAIDS in women who are pregnant or could be pregnant.    Not to be used in patients with history of GI Bleeding (ulcers) or renal insufficiency (i.e. chronic kidney disease).  Not to be used in patients with allergies to aspirin or other NSAID drugs. Avoid in patients currently taking anticoagulants, such as Coumadin.  Avoid use for immune-compromised patients (on chemotherapy, with autoimmune disorders, etc.) Not to be used in patients less than 6 months old.';
        this.precaution =
          'Ibuprofen is not indicated for the treatment of abdominal pain.';
        this.effect =
          'GI bleeding, Nausea/vomiting, Headache, Drowsiness, Abdominal pain, Dyspepsia, Diarrhea.  ';
        this.dose = [
          '●	Adult: 400-600 mg PO q4-6h prn Max: 2400 mg/day) (DR BETZ WANTS WEIGHT BASED< RESEARCH FIRST)  ',
          '	●	Pediatric 6 months and older:  10 mg/kg PO (q6-8h prn) Max: 600mg',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '18': {
        this.name = 'Ipratropium (Atrovent)  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 22: RESPIRATORY DISTRESS',
            link: 'inside/tabs/protocols-content/22',
          },
        ];
        this.action =
          'Inhibits vagally mediated reflexes by antagonizing acetylcholine at muscarinic receptors on bronchial smooth muscle. ';
        this.indication =
          'Either Alone or with other bronchodilators, especially beta adrenergic, is used for treatment of bronchospasm associated with chronic obstructive pulmonary disease, including asthma, chronic bronchitis, and emphysema.';
        this.contradiction =
          'Hypersensitivity to the drug, atropine and its derivatives, and those with a history of hypersensitivity to soy lecithin or related food products such as soybeans and peanuts.<br>Pediatrics.';
        this.precaution =
          'Use cautiously in patients with angle-closure glaucoma, prostatic hyperplasia, and bladder-neck obstruction. Avoid leakage around the face mask, temporary blurring of vision or eye pain may occur.';
        this.effect =
          'Dizziness, headache, nervousness, palpitations, hypertension, cough, blurred vision, rhinitis, epistaxis, GI distress, chest pain, flu-like symptoms. ';
        this.note =
          'Asthma: Albuterol Small Volume Nebulizer then follow with DuoNeb<br>COPD:   DuoNeb Small Volume Nebulizer then follow with albuterol alone';
        this.dose = [
          '●	Adult 0.5mg added to the nebulized albuterol.   ',
          '●	May repeat neb of albuterol 2.5 mg with ipratropium 0.5mg x 1',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '19': {
        this.name = 'Ketamine HCL ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
          {
            name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
            link: 'inside/tabs/protocols-content/30',
          },
        ];
        this.action =
          'Ketamine is a dissociative anesthetic agent, structurally similar to phencyclidine (PCP). It is unique among sedative agents in that it provides analgesia along with its amnestic and sedative effects.  ';
        this.indication =
          'As an induction agent in the performance of the Rapid Sequence Induction procedure. As a sedative in Excited Delirium. For pain and procedure-related anxiety management.';
        this.contradiction =
          'Increased ICP, severe HTN, aneurysms, acute heart failure';
        this.precaution =
          'Caution should be used in the hypertensive patient and in the patient with existing tachyarrhythmia';
        this.effect =
          'Laryngospasm: this very rare adverse reaction presents with stridor and respiratory distress.<br>●	After every administration of ketamine:<br>o	Prepare to provide respiratory support including bag-valve-mask ventilation and suction which are generally sufficient in rare cases of laryngospasm.<br>o	Institute cardiac monitoring, pulse oximetry and continuous waveform capnography<br>o	Establish IV or IO access, check blood glucose<br>o	Establish and maintain physical restraint.<br>●	Emergence reaction: presents as anxiety, agitation, apparent hallucinations or nightmares as ketamine is wearing off. For severe reactions, consider benzodiazepine.<br>●	Nausea and Vomiting: always have suction available after ketamine administration. Give antiemetic as needed.<br>●	Hypersalivation: Suction usually sufficient. If profound hypersalivation causes airway difficulty, consult Medical Control for Atropine 0.5mg/IV. ';
        this.dose = [
          '●	Adult:  ',
          'o	Violent patient: ',
          '▪	Intramuscular (IM) – 4 mg/kg once (max 300 mg)',
          '▪	IV/IO – 1 mg/kg every 10 min to the desired effect (max dose 200 mg)',
          'o	Pain or Procedural-related Anxiety:',
          '▪	IV/IO – 0.1-0.3 mg/kg (max 30mg) diluted in 100mL of normal saline IV/IO drip over 15 minutes',
          '●	Pediatric: ONLY FOR USE in patients over the age of 2.--move below to peds',
          'o	Violent patient:',
          '▪	Intramuscular (IM) – 3 mg/kg once (max 300 mg)',
          '▪	IV/IO – 1 mg/kg once (max dose 200 mg)',
          'o	Pain or Procedural-related Anxiety:',
          '▪	IV/IO – 0.1-0.3 mg/kg (max 30mg) diluted in 100mL of normal saline IV/IO drip over 15 minutes',
        ];
        this.note = null;
        this.htm = null;
        this.consideration = [
          '●	Some patients experience an “emergence phenomenon” in which a patient experiences disturbing dreams as they emerge from Ketamine induced dissociation.',
          '●	Emergence phenomena are less of a concern when Ketamine is used as an induction agent for RSI after which the patient is generally sedated with benzodiazepines for a substantial period.',
        ];
        break;
      }

      case '20': {
        this.name = 'Ketorolac (Toradol)  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
        ];
        this.action =
          'Inhibition of prostaglandin synthesis by competitive blocking of the enzyme cyclooxygenase (COX).  Ketorolac is a non-selective COX inhibitor.  Ketorolac is a potent non-steroidal anti-inflammatory drug (NSAID) often used as an analgesic.   ';
        this.indication =
          'Moderate to severe acute pain management.  Consider in isolated extremity injuries such as strains or sprains, non-complicated isolated fractures, known kidney stones, acute exacerbations of chronic back pain.';
        this.contradiction =
          'Patients who are actively bleeding or have incomplete bleeding control, such as trauma.  Patients at high risk for bleeding, including current use of Aspirin, NSAIDs, or blood thinners.  Patients with known or suspected renal disease.  Significant volume depletion or dehydration.  History of peptic ulcer disease or GI bleed.  Hypersensitivity to NSAIDS or ASA.  Pregnant or nursing.  Elderly (relative).';
        this.precaution = ' Separate use from other NSAIDs by 6 hours.';
        this.effect = 'Dyspepsia  ';
        this.dose = [
          '●	Adult: 18-60 year old 15-30 mg IV/IO Single dose.  ',
          '●	Adult: >65 year old 15mg IV/IO Single dose. ',
          '●  Pediatric: 0.5mg/kg IV (max 15mg), single dose only, ONLY FOR USE in patients over the age of 2.',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '21': {
        this.name = 'Lidocaine  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 09: CARDIAC ARREST',
            link: 'inside/tabs/protocols-content/9',
          },
          {
            name: 'Protocol 15: TACHYCARDIA (With a Pulse)',
            link: 'inside/tabs/protocols-content/15',
          },
          {
            name: 'Protocol 22: RESPIRATORY DISTRESS',
            link: 'inside/tabs/protocols-content/22',
          },
        ];
        this.action =
          'Decreases ventricular excitability without depressing the force of ventricular contractions by increasing the stimulation threshold of the ventricle during diastole. Onset of action should occur within 2 minutes and last approximately 10 to 20 minutes. Metabolized in the liver and excreted in the urine';
        this.indication =
          'Cardiac arrest from VF/VT (class II B) Stable VT, wide-complex tachycardias of uncertain type, wide-complex PSVT (class IIB). Used to stabilize patients converted from VT/VF. Occasionally used in control of symptomatic criteria PVCs.';
        this.contradiction =
          'Hypersensitivity to the drug. Stokes-Adams syndrome, Wolff-Parkinson-White syndrome, severe degrees of SA, AV, or intraventricular block (when no pacemaker is present.). ';
        this.precaution =
          'Do not administer with sinus bradycardia, second or third degree AV blocks and idioventricular rhythms. Prophylactic use in AMI patients is not recommended. Discontinue infusion immediately if signs of toxicity develop. Elderly clients who have hepatic or renal disease or who weigh less than 45.5 kg. Should be watched closely for adverse side effects. Toxicity can occur due to reduced metabolism of lidocaine.';
        this.effect =
          'Anaphylaxis, bradycardia, hypotension, cardiovascular collapse, seizures, malignant hyperthermia, respiratory depression, tremors, lightheadedness, confusion, tinnitus, blurred or double vision, and vomiting ';
        this.dose = [
          'Initial bolus should be followed with Lidocaine 0.5mg/kg doses every 10 minutes to a total dose of 3 mg/kg ',
          'ADULT DOSE IV/IO:',
          'REFRACTORY V FIB. / V TACH: 1 mg/kg IV/IO EVERY 3-5 MINUTES TO MAX 3 mg/kg',
          'V TACH WITH PULSE:  1 mg/kg IV/IO EVERY 3-5-10 MINUTES TO MAX 3 mg/kg',
          'CRITERIA PVC’S:  (Suspected Acute Coronary Syndrome with >6 PVC’s/minute, couplets, runs of V Tach, multifocal PVCs): 1 mg/kg IV',
          'PEDS DOSE IV/IO:',
          'V. FIB  OR V. TACH WITHOUT PULSE: 1 mg/kg IV/ IO EVERY 3-5 MINUTES TO MAX 3 mg/kg',
          'V. TACH WITH PULSE: 1 mg/ kg IV/IO EVERY 3-5 MINUTES TO MAX 3 mg kg',
          'BRONCHOSPASM/WHEEZING: Medical Control Option - Must contact prior to administration ',
          'Lidocaine 2% 40-60 mg (2–3 mL) added to Albuterol for adult patients with (“cough variant asthma”) which is severe coughing which inhibits respiratory function (with or without audible wheezes)',
          'ADJUNCT TO INTUBATION WITH CLOSED HEAD INJURY:  1.0 mg/kg IV/IO 60-90 seconds prior to intubation (if IV access is readily available). ',
          'ADJUNCT TO “IO” INSERTION IN A CONSCIOUS PATIENT: Prior to running fluids administer 40 mg ( 2 mL) of 2% Lidocaine thru the IO and flush with 10 mL of NS, wait 15 seconds and administer IV fluid.',
        ];
        this.consideration = [
          '⮚	IF LIDOCAINE IS THE FIRST DRUG USED THEN ALL REPEAT DOSES SHALL BE WITH LIDOCAINE.',
          '⮚ NEVER ALTERNATE BETWEEN LIDOCAINE AND AMIODARONE',
          '⮚	IN CARDIAC ARREST ELEVATE ARM AND FLUSH AFTER EACH DOSE',
          '⮚	OBTAIN 12 LEAD ECG- CONTINUOUS CARDIAC MONITORING',
          '⮚	AFTER SUCCESSFUL CONVERSION OF CARDIAC ARREST DUE TO V FIB / V TACH, A LIDOCAINE DRIP MAY BE STARTED (USE DIAL-A-FLOW TO REGULATE DRIP), AN INITIAL BOLUS SHOULD BE GIVEN PRIOR TO STARTING A DRIP',
          '15 gtt / MIN= 1 mg / MIN LIDOCAINE',
          '30 gtt / MIN = 2 mg/ MIN LIDOCAINE',
          '45 gtt / MIN= 3 mg / MIN LIDOCAINE',
          '60 gtt/ MIN = 4 mg / MIN LIDOCAINE',
        ];
        this.note = null;
        this.htm = null;
        break;
      }

      case '22': {
        this.name = 'Lorazepam  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
          {
            name: 'Protocol 23: SEIZURES',
            link: 'inside/tabs/protocols-content/23',
          },
          {
            name: 'Protocol 25: TEMPERATURE AND ENVIRONMENTAL EMERGENCIES',
            link: 'inside/tabs/protocols-content/25',
          },
          {
            name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
            link: 'inside/tabs/protocols-content/30',
          },
        ];
        this.action =
          'Though the drug is still widely used as an anticonvulsant, it is relatively weak and of shorter duration than diazepam. Rapid IV administration may be followed by respiratory depression and excessive sedation. Lorazepam is frequently used to treat anxiety and stress. In emergency care, it is used to treat alcohol withdrawal and grand mal seizure activity. Benzodiazepines act on the limbic, thalamic, and hypothalamic regions of the CNS to potentiate the effects of inhibitory neurotransmitters, raising the seizure threshold in the motor cortex. It may also be used in conscious patients during cardioversion to induce amnesia and sedation.  ';
        this.indication =
          'Status seizures, acute anxiety states, acute alcohol withdrawal, Procedural (cardioversion) anxiolysis ';
        this.contradiction =
          'Hypersensitivity to the drug, acute narrow & open angle glaucoma, Hypotension, Head injury, CNS depression, Respiratory depression ';
        this.precaution =
          ' Lorazepam may precipitate CNS depression and psychomotor impairment when the patient is taking CNS depressant medications. Should not be administered with other drugs because of possible precipitation (incompatible with most fluids; should be administered into an IV of normal saline solution).';
        this.effect =
          ' Hypotension, Reflex tachycardia, Respiratory depression, Ataxia, Psychomotor impairment, Confusion, Nausea/Vomiting ';
        this.note = ' ½ the dose when combined with Opioids.';
        this.dose = [
          'Adult: Seizures: 2 mg slow IV (<2 mg/min) or IM.  ',
          'Agitation/Anxiety Relief: 1 mg slow IV/IO (<2 mg/min) or IM – repeat in five minutes, max dose of 2 mg',
          'Acute non-traumatic muscle spasms and muscle spasms associated with a long bone fracture:  1 mg IV/IM/IO. May repeat after 5 minutes. Max 2 mg. ',
          'Pediatrics: Seizures: 0.05 mg / kg (max 2 mg per dose) slow IV/IO (<2 mg/min) or IM',
        ];
        this.consideration = [
          '●	Pregnancy safety: Category D - dangerous to fetus consult OLMC',
          '●	Must be diluted 1:1 with normal saline prior to IV administration, and given not more than 2mg/minute, Reduce dose by 50% in elderly patients',
          '●	Resuscitation equipment should be readily available, monitor respirations carefully! ',
        ];
        this.note = null;
        this.htm = null;
        break;
      }

      case '23': {
        this.name = 'Magnesium Sulfate';
        this.refrenceProtocol = [
          {
            name: 'Protocol 20: OBSTETRICAL EMERGENCIES',
            link: 'inside/tabs/protocols-content/20',
          },
          {
            name: 'Protocol 22: RESPIRATORY DISTRESS',
            link: 'inside/tabs/protocols-content/22',
          },
          {
            name: 'Protocol 23: SEIZURES',
            link: 'inside/tabs/protocols-content/23',
          },
        ];
        this.action =
          ' Magnesium is an important cofactor for enzymatic reactions and plays an important role in neurochemical transmission and muscular excitability. Magnesium prevents or controls convulsions by blocking neuromuscular transmission and decreasing the amount of acetylcholine liberated at the end plate by the motor nerve impulse. Magnesium is said to have a depressant effect on the central nervous system, but it does not affect the mother, fetus or neonate when used as directed in eclampsia and pre- eclampsia. Magnesium acts peripherally to produce vasodilation.  ';
        this.indication =
          'Parenteral anticonvulsant for the prevention and control of seizures in severe toxemia of pregnancy.<br>●	Torsade’s de pointes<br>●	Refractory ventricular fibrillation<br>●	Asthma Refractory to other treatment';
        this.contradiction =
          '•	Do not give a patient with a 2nd or 3rd degree heart block or recent MI, shock, persistent Severe Hypertension, Patients undergoing routine dialysis';
        this.effect =
          ' Signs of hypermagnesemia include: flushing, sweating, hypotension, depression of reflexes, flaccid paralysis, hypothermia, circulatory collapse, depression of cardiac function and central nervous system depression. These symptoms can precede fatal paralysis.  ';
        this.dose = [
          '●	Eclamptic seizures: 4 gm IV (mixed in 50/100 ml of D5W/NS and administered over 4 minutes). May repeat once at 2 gm IV (mixed in 50/100 ml of D5W/NS and administered over 5 minutes)   ',
          '●	Torsades de pointes and refractory VF: 1-2 gm IV (mixed in 50/100 ml of D5W/NS and administered over 1-2 minutes) followed by a maintenance infusion (1 gm in 250 ml of D5W/NS administered at 30-60 gtt/min)',
          '●	Asthma  ',
          'o	Adult: 2 grams in 50/100 ml of D5W/NS over 20 min',
          'o	Pediatric: 50 mg/kg (Max dose = 2 gm) in 50/100 ml of D5W/NS over 20 min',
          ' MEDICAL CONTROL OPTION-MUST CONTACT PRIOR TO ADMINISTRATION',
          '1.	High-risk preterm labor when delivery is imminent, to suppress uterine contractions: Magnesium Sulfate 1-gram diluted in 10 ml NS give over 5 minutes IV and titrate per Medical Control direction.',
          '2.	For females with advanced pregnancy and seizures: Magnesium Sulfate - 2-4 grams IM or 2-4 grams in 10 ml NS infuse over 15 to 30 min IV as directed by OLMC.',
        ];
        this.consideration = [
          'Magnesium Sulfate Injections USP, 50% must be diluted to a concentration of 20% or less prior to IV infusion. ',
          // eslint-disable-next-line @typescript-eslint/quotes
          "Because magnesium is removed from the body solely by the kidneys, the drug should be used with caution in patients with renal impairment. Monitoring magnesium serum levels and the patient's clinical status is essential to avoid the consequences of overdose in toxemia",
          'Clinical indications that it is safe to give magnesium include the presence of patellar reflex (knee jerk) and absence of respiratory depression (approximately 16 breaths or more/ minute). Calcium Chloride should be immediately available to counteract the potential hazards of magnesium intoxication in eclampsia.  ',
          'Intravenous use of magnesium sulfate should not be given to mothers with toxemia of pregnancy during the two hours immediately preceding delivery.',
        ];
        this.note = null;
        this.htm = null;
        break;
      }

      case '24': {
        this.name = 'Morphine  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
          {
            name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
            link: 'inside/tabs/protocols-content/11',
          },
          {
            name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
            link: 'inside/tabs/protocols-content/12',
          },
        ];
        this.action =
          'An opium-derivative, narcotic analgesic, which is a CNS depressant.  Induces sleep and inhibits perception of pain by binding to opiate receptors, decreasing sodium permeability, and inhibiting transmission of pain pulses. Causes peripheral vasodilation, thereby decreasing venous blood return to the heart. Relieves pulmonary congestion and lowers myocardial oxygen need. Metabolized in the liver and excreted in the urine. Onset 2-3 minutes, peak 30 minutes, and duration is 3-6 hours.';
        this.indication =
          'Analgesic of choice in pain associated with myocardial infarction that is unresponsive to nitrates. Treatment of acute pulmonary edema associated with left ventricular failure, (if blood pressure is adequate). Used for sedation, to decrease anxiety and facilitate induction of anesthesia. Used for management of pain in trauma, kidney stones, etc... ';
        this.contradiction =
          'Hypersensitivity or allergy to opiates, acute bronchial asthma, heart failure secondary to lung disease, upper airway obstruction, acute alcoholism, convulsive states, and paralytic ileus.';
        this.precaution =
          'Causes hypotension in volume-depleted patients. Administer slowly and titrate to effect. May cause apnea in asthmatic patients. May also cause an increased ventricular response rate in presence of supraventricular tachycardias. Use with caution in the elderly, head injuries with increased intracranial pressure, COPD, severe hepatic or renal disease.';
        this.effect =
          'Seizures (with large doses), hypotension, bradycardia, cardiac arrest, or may see tachycardia, and hypertension. Nausea and vomiting, rash, itching, urine retention, respiratory depression and arrest, hypothermia, and increased intracranial pressure may also be seen.  ';
        this.dose = [
          '●	Adult: For persistent pain, 2-4 mg IV titrated to obtain pain relief (use caution in presence of COPD) maximum of 10 mg  ',
          '●	Pediatric: 0.1mg/kg IV/IM  (Max 4mg)',
          'Acute Pulmonary Edema: 2-5 mg IV may repeat x 1 to max. dose 10 mg',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '25': {
        this.name = 'Midazolam ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 06: PAIN & ANXIETY MANAGEMENT',
            link: 'inside/tabs/protocols-content/6',
          },
          {
            name: 'Protocol 23: SEIZURES',
            link: 'inside/tabs/protocols-content/23',
          },
          {
            name: 'Protocol 25: TEMPERATURE AND ENVIRONMENTAL EMERGENCIES',
            link: 'inside/tabs/protocols-content/25',
          },
          {
            name: 'Protocol 30: VIOLENT PATIENT / CHEMICAL SEDATION / TASER BARB REMOVAL',
            link: 'inside/tabs/protocols-content/30',
          },
        ];
        this.action =
          'A short-acting benzodiazepine and CNS depressant 3-4 times as potent as diazepam. Depressant effects are dependent on dose, route of administration, presence of other medications, and age of patient. It can depress the ventilatory response to CO2 stimulation. It diminishes patient recall. Onset of action is 1-5 min with IV dosing, 5-15 min with IM dosing, and 10 min with IN dosing. Duration of action is generally less than 2 hours.';
        this.indication =
          'Midazolam HCL can be given IV/IM/IN for: Sedation of intubated and mechanically ventilated patients,	Anticonvulsant effect in status seizures ,Anxiety ';
        this.contradiction =
          '●	Hypersensitivity/allergy to midazolam or any benzodiazepine';
        this.precaution =
          'Use cautiously in patients with uncompensated acute illness and in elderly or debilitated patients. Administer slowly over at least 2 minutes. Use with caution in neonates. Versed does not protect against the intracranial pressure or against the pulse and blood pressure rise associated with intubation. Erythromycin may alter the metabolism of Versed. Oral contraceptives prolong the half-life. Sedative effects may be antagonized by theophylline';
        this.effect =
          'Serious cardiac and respiratory events have been associated with the use of IV Midazolam HCl. These include airway obstruction, apnea, hypotension, depressed saturations, respiratory and cardiac arrest. Risk increases with patients over age 55, concomitant use of opioid analgesics, and rapid administration. It should only be given in the setting of continuous respiratory and cardiac monitoring. Other effects can include paradoxical behavior, excitement, coughing, headache, hiccups, nausea, vomiting, and nystagmus (especially in children)  ';
        this.note = ': ½ the dose when combined with Opioids.';
        this.dose = [
          '●	Status seizure:',
          'o	Adult (>5min duration):',
          '▪	IV - 2.5 - 5 mg slowly (1-2 min) to the desired effect or max dose of 10mg',
          '▪	IM - 5 - 10 mg',
          '▪	IN - 10 mg, divide dose between nostrils (use atomizer) ',
          'o	Pediatric (>5min duration):',
          '▪	IV – 0.1 mg/kg with max 5 mg',
          '▪	IM -- 0.2 mg/kg with max 10 mg',
          '▪	IN -- 0.2 mg/kg, divide dose between nostrils (use atomizer) Max 10mg',
          '●	Agitation (intubated patient, behavioral emergencies):',
          'o	2.5 – 5 mg IV or 5 – 10 mg IM ',
          '●	Cardioversion:',
          'o	2.5 - 5 mg IV if patient alert',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '26': {
        this.name = 'Naloxone (Narcan) ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 02: ALTERED MENTAL STATUS',
            link: 'inside/tabs/protocols-content/2',
          },
          {
            name: 'Protocol 21: OPIOID OVERDOSE',
            link: 'inside/tabs/protocols-content/21',
          },
        ];
        this.action =
          'Overcomes effects of narcotic overdose including respiratory depression, sedation, and hypotension. It does not have any narcotic effect itself. It exhibits essentially no pharmacologic activity. Pure opioid antagonist that competes and displaces opioids at opioid receptor sites';
        this.indication =
          'Suspected opioid overdose, titrate slowly if suspected narcotic dependence';
        this.contradiction = 'Hypersensitivity to the drug';
        this.precaution =
          'May precipitate acute withdrawal symptoms in narcotic addicts. Effects of drug may not outlast effects of narcotics. Use with caution in patients with cardiac disease or those receiving cardiotoxic drugs. It is ineffective against respiratory depression caused by barbiturates, anesthetics, other non-narcotic agents, or pathologic conditions. ';
        this.effect =
          'VF, tachycardia, hypertension, nausea, vomiting, and diaphoresis, in higher doses. Tremors and withdrawal symptoms in narcotic-dependent patients';
        this.dose = [
          '●	Adult: If suspected narcotic overdose consider 0.4-2 mg Narcan IV. 2 mg IM/IN. For physical findings consistent with narcotics overdose. Max 4 mg. ',
          '●	Pediatric: 0.1 mg/kg IV/IM/IN Max 2mg',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '27': {
        this.name = 'Nitroglycerin ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 11: CARDIAC CHEST PAIN (ACUTE CORONARY SYNDROME)',
            link: 'inside/tabs/protocols-content/11',
          },
          {
            name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
            link: 'inside/tabs/protocols-content/12',
          },
        ];
        this.action =
          'Primary action is relaxation of the vascular smooth muscle and dilatation of peripheral arteries and veins. Although venous effects predominate, nitro produces dilation of both arterial and venous beds. Promotes peripheral pooling of blood and decreases venous return to the heart, reducing left ventricular pressure (preload). Arteriolar relaxation reduces systemic vascular resistance and arterial pressure (afterload). Also increases blood flow through the collateral coronary vessels. ';
        this.indication =
          'Control of pain associated with angina pectoris/myocardial infarction	and relief of pulmonary edema caused by left-sided heart failure. ';
        this.contradiction =
          'Hypersensitivity/allergy to nitroglycerin, other nitrates or nitrites.<br>Do not give with an Inferior wall MI. - Leads 2, 3, AVf';
        this.precaution =
          'If a patient is wearing a nitroglycerin patch or paste, an additional administration may not be appropriate. If patient is taking prescribed Viagra, consult medical control regarding nitro administration prior to giving. ';
        this.effect =
          'Headache, transient episodes of lightheadedness related to blood pressure changes, hypotension, syncope, crescendo angina, rebound hypertension, and anaphylactoid reactions. Abd pain and vomiting may also be seen.';
        this.note = 'Obtain patent IV and 12 lead prior to dosing. ';
        this.dose = [
          '●	One tablet S.L. 0.4 mg ',
          '●	May repeat the same dosage every 5 minutes x 3 if SBP remains 110 or greater if medical control gives authorization. ',
          '●	Treat any hypotension with fluid boluses',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '28': {
        this.name = 'Norepinephrine (Levophed) ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 08: SHOCK, SEPSIS, & FLUID THERAPY',
            link: 'inside/tabs/protocols-content/8',
          },
          {
            name: 'Protocol 10: BRADYCARDIA (Symptomatic)',
            link: 'inside/tabs/protocols-content/10',
          },
          {
            name: 'Protocol 12: CONGESTIVE HEART FAILURE PULMONARY EDEMA',
            link: 'inside/tabs/protocols-content/12',
          },
          {
            name: 'Protocol 14: POST CARDIAC ARREST (ROSC)',
            link: 'inside/tabs/protocols-content/14',
          },
          {
            name: 'Protocol 16: ALLERGIC REACTION / ANAPHYLAXIS',
            link: 'inside/tabs/protocols-content/16',
          },
          {
            name: 'Protocol 17 : DROWNING OR SUBMERSION',
            link: 'inside/tabs/protocols-content/17',
          },
          {
            name: 'Protocol 21: OPIOID OVERDOSE',
            link: 'inside/tabs/protocols-content/21',
          },
          {
            name: 'Protocol 34: HEAD INJURY (TRAUMATIC BRAIN INJURY)',
            link: 'inside/tabs/protocols-content/34',
          },
          {
            name: 'Protocol 37: SNAKE BITES',
            link: 'inside/tabs/protocols-content/37',
          },
        ];
        this.action =
          'Stimulates beta1 and alpha1 receptors in the sympathetic nervous system, causing vasoconstriction, increased blood pressure, enhanced contractility, and decreased heart rate';
        this.indication =
          'Severe hypotension- due to cardiogenic, septic, or neurogenic shock either refractory to intravascular fluid boluses or in which intravascular fluid bolusing is contraindicated (e.g. pulmonary edema).';
        this.contradiction =
          'Hypersensitivity to drug, hypotension caused by blood volume deficit (except in emergencies until blood volume replacement is completed), profound hypoxia or hypercarbia, mesenteric or peripheral vascular thrombosis';
        this.precaution =
          '●	Use IV pump only to infuse<br>●	Monitor IV site closely for extravasation<br>●	Watch for signs of inadequate peripheral tissue perfusion, pale-cyanotic-black<br>●	Never leave patient unattended during infusion<br>●	Monitor VS Q 5 minutes<br>●	Infusions should be reduced gradually, avoiding abrupt withdrawal';

        this.effect =
          '●	CNS: headache, anxiety<br>●	CV: bradycardia, severe hypertension, arrhythmias<br>●	Respiratory: respiratory difficulty<br>●	Skin: irritation with extravasation, necrosis<br>●	Other: ischemic injury';
        this.dose = [
          '●	Adult dose: 1 to 4 mcg/min',
          '●	Maintenance dose: Adjust the rate for a low normal blood pressure (usually 80 to 100 mm Hg systolic). The average maintenance dose ranges from 1 to12 mcg/min (maximum dose 30 mcg/min)',
          '●	Pediatric dose:0.1 – 2 mcg/kg/min; 2 mcg/kg/min max',
        ];

        this.note =
          'Overdosage with norepinephrine may result in headache, severe hypertension, reflex bradycardia, marked increase in peripheral resistance, and decreased cardiac output. In case of accidental overdose, as evidenced by excessive blood pressure elevation, discontinue norepinephrine until the condition of the patient stabilizes. ';
        this.consideration = null;
        this.htm = null;
        break;
      }
      case '29': {
        this.name = 'Ondansetron ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 05: NAUSEA / VOMITING',
            link: 'inside/tabs/protocols-content/5',
          },
        ];
        this.action =
          'Selective 5-HT3 receptor antagonist which blocks serotonin, both peripherally on vagal nerve terminals and centrally in the chemo trigger zone';
        this.indication =
          'When non-sedating antiemetic is desirable - Prevention and treatment of severe nausea ';
        this.contradiction =
          'Known hypersensitivity/allergy to Zofran, patient’s <1 yrs. of age';
        this.precaution =
          'Use with caution in patients with impaired liver function. Rate of administration should not be less than 30 seconds but preferably over 2 to 5 minutes. NOTE: Zofran has no effect on motion sickness.';
        this.effect =
          'Headache, dizziness, diarrhea, may cause pain at the injection site.';
        this.dose = [
          '●	Adult: 4 mg IV (over 2-5 minutes) OR 4 mg IM injection OR 4 mg ODT. May repeat up to 8 mg with medical control approval in 5-10 minutes.',
          '●	Pediatric: 0.1 mg/kg IV/IM. Max dose 4mg. NOT TO BE USED IN PATIENT’S UNDER 1 YRS OF AGE ',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '30': {
        this.name = 'Oral Glucose ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 19: GLUCOSE EMERGENCIES',
            link: 'inside/tabs/protocols-content/19',
          },
        ];
        this.action = 'Increases blood sugar levels ';
        this.indication =
                'Patient meets all of the following criteria:<br>●	Altered mental status <br>● Known history of diabetes mellitus ';
        this.contradiction =
          'Unconsciousness, known diabetic who has not taken insulin for days, patient who is unable to swallow';
        this.effect =
          'None when given properly. May be aspirated by the patient without gag reflex. ';
        this.dose = [
          ' Administer one tube between the patient’s cheek and gums',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '31': {
        this.name = 'Oxytocin ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 20: OBSTETRICAL EMERGENCIES',
            link: 'inside/tabs/protocols-content/20',
          },
        ];
        this.action =
          'Stimulates contraction of the smooth muscles in the uterus, thereby constricting uterine blood vessels and controlling excessive bleeding or hemorrhage.  ';
        this.indication = 'Control of postpartum hemorrhage ';
        this.contradiction =
          'Contraindications: In the field oxytocin should not be used until after the baby is fully delivered. Be sure there is only one baby. ';
        this.effect =
          '●	Fetal bradycardia (should not be administered prior to delivery of the infant)<br>●	 Uterine rupture<br>●	 Maternal hypotension, bradycardia and cardiac arrhythmia<br>●	 Nausea/vomiting<br>●	Anaphylaxis';
        this.dose = [
          ' Oxytocin may be started if bleeding continues:  ',
          '●	IM 10 units followed by IV/IO Infusion by adding 10-40 units to 500ml or 1000mL NS and titrating the infusion to decrease bleeding and patient comfort',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '32': {
        this.name = 'Promethazine';
        this.refrenceProtocol = [
          {
            name: 'Protocol 05: NAUSEA / VOMITING',
            link: 'inside/tabs/protocols-content/5',
          },
        ];
        this.action =
          'Promethazine is an H1 receptor antagonist that blocks the actions of histamine by competitive antagonism at the H1 receptor. Promethazine also acts as an antiemetic and sedative agent with some anticholinergic properties.';
        this.indication = 'Nausea and vomiting, motion sickness, to potentiate the effects of analgesics, pre/post-op obstetrical sedative, allergic reactions ';
        this.contradiction =
          '1. CNS Depression<br>2. Hypsesensitivity to "sulfite" (Not sulfa drugs)<br>3. Children less than 2 years of age';
        this.effect =
          '●	Use in children may cause paradoxical hyperexcitability and apnea<br>●	 Sedation<br>●	 Hypotension<br>●	 Confusiong<br>●	Tissue Necrosis (with extravasation)';
        this.dose = [
          'Adult:<br> ●	Promethazine (Phenergan) 12.5-25 mg IV titrated to effect if SBP>100 or peripheral pulse present o Dilute with 5-10 mL of NS and administer over 30 seconds<br> ●	Avoid in elderly patients due to potential for sedation<br> ●	Should be given through AC or larger vessel due to extravasation risk or Promethazine 25mg IM, if no vascular access<br> ●	Pediatric dose (2yrs < - <12yrs): Consult Base Physician  ',
          'Notes: ONLY FOR USE in patients over the age of 2<br>● (IV /IO) Promethazine is highly damaging to tissue with/without extravasation. It is currently recommended that single doses not exceed 25mg, the dose be pushed over 2 minutes, and the dose be diluted with Normal Saline. Dilution may be done in a syringe and/or by running saline wide open through drip set during administration	<br> ●	IM administration may cause local irritation and pain',
        ];
        this.precaution = '1. Acutely ill or dehydrated patients<br>2. Age greater than 70 years<br>3. Pregnancy/breast feeding';
        this.note = null;
        this.htm = null;
        break;
      }

      case '33': {
        this.name = 'Sodium Bicarbonate  ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 09: CARDIAC ARREST',
            link: 'inside/tabs/protocols-content/9',
          },
          {
            name: 'Protocol 21: OPIOID OVERDOSE',
            link: 'inside/tabs/protocols-content/21',
          },
          {
            name: 'Protocol 33: BURNS – THERMAL / ELECTRICAL / LIGHTNING',
            link: 'inside/tabs/protocols-content/33',
          },
          {
            name: 'Protocol 35: HEMORRHAGE CONTROL, EXTREMITY AND CRUSH INJURIES',
            link: 'inside/tabs/protocols-content/35',
          },
        ];
        this.action =
          'Neutralizes excess acids, returning blood and body fluid to a more normal pH, in which metabolic processes and medications work more effectively.';
        this.indication =
          'Metabolic acidosis caused by circulatory insufficiency resulting from shock or severe dehydration, severe renal disease, cardiac arrest w/prolonged CPR, tricyclic overdoses, and hyperkalemia. High voltage electrical injury or direct lightning strike with significant tissue destruction.  Crush injuries. ';
        this.contradiction = 'None';
        this.precaution =
          'Not recommended for routine use in cardiac arrest patients. Sodium bicarbonate inactivates norepinephrine and forms a precipitate with calcium. Use with caution in the elderly with renal or cardiovascular insufficiency with or without CHF.';
        this.effect =
          'Gastric distention, belching, flatulence, hypokalemia, metabolic alkalosis, hypernatremia, hyperosmolarity, hyperirritability or tetany. Extravasation of IV sodium bicarbonate may cause chemical cellulitis with tissue necrosis.  ';
        this.dose = [
          '●	Adult',
          'o	Drug overdose: Consider Na Bicarb 50 mEq IV in tricyclic ingestions. ',
          'o	Symptomatic renal patient: Consider Na Bicarb 50 mEq IV.',
          'o	Cardiac arrest-asystole-PEA: Consider Na Bicarb 50 mEq (1 amp) or 1 mEq/kg if arrest interval long or return of circulation after prolonged resuscitation. All subsequent doses 1⁄2 dose every 10 minutes. ',
          'o	High voltage electrical injury or direct lightning strike with significant tissue destruction: Sodium Bicarbonate 1 mEq/kg (maximum of 100 mEq) in 1000 mL NS wide open.',
          'o	Crush Injuries: Must contact OLMC prior to administration. Constant crush injuries greater than 30 minutes’ duration and if the patient develops cardiac arrhythmias or a prolonged QRS >100ms: Administer Sodium Bicarbonate 1 mEq/kg (Maximum of 100 mEq) IV push prior to beginning infusion and up to TWO additional times plus start Sodium Bicarbonate drip: 1 mEq/kg (Maximum 100 mEq) in 1000 ml NS and run wide open.',
          '●	Pediatrics',
          'o	Cardiac arrest asystole-PEA: Consider (1 mEq/cc) if arrest interval long or upon spontaneous circulation. Give 1 mEq/kg or 1 mL/kg IV/IO up to 50 cc. ',
          'Toxic Ingestion-Tricyclic: 1 mEq/kg slow IV push',
          '1.	IV/IO push for tricyclic antidepressant overdose with sustained HR >120 bpm and QRS >0.10 secs,',
          '2.	hypotension unresponsive to fluids',
          '3.	ventricular dysrhythmias',
          'Pediatric Dose:',
          'Sodium Bicarb 1 mEq/kg of 8.4% solution children > 1 month',
          'Sodium Bicarb 0.5 mEq/kg of 4.2% solution for infants <1 month',
          'Cardiac Arrest, Toxic Ingestion, High voltage electrical injury or direct lightning strike with significant tissue destruction, Crush Injuries:',
          '1.	Not a first line drug-contact OLMC for permission',
          '2.	 Same indications as adult',
        ];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      case '34': {
        this.name = 'Tranexamic Acid/TXA (Cyklokapron) ';
        this.refrenceProtocol = [
          {
            name: 'Protocol 20: OBSTETRICAL EMERGENCIES',
            link: 'inside/tabs/protocols-content/20',
          },
          {
            name: 'Protocol 35: HEMORRHAGE CONTROL, EXTREMITY AND CRUSH INJURIES',
            link: 'inside/tabs/protocols-content/35',
          },
        ];
        this.action =
          'Tranexamic acid is an anti-fibrinolytic agent that inhibits the conversion of plasminogen to plasmin and at the same time acts as a weak non-competitive inhibitor of plasmin thus arresting fibrinolysis. As a result, a stable clot can be formed, and blood loss is reduced. TXA needs to be given broadly to save the most lives, so clinical judgement based on assessment is crucial. When given within 3 hrs. of injury the risk of bleeding death drops by 1/3. Studies have demonstrated improved outcomes when the interval from injury to administration is decreased, therefore early administration is recommended. ';
        this.indication =
          '●	Blunt or penetrating trauma patient’s ≥ 14 years of age, at high risk of ongoing internal hemorrhage or significant external bleeding, that meet the following:<br>o	Injury sustained within 3 hrs. prior to administration. TXA must be administered within 3 hrs. of injury. Administer as early as possible following gross bleeding control and other lifesaving interventions.<br>o	Systolic BP < 90mmHg and signs of ongoing hemorrhage, AND/OR<br>o	Tachycardia > 110bpm with signs of hypoperfusion (altered mental status, pallor, cool extremities) and signs of ongoing hemorrhage.<br>o	Considered in paramedics judgement to be at high risk of significant hemorrhage.<br>●	Also indicated for excessive hemorrhage following delivery or delayed placenta delivery if within 3 hours of delivery. ';
        this.contradiction =
          '●	Injuries > 3 hours old<br>●	Patients < 14 years of age.<br>●	Known hypersensitivity to drug ';
        this.precaution =
          '●	Notify receiving hospital of TXA administration.<br>●	Clearly document mechanism of injury, time injury/incident occurred, indications for administration and time of administration of TXA.<br>●	TXA should NEVER be administered at a “wide open” rate. ';
        this.effect =
          ' Hypotension (with rapid IV injection), Seizures in high doses (>2-10 grams), allergic dermatitis, diarrhea, nausea, vomiting, blurred vision. ';
        this.dose = ['Mix 1g/10 ml of TXA in 100ml NS. Infuse over 10 min'];
        this.consideration = null;
        this.note = null;
        this.htm = null;
        break;
      }

      default: {
        this.name = 'default';
        this.action = null;
        this.indication = null;
        this.contradiction = null;
        this.precaution = null;
        this.effect = null;
        this.dose = null;
        this.consideration = null;
        this.note = null;
        this.htm = null;
        this.refrenceProtocol = null;
        break;
      }
    }
  }
}
