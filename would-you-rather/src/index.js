import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter as Router, Route } from "react-router-dom";

// create the store for data, currentUser & data
const store = createStore(reducer, middleware)

ReactDOM.render(
<Provider store={store}>
  <Router>
      <App />
  </Router>
</Provider>
,

  document.getElementById('root')
)
