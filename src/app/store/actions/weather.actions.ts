import {createAction, props} from "@ngrx/store";
import {WeatherDetails} from "../../features/weather/models/WeatherDetails";

export const loadWeatherDetails = createAction(
  '[Weather] Load weather details',
  props<{zipCode: string}>()
)

export const loadWeatherDetailsSuccess = createAction(
  '[Weather] Load weather details success',
  props<{data: WeatherDetails}>()
)
