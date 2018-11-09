import React from 'react';

function UserHoc(WrapperComponent, WrapperComponent2, arg) {
    console.log(WrapperComponent);
    console.log(arg);
    return(props) =>(
        <div>
            {console.log(props)}
            <WrapperComponent {...props}/>
            <WrapperComponent2 {...props}/>
        </div>
    )
}

export default UserHoc;
