import React, { Component } from 'react';
import './Header.css';
import { FaUserFriends, FaUserCog, FaUser, FaImage, FaLock, FaSearch, FaSignOutAlt } from 'react-icons/fa';

function Header() {
    const logOut = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="header-section">
            <h5>
                <span>
                    <FaUserFriends />Devops Management
                </span>
                <input type="text" placeholder="Advance Search Query..." style={{width: "50%"}}/><span><FaSearch/></span>
                <div className="floatRight">
                    <div className="dropdown">
                        <FaUserCog />Profile
                        <div className="dropdown-content">
                            <span><FaUser/> <br/>Personal Details</span>
                            <span><FaImage/> <br/>Display Picture</span>
                            <span><FaLock/> Password Settings</span>
                            <span onClick={logOut}><FaSignOutAlt/> <br/>Log Out</span>
                        </div>
                    </div>
                </div>
            </h5>
        </div>
    )
}

export default Header
