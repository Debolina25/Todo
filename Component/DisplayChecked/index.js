import React ,{Component} from 'react';
import Headers from '../Head';
import { Link } from 'react-router-dom';
import './style.css';
import Base from '../Button';
var fs = require('browserify-fs');

function read(callback) {
    let values = [];
    let arr =[];
    let path = require("path");
    fs.readFile(
      path.resolve(__dirname, '../text.txt'),
      'utf-8',
      (err, data) => {
        if (err) throw err;
        values = data.toString().split('|');
  
        const listItems = values.map((val) => {
        arr = val.split('%');
        return (<li className="checkedlists" key={arr[1]}>{arr[0]}</li>)
        });
        return callback(listItems);
      }
    );
  }

export default class Display extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount() {
        read((result) => {
          this.setState({
            result,
          });
        });
      }
    
      render() {
        return (
          <div>
              <Headers/>
              <ul className="container">
                {this.state.result}
              </ul>
              <Link to={'/'}> <Base variant="success" text="Back"/></Link>
          </div>
        );
      }

} 