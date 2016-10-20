import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory, IndexRoute, browserHistory} from 'react-router';

import routes from './modules/routes';

render(
    <Router routes={routes} history={hashHistory}/>
, document.getElementById('app'))
