import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
