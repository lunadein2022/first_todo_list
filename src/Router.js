import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoLife from './components/LIFE/TodoLife';
import TodoWork from './components/WORK/TodoWork';
import Intro from './components/Intro';



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/life' element={<TodoLife />} />
            <Route path='/work' element={<TodoWork />} />
        </Routes>
    </BrowserRouter>
}