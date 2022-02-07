import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About'
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
