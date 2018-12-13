import React from 'react';
import SideNav from 'react-simple-sidenav';
import { withRouter } from 'react-router';
import SideNavItems from '../components/SideNavItem';
import { firebase } from '../firebase';

class SideNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    icon: 'home',
                    text: 'Home',
                    link: '/',
                    login: ''
                },
                {
                    icon: 'file-text-o',
                    text: 'News',
                    link: '/news',
                    login: ''
                },
                {
                    icon: 'play',
                    text: 'Videos',
                    link: '/videos',
                    login: ''
                },
                {
                    icon: 'sign-in',
                    text: 'Sign in',
                    link: '/sign-in',
                    login: true
                },
                {
                    icon: 'sign-out',
                    text: 'Sign out',
                    link: '/sign-out',
                    login: false
                },
                {
                    icon: 'sign-out',
                    text: 'Dashboard',
                    link: '/dashboard',
                    login: false
                }
            ]
        };
        this.showItems = this.showItems.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        firebase.auth().signOut()
        .then(() => {
            this.props.history.push("/");
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    showItems() {
        const element = (item, index) => (
            <SideNavItems 
                key={index} 
                path={item.link} 
                icon={item.icon} 
                title={item.text}
            />
        );

        const restricted = (item, index) => {
            let template = null;
            if( this.props.user === null && item.login ) {
                template = element(item, index);
            }
            if( this.props.user !== null && !item.login ) {
                
                if( item.link === './sign-out' ) {
                    template = <SideNavItems 
                    key={index} 
                    icon={item.icon} 
                    title={item.text}
                    onClick={this.signOut}
                />;
                } else {
                    template = element(item, index);
                }
            }
            return template;
        }

        return this.state.items.map((item, index) => {
            return item.login !== '' ?
                restricted(item, index)
            :
                element(item, index)
        });
    }
    render() {
        console.log(this.props);
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

export default withRouter(SideNavigation);
