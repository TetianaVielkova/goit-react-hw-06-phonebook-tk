import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from "./Contacts/contacts.slice";
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
    whitelist: ['contacts']
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const store = configureStore({
    devTools: true,
    reducer: persistedReducer, 

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
});

export const persistor = persistStore(store);