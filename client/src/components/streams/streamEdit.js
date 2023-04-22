import React from "react";
import { fetchStreams, updateStream } from "../../actions";
import StreamForm from "./streamForm";
import { connect } from "react-redux";
import _ from "lodash";
class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStreams(this.props.id)
    }
    onSubmit = (formValues, id) => {
        this.props.updateStream(formValues, this.props.stream.id)
        window.location.href = 'http://localhost:3000'
    }
    render(){
        if(!this.props.stream){
            return(<div>Loading...</div>)
        }
        return (
            <div>
                <h3>Edit this stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => {
    return {stream: state.streamReducer[ownProps.props.id]};
}
export default connect(mapStateToProps, {fetchStreams: fetchStreams, updateStream: updateStream})(StreamEdit);