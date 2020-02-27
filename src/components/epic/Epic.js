import React from 'react'

function Epic() {
    return (
        <div className="container">
            <h3>Create an Epic</h3>
            <hr />
            <form>
                <div className="row">
                    <div className="four columns">
                        <label>Project ID*</label>
                        <input className="u-full-width" type="text" placeholder="NPR ID..." id="_nprId" />
                    </div>
                    <div className="four columns">
                        <label>Product Version*</label>
                        <input className="u-full-width" type="text" placeholder="Product Version..." id="_productVersion" />
                    </div>
                    <div className="four columns">
                        <label>Summary</label>
                        <input className="u-full-width" type="text" placeholder="Summary..." id="_summary" />
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <label>Back Logs*</label>
                        <input className="u-full-width" type="text" placeholder="Back Logs..." id="_backLogs" />
                    </div>
                    <div className="four columns">
                        <label>Priority*</label>
                        <select className="u-full-width" id="exampleRecipientInput">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="four columns">
                        <label>Attachments</label>
                        <div className="fileInputSpan">
                           <div className="fileInputText">Browse...</div><input type="file" />
                        </div>
                    </div>
                </div>
                <input className="button-primary" type="submit" value="Save" />
            </form>
        </div>
    )
}

export default Epic
