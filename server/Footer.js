import React from 'react'

export default function Footer() {
    const foot=[
        {"name":"FACEBOOK",design:{"color": 'rgb(99, 225, 230)', "height": '55px'}, "icon":"fab fa-facebook text-white mt-3 mr-2 footer-icon"},
        {"name":"TWITTER",design:{"color": 'rgb(84, 159, 230)', "height": '55px'}, "icon":"fab fa-twitter text-white mt-3 mr-2 footer-icon"},
        {"name":"INSTAGRAMK",design:{"color": 'rgb(19, 67, 156)', "height": '55px'}, "icon":"fab fa-instagram text-white mt-3 mr-2 footer-icon"},
        {"name":"DRIBBLE",design:{"color": 'rgb(179, 41, 197)', "height": '55px'}, "icon":"fas fa-basketball-ball text-white mt-3 mr-2 footer-icon"},
        {"name":"PINTEREST",design:{"color": 'rgb(226, 97, 168)', "height": '55px'}, "icon":"fab fa-pinterest text-white mt-3 mr-2 footer-icon"},
        {"name":"WHATSAPP",design:{"color": 'rgb(216, 15, 55)', "height": '55px'}, "icon":"fab fa-whatsapp text-white mt-3 mr-2 footer-icon"},
    ]
    return (
        <>
            <footer className="mt-5">
                <div className="text-center">
                    <img src="./media/profile.png" className="m-5 md-2" style={{"border-radius": '50%', "height": '100px'}} alt=""/>
                </div>
                <div className="text-center text-white" style={{"opacity": '0.7'}}>
                    <p className=" font-italic"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis, autem quasi, delectus accusantium voluptates, <br/>
                         cupiditate totam eaque magnam aspernatur accusamus neque suscipit quibusdam.</p>
                    <h4 style={{"font-family": 'Luckiest Guy'}}>GAURAV BHAWSAR </h4>
                    <p><small className="font-italic" style={{"font-size": '15px'}}>Web Designer</small></p>
                    <div className="p-3">
                        <i className="far fa-circle" ></i>
                        <i className="far fa-dot-circle text-primary"></i>
                        <i className="far fa-circle"></i>
                    </div>
                    <div className="row  m-auto">
                    {foot.map(f=>
                        <div className="col-lg-2 col-md-4 col-sm-6 " style={{"backgroundColor":`${f.design.color}`,"height":`${f.design.height}`}}>
                            <a className="text-white" href=""><i className={f.icon} >                    {f.name}</i></a>
                        </div>
                        )}
                    </div>
                    <img src="../Ecommerce/media/logo3.PNG" className="m-5"  alt=""/>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis, autem quasi, delectus accusantium voluptates, <br/>

                        cupiditate totam eaque magnam aspernatur accusamus neque suscipit quibusdam.</p>
                        <i className="fas fa-circle m-1 text-danger surf-circle"></i> 
                        <i className="fas fa-circle m-1 text-primary surf-circle"></i>
                        <i className="fas fa-circle m-1 text-success surf-circle"></i> <br/>

                        <img src="./media/logo5.PNG" className="m-3" alt=""/>
                </div> 
            </footer>
            <p class="text-center p-3">Copyright &copy;2021 Designed by <span class="text-primary">Gaurav </span>- All Rights Reserved.</p>
        </>
    )
}
