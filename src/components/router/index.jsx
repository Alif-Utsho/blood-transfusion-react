import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from '../pages/home'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
            </Switch>

        </BrowserRouter>
    )
}

export default Router