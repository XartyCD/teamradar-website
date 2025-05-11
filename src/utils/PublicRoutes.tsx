import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../app/store"

const PublicRoutes = () => {
  const user = useSelector((state: RootState) => state.auth.user)

  return user ? <Navigate to="/result-table" /> : <Outlet />
}

export default PublicRoutes
