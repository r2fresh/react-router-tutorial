// import React from 'react'
//
// export default React.createClass({
//   render() {
//     return <div>Hello, React Router!</div>
//   }
// })

import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

class App extends Component {
    render(){
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role='nav'>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/repos'>Repos</NavLink></li>
                </ul>

                {/* add this */}
                {this.props.children}
            </div>
        )
    }
}

export default App;
