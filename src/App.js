import logo from './logo.svg';
import './App.css';
import Hamburger from './components/hamburger';
import Home from './pages/home';
import About from './pages/about';
import { Switch, Route, Link } from 'react-router-dom';
import Footer from './components/footer';
import Stories from './pages/stories';

function App() {
    return (
        <div className="App">
            <Hamburger />
            <Switch>
                <Route path="/stories">
                    <Stories />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
