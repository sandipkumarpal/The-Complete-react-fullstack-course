import React from 'react';

function Auth(props) {
    console.log(props);
    const pass = 'password';

    if(pass !== 'password') {
        return <h3>Sorry not matchs!</h3>
    } else {
        return props.children;
    }
}

export default Auth;