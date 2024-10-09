import React from 'react';
import Parallax from './Parallax';
import ReadMore from './ReadMore.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>

            <Routes>
              <Route path="/" element={<Parallax/>} />
              <Route path='readMore' element={<ReadMore />}/>
            </Routes>

    </Router>
  );
}

export default App;

