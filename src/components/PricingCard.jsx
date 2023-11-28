import React from "react";
import BtnElement from "./BtnElement";
import { FaCheckCircle } from "react-icons/fa";
export default function PricingCard(props){
    return(
        <article className="pricing__card stack">
            <h3 className="pricing__tag">{props.item.tag}</h3>
            <p className="pricing__amt">{props.item.model}</p>
            <ul className="pricing__list">
               {props.item.features.map((feature, index)=>(
                 <li className={`pricing__item ${feature.color}`} key={index}>
                    <FaCheckCircle className={`pricing__icon ${feature.color}`}/>
                   <p className={`pricing__text ${feature.color}`}> {feature.text}</p>
                 </li>
               ))}
            </ul>
            <BtnElement text="Get Started" className="btn"/>

        </article>
    )
}