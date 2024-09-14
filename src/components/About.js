import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section
            id="about"
            heading="About us"
            text="Lorem ipsum dolor sit amet consectetur. Malesuada arcu venenatis placerat natoque in mattis lorem. Mattis vulputate magnis ultricies augue ac tellus auctor quis tristique. Lorem ipsum dolor sit amet consectetur. Malesuada arcu venenatis placerat natoque in mattis lorem."
            imgSrc="/images/general/water.webp"
            imgAlt="Water"
            reverse={false} // Ensure reverse is true for About section
        />
    );
};

export default About;
