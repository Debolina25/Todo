import React ,{Component} from 'react';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

export default class Routers extends Component {
    render() {
        return(
            <Router>
                <Route path="/" component = {Routers}/>
                <Route path="/Component/Head" component = {Headers}/>
            </Router>
        );
    }
}
