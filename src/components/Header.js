import React from 'react';


 function Header() {
    return (
        <>
         <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo mr-auto"><a href="index.html">Arsha</a></h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#cta">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="#about" className="get-started-btn scrollto">Get Started</a>
                </div>
            </header> 
        </>
    )
}
export default Header;