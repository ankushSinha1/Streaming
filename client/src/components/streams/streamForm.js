import React from "react";
import {Field, reduxForm} from 'redux-form'
class StreamForm extends React.Component{
    renderError = ({error, touched}) => {
        if(error && touched){
            return(
                <div style={{color: '#9f3a38', marginTop: '5px'}}>{error}</div>
            )
        }
    }
    renderInput = ({input, label, meta})=>{
        let className = `field ${meta.error && meta.touched? 'error': ''}`
        return(
            <div className={className}>
                <label style={{fontSize: '16px'}}>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render(){
        return ( 
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary" type="submit">Submit</button>
            </form>
        )
    }
}
let validate = (formValues) => {
    let errors = {}
    if(!formValues.title){
        errors.title = 'Please enter a title'
    }if(!formValues.description){
        errors.description = 'Please enter a description'
    }
    return errors
}
let formWrapped = reduxForm({form: 'streamForm', validate: validate})(StreamForm)
export default (formWrapped)