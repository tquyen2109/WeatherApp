import {createReducer, on} from "@ngrx/store";
import {WeatherDetails} from "../../features/weather/models/WeatherDetails";
import {loadWeatherDetailsSuccess} from "../actions/weather.actions";


export const initialWeatherState: IWeatherState = {
  data: null
};
export interface IWeatherState {
  data: WeatherDetails | null
}
export const WeatherReducer = createReducer(
  initialWeatherState as IWeatherState,
  on(loadWeatherDetailsSuccess, (state, {data}) => ({ ...state, data: data })),
);
