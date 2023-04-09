import React from 'react';
import {Link} from "react-router-dom";

function Login(props) {
    return (
        <div className={'container m-5'}>
            <h1> You logged in </h1>
            <Link to={'/'} className={'btn btn-success'}> Back to Login </Link>
        </div>
    );
}

export default Login;
