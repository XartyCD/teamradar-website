// src/features/auth/authSlice.ts
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode"

const CONNECTURL = "http://localhost:3000"

interface AuthState {
  user: string
  accessToken: string | null
  refreshToken: string | null
}

const initialState: AuthState = {
  user: localStorage.getItem("user") || "",
  accessToken: localStorage.getItem("access_token") || null,
  refreshToken: localStorage.getItem("refresh_token") || null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      localStorage.setItem("access_token", action.payload.accessToken)
      localStorage.setItem("refresh_token", action.payload.refreshToken)
    },

    signOut: (state) => {
      state.accessToken = null
      state.refreshToken = null
      state.user = ""
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("user")
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload
      localStorage.setItem("user", action.payload)
    },
  },
})

export const { signIn, signOut, setUser } = authSlice.actions

export const checkTokens = () => async (dispatch: any, getState: any) => {
  const { accessToken, refreshToken } = getState().auth
  if (!accessToken || !refreshToken) return

  try {
    const decoded: any = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000

    if (decoded.exp < currentTime) {
      await dispatch(verifyAccess())
    }
  } catch {
    dispatch(signOut())
  }
}

export const verifyAccess = () => async (dispatch: any, getState: any) => {
  const { refreshToken } = getState().auth

  try {
    const response = await fetch(`${CONNECTURL}/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    const data = await response.json()

    if (!data.access_token) throw new Error(data.message)

    dispatch(signIn({ accessToken: data.access_token, refreshToken }))
    console.log("✅ Токен обновлён")
  } catch {
    dispatch(signOut())
  }
}

export default authSlice.reducer
