const featureData = [
    { img: '/images/phone/phone-feature-1.webp', text: 'One Click - Your Water will show up by your door steps' },
    { img: '/images/phone/phone-feature-2.webp', text: 'Explore the categories and choose the desired quantity' },
    { img: '/images/phone/phone-feature-3.webp', text: 'Add to the list of favorites so that later you can select them and pay' },
    { img: '/images/phone/phone-feature-4.webp', text: 'Select the payment method and you can choose the pay on delivery option' }
];

const Features = () => {
    return (
        <section className="section__features section">
            <div>
                <h1 className="heading">Fasco App <span>Features</span></h1>
            </div>

            <div className="feature__box">
                {featureData.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Features;


const FeatureCard = ({ feature, index }) => {
    return (
        <div key={index} className="feature__card">
            <div className={`icon-content ${index % 2 === 1 ? 'content-reverse' : ''}`}>
                <div className="icon-img">
                    <img src={feature.img} alt={`feature-${index + 1}`} />
                </div>
                <div className="feature__p">
                    <p>{feature.text}</p>
                </div>
            </div>
        </div>
    );
};
