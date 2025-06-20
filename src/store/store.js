import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import alumnosReducer from './alumnosSlice';  // Reducer para manejar los datos de los alumnos

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    datosAlumnoRedux: alumnosReducer, // Maneja alumnos
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
