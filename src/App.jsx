import './App.css'
import LandingPage from './Screens/LandingPage'
import ContactUs from './Screens/ContactUs'
import Services from './Screens/Services'
import AboutUs from './Screens/AboutUs'
import Portfolio from './Screens/Portfolio'
import NavBar from './components/NavBar'
import Info_bar from './components/Info_bar'
import Footer from './components/Footer'
import CopyRightBar from './components/Bottom_bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
     <Info_bar/>
     <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
      </Routes>
      <Footer/>
      <CopyRightBar/>
     </Router>
    </>
  )
}

export default App
