import React from 'react'
import './css/App.css'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SearchPage from "./components/SearchPage"
import RecommendedVideos from "./components/RecommendedVideos"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Avatar } from '@material-ui/core'

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
