import React from "react";
import { connect} from "react-redux";
import {Link} from "react-router-dom"
import { fetchStreams } from "../../actions";

class StreamList extends React.Component{
    componentDidMount(){
        this.props.fetchStreams();
    }
    authOfStream = (stream) => {
        if(stream.userId === this.props.currentUserId){
            return (
                <div className="right floated content">
                    <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
                    <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
                </div>
            )
        }
    }
    renderCreateStream(){
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }
    streams(){
        return this.props.streamReducer.map((stream) => {
            return (
                <div className="ui divided items" key={stream.id}>
                    <div className="item">
                        <div>
                            <i className="large middle aligned camera icon"/>
                        </div>
                        <div className="middle aligned content">
                            <Link className="header" to={`/streams/${stream.id}`}>{stream.title}</Link>
                            <div className="description">{stream.description}</div>
                            {this.authOfStream(stream)}
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                <div className="ui celled list">{this.streams()}</div>
                <div>{this.renderCreateStream()}</div>
            </div>
        )
    }
} 
let mapStateToProps = (state) => {
    return {
        streamReducer: Object.values(state.streamReducer),
        currentUserId: state.authReducer.userId,
        isSignedIn: state.authReducer.isSignedIn
    }
}
export default connect(mapStateToProps, {fetchStreams})(StreamList)