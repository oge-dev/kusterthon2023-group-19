import React from "react";

export default function FeatureCard(props){
    return(
        <article  className="features__col stack">
            <img src={props.item.ftImg}/>
            <h3 className="features__title">{props.item.title}</h3>
            <p className="features__text">{props.item.text}</p>

        </article>
    );
}