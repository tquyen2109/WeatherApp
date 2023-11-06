import { Component } from '@angular/core';
import {WeatherDetails} from "../models/WeatherDetails";
import {Observable, Subscription} from "rxjs";
import {IAppState} from "../../../store/app.interface";
import {Store} from "@ngrx/store";
import {selectWeatherDetails} from "../../../store/selectors/weather.selelctors";
import {loadWeatherDetails} from "../../../store/actions/weather.actions";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  weatherDetails$: Observable<WeatherDetails | null>;
  isGoOut: string = '';
  isWearSunscreen: string = '';
  isFlyKite: string = '';
  weatherDetailsSubscription: Subscription = Subscription.EMPTY;
  constructor(private store: Store<IAppState>) {
    this.weatherDetails$ = this.store.select(selectWeatherDetails);
  }

  ngOnInit(): void {
    this.weatherDetailsSubscription = this.weatherDetails$.subscribe(details => {
      if(details !== null) {
        this.setIsGoOutFlag(details);
        this.setIsWearSunscreenFlag(details);
        this.setIsFlyKiteFlag(details);
      }
    })
  }
  ngOnDestroy(): void {
    this.weatherDetailsSubscription.unsubscribe();
  }

  private setIsFlyKiteFlag(details: WeatherDetails) {
    if (!details.current.weather_descriptions?.includes('Raining') && details.current.wind_speed > 15) {
      this.isFlyKite = 'Yes'
    } else {
      this.isFlyKite = 'No'
    }
  }

  private setIsWearSunscreenFlag(details: WeatherDetails) {
    if (details.current.uv_index > 3) {
      this.isWearSunscreen = 'Yes'
    } else {
      this.isWearSunscreen = 'No'
    }
  }

  private setIsGoOutFlag(details: WeatherDetails) {
    if (details.current.weather_descriptions?.includes('Raining')) {
      this.isGoOut = 'No'
    } else {
      this.isGoOut = 'Yes'
    }
  }

  onKey($event: any) {
    console.log($event.target.value);
    this.store.dispatch(loadWeatherDetails($event.target.value));
  }
}
