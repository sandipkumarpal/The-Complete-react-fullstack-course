import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import Articles from './../containers/Articles';
import VideosSingle from './../containers/Videos/VideosSingle';
import Videos from './../containers/Videos';
import News from './../containers/News';

function PrivateRouter() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/articles/:id" component={Articles}/>
                <Route path="/videos/:id" component={VideosSingle}/>
                <Route path="/videos" component={Videos}/>
            </Switch>
        </Layout>
    );
}

export default PrivateRouter;
