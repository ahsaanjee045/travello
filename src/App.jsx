
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavbarComp from './components/NavbarComp/NavbarComp'
import AllReviewsPage from './Pages/AllReviews/AllReviewsPage'
import Home from './Pages/Home/Home'
import LoginPage from './Pages/LoginPage/LoginPage'

function App() {

  return (
    <div className="App">
      <NavbarComp/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/allreviews' element={<AllReviewsPage/>}/>
          {/* localhost:5173/user/login */}
          <Route path='/user'>
            <Route path=':login' element={<LoginPage/>} />
            <Route path=':register' element={<LoginPage/>} />
          </Route>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
