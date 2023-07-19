import React from 'react';
import UsersList from './components/UsersList';
import './styles.css'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Random Users</h1>
      <UsersList />
    </div>
  );
};

export default App;
