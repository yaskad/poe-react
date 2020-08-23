import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './views/Home';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import * as GrindingTime from './views/GrindingTime'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron/>
      <Layout>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={GrindingTime.TimeToNextLevel} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}

export default App;