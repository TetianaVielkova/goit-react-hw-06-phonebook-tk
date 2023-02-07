import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contacts.slice';
import filterReducer from './Contacts/filter.slice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
});

export const persistor = persistStore(store);