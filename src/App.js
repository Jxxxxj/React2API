import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import './App.css';
import UserContext from './contexts/UserContext';

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider
      value={{ isOnline: isOnline, setIsOnline: setIsOnline }}
    >
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;