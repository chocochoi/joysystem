import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { NotFound } from './components/Errors';
import Loading from './components/Loading';
import Header from './components/Header';
import './App.css';

const Main = lazy(() => import('./containers/Main'));
const Sub01 = lazy(() => import('./containers/Sub01'));

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/sub01" component={Sub01} />
          {/* <Route exact path="/events/:slug" component={Event} />
          <Route exact path="/login" component={Login} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
