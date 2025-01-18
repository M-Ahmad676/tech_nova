import './App.css'
import LandingPage from './Screens/LandingPage'
import ContactUs from './Screens/ContactUs'
import Services from './Screens/Services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
