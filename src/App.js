import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TodoLife from './components/LIFE/TodoLife';
import TodoWork from './components/WORK/TodoWork';
import Intro from './components/Intro';





function App() {
  return (
    <BrowserRouter>
      <div className='app'>

        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/life' element={<TodoLife />} />
          <Route path='/work' element={<TodoWork />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
