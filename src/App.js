import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/User/Home'
import Add from "./pages/User/Add";
import Update from './pages/User/Edit'
import Detail from './pages/User/Detail'

import Todos from './pages/Todo/Index'

import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/edit/:id" component={Update} />
          <Route path="/detail/:id" component={Detail} />

          <Route path="/todos/:user_id" component={Todos} />
          
          <Route
            component={() => (
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <h2>404 Page Not Found</h2>
                  </div>
                </div>
              </div>
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
