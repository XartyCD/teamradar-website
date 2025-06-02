import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Provider } from "react-redux"
import { store } from "./app/store"

import PublicRoutes from "./utils/PublicRoutes"
import ScrollToTop from "./utils/ScroolToTop"

import WelcomePage from "./pages/WelcomePage"
import BoardPage from "./pages/BoardPage"
import AnketsPage from "./pages/AnketsPage"
import CommunityPage from "./pages/CommunityPage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Публичные роуты */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<WelcomePage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/welcome" element={<WelcomePage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/board" element={<BoardPage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/forms" element={<AnketsPage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/community" element={<CommunityPage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/community/:section" element={<CommunityPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />

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
