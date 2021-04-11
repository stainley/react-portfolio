import React from 'react';
import './About.css';

const About = ({headline, description, lightTextDesc, photo}) => {
//const About = (props) => {
    return (
        <div data-testid="id-name" className="about-ui" style={{ height: '85%' }}>
            <span>
                <h1 className="heading">{headline}</h1>
                <p className={headline? '' : ''}>{description}</p>
            </span>
        </div>
);
}

export default About;
