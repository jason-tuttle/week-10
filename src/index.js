import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import './styles/index.css';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import Acoustic from './components/Acoustic';
import Bass from './components/Bass';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Electric from './components/Electric';
import Other from './components/Other';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import cartApp from './reducers/reducers';

let store = createStore(cartApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const {cart} = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout cart={cart}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/acoustic" component={Acoustic} />
          <Route path="/bass" component={Bass} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
          <Route path="/electric" component={Electric} />
          <Route path="/other" component={Other} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
