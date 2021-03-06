import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./splash/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./sign/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./customerside/customerwelcome/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'newaccount',
    loadChildren: () => import('./account/newaccount/newaccount.module').then( m => m.NewaccountPageModule)
  },
  {
    path: 'customer2',
    loadChildren: () => import('./customerside/customer2/customer2.module').then( m => m.Customer2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
