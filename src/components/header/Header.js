import React, { Component } from 'react';
import './Header.css';
import { FaUserFriends, FaUserCog } from 'react-icons/fa';

function Header() {
    return (
        <div className="header-section">
            <h5>
                <span><FaUserFriends/>Devops Management </span><input type="text" placeholder="Advance Search Query"/><p className="floatRight"><FaUserCog />Profile</p>
            </h5>
        </div>
    )
}

export default Header
