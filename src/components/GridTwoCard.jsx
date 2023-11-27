import React from "react";

export default function GridTwoCard(props){
    return(
        <>

        {!props.item.isOdd ? <>
            <div className="step__col stack">
            <span className="step__no"> {props.item.stepNo}</span>
              <h3 className="step__title">{props.item.title}</h3>
              {props.item.text ? 
              
              <p className="step__desc">
              {props.item.text}
            </p>
            :
            <ul className="step__list">
                <li className="step__item">
                  {/* <FaCheck className="step__icon" /> */}
                  <span className="step__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="step__item">
                  {/* <FaCheck className="step__icon" /> */}
                  <span className="step__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </li>
                <li className="step__item">
                  {/* <FaCheck className="step__icon" /> */}
                  <span className="step__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                </li>
              </ul>
            
            }
             
              
            </div>

            <div className="step__img">
              <img
                src={props.item.img}
                className="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>
  
        </> :
        <>
        <div className="step__img">
              <img
                src={props.item.img}
                className="step-img"
                alt="iPhone app
            preferences selection screen"
              />
            </div>

            <div className="step__col stack">
            <span className="step__no">{props.item.stepNo}</span>
              <h3 className="step__title">{props.item.title}</h3>
              {props.item.text ? 
              
              <p className="step__desc">
              {props.item.text}
            </p>
            :
            <ul className="step__list">
                <li className="step__item">
                  {/* <FaCheck className="step__icon" /> */}
                  <span className="step__text">
                  User-Centric Approach: We prioritize your needs, designing features that align with your workflow.
                  </span>
                </li>
                <li className="step__item">
                  {/* <FaCheck className="step__icon" /> */}
                  <span className="step__text">
                  Reliability: Trust in a dependable system that keeps your finances organized and transparent.
                  </span>
                </li>
                <li className="step__item">
                  {/* <FaCheck className="step__icon" /> */}
                  <span className="step__text">
                  Innovation: Constantly evolving to offer cutting-edge solutions for your evolving business requirements.
                  </span>
                </li>
              </ul>
            
            }
             
              
            </div>


        </>}
       
       
        
        </>
    );
}