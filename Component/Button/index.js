import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Base extends Component {
    render(){
        return(
                <Button variant={this.props.variant} onClick={this.props.click} type={this.props.type}>{this.props.text}
                </Button>
        );
    }
}
export default Base;