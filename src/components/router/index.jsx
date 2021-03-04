import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from '../pages/home'
import Blood from '../pages/blood'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:name/:blood" component={Blood} />
                <Redirect to="/" />
            </Switch>

        </BrowserRouter>
    )
}

export default Router