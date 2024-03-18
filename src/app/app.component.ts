import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WeatherComponent } from './weather/weather.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormComponent, WeatherComponent, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
