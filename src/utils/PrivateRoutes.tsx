import { Outlet, Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../app/store"
import { checkTokens } from "../features/auth/authSlice"

const PrivateRoutes = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authToken = useSelector((state: RootState) => state.auth.accessToken)

  useEffect(() => {
    dispatch(checkTokens())
  }, [dispatch])

  return authToken ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
