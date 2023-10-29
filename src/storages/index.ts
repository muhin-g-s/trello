import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"

const redusers = combineReducers({
    //TODO add reduser
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReduser = persistReducer(persistConfig, redusers)

export const store = configureStore({
    reducer: {
        persistedReduser,
        //TODO add reduser non-localstorage
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)

export type AppDispatcher = typeof store.dispatch
export const useAppDispatcher = () => useDispatch<AppDispatcher>() 