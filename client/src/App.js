//npm packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//local imports
import './App.css';
import DashBoard from './pages/dash_board/DashBoard';
import Cart from './pages/cart/Cart';
import SignIn from './pages/auth/sign_in/SignIn';
import SignUp from './pages/auth/sign_up/SignUp';

/**
 * #THIS COMPONENT IS RESPONSIBLE FOR ROUTING THE APPLICATION
 *  TO DIFFERENT PAGES
 * #REACT-ROUTER-DOM IS USED
 */
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route path='/cart' component={Cart} />
        <Route path='/auth/signup' component={SignUp} />
        <Route path='/auth/signin' component={SignIn} />
      </Switch>
    </Router>
  )
}

export default App;
