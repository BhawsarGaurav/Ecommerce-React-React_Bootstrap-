import React from 'react'
import Instagram from "./Instagram"
import ScrollProducts from './ScrollProducts'
export default function MainBody() {
    return (
        <>
             <section >
            <div className="row mt-3 md-3">
              
                <div className="col-lg-4 col-md-6 col-sm-12  ">
                    <button className="btn btn-lg btn-primary text-white"><i className="fas fa-plane pr-2 "></i>FREE SHIPPING WORLDWIDE</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <button className="btn btn-lg btn-danger text-white "><i className="far fa-check-circle pr-2 "></i>100% MONEY BACK - 48 HOURS</button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 ">
                    <button className="btn btn-lg btn-warning text-white"><i className="fas fa-phone pr-2 "></i>23/7 ONLINE CUSTOMER SUPPORT</button>
                </div>
            </div>
              
          </section>
          <section className="feature_collection">
              <div className="text-center font-weight-bold mt-5"><h4>FEATURED COLLECTION</h4></div>
              <div className="text-center mt-3 md-3"><img src="./media/feature.PNG" alt=""/></div>
              <div className="text-center feature">
                  <ul>
                    <li><span className="text-primary">NEW ARRIVAL</span></li>
                    <li>-</li>
                    <li>CLOTHING</li>
                    <li>-</li>
                    <li>HATS</li>
                    <li>-</li>
                    <li>SHOES</li>
                    <li>-</li>
                    <li>BAGS</li>
                    <li>-</li>
                    <li>ACCESSORIES</li>
                  </ul>
              </div>
          </section>
          <div className="row mt-5 surfboard-div">
            

                
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{"margin-left": '0%'}}>
                        <img className="surfboard-image" src="./media/surfboard.PNG" alt="Surfboard Image"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pt-3 pl-5 pr-5 surfboard">
                        <h6 style={{"margin-bottom": '15px'}} >HOT DEALS <br/> <i className="fas fa-circle m-1 text-danger surf-circle"></i> 
                            <i className="fas fa-circle m-1 text-primary surf-circle"></i>
                            <i className="fas fa-circle m-1 text-warning surf-circle"></i></h6>
                        <h1>TULOS DRAEY SKIRTS</h1>
                        <ul style={{"padding-left": '0%'}}>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li style={{"font-style": 'italic', "opacity": '0.6', "color": 'black'}}>(50 Reviews)</li>
                        </ul>
                        <h4 className="text-danger font-weight-bold">$300.00</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                             Consequuntur, saepe veniam quod illum neque deleniti nihil,
                              earum amet ipsa eaque ea, asperiores
                             fuga eligendi aliquid quam non facere maiores sequi.</p>
                            <h6 style={{"margin-top": '30px'}}>COLOURS: <i className="fas fa-circle m-2 text-danger"></i> 
                                <i className="fas fa-circle m-2 text-primary"></i>
                                <i className="fas fa-circle m-2 text-warning"></i></h6>
                            <h6 style={{"margin-top": '30px'}}>SIZE: <button className="btn btn-sm btn-light size-btn">S</button> 
                                <button className="btn btn-sm btn-light size-btn">M</button>
                                 <button className="btn btn-sm btn-light size-btn">L</button>
                                 <button className="btn btn-sm btn-light size-btn">XL</button> </h6>
                            <div className="days  text-center">
                                <p> <span className="mt-3 text-white font-weight-bold">25 <br/> <span className="font-italic font-weight-normal" >Days</span></span></p>
                            </div>
                            <div className="days text-center">
                                <p> <span className="mt-3 text-white font-weight-bold">14 <br/> <span className="font-italic font-weight-normal" >Hours</span></span></p>
                            </div>
                            <div className="days text-center">
                                <p> <span className="mt-3 text-white font-weight-bold">57 <br/> <span className="font-italic font-weight-normal" >Mins</span></span></p>
                            </div>
                            <div className="days text-center">
                                <p> <span className="mt-3 text-white font-weight-bold">43 <br/> <span className="font-italic font-weight-normal" >Secs</span></span></p>
                            </div>
                    </div>
            </div>
            <Instagram />
            <ScrollProducts/>
        </>
    )
}
