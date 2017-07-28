import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import Acoustic from './components/Acoustic';
import Bass from './components/Bass';
import Contact from './components/Contact';
import Electric from './components/Electric';
import Other from './components/Other';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/acoustic" component={Acoustic} />
        <Route path="/bass" component={Bass} />
        <Route path="/contact" component={Contact} />
        <Route path="/electric" component={Electric} />
        <Route path="/other" component={Other} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));

registerServiceWorker();
