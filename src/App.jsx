import React, { useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import IndexPage from './pages';
import DiscoverPage from './pages/discover';
import InboxPage from './pages/inbox';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import RegisterPage from './pages/register';

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // store the user on local storage
        firebase
          .firestore()
          .doc(`/users/${user.uid}`)
          .get()
          .then((doc) => {
            localStorage.setItem('user', JSON.stringify({
              ...doc.data(),
              id: doc.id,
            }));
          });
      } else {
        // removes the user from local storage on logOut
        localStorage.removeItem('user');
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <PrivateRoute path="/discover">
            <DiscoverPage />
          </PrivateRoute>
          <PrivateRoute path="/inbox">
            <InboxPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/logout">
            <LogoutPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="*">
            <IndexPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => (localStorage.getItem('user') ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

export default App;
