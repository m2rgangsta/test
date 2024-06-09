import { Routes } from '@angular/router';
import { AdminComponent } from './dashboards/directeur-espace/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './authentification/login/login.component';
import { GestionRolesComponent } from './dashboards/directeur-espace/gestion-roles/gestion-roles.component';

export const routes: Routes = [
      {
        path: '', title: 'admin', component: AdminComponent,
      },
      {
        path: 'sidebar', title: 'sidebar', component: SidebarComponent,
      },
      {
        path: 'login', title: 'login', component: LoginComponent,
      },
      {
        path: 'gestion-roles', title: 'gestion-roles', component: GestionRolesComponent,
      },      
];