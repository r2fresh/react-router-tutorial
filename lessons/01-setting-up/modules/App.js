// import React from 'react'
//
// export default React.createClass({
//   render() {
//     return <div>Hello, React Router!</div>
//   }
// })

import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render(){
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role='nav'>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/repos'>Repos</Link></li>
                </ul>
            </div>
        )
    }
}

export default App;
