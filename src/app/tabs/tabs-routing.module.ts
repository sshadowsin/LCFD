import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'category-content/:level',
        loadChildren: () => import('../subpages/category-content/category-content.module').then(m => m.CategoryContentPageModule)
      },
      {
        path: 'drugs-content/:level',
        loadChildren: () => import('../subpages/drugs-content/drugs-content.module').then( m => m.DrugsContentPageModule)
      },
      {
        path: 'protocols-content/:level',
        loadChildren: () => import('../subpages/protocols-content/protocols-content.module').then( m => m.ProtocolsContentPageModule)
      },
      {
        path: 'refrence-content/:level',
        loadChildren: () => import('../subpages/refrence-content/refrence-content.module').then( m => m.RefrenceContentPageModule)
      },
      {
        path: 'category-info/:level',
        loadChildren: () => import('../subpages/category-info/category-info.module').then( m => m.CategoryInfoPageModule)
      },


      {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
