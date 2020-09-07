import React from 'react'
import Form from "./index"
import "./FormWrapper.css";

function FormWrapper() {
    return (
        <div className="formwrapper">
            <div className="formwrapper__content">
<h2>Opportunity is everywhere</h2>
<p>Make the most of your time on the road on the platform with the largest network of active riders.</p>
            </div>
            <Form />
        </div>
    )
}

export default FormWrapper
