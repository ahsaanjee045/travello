
import './App.css'
import Footer from './components/Footer/Footer'
import NavbarComp from './components/NavbarComp/NavbarComp'
import AllReviewsPage from './Pages/AllReviews/AllReviewsPage'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="App">
      <NavbarComp/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
