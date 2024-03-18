import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherData {
  time: string[];
  temperature: number[];
  wind_speed: number[];
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  constructor(private http: HttpClient) { }

  data: WeatherData = {
    time: [],
    temperature: [],
    wind_speed: []
  };


  ngOnInit(): void {
    this.http.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
      .subscribe((response: any) => {
        this.data.time = response.hourly['time'];
        this.data.temperature = response.hourly['temperature_2m'];
        this.data.wind_speed = response.hourly['wind_speed_10m'];
      });
  }
}
