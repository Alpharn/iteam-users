import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { SiteLayoutComponent } from 'src/app/navigation/components/site-layout/site-layout.component';
import { HeaderTitles } from 'src/app/navigation/constants/constants';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    component: SiteLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { header: HeaderTitles.home },
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
        data: { header: HeaderTitles.user },
      },
      {
        canActivate: [],
        path: 'admin',
        component: HomeComponent,
        data: { header: HeaderTitles.admin },
      },
      {
        path: 'projects',
        component: HomeComponent,
        data: { header: HeaderTitles.projects },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
