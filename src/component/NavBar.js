import React from "react";
import { BrowserRouter as Router,Route,Link,Switch } from "react-router-dom";
import Contact from "./Contact";
import Product from "./Product";
import Home from "./Home";
import CreateProducts from "./CreateProducts";
import Bootstrap from "bootstrap"
import { Navbar,Nav,Container } from "react-bootstrap";
import MainBody from "./MainBody";


function NavBar(){
    return(
        <>
               <Router>
           
                <>
                    <Navbar>
                        <Container fluid  >
                        <Navbar.Brand  ><Link  className="nav-link" to="/"  >MYWeb</Link></Navbar.Brand>
                        <Nav  >
                        <Nav.Link ><Link  className="nav-link" to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link  className="nav-link" to="/product">Products</Link></Nav.Link>
                        
                        <Nav.Link ><Link  className="nav-link" to="/contact"  >Contact US</Link></Nav.Link> 
                    
                        </Nav>
                        <div className="justify-content-end">
                        <li className="nav-icon "><span className="text-dark "><i className="fas fa-search mr-4"></i></span></li>
                        <li className="nav-icon"><span className="text-dark "><i className="fas fa-shopping-cart"><span className="badge badge-primary-top">2</span></i></span></li>
                        </div>
                        </Container>
                       
                    </Navbar>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        >
                        <Route path="/product" exact component={Product}/>
                        <Route path="/contact" exact component={Contact}/>
                        
                    </Switch> 
                   
                </>
        </Router>
        
        </>
 
    )
}

export default NavBar;