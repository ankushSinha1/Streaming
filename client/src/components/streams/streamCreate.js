import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./streamForm"

class StreamCreate extends React.Component{    
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
        window.location.href = 'http://localhost:3000/'
    }
    render(){
        return ( 
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
export default connect(null, { createStream: createStream })(StreamCreate)