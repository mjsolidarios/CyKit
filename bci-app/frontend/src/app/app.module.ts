import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalibrateComponent } from './components/calibrate/calibrate.component';
import { PlotComponent } from './components/plot/plot.component';

const routes: Routes = [
  { path: 'calibrate', component: CalibrateComponent },
  { path: 'plot', component: PlotComponent },
  { path: '', redirectTo: '/plot', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CalibrateComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
