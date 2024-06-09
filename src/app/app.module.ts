import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'; // Import any other components here
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule } from '@angular/router';
import { AdminComponent } from './dashboards/directeur-espace/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent

    
],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
