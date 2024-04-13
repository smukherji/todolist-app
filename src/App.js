import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TodoList from "./routes/TodoList.js";
import withSplashScreen from "./common/withSplashScreen.jsx";
//import * as uuid from 'uuid'
import { v4 as uuidv4 } from 'uuid';
//import "./styles.css";
import "./common/splash.css"


class App extends Component {
    constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }
  
  render() {
    return (
      
      <div class="App-header">
      <h3>Shivali's Todo List App</h3>
      <p>I use this to log everything I need to get done for the week!</p>
      
        <div class="splash-header">
          <BrowserRouter>
          <nav class="nav-buttons">
           <ul>
              <li><Link to="/todos">View All Tasks</Link></li>
              <li><Link to="/todo/:id">Go To Task</Link></li>
              <li><Link to="/done">View Completed Tasks</Link></li>
           </ul>
          </nav>
          
      
         <Routes>
            <Route path="/" element={ <withSplashScreen/> } />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoList />} />
            <Route path="/done" element={<TodoList />} />
         </Routes>
        </BrowserRouter>
        </div>


      </div>

      
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default withSplashScreen(App);  
