import React from 'react'
import client1 from './../assets/images/clients/client-1.png'
import client2 from './../assets/images/clients/client-2.png'
import client3 from './../assets/images/clients/client-3.png'
import client4 from './../assets/images/clients/client-4.png'
import client5 from './../assets/images/clients/client-5.png'
import client6 from './../assets/images/clients/client-6.png'


export default function ClientSection() {
    return (
        <>
            <section id="cliens" className="cliens section-bg">
                <div className="container">
                    <div className="row" data-aos="zoom-in">

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client1} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client2} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client3} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client4} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client5} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                            <img src={client6} className="img-fluid" alt=""/>
                        </div>

                    </div>
            </div>
            </section> 
        </>
    )
}
