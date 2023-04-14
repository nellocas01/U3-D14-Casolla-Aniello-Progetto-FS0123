import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from '../reducers/home';

const bigReducer = combineReducers({
    home: homeReducer,
    // artist: artistReducer,
    // album: albumReducer,
})

export const store = configureStore({
  reducer: bigReducer,
});

export default store
