import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import { Post } from './Post';
import Home from './Home';
import About from './About';
import Travel from './Travel';
import Eat from './Eat';



function App() {
  

  return (
    <>
      <div>
      
         <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/post' element={<Post />}/>
          <Route path='/about' element={<About />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/eat' element={<Eat />} />
          </Routes>
         </Router>
      
      </div>
    </>
  )
}

export default App
