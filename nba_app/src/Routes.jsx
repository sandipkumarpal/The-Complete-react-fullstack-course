import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './hocomponent/Layout';
import Home from './container/Home';

export default function Routes() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={ Home } />
            </Switch>
        </Layout>
    );
}
