import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Provider } from "react-redux"
import { store } from "./app/store"

import PrivateRoutes from "./utils/PrivateRoutes"
import PublicRoutes from "./utils/PublicRoutes"

import WelcomePage from "./pages/WelcomePage"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Публичные роуты */}
          {/* <Route element={<PublicRoutes />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route> */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}

          {/* Приватные роуты */}
          {/* <Route element={<PrivateRoutes />}>
            <Route path="/result-table" element={<TablePage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route> */}
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
