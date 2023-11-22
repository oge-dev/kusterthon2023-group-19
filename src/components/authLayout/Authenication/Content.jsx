import React from 'react'
import './Content.css'
import Ellipse from '../../../img/Ellipse.png'
import Ellipse1 from '../../../img/Ellipse-1.png'
import Ellipse2 from '../../../img/Ellipse-2.png'
import Ellipse3 from '../../../img/Ellipse-3.png'
import Logo from '../../logo'

const Content = ({children}) => {
  return (
    <div className='authenication-wrapper'>
    <Logo />
       <div className='authenication-content'>
      <div className='image-wrapper'>
        <img src={Ellipse} alt="" className='ellipse-one' />
      <img src={Ellipse1} alt="" className='ellipse-two' />
       <img src={Ellipse2} alt="" className='ellipse-three' />
      <img src={Ellipse3} alt="" className='ellipse-four' />
      </div>
      
     
      <div className='Authenication-children'>
        <div className='children'>
        {children}
        </div>
      </div>
      
    </div>
      </div>
   
  )
}

export default Content;