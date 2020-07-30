import React from 'react'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import RecommendedVideos from "./components/RecommendedVideos"
import './css/App.css'

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>

    </div>
  );
}

export default App;
