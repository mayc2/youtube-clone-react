import React from 'react';
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      {/* Sidebar -> <Sidebar />  */}
      {/* RecommendedVideos -> <RecommendedVideos />  */}

    </div>
  );
}

export default App;
