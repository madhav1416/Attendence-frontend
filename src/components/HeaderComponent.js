import React from "react";
import '../css/HeaderComponent.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';
function Header() {
    const history = useHistory();
    const handleClickLogout = () => {
        localStorage.clear();
        history.push('/login');
    }
    return(
        <div className="header">
        <IconButton onClick={handleClickLogout} size="large" edge="start" style={{marginLeft : "97%" , color : "white" , height : "47px"}} className="chat-icon-button"><ExitToAppIcon className="chat-icon"/></IconButton>
        </div>
    )
}

export default Header;