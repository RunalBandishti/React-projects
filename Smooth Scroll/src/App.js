import './App.css';
import Home from './pages';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router >
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={SigninPage} exact/>
        </Switch>
        
        
    </Router>
  );
}

export default App;
