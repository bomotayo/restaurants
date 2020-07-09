import React from 'react';
import RestaurantList from './RestaurantList';
import SearchBar from './SearchBar';
import './App.css';


const App = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return(
    <div className="ui container main-container">
      <h1 className="main-title" onClick={refreshPage}>RESTAURANT FINDER</h1>
      <SearchBar />
      <RestaurantList />
    </div>
  )
};

export default App;