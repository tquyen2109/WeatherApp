import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {IAppState} from "./app.interface";
import {WeatherReducer} from "./reducers/weather.reducers";


export const reducers: ActionReducerMap<IAppState> = {
 WeatherState: WeatherReducer
};
export const metaReducers: MetaReducer<IAppState>[] = [];
