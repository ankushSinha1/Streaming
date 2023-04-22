import React from "react";
import { connect } from "react-redux";
import { showStream } from "../../actions";
class StreamShow extends React.Component{
    componentDidMount(){
        this.props.showStream(this.props.props.id);
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}
let mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    return {stream: state.streamReducer[ownProps.props.id]}
}
export default connect(mapStateToProps, {showStream})(StreamShow);