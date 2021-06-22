import './App.css';
import {BrowserRouter as Router, Switch, Route, Link}  from 'react-router-dom';

import LifeCycleA from './components/lifeCycleA';
import FragmentDemo from './components/fragmentDemo';
import PureRegularParentComponent from './components/pureRegularParentComponent';
import MemoParentComponent from './components/memoParentComponent';
import RefDemo from './components/refDemo';
import RefClassComponentDemo from './components/refClassComponentDemo';
import RefForwardDemo from './refForwardDemo';

function App() {
  return (
    <Router>
      <div>
        <h1> React Basics Demo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lifeCycle">Life Cycle</Link>
            </li>
            <li>
              <Link to="/fragements">Fragments</Link>
            </li>
            <li>
              <Link to="/pureComponent">Pure Component</Link>
            </li>
            <li>
              <Link to="/memo">Memo</Link>
            </li>
            <li>
              <Link to="/ref">Ref</Link>
            </li>
            <li>
              <Link to="/refClassComponent">Ref with Class Component</Link>
            </li>
            <li>
              <Link to="/refForward">Forwarding Refs</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/refForward">
           <RefForwardDemo/>
          </Route>
        <Route path="/refClassComponent">
           <RefClassComponentDemo/>
          </Route>
        <Route path="/ref">
           <RefDemo/>
          </Route>
        <Route path="/memo">
           <MemoParentComponent/>
          </Route>
        <Route path="/pureComponent">
           <PureRegularParentComponent/>
          </Route>
          <Route path="/fragements">
           <FragmentDemo/>
          </Route>
          <Route path="/lifeCycle">
            <LifeCycleA/>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
