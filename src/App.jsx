import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.scss';
// import Home from './components/Home';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import AuthProvider from './Context/Auth';
import PrivateRoute from './Context/PrivateRoute';
import Query from './components/Query';
import CurrentConsultations from './components/CurrentConsultantions';
import HistoricConsultations from './components/HistoricConsultations';
import InformationofInterest from './components/InformacionofInterest';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Query} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/consultasVigentes" component={CurrentConsultations} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/consultasHistoricas" component={HistoricConsultations} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/informacion" component={InformationofInterest} />
          </Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/recoverPassword" component={ChangePassword} />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
