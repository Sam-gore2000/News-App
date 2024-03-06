import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';


export default class App extends Component {


  render() {
    return (
      <div>
    <Navbar/>
    
    <Router>
      <Routes>
      <Route  exect path='/News'  element={<News    key="general" pageSize={5} country={'in'} category={'general'}/>}/>
      <Route exect path='/business' element={<News  key="business"  pageSize={5} country={'in'} category={'business'}/>}/>
      <Route exect path='/entertainment' element={<News  key="entertainment"  pageSize={5} country={'in'} category={'entertainment'}/>}/>
      <Route exect path='/general' element={<News  key="general"  pageSize={5} country={'in'} category={'general'}/>}/>
      <Route exect path='/health' element={<News   key="health" pageSize={5} country={'in'} category={'health'}/>}/>
      <Route exect path='/science' element={<News   key="science" pageSize={5} country={'in'} category={'science'}/>}/>
      <Route exect path='/sports' element={<News s key="sports" pageSize={5} country={'in'} category={'sports'}/>}/>
      <Route exect path='/technology' element={<News  key="technology"  pageSize={5} country={'in'} category={'technology'}/>}/>
     

      </Routes>
    </Router>
    
      </div>
    )
  }
}

