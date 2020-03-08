import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function NewProjectRequest() {

    const { register, handleSubmit } = useForm();
    const authData = JSON.parse(localStorage.getItem("auth"));
    const onsubmit = (formData) => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/v1/newproject/create',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': authData.accessToken
            },
            data: {
                customerName: formData.customerName,
                product: formData.product,
                productVersion: formData.productVersion,
                releases: formData.releases,
                priority: formData.priority,
                summary: formData.summary,
                description: formData.description,
                assignedTo: formData.assignedTo,
                phase: formData.phase,
                repoLink: formData.repoLink,
                files: formData.files
            }
        })
        .then((res) => {
            console.log('res', res);
        })
        .catch((e) =>{
            console.log('error', e)
        });
    }
    
    return (
        <div className="container">
            <h3>Create a New Project Request</h3>
            <hr />
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="row">
                    <div className="four columns">
                        <label>Customer Name*</label>
                        <input className="u-full-width" type="text" placeholder="customer name..." name="customerName" ref={register({ required: true })} />
                    </div>
                    <div className="four columns">
                        <label>Product*</label>
                        <input className="u-full-width" type="text" placeholder="Product..." name="product" ref={register({ required: true })} />
                    </div>
                    <div className="four columns">
                        <label>Product Version</label>
                        <input className="u-full-width" type="text" placeholder="Product version..." name="productVersion" ref={register({ required: false })}/>
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <label>Releases</label>
                        <input className="u-full-width" type="text" placeholder="Releases..." name="releases" ref={register({ required: false })} />
                    </div>
                    <div className="four columns">
                        <label>Summary*</label>
                        <input className="u-full-width" type="text" placeholder="Summary..." name="summary" ref={register({ required: true })} />
                    </div>
                    <div className="four columns">
                        <label>Assign To</label>
                        <input className="u-full-width" type="text" placeholder="Assign to..." name="assignTo" ref={register({ required: false })} />
                    </div>
                </div>

                <div className="row">
                    <div className="four columns">
                        <label>Repo Link</label>
                        <input className="u-full-width" type="text" placeholder="Repo link..." name="repoLink" ref={register({ required: false })}/>
                    </div>
                    <div className="four columns">
                        <label>Priority*</label>
                        <select className="u-full-width" name="priority" ref={register({ required: true })}>
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
                           <div className="fileInputText">Browse...</div><input type="file" name="file" ref={register({ required: false })}/>
                        </div>
                    </div>
                </div>

                <label>Description*</label>
                <textarea className="u-full-width" placeholder="User Story …" name="description" ref={register({ required: true })}></textarea>
                <input className="button-primary" type="submit" value="Save" />
            </form>
        </div>
    )
}

export default NewProjectRequest
