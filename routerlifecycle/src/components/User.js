import React from 'react';

import UserHoc from '../hoc/UserHoc';

function User(props) {
    console.log(props);
    return (
        <div>
            User
        </div>
    )
}

function User2(props) {
    console.log(props);
    return (
        <div>
            User 2
        </div>
    )
}

export default UserHoc(User, User2, 'Hello');
