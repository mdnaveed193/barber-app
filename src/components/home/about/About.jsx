// import React from 'react'
// import './About.css'
// import Heading from '../../utils/Heading'

// function About() {
//     return (
//         <div id='about' className="about">
//             <Heading heading={"About"} />
//             <div className="about-story">
//                 <div className="about-info">
//                     <div className="heading">Our Story</div>
//                     <p>
//                         Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
//                         <br />
//                         <br />
//                         At PMC, we believe grooming is more than a routine — it’s an experience. With a team of skilled professionals and a passion for precision, we offer a full range of salon services designed to make you look and feel your best.


//                     </p>
//                 </div>
//                 <div className="timings">

//                     <p>Working Hours</p>
//                     <div className="schedule">
//                         <div>
//                             <div className="days">Monday-Friday</div>
//                             <div className="time">9:00 AM - 8:00 PM</div>
//                         </div>

//                         <div>
//                             <div className="days">Saturday</div>
//                             <div className="time">9:00 AM - 6:00 PM</div>
//                         </div>
//                         <div>
//                             <div className="days">Sunday</div>
//                             <div className="time">10:00 AM - 3:00 PM</div>
//                         </div>

//                     </div>
//                 </div>
//             </div>


//         </div>


//     )
// }

// export default About

import React from 'react'
import './About1.css'
import Heading from '../../utils/Heading'

function About() {
    return (
        <section id="about" className="about">
            <Heading heading="About" />
            <div className="about-story">
                <div className="about-info">
                    <h2 className="heading">Our Story</h2>
                    <p>
                        Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
                        <br /><br />
                        At PMC, we believe grooming is more than a routine — it’s an experience. With a team of skilled professionals and a passion for precision, we offer a full range of salon services designed to make you look and feel your best.
                    </p>
                </div>

                <div className="timings">
                    <p>Working Hours</p>
                    <div className="schedule">
                        <div>
                            <span className="days">Monday–Friday</span>
                            <span className="time">9:00 AM – 8:00 PM</span>
                        </div>
                        <div>
                            <span className="days">Saturday</span>
                            <span className="time">9:00 AM – 6:00 PM</span>
                        </div>
                        <div>
                            <span className="days">Sunday</span>
                            <span className="time">10:00 AM – 3:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
