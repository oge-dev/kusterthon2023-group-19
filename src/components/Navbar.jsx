
import React,{ useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg"
export default function (props){


    return(
        <header className="header">
              <div className="container">
            <nav className="nav">
        
                <div className="nav__logo">
                    <Link to="/"className="nav__link" ><img src={logo} alt="logo"/></Link>
                </div>
                <div className="nav__icon" onClick={()=> props.handleShowNavBar()}>
                    {props.showNavBar ?  <i className="fa-solid fa-xmark nav-menu"></i> : <i className="fa-solid fa-bars nav-menu"></i>}
                </div>
                    <ul className={`${props.showNavBar && "active"} nav__list`}>
                      
                        <li className="nav__item"> <Link to="/feature" className="nav__link">Features</Link></li>
                        <li className="nav__item"> <Link to="/blog"  className="nav__link">Blog</Link></li>
                        <li className="nav__item"> <Link to="/login" className="nav__link">Login</Link></li>
                        <li className="nav__item"> <Link to="/signup" className="nav__link btn"> <i className="fa-solid fa-link"></i> Get Started</Link></li>

                    </ul>
            </nav>
            </div>
        </header>
    )
}