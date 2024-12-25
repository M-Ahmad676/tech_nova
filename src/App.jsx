import Info_bar from './components/Info_bar'
import Navbar from './components/NavBar'
import Cover from './components/Cover'
import About from './components/About'
import Project_M from './components/Project_M'
import Services from './components/Service'
import Methodoloy from './components/LifeCycle'
import OfferSection from './components/OfferCards'
import OurClientSection from './components/OurClientsSlider'
import Footer from './components/Footer'
import BottomBar from './components/Bottom_bar'
import './App.css'

function App() {

  return (
    <>
    <Info_bar/>
    <Navbar/>
     <Cover/>
     <About/>
     <Project_M/>
     <Services/>
     <Methodoloy/>
     <OfferSection/>
     <OurClientSection/>
     <Footer/>
     <BottomBar/>
    </>
  )
}

export default App
