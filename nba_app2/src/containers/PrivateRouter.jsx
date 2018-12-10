import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import Articles from './../containers/Articles';
import VideosSingle from './../containers/Videos/VideosSingle';
import Videos from './../containers/Videos';
import News from './../containers/News';
import SignIn from './../containers/SignIn';

function PrivateRouter() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" exact component={News}/>
                <Route path="/articles/:id" exact component={Articles}/>
                <Route path="/videos" exact component={Videos}/>
                <Route path="/videos/:id" exact component={VideosSingle}/>
                <Route path="/sign-in" exact component={SignIn}/>
            </Switch>
        </Layout>
    );
}

export default PrivateRouter;
