// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
