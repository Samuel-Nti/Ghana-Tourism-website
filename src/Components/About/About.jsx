import React from 'react'
import './About.css'
import about_img from '../../assets/about1.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src = {about_img} alt = "" className='about-img' />
            <img src = {play_icon} alt = "" className='play-icon' onClick={()=>{setPlayState(true)}} />

        </div>
        <div className="about-right">
            <h3>ABOUT GHANA</h3>
            <h2>Welcome to Ghana: The Gateway to Africa</h2>

            <p>Ghana, often referred to as the "Gateway to Africa," is a country rich
               in history, culture, and natural beauty.Located on the West African coast,
               Ghana boasts a diverse landscape that ranges from lush forests and savannahs 
                to pristine beaches along the Atlantic Ocean.
            </p>
            <p>Ghana's history is deeply rooted in the ancient empires that once 
                flourished here, including the powerful Ashanti Kingdom. 
                The country played a significant role in the transatlantic slave trade, 
                with historic forts and castles, such as the Cape Coast and Elmina Castles,
                 standing as solemn reminders of this era.
            </p>
            <p>Ghana’s geography is as diverse as its culture. The country is divided
                 into several distinct regions, each with its own unique landscape and 
                 attractions. The coastal region is home to beautiful beaches, vibrant 
                 fishing villages, and historic forts, while the northern savannahs offer 
                 vast wildlife reserves such as Mole National Park, where elephants, antelopes,
                  and other wildlife roam freely.
            </p>




        </div>
    </div>
  )
}

export default About