import React from 'react'

function NewProjectRequest() {
    return (
        <div className="container">
            <h3>Create a New Project Request</h3>
            <hr />
            <form>
                <div className="row">
                    <div className="four columns">
                        <label>Customer Name*</label>
                        <input className="u-full-width" type="text" placeholder="customer name..." id="_customerName" />
                    </div>
                    <div className="four columns">
                        <label>Product*</label>
                        <input className="u-full-width" type="text" placeholder="Product..." id="_product" />
                    </div>
                    <div className="four columns">
                        <label>Product Version</label>
                        <input className="u-full-width" type="text" placeholder="Product version..." id="_productVersion" />
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <label>Releases</label>
                        <input className="u-full-width" type="text" placeholder="Releases..." id="_releases" />
                    </div>
                    <div className="four columns">
                        <label>Summary*</label>
                        <input className="u-full-width" type="text" placeholder="Summary..." id="_summary" />
                    </div>
                    <div className="four columns">
                        <label>Assign To</label>
                        <input className="u-full-width" type="text" placeholder="Assign to..." id="_assignTo" />
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <label>Repo Link</label>
                        <input className="u-full-width" type="text" placeholder="Repo link..." id="_repoLink" />
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

                <label>Description*</label>
                <textarea className="u-full-width" placeholder="User Story …" id="_description"></textarea>
                <label className="example-send-yourself-copy">
                    <input type="checkbox" />
                    <span className="label-body">Send a copy to yourself</span>
                </label>
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default NewProjectRequest
