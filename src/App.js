import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
