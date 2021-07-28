import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import './App.css';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth'

//COMPONENTS
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/pages/About';
import MyAccount from './components/pages/account/MyAccount';
import Admin from './components/pages/Admin';
import Purchase from './components/pages/Purchase';
import Houses from './components/pages/houses/Houses';
import SingleHouse from "./components/pages/houses/SingleHouse";
import Charities from './components/pages/Charities';
import ContactUs from './components/pages/ContactUs';
import BuyTickets from './components/auth/BuyTickets'

import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';


import authReducer from './reducers/auth';
import housesReducer from './reducers/houses'; 

const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  authReducer,
  housesReducer
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    (async () => {
      const loadUserAction = await loadUser();
      store.dispatch(loadUserAction);
    })()
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Landing}/>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/buy-tickets' component={BuyTickets} />
          <Route exact path='/purchaseTickets' component={Purchase} />
          <Route exact path='/houses' component={Houses} />
          <Route exact path='/houseInfo/:id' component={SingleHouse} />
          <Route exact path='/charities' component={Charities} />
          <Route exact path='/contact' component={ContactUs} />
          <PrivateRoute path={'/myAccount'} component={MyAccount} />
          <AdminRoute path={'/admin'} component={Admin} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
