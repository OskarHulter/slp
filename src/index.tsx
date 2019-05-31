import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// unregister() or register()
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
