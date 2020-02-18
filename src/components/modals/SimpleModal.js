import React, { useState } from 'react';
import '../modals/Modals.css';

function Modals(config) {
    console.log(config.props.buttonText);
    let buttonText;
    if(config.props.buttonText) {
        buttonText = config.props.buttonText;
     } else {
        buttonText =  "Close";
     }

  const hideModal = () =>{

  }
    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={hideModal}>&times;</span>
                    <h2>Modal Content</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eros ante, 
                        vulputate in nunc id, mollis dignissim justo. Vestibulum nec dolor tortor.
                        Donec vestibulum mauris at odio lobortis, porta consectetur enim mollis.
                        Pellentesque porttitor viverra metus, eget viverra nibh commodo vitae.
                        In aliquet magna sit amet ex dapibus porta. Integer ac pharetra arcu, in ullamcorper mi.
                        Curabitur ac risus non massa varius fringilla. Suspendisse ac dui non mauris posuere feugiat 
                        ut id purus. In ligula metus, suscipit in dapibus in, lacinia non ipsum. Vestibulum ante ipsum 
                    </p>
                        <button style={{ marginLeft: "80%",  minWidth: '20%', overflow: 'hidden', textAlign: 'center'}}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Modals;