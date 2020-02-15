import React, { useState, useEffect } from "react";
import { FaSave } from 'react-icons/fa';

function Dashboard() {
    const [ticketDump, setData] = useState([]);
    useEffect(() => {
        const response = fetch("http://localhost:5000/api/v1/newproject/findAll");
        const data = response.then(data => data.json());
        data
          .then(result => {
            console.log('result', result);
            // result !== 'Unauthenticated request' ? setData(result.result) : setData([]);
            // setData(result.result);
          })
          .catch((err) => {
            console.log("err". err);
          });
      }, []);

    return (
        <div className="container">
            <span><FaSave/></span>
        </div>
    );
}

export default Dashboard;
