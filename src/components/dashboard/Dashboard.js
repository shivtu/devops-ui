import React, { useState, useEffect } from "react";

import SimpleModal from '../../assets/modals/SimpleModal';
import Cards from "../../assets/cards/Cards";

function Dashboard() {
  const [ticketDump, setData] = useState([]);
  const [showModal, modalState] = useState(false);
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    console.log('authData', authData);
    const response = fetch("http://localhost:5000/api/v1/newproject/find/findall", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authData.accessToken
      }
    });
    const data = response.then(data => data.json());
    data
      .then(res => {
        if(res.result === "Unauthenticated request") {
          localStorage.clear();
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log("err".err);
      });
  }, []);

  return (
     <div className="container">
     <h3>Dashboard</h3>
      <div className="row">
        <div className="three columns">
          <Cards cardConfig={{header: 'Projects'}} />
        </div>
        <div className="three columns">
          <Cards cardConfig={{header: 'Epics'}} />
        </div>
        <div className="three columns">
          <Cards cardConfig={{header: 'Sprints'}} />
        </div>
        <div className="three columns">
          <Cards cardConfig={{header: 'Bugs'}} />
        </div>
      </div>
      <hr/>
     <div className="row">
      <div className="twelve columns">
        <h5>News Feed</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
     </div>
      
      
      {/* {showModal ? <SimpleModal
        props={
          {
            modalButtonText: "close",
            modalHeaderText: 'Modal Header Text',
            modalBody:
                <div>
                  <p>Modal body text</p>
                </div>,
            modalState: modalState,
            displayModal: true
          }
        }
      /> : null}
      <button onClick={() => modalState(true)}>Open Modal</button> */}
    </div>
  );
}

export default Dashboard;
