//npm packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//local imports
import './App.css';
import NavBar from './components/nav_bar/NavBar';
import Footer from './components/footer/Footer';
import DashBoard from './pages/dash_board/DashBoard';
import Cart from './pages/cart/Cart';
import SignIn from './pages/auth/sign_in/SignIn';
import SignUp from './pages/auth/sign_up/SignUp';

/**
 * # redirects to desired page
 * # only one page is rendered
 */
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route path='/cart' component={Cart} />
        <Route path='/auth/signup' component={SignUp} />
        <Route path='/auth/signin' component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
