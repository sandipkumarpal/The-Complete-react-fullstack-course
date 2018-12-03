import React from 'react';
import { firebase, googleAuth } from '../firebase';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }
    signIn() {
        firebase.auth().signInWithPopup(googleAuth);
    }

    signOut() {
        firebase.auth().signOut();
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                status: user ? false : true
            })
        });
    }

    render() {
        return (
            <div>
                {this.state.status 
                    ? <button onClick={this.signIn}>LogIn</button> 
                    : <button onClick={this.signOut}>LogOut</button>
                }
            </div>
        );
    }
}

export default Login;
