import React from 'react';

import { FaTachometerAlt, FaBriefcase, FaBug, FaExclamationTriangle, FaScroll, FaStopwatch, FaLock, FaChartBar } from 'react-icons/fa';
import NewProjectRequest from './newprojectrequest/NewProjectRequest';
import Dashboard from './dashboard/Dashboard';
import Epic from './epic/Epic';
import Sprint from './sprint/Sprint';
import { Link } from 'react-router-dom';

function Navigation(props) {
    const displayNewProjectPage = () => {
        // console.log(props); /**props.value is the whole function from App.js passed here */
        document.title = 'New Project Requests'
        props.vlaue({ componentName: <NewProjectRequest /> });
    }

    const displayDashBoard = () => {
        document.title = 'DashBoard'
        props.vlaue({ componentName: <Dashboard /> });
    }

    const displayEpicPage = () => {
        document.title = 'New Epic'
        props.vlaue({ componentName: <Epic /> });
    }

    const displaySprintPage = () => {
        document.title = 'New Sprint'
        props.vlaue({ componentName: <Sprint /> });
    }
    return (
        <div className="side-nav">
            <input type="text" placeholder="Request ID.." />
            <div className="divider-light"></div>
            <Link to={"/"}>
                <div className="side-nav-button">
                    <span><FaTachometerAlt /></span>Dashboard
                </div>
            </Link>
            <Link to={"/newproject"}>
                <div className="side-nav-button">
                    <span><FaBriefcase /></span>New Project Request
                </div>
            </Link>
            <Link to={"/epic"}>
                <div className="side-nav-button">
                    <span><FaScroll /></span>New Epic
                </div>
            </Link>
            <Link to={"/sprint"}>
                <div className="side-nav-button">
                    <span><FaStopwatch /></span>New Sprint
                </div>
            </Link>
            <Link to={"/bugfix"}>
                <div className="side-nav-button">
                    <span><FaBug /></span>Bug Fix Request
                </div>
            </Link>
            <Link>
                <div className="side-nav-button">
                    <span><FaExclamationTriangle /></span>Application Failure Incident
                </div>
            </Link>
            <Link to={"/security"}>
                <div className="side-nav-button">
                    <span><FaLock /></span>Security
                </div>
            </Link>
            <Link to={"/analytics"}>
                <div className="side-nav-button">
                    <span><FaChartBar /></span>Analytics
                </div>
            </Link>
        </div>
    );
}

export default Navigation;
