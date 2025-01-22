import './App.css'
import LandingPage from './Screens/LandingPage'
import ContactUs from './Screens/ContactUs'
import Services from './Screens/Services'
import AboutUs from './Screens/AboutUs'
import Portfolio from './Screens/Portfolio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
