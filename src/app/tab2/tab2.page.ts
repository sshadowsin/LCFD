import { Component } from '@angular/core';
import { CategoryContentPage } from '../subpages/category-content/category-content.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  // level = 0;
  nextPage = Tab2Page;

  searchTerm: string;

  drugs = [
    { name: 'Acetaminophen (Tylenol)', level: 0 },
    { name: 'Adenosine (Adenocard)', level: 1 },
    { name: 'Albuterol (Ventolin/Proair/Proventil)', level: 2 },
    { name: 'Amiodarone Hydrochloride (Cordarone)', level: 3 },
    { name: 'Aspirin (Ecotrin)', level: 4 },
    { name: 'Atropine', level: 5 },
    { name: 'Calcium Chloride/ Calcium Gluconate', level: 6 },
    { name: 'Diazepam (Valium)', level: 7 },
    { name: 'Diphenhydramine (Benadryl)', level: 8 },
    { name: 'Dextrose', level: 9 },
    { name: 'Epinephrine (Adrenaline)', level: 10 },
    { name: 'Epi Drip', level: 11 },
    { name: 'Epinephrine“Push Dose” Pressor Administration', level: 12 },
    { name: 'Fentanyl', level: 13 },
    { name: 'Glucagon (GlucaGen)', level: 14 },
    { name: 'Haloperidol (Haldol)', level: 15 },
    { name: 'Hydroxocobalamin', level: 16 },
    { name: 'Ibuprofen (Motrin/Advil)', level: 17 },
    { name: 'Ipratropium (Atrovent)', level: 18 },
    { name: 'Ketamine HCL', level: 19 },
    { name: 'Ketorolac (Toradol)', level: 20 },
    { name: 'Lidocaine', level: 21 },
    { name: 'Lorazepam (Ativan)', level: 22 },
    { name: 'Magnesium Sulfate', level: 23 },
    { name: 'Morphine', level: 24 },
    { name: 'Midazolam (Versed)', level: 25 },
    { name: 'Naloxone (Narcan)', level: 26 },
    { name: 'Nitroglycerin', level: 27 },
    { name: 'Norepinephrine', level: 28 },
    { name: 'Ondansetron', level: 29 },
    { name: 'Oral Glucose', level: 30 },
    { name: 'Oxytocin (Pitocin)', level: 31 },
    { name: 'Promethazine (Phenergan)', level: 32 },
    { name: 'Sodium Bicarbonate', level: 33 },
    { name: 'Tranexamic Acid/TXA (Cyklokapron)', level: 34 },
  ];

  constructor(private navCtrl: NavController) {}

  public openItem(routurl: string): void {
    this.navCtrl.navigateForward(routurl);
  }
}
