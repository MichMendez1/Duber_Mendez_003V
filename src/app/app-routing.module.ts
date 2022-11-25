import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'somos',
    loadChildren: () => import('./pages/somos/somos.module').then( m => m.SomosPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule),
  canActivate:[IngresadoGuard]
  },
  {
    path: 'viajar',
    loadChildren: () => import('./pages/viajar/viajar.module').then( m => m.ViajarPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'misviajes',
    loadChildren: () => import('./pages/misviajes/misviajes.module').then( m => m.MisviajesPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'api',
    loadChildren: () => import('./pages/api/api.module').then( m => m.ApiPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'salir',
    loadChildren: () => import('./pages/salir/salir.module').then( m => m.SalirPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
