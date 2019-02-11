import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import Articles from './../containers/Articles';
import VideosSingle from './../containers/Videos/VideosSingle';
import Videos from './../containers/Videos';
import News from './../containers/News';
import SignIn from './../containers/SignIn';
import DashBoard from './../containers/DashBoard';

function PrivateRouter(props) {
    return (
        <Layout user={props.user}>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" exact component={News}/>
                <Route path="/articles/:id" exact component={Articles}/>
                <Route path="/videos" exact component={Videos}/>
                <Route path="/videos/:id" exact component={VideosSingle}/>
                <Route path="/sign-in" exact component={SignIn}/>
                <Route path="/dashboard" exact component={DashBoard}/>
            </Switch>
        </Layout>
    );
}

export default PrivateRouter;
