import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'





const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
const slideForward=()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`

}

const slideBackward=()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`

}



  return (
    <div className= 'testimonials'>
        <img src = {next_icon} alt= "" className='next-btn'  onClick={slideForward}/>
        <img src = {back_icon} alt= "" className='back-btn' onClick={slideBackward} />
        <div className="slider">

            <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt= "" />
                    <div>
                    <h3>Sarah Thompson</h3>
                    <span>New York, USA</span>
                    </div>
                </div>
                <p>My trip to Ghana was nothing short of magical.
                     The highlight was visiting Cape Coast Castle,
                    where the history was both heart-wrenching and eye-opening.
                    The people were incredibly welcoming, and the food was delicious!
                    I especially loved trying jollof rice and fresh coconut water
                    from the street vendors. The markets were vibrant and full of
                    life, offering a true taste of Ghanaian culture.
                </p>
                </div>

            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt= "" />
                    <div>
                    <h3>Yaw Kwarteng</h3>
                    <span>Kumasi, Ghana</span>
                    </div>
                </div>
                <p>Exploring Ghana’s national parks was an unforgettable experience.
                    Kakum National Park’s canopy walk gave me an adrenaline rush while
                    offering breathtaking views of the rainforest. Mole National Park
                    was equally amazing, with elephants just a few meters away from us. 
                    The sense of adventure combined with the warmth of the locals made
                    this trip one I’ll cherish forever.
                </p>
                </div>

            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt= "" />
                    <div>
                    <h3>Amina Hassan</h3>
                    <span>Lagos, Nigeria</span>
                    </div>
                </div>
                <p>As a fellow West African, I felt a deep connection to Ghana.
                     Visiting the W.E.B. Du Bois Center and the Kwame Nkrumah 
                     Memorial Park in Accra inspired me with stories of Pan-Africanism
                      and Ghana’s pivotal role in African history. The nightlife in 
                      Accra is also something to experience—live music, great food,
                       and vibrant energy all around!
                </p>
                </div>

            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt= "" />
                    <div>
                    <h3>Carlos Rivera</h3>
                    <span>Madrid, Spain</span>
                    </div>
                </div>
                <p>Ghana’s coastline is stunning. I spent several days relaxing
                     on the beaches of Busua and Kokrobite, where the golden sands
                      and warm waters made for a perfect getaway. The local seafood
                       was fresh and flavorful, and the laid-back atmosphere was 
                       exactly what I needed. It’s a great spot for surfing, too—I even
                        took a few lessons and caught my first wave!
                </p>
                </div>

            </li>


            </ul>

        </div>

        
        </div>
  )
}

export default Testimonials