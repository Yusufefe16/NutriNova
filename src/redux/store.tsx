import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice'; // başka slice örneği

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
});

// RootState ve AppDispatch tiplerini oluştur.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
