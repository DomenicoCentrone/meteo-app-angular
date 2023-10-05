import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
