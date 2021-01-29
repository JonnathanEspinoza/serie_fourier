import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Fourier from './core/Fourier';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Fourier path="/fourier" exact component={Fourier} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;