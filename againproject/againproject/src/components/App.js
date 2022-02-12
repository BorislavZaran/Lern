import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = (props) => {

  return ( 
      <div className = 'app-wrapper'>
        <Header />
        <Nav />
        <div className = 'app-wrapper-content'> 
          <Routes> 
            <Route path="/dialogs/*" element={ <Dialogs state = {props.state.dialogsPage} /> } />
            <Route path="/profile/*" element={ <Profile state = {props.state.profilePage} 
                                                        addPost = {props.addPost}/> } />
            </Routes> 
        </div>
      </div>
  )
}

export default App;

