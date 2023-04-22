import React from "react";
import { connect } from "react-redux";
import Modal from '../Modal';
import { showStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";
class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.showStream(this.props.props.id)
    }
    renderActions(){
        const id = this.props.props.id;
        return (
            <>
                <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link className="ui button" to="/">Cancel</Link>
            </>
        )
    }
    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete'
        }else{
            return `Are you sure you want to delete ${this.props.stream.title}`
        }
    }
    render(){
        
        console.log()
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss = {() => window.location.href = 'http://localhost:3000'}
            />
        )
    }
}
let mapStateToProps = (state, ownProps) => {
    return {stream: state.streamReducer[ownProps.props.id]};
}
export default connect(mapStateToProps, {showStream, deleteStream})(StreamDelete)