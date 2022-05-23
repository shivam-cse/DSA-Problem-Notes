import './App.css';
import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import ProblemState from './contextApi/problems/ProblemState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Problems from './components/Problems';
import AddProblems from './components/AddProblems';


function App() {
  return (
    <>
      <ProblemState>
        <BrowserRouter>
          <Fragment>
            <Navbar />
            {/* <Alert/> */}
            {/* <div className='container'> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/problems" element={<Problems />} />
              <Route exact path="/add-problems" element={<AddProblems />} />
            </Routes>
            {/* </div> */}
          </Fragment>
        </BrowserRouter>
      </ProblemState>
    </>
  );
}


export default App;
