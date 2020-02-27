import React, { useState, useEffect } from "react";
import axios from 'axios';

const Analytics = () => {
  const [ticketDump, setData] = useState({ticketDump: 'Nothing projects found!'});
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    axios({
      method: 'Get',
      url: 'http://localhost:5000/api/v1/newproject/find/findall',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': authData.accessToken
      }
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data.result.length === 0) {
          setData({ticketDump: 'Something to show!'});
        }
      } else {
        console.log(res.status);
      }
    })
    .catch(err => {
      console.log('err', err);
    });
  }, []);
  return (
    <div>
      <h2>Analytics</h2>
      {ticketDump.ticketDump}
    </div>
  );
};

export default Analytics;