import React from "react";

function Header(){
    const cls=[
        {
           "div1":"carousel-item active" ,
           "div2":"background banner2",
           "div3":"head clr"
         },
        {
            "div1":"carousel-item" ,
           "div2":"background banner3",
           "div3":"head"
        },
        {
            "div1":"carousel-item" ,
           "div2":"background banner1",
           "div3":"head"
        }
        ]
    return(
        <>
        <header>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                {cls.map(c=>
                  <div className={c.div1}>
                      <div className={c.div2}>
                             <div className={c.div3}>
                                 <h1 className="text-lg pr-5  mr-5 font-weight-bold font-italic">The world <br/> Of Extreme Sports</h1>
                                 <h4 className=" pr-5  mr-5 font-weight-bold font-italic " style={{"opacity": 0.9}}>SAVE <span className="text-primary">20%</span> ON ALL APPAREL</h4>
                                <hr className="hr1"/> 
                                <hr className="hr2"/>
                                <button className="btn btn-md btn-dark text-white banner-button">SHOP NOW<i className="fas fa-arrow-right pl-2"></i></button>
                                
                            </div>
                      </div>
                  </div>
                  )}
                 
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon mr-auto" aria-hidden="true"></span>
                    <span className="sr-only ">Previous</span>
                </a>
                <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon ml-auto " aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
              </div>    
          </header>
        </>
    )
}

export default Header;