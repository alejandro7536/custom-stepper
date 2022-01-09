import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdkStepperComponent } from './components/cdk-stepper/cdk-stepper.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepperModule} from '@angular/cdk/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CdkStepperComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CdkStepperModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
