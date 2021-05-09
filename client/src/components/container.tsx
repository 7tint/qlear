import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo_dark from '../assets/img/full-logo-qlear-green.png';
import logo_light from '../assets/img/full-logo-qlear-beige.png';
import '../assets/css/navbar.scss';
import ProductIndex from './stores/product-index';
import ProductNew from './stores/product-new';
import ProductView from './users/product-view';
import Dashboard from './users/dashboard';
import Home from './home';

const Navbar = withRouter(props => {
  if (props.location.pathname === "/") {
    return(
      <nav className="navbar shadow is-fixed-top has-background-theme-beige">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item m-0 p-0">
            <img className="logo ml-5" src={logo_dark} width="145" height="50" alt="Qlear green logo"/>
          </Link>
          <div role="button" className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar-menu has-text-left-touch has-background-theme-beige is-align-items-center" id="navMenu">
          <div className="navbar-end">
            <Link to="/sell/dashboard" className="navbar-item link mt-1 has-text-weight-semibold has-text-theme-green-1">Sell</Link>
            <Link to="/buy/dashboard/" className="navbar-item link mt-1 has-text-weight-semibold has-text-theme-green-1">Shop</Link>
            <Link to="/login" className="navbar-item link mt-1 has-text-weight-semibold has-text-theme-green-1">Login</Link>
            <div className="navbar-item link">
              <div className="control">
                <Link to="/signup" className="has-text-weight-semibold has-text-theme-beige is-theme-green-1 button shadow">
                  <div className="mt-1">Get Started</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  else {
    return(
      <nav className="navbar navbar-2 is-fixed-top shadow has-background-theme-green-1">
        <div className="navbar-brand navbar-brand-2 navbar-sidebar px-5 is-flex is-justify-content-center">
          <Link to="/" className="navbar-item m-0 p-0">
            <img className="logo" src={logo_light} width="100" alt="Qlear beige logo"/>
          </Link>
          <div role="button" className="has-text-white navbar-burger navbar-burger-2 burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar-menu has-background-theme-green-1 is-align-items-center px-5" id="navMenu">
          <div className="navbar-end">
            <i className="fas fa-search is-size-5 navbar-item has-text-theme-beige"></i>
            <i className="fas fa-cog is-size-5 navbar-item has-text-theme-beige"></i>
            <i className="fas fa-bell is-size-5 navbar-item has-text-theme-beige"></i>
          </div>
        </div>
      </nav>
    );
  }
});

class Container extends React.Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          const target = $el.dataset.target;
          const $target = document.getElementById(target);
          $el.classList.toggle('is-active');
          if ($target) {
            $target.classList.toggle('is-active');
          }
        });
      });
    }
  }

  componentDidUpdate() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          const target = $el.dataset.target;
          const $target = document.getElementById(target);
          $el.classList.toggle('is-active');
          if ($target) {
            $target.classList.toggle('is-active');
          }
        });
      });
    }
  }

  render() {
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/sell/dashboard" component={ProductIndex}/>
          <Route exact path="/sell/dashboard/new" component={ProductNew}/>
          <Route exact path="/buy/dashboard/" component={Dashboard}/>
          <Route exact path="/buy/dashboard/:id" component={ProductView}/>
          <Route path="*"> <h1 className="title is-size-1 mt-6 pt-6">404 not found.</h1> </Route>
        </Switch>
      </Router>
    );
  }
}

export default Container;
