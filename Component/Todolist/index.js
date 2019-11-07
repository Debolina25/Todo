import React, {Component} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItems from './TodoItems';
import Headers from '../Head';
import { Link } from 'react-router-dom';
import Base from '../Button';

class Todolists extends Component{
    constructor(props){
        super(props);

        this.state={
            items:[]
        };

        this.addItem=this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        
    }
    addItem(e){
        if(this._inputElement.value !==""){
            var newItem={
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value="";
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: filteredItems
        });
      }
    render(){
        return(
            <div className="todomain">
                <Headers/>
                <div className="headers">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement =a}
                         placeholder="Enter list"></input>
                        <Base variant="primary" text="Add" type="submit"/>
                    </form>
                </div>
                <TodoItems entries ={this.state.items}
                           delete={this.deleteItem}/>
                 <Link to={'/display'}><Base variant="success" text="Display"/></Link>
            </div>
        );
    }
}
export default Todolists;