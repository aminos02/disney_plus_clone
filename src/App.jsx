import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


{/* <Header/>
<Home/> */}
