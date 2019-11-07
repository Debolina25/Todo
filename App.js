import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolists from './Component/Todolist';
import Display from './Component/DisplayChecked';
var fs = require('browserify-fs');
//Initially for text.txt
fs.writeFile('../text.txt','');
fs.unlink('../text.txt', function (err) {
       if (err) throw err;
       console.log('File deleted!');
     });

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
        <Route  exact path={"/"} component={Todolists}/>
        <Route path={"/display"} component={Display}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
