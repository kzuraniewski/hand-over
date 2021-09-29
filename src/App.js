import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Header';
import NotFound from './components/NotFound';

function App() {
    return (
        <>
            <Header />

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
