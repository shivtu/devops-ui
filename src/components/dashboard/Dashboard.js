import React, { useState, useEffect } from "react";
import { FaSave } from 'react-icons/fa';

import SimpleModal from '../modals/SimpleModal';

function Dashboard() {
    const [ticketDump, setData] = useState([]);
    const [showModal, modalState] = useState(false);
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
        <div >
            <h1>DashBorad</h1>
            <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros ante, 
                        vulputate in nunc id, mollis dignissim justo. Vestibulum nec dolor tortor.
                        Donec vestibulum mauris at odio lobortis, porta consectetur enim mollis.
                        Pellentesque porttitor viverra metus, eget viverra nibh commodo vitae.
                        In aliquet magna sit amet ex dapibus porta. Integer ac pharetra arcu, in ullamcorper mi.
                        Curabitur ac risus non massa varius fringilla. Suspendisse ac dui non mauris posuere feugiat 
                        ut id purus. In ligula metus, suscipit in dapibus in, lacinia non ipsum. Vestibulum ante ipsum 
                    </p> <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros ante, 
                        vulputate in nunc id, mollis dignissim justo. Vestibulum nec dolor tortor.
                        Donec vestibulum mauris at odio lobortis, porta consectetur enim mollis.
                        Pellentesque porttitor viverra metus, eget viverra nibh commodo vitae.
                        In aliquet magna sit amet ex dapibus porta. Integer ac pharetra arcu, in ullamcorper mi.
                        Curabitur ac risus non massa varius fringilla. Suspendisse ac dui non mauris posuere feugiat 
                        ut id purus. In ligula metus, suscipit in dapibus in, lacinia non ipsum. Vestibulum ante ipsum 
                    </p> <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros ante, 
                        vulputate in nunc id, mollis dignissim justo. Vestibulum nec dolor tortor.
                        Donec vestibulum mauris at odio lobortis, porta consectetur enim mollis.
                        Pellentesque porttitor viverra metus, eget viverra nibh commodo vitae.
                        In aliquet magna sit amet ex dapibus porta. Integer ac pharetra arcu, in ullamcorper mi.
                        Curabitur ac risus non massa varius fringilla. Suspendisse ac dui non mauris posuere feugiat 
                        ut id purus. In ligula metus, suscipit in dapibus in, lacinia non ipsum. Vestibulum ante ipsum 
                    </p>
            {showModal ? <SimpleModal props={{buttonText: "OK"}}/> : null}
            <button onClick={()=> modalState(true)}>Open Modal</button>
        </div>
    );
}

export default Dashboard;
