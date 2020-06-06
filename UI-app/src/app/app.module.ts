import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseAppComponent } from './base-app/base-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule,MatBadgeModule,MatSnackBarModule,
  MatGridListModule, MatInputModule, MatButtonModule, MatIconModule,MatTooltipModule,
  MatAutocompleteModule,MatCardModule,MatDividerModule, MatSelectModule,MatDialogModule} from '@angular/material';
import { ReactiveFormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BaseAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatBadgeModule,
    MatSnackBarModule,MatIconModule,MatTooltipModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
