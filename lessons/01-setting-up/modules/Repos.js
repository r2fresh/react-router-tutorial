import React, { Component } from 'react';
import {Link} from 'react-router';
import NavLink from './NavLink';
import { hashHistory } from 'react-router';

class Repos extends Component {
    //
    // contextType = {
    //     router : React.PropTypes.object
    // }

    // constructor(props, context) {
    //   super(...arguments);
    //   this.context = context;
    // }

    handleSubmit(event) {
        //console.log(this)
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        //console.log(path)
        //hashHistory.push(path)
        this.context.router.push(path)
    }

    render(){
        return (
            <div>
                <h2>Repos</h2>

                <ul>
                    <li><NavLink to='repos/reactjs/react-router'>React Router</NavLink></li>
                    <li><NavLink to='repos/facebook/react'>React</NavLink></li>

                    <li>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input type='text' placeholder='userName'/> / {' '}
                            <input type='text' placeholder='repo'/>{' '}
                            <button type='submit'>GO</button>
                        </form>
                    </li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

Repos.contextTypes = {
    router : React.PropTypes.object
}

export default Repos;
