import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItems from '../components/SideNavItem';

class SideNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    icon: 'home',
                    text: 'Home',
                    link: '/'
                },
                {
                    icon: 'file-text-o',
                    text: 'News',
                    link: '/news'
                },
                {
                    icon: 'play',
                    text: 'Videos',
                    link: '/videos'
                },
                {
                    icon: 'sign-in',
                    text: 'Sign in',
                    link: '/sign-in'
                },
                {
                    icon: 'sign-out',
                    text: 'Sign out',
                    link: '/sign-out'
                }
            ]
        }
    }

    showItems() {
        return this.state.items.map((item, index) => {
            return <SideNavItems 
                key={index} 
                path={item.link} 
                icon={item.icon} 
                title={item.text}
            />
        });
    }
    render() {
        return (
            <div>
                <SideNav
                    showNav={this.props.showNav}
                    onHideNav={this.props.onHideNav}
                    navStyle={{
                        backgroundColor: '#242424',
                        maxWidth: '220px'
                    }}
                >
                    {this.showItems()}
                </SideNav>
            </div>
        );
    }
}

export default SideNavigation;
