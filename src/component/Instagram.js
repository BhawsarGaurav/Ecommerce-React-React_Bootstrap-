


import * as pi from "./instaPics"

function Instagram() {
    
    return (
        <>
            <section className="instagram">
                <div className="text-center font-weight-bold mt-5"><h4>INSTAGRAM</h4></div>
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
            <div className="text-center">
                <div className="row mt-5">
                {pi.Insta.map(p=>
                    <div className=" m-auto d-block col-lg-2 col-md-4 col-sm-12 ">
                        <div className="card ">
                            <img className="card-img img-fluid " src={p.image} alt=" image cap"/>
                        </div>
                     </div>
                )}     
                </div>
            </div>
        </>
    )
    
}

export default Instagram
