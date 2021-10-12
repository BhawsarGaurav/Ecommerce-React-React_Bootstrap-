import React from "react";
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home"
import NotFound from "./component/NotFound";
import NavBar from "./component/NavBar";
import Header from "./component/Header";

function App() {
  return (
  
    <main className="container-fluid">
      <NavBar />
      </main>
    
  );
}

export default App;
