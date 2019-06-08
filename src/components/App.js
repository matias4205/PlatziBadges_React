/* Modules */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Pages */
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

/* Components */
import Layout from '../components/Layout';


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/edit/:badgeId" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;