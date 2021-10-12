import React from 'react'
import * as pi from "./instaPics"
import Bootstrap from "react-bootstrap"
import { Container,Row } from 'react-bootstrap'
export default function ScrollProducts() {
    const seller=[
        {"h1":"BEST SELLERS"},
        {"h1":"TOP RATE"},
        {"h1":"TOP SPECIAL"},
    ]
    return (
        <>
             <section className="row mt-5" style={{"background": 'rgb(236, 243, 242)'}}>
             {seller.map(s=>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <Container fluid className="text-center pt-3 product-scroll">
                        <h5 className="font-weight-bold">{s.h1}</h5>
                        <hr/>
                        {pi.products.map(p=>
                        <Row>
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                                <img src={p.images} className="ps-img" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mt-3 p-description">
                                <h6>{p.pname}</h6>
                                <ul style={{"padding-left": '0%'}}>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                                <h6 className="text-danger font-weight-bold">${p.price}</h6>
                                <button className="btn btn-sm btn-primary mt-3"><i className="fas fa-shopping-cart"></i></button> 
                                <button className="btn btn-sm btn-light size-btn mt-3"><i className="far fa-heart"></i></button>
                                <button className="btn btn-sm btn-light size-btn mt-3"><i className="fas fa-eye"></i></button>
                                <button className="btn btn-sm btn-light size-btn mt-3"><i className="fas fa-exchange-alt"></i></button>
                                
                            
                            </div>
                        </Row>
                        )}
                    </Container>
                </div>
                )}
             </section>
            
        </>
    )
}
