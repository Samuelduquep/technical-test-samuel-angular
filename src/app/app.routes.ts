import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [{ path: 'weather', title: "Weather", component: WeatherComponent }, { path: 'form', title: "Form Validation", component: FormComponent }];
