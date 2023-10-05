// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = '1f57e49219d92e15c86d597119e83415';
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  
  constructor(private http: HttpClient) { }
  
  getWeatherForCity(city: string) {
    return this.http.get(`${this.BASE_URL}q=${city}&appid=${this.API_KEY}&units=metric&lang=it`);
  }
}
