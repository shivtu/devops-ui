import React from 'react';

import { FaTachometerAlt, FaBriefcase, FaBug, FaExclamationTriangle, FaScroll, FaStopwatch, FaLock } from 'react-icons/fa';
import NewProjectRequest from './newprojectrequest/NewProjectRequest';
import Dashboard from './dashboard/Dashboard';
import Epic from './epic/Epic';
import Sprint from './sprint/Sprint';

function Navigation(props) {
    const displayNewProjectPage = () =>{
        // console.log(props); /**props.value is the whole function from App.js passed here */
        document.title = 'New Project Requests'
        props.vlaue({componentName: <NewProjectRequest/>});
    }

    const displayDashBoard = () =>{
        document.title = 'DashBoard'
        props.vlaue({componentName: <Dashboard/>});
    }

    const displayEpicPage = () =>{
        document.title = 'New Epic'
        props.vlaue({componentName: <Epic/>});
    }

    const displaySprintPage = () =>{
        document.title = 'New Sprint'
        props.vlaue({componentName: <Sprint/>});
    }
    return (
        <div className="side-nav">
            <input type="text" placeholder="Request ID.." />
            <div className="divider-light"></div>
            <a href="#" onClick={displayDashBoard}>
                <div className="side-nav-button">
                    <span><FaTachometerAlt/></span>Dashboard
                </div>
            </a>
            <a href="#" onClick={displayNewProjectPage}>
                <div className="side-nav-button">
                    <span><FaBriefcase/></span>New Project Request
                </div>
            </a>
            <a href="#" onClick={displayEpicPage}>
                <div className="side-nav-button">
                    <span><FaScroll/></span>New Epic
                </div>
            </a>
            <a href="#" onClick={displaySprintPage}>
                <div className="side-nav-button">
                    <span><FaStopwatch/></span>New Sprint
                </div>
            </a>
            <a href="#">
                <div className="side-nav-button">
                    <span><FaBug/></span>Bug Fix Request
                </div>
            </a>
            <a href="#">
                <div className="side-nav-button">
                    <span><FaExclamationTriangle/></span>Application Failure Incident
                </div>
            </a>
            <a href="#">
                <div className="side-nav-button">
                    <span><FaLock/></span>Security
                </div>
            </a>
        </div>
    );
}

export default Navigation;
