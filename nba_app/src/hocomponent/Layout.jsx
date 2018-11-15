import React from 'react';

import Header from '../components/Header';
import '../css/hocomponent/Layout.css';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;