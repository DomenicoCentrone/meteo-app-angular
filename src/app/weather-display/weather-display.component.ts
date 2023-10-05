import { Component } from '@angular/core';
import { WeatherService } from '../weather.service'; // correggi il percorso del servizio se necessario

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {

  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  searchWeatherForCity(city: string) {
    this.weatherService.getWeatherForCity(city).subscribe(data => {
      this.weatherData = data;
    });
  }
}
