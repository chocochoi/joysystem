import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ResetCss from './styles/ResetCss';
// import { NotFound } from './components/Errors';
import Loading from './components/Loading';
import IterationSample from './IterationSample';
import './App.css';

const Main = lazy(() => import('./pages/Main'));
const Sub01 = lazy(() => import('./pages/Sub01'));
const BranchInformation = lazy(() => import('./pages/BranchInformation'));

function App() {
  return (
    <BrowserRouter basename="/">
      <ResetCss />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/BranchInformation" component={BranchInformation} />

          <Route exact path="/IterationSample" component={IterationSample} />
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
