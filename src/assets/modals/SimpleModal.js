import React, { useState } from 'react';
import './Modals.css';

function Modals(modalConfig) {

    // console.log(modalConfig.props);
    let modalButtonText = modalConfig.props.modalButtonText ? modalConfig.props.modalButtonText : "Close";
    let modalHeaderText = modalConfig.props.modalHeaderText ? modalConfig.props.modalHeaderText : null;
    let modalBody = modalConfig.props.modalBody ? modalConfig.props.modalBody : null;
    let headerBackgroundColor = modalConfig.props.headerColor ? modalConfig.props.headerColor : "white";
    let modalHeaderTextColor = modalConfig.props.modalHeaderTextColor ? modalConfig.props.modalHeaderTextColor : "black";
    let toggleModalView = modalConfig.props.displayModal ? "block" : "none";   

    const hideModal = () => {
        modalConfig.props.modalState(false);
    }
    return (
        <div style={{display : toggleModalView}}>
            {console.log('modalState', modalConfig.props.displayModal)}
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={hideModal}>&times;</span>
                    <h2 style={{ backgroundColor: headerBackgroundColor, color: modalHeaderTextColor }}>{modalHeaderText}</h2>
                    {modalBody}
                    <button style={{ marginLeft: "80%", minWidth: '20%', overflow: 'hidden', textAlign: 'center' }} onClick={hideModal} >{modalButtonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Modals;