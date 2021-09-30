import React from 'react';
import bgImage from '../../../src/images/ColorlessBitesizedKob-max-1mb.gif'

const About = () => {
    return (
        <div>
            <div className="w-75 mx-auto text-center mb-5" >
                {/* <h1>Courses are under Cooking</h1> */}
                <img src={bgImage} className="img-fluid mx-auto " alt="" srcset="" />
            </div>
        </div>
    );
};

export default About;