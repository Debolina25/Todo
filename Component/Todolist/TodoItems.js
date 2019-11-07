import React, {Component} from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from '../Button';
var fs = require('browserify-fs');


class TodoItems extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checkedItems: [],
        }
       this.makeTask=this.makeTask.bind(this); 
       this.handleChange = this.handleChange.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }
      handleChange(e) {
        let checkitem = e.target.name;
        const isChecked = e.target.checked;
        const key = e.target.value;
       
        if(isChecked) {
            checkitem = checkitem+'%'+key+"|";
            fs.appendFile('../text.txt', checkitem);
        }
      }
    makeTask(item) {
        return (<li key={item.key} className="row">
            <div className="col">
                <input type="checkbox" name={item.text} value={item.key} checked={this.state.check} onChange={this.handleChange} />
            </div>
            <div className="col">{item.text}</div>
            <div className="col">
                <Base variant="warning" click={() => this.delete(item.key) } text="Delete"/>
            </div>
        </li>);
    }
    render() {
        var todoEntries= this.props.entries;
        var listItems = todoEntries.map(this.makeTask);
        
        return(
            <div>
                <ul className="list">
                    {listItems}
                </ul>
            </div>
        );
    }
}
export default TodoItems;