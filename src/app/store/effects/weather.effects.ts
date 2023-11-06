import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, map} from "rxjs";
import {loadWeatherDetails, loadWeatherDetailsSuccess} from "../actions/weather.actions";
import {WeatherService} from "../../features/weather/weather.service";

@Injectable()
export class WeatherEffects {
  constructor(private weatherService: WeatherService, private actions$: Actions) {
  }

  // loadWeatherDetails$ =  createEffect(() => this.actions$.pipe(
  //   ofType(loadWeatherDetails),
  //   concatMap(action => this.weatherService.getWeatherDetails(action.zipCode)),
  //     map(data => loadWeatherDetailsSuccess({data}))
  //   ),
  // );

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(loadWeatherDetails),
    concatMap(() => this.weatherService.getWeatherDetails('222222').pipe(
      map(data => loadWeatherDetailsSuccess({data}))
    )))
  );
}
