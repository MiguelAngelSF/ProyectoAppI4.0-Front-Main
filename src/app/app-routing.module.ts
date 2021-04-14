import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-driver',
    loadChildren: () => import('./menu-driver/menu-driver.module').then( m => m.MenuDriverPageModule)
  },
  {
    path: 'menu-passenger',
    loadChildren: () => import('./menu-passenger/menu-passenger.module').then( m => m.MenuPassengerPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'registro-auto',
    loadChildren: () => import('./registro-auto/registro-auto.module').then( m => m.RegistroAutoPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)
  },

 
  {
    path: 'autos',
    loadChildren: () => import('./autos/autos.module').then( m => m.AutosPageModule)
  },
  {
    path: 'calificar',
    loadChildren: () => import('./calificar/calificar.module').then( m => m.CalificarPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
