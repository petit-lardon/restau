import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainTableComponent } from './main-table/main-table.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'carte', component: CarteComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReservationComponent,
    ContactComponent,
    MainDashboardComponent,
    MainTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
