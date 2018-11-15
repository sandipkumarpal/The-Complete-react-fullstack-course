import React from 'react';
import '../css/hocomponent/Layout.css';


class Layout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;