import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext'
import ProtectedRoute from './components/ProtectedRoute'
import Landing from './pages/Landing'
import AboutUs from './pages/AboutUs'
import Packages from './pages/Packages'
import ContactUs from './pages/ContactUs'
import Policy from './pages/Policy'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Account from './pages/Account'

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AppContextProvider>
  )
}

export default App