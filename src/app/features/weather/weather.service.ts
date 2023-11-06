import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {WeatherDetails} from "./models/WeatherDetails";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = environment.weatherApiURI;
  constructor(private http: HttpClient) { }

  getWeatherDetails(zipCode: string) :Observable<WeatherDetails> {
    return this.http.get<WeatherDetails>(this.weatherUrl + 'weather?query=' +  zipCode);
  }
}
