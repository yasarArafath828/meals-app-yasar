import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import Place from './pages/Place';
import Ingredient from './pages/Ingredient';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes >
            <Route path="/" exact element={<Login />} />
            <Route path ="/dashboard" element={<Dashboard />} />
            <Route path ="/category" element={<Category />} />
            <Route path ="/place" element={<Place />} />
            <Route path ="/ingredient" element={<Ingredient />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
