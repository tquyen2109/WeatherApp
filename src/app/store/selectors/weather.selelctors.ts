import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IWeatherState} from "../reducers/weather.reducers";

export const featureKey = 'WeatherState';

export const selectFeature = createFeatureSelector<IWeatherState>(featureKey);
export const selectWeatherDetails = createSelector(
  selectFeature,
  state => {return state.data}
);
