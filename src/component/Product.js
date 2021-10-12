import React, { Component } from 'react'
import Header from "./Header"
import { useState } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import Footer from './Footer';
const ax=axios.create({baseURL:"http://localhost:3000/products"})
class Product extends Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        this.GetProducts();
    }
                    async  GetProducts () {
                       
                            try {
                              ax.get()
                              .then(response=>{
                            this.setState({products:response.data});
                            console.log(this.state.products)
                        })
                            } catch (error) {
                            console.error(error);
                            }
                    }
                   
                   async Delete(id){  
                    try {
                      await ax.delete(`/${id}`)  
                      const response = this.state.products.filter(item => item.id !== id);  
                         this.setState({products:response})
                            console.log(this.state.products);  
                    }
                    catch(err){
                        console.log(err);
                    }   
                 }  
                    
                    //   async handler(event){
                    //     const{name,value}=event.target;
                    //     const formData=[{id:data.id,pname:data.pname}];
                    //     this.setState({
                    //         products:formData
                    //     })
                    //     try{
                          
                    //         await axios.post('${URL}',this.state.products)
                    //         }
                    //         catch(err){
                    //             console.log(err);
                    //         }
                
                    // }

                              

                                                
                        
                    
                    render(){
                        return(
                            <>
                            <Header/>
                            <h4 className="product-heading">VIEW PRODUCTS</h4>
                            <div className="row justify-content-center">
                            
                                {this.state.products.map(product=>
                                    <div className="card col col-lg-3 col-md-3 col-sm-6 " style={{ "width": 250, "display": 'inline-block', "margin": '1rem' }}>
                                    <img src={product.images} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <ul style={{ "padding-left": '0%', "listStyle": 'none' }}>
                                            <li className="star"><i class="fas fa-star"></i></li>
                                            <li className="star"><i class="fas fa-star"></i></li>
                                            <li className="star"><i class="fas fa-star"></i></li>
                                            <li className="star"><i class="fas fa-star"></i></li>
                                            <li className="star"><i class="fas fa-star"></i></li>

                                        </ul>
                                        <h5 className="card-title"> {product.pname}</h5>
                                        <p className="card-text"> ${product.price}</p>
                                        <button class="btn btn-sm btn-primary mt-3"><i class="fas fa-shopping-cart"></i></button>
                                        <button class="btn btn-sm btn-light size-btn mt-3"><i class="far fa-heart"></i></button>
                                        <button onClick={() => this.Delete(product.id)} class="btn btn-sm btn-light size-btn mt-3"><i class="far fa-trash-alt"></i></button>
                                        <button class="btn btn-sm btn-light size-btn mt-3"><i class="fas fa-exchange-alt"></i></button>
                                    </div>
                                </div>    
                                )}  
                                
                                </div> 
                              <Footer/>
                              </>              
                           
                            
                        );
                    }
                    
}
export default Product
