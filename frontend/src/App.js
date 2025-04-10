// frontend/src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Chat from './Chat';

function App() {
  // const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <Chat /> 
  );
}

export default App;
