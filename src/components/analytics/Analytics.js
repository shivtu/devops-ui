import React, { useState, useEffect } from "react";
import axios from 'axios';

import ScaleLoader from "react-spinners/ScaleLoader";

const Analytics = () => {
  const [ticketDump, setData] = useState({ticketDump: 'No data'});
  const authData = JSON.parse(localStorage.getItem("auth"));
  
  useEffect((chartProps) => {
      axios({
        method: 'Get',
        url: 'http://localhost:5000/api/v1/newproject/find/findall',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': authData.accessToken
        }
      })
      .then((res) => {
        if(res.status === 200) {
         if(res.data.result.length < 1) {
           setData('No data available!');
           chartProps = 'No Data';
         } else {
          setData('Data available!');
          chartProps = res.data.result;
          console.log('useEffect', chartProps);
         }
        }
      })
      .catch(err => {
        setData('Error in fetching data');
      });
  }, []);
  return (
    ticketDump.ticketDump === 'No data'?
    <div>
      <h2 style = {{float: "left"}}>Analytics</h2>
      <ScaleLoader />
    </div>
    :
    <div>
      <h2>Analytics</h2>
      {ticketDump}
    </div>
  );
};

export default Analytics;