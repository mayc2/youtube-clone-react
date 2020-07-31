import React from 'react'
import '../css/App.css'
import Header from "./Header"
import Sidebar from "./Sidebar"
import SearchPage from "./SearchPage"
import RecommendedVideos from "./RecommendedVideos"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="search_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;
