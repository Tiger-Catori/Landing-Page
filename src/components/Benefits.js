import Card from './Card'

const Benefits = () => {
    const cardsData = [
        {
            imgSrc: "/images/general/benefits-1.webp",
            title: "High Water Quality",
            description: "Lorem ipsum dolor sit amet consectetur. Malesuada arcu venenatis placerat natoque in mattis lorem. Mattis vulputate magnis ultricies augue ac tellus auctor quis tristique."
        },
        {
            imgSrc: "/images/general/benefits-2.webp",
            title: "Energy Efficiency",
            description: "Lorem ipsum dolor sit amet consectetur. Malesuada arcu venenatis placerat natoque in mattis lorem. Mattis vulputate magnis ultricies augue ac tellus auctor quis tristique."
        },
        {
            imgSrc: "/images/general/benefits-3.webp",
            title: "Cost Savings",
            description: "Lorem ipsum dolor sit amet consectetur. Malesuada arcu venenatis placerat natoque in mattis lorem. Mattis vulputate magnis ultricies augue ac tellus auctor quis tristique."
        }
    ];

    return (
        <section className="section__benefits section" >
            <div className="box--benefits">
                <h1 className='heading benefits__head'>Fasco app <span>Benefits</span></h1>
                <div className='card__box'>
                    {cardsData.map((card, index) => (
                        <Card 
                            key={index} 
                            imgSrc={card.imgSrc} 
                            title={card.title} 
                            description={card.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits;
