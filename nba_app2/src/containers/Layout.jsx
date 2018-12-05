import React from 'react';
import Header from './Header';
import Footer from '../components/Footer';


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        }
    }
    toggleSideNav(action) {
        this.setState(() => ({
            showNav: action
        }))
    }

    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSideNav(false)}
                    onShowNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;
