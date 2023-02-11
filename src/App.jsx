import './App.css'
import * as React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Home from './Home';
import {Route,Routes } from "react-router-dom"
dayjs.extend(customParseFormat);
import History from './History';




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>

    </Routes>  
    </>
  )
}
export default App
