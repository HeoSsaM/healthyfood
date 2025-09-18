import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Tips from './pages/Tips';
import About from './pages/About';
import MealsDetail from './pages/MealsDetail'

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleToggleAuth = () => setIsLoggedIn(v => !v);
  return (
    <div className="wrap">
      <Navbar isLoggedIn={isLoggedIn} onToggleAuth={handleToggleAuth}/>

      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/meals/:id' element={<MealsDetail />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>

      <footer className='site-footer'>
        <small>&copy; {new Date().getFullYear()} MealLight</small>
      </footer>
    </div>
  );
}

export default App;
