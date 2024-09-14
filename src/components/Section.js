import React from 'react';

const Section = ({ id, heading, text, imgSrc, imgAlt, reverse }) => {
    return (
        <section className={`section ${reverse ? 'section--reverse' : ''}`} id={id}>
            <div className={`container ${reverse ? 'wrap__backward' : ''}`}>
                {!reverse && (
                    <>
                        <div className="container__img">
                            <img className="water" src={imgSrc} alt={imgAlt} />
                        </div>
                        <div className='section__text'>
                            <h1 className='heading'>{heading}</h1>
                            <p className='hero__p'>{text}</p>
                        </div>
                    </>
                )}
                {reverse && (
                    <>
                        <div className='section__text'>
                            <h1 className='heading'>{heading}</h1>
                            <p className='hero__p'>{text}</p>
                        </div>
                        <div className="container__img">
                            <img className="water" src={imgSrc} alt={imgAlt} />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Section;
