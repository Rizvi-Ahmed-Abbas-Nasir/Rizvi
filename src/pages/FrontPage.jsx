

import { useCallback } from "react";
import abbas from '../assets/Images/Rizvi Ahmed Abbas2.png';
import Typewriter from 'typewriter-effect';



export default function Content() {

   
    return(
        <div className="mainPage">
       
        <div className="frontPage">
            <div className="ismyPhoto">
                <img className="rizvi" 
                    src="https://res.cloudinary.com/dtnotszn5/image/upload/v1740779173/Rizvi_r06umi.png"
                />

            </div>

            <div className="Descriptions">
                <div  id='Introduction' className="PlayfairFont">
                <p>hello there,</p><p> My Name is </p>
                </div>
                <div id="MyName" className="oswarld" > 
               <h2>Rizvi Ahmed Abbas</h2>
                </div>
                <div id='Multiples-skills-text' className="oswarld"  > 
                    <h4>I'm a Professional <div className='MultiText '> <Typewriter 
                                                options={{
                                                        strings: [
                                                        'MERN Stack Developer', 
                                                        'Python Developer',
                                                        'Cloud Engineer'
                                                        ],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}/></div></h4>
                </div>
                <div id='downloadAndContactBTN'>
                    <button>Downlaod CV</button>
                    <button>About Me</button>
                </div>
            </div>
        </div>
        </div>



    );

}