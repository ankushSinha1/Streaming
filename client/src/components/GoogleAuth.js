import React from "react";
import {gapi } from 'gapi-script'
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component{
    componentDidMount(){
        gapi.load('client:auth2', () => {
            gapi.auth2.init({
                client_id: '1003278589347-tghad2dkhku8655i40fprch5ovppsrvj.apps.googleusercontent.com',
                plugin_name: 'chat',
            })
            .then(()=>{
                this.auth = gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }

    }
    onSignInClick = () => {
        this.auth.signIn()
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButon(){
        if(this.props.isSignedIn){
            return(
                <button className="ui red button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                    Sign Out
                </button>
                )
        }else{
            return (
                <button className="ui red button" onClick={this.onSignInClick}>
                <i className="google icon"/>
                    Sign in with google
                </button>   
            )
        }
    }
    render(){
        return (
            <div>
                {this.renderAuthButon()}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {isSignedIn: state.authReducer.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)