import React from "react";

import logodark from "../assets/Logodark.svg"

export default function Footer(){
    return(
        <footer>
       <div className="container">
         <div className="footer__row stack">

            {/* column one */}
            <div className="footer__col stack">
                {/* <p className="footer__text">Why Invoice-name</p> */}
                
                <div >
                <img src={logodark} alt="logo"/>
                    <p>
                    Our mission is to empower entrepreneurs and small business owners like you with a reliable and user-friendly payment management solution.
                    </p>
                </div>
                <ul className="footer__list footer__social">
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-linkedin"></i></a></li>   
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-linkedin"></i></a></li>
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-square-facebook"></i></a></li>
                </ul>
            </div>

            {/* column one */}
            <div className="footer__col stack">
            <p className="footer__text">Explore</p>
                <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Features</a></li>
                <li className="footer__item"><a href="#" className="footer__link">pricing</a></li>
                <li className="footer__item"><a href="#" className="footer__link">About Us</a></li>
                </ul>
            </div> 

            {/* column one  */}
            <div className="footer__col stack">
            <p className="footer__text">Features</p>
                <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Invoices</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Reports</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Payments</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Statements</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Stocks</a></li>
                </ul>
            </div>

            {/* column one */}
            <div className="footer__col stack">
            <p className="footer__text">Company</p>
                <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">About Invoice-name</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Blog</a></li>
                </ul>
            </div>
           
         </div>
         <div className="footer__bottom">
         <hr></hr>
         <p className="footer__copyright">&copy; 2023 All Right Reserved- CrediEase</p>
         </div>
        
       </div>
      </footer>
    );
}