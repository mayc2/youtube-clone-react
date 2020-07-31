import React, { useState } from 'react'
import '../css/Header.css'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchSharpIcon from '@material-ui/icons/SearchSharp'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp'
import AppsSharpIcon from '@material-ui/icons/AppsSharp'
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp'
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom"

function Header() {
    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <Link to="/">
                    <img
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/800px-Youtube.png" 
                        alt=""
                    />
                </Link>
            </div>
            <div className="header__input">
                <input 
                    placeholder=" Search" 
                    type="text" 
                    value={inputSearch}
                    onChange = {e => setInputSearch(e.target.value)}
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className="header__inputButton" />    
                </Link>
                
            </div>
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon"/>
                <AppsSharpIcon className="header__icon"/>
                <NotificationsSharpIcon className="header__icon"/>
                <Avatar
                    alt="Chris May"
                    src="https://avatars2.githubusercontent.com/u/6495407?s=400&u=634ec6a65cf67a65391d44d9ff4e1bfa74e33d80&v=4"
                    className="header__icon"
                />
            </div>
        </div>
    )
}

export default Header