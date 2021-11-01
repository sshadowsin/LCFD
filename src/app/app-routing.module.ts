import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectLoggedInToHome },
    },
    {
      path: '',
      loadChildren: () =>
        import('./fingerprint/fingerprint.module').then(
          (m) => m.FingerprintPageModule
        ),
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
    },
    {
    path: 'inside',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  // {
  //   path: 'category-info',
  //   loadChildren: () => import('./subpages/category-info/category-info.module').then( m => m.CategoryInfoPageModule)
  // },
  // {
  //   path: 'category-content/:level',
  //   loadChildren: () =>
  //     import('./subpages/category-content/category-content.module').then(
  //       (m) => m.CategoryContentPageModule
  //     ),
  // },
  // {
  //   path: 'drugs-content/:level',
  //   loadChildren: () => import('./subpages/drugs-content/drugs-content.module').then( m => m.DrugsContentPageModule)
  // },
  // {
  //   path: 'protocols-content/:level',
  //   loadChildren: () => import('./subpages/protocols-content/protocols-content.module').then( m => m.ProtocolsContentPageModule)
  // },
  // {
  //   path: 'refrence-content/:level',
  //   loadChildren: () => import('./subpages/refrence-content/refrence-content.module').then( m => m.RefrenceContentPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
