
const AppStore = () => {
    return (
        <section className='section__appstore section' id='app'>
            <div className='container'>
                <div className='section__text'>
                    <h1 className='heading'>Download our application and start improving your health</h1>
                    <p className='hero__p'>Lorem ipsum dolor sit amet consectetur. Leo lectus posuere tellus auctor non ac in. Tincidunt feugiat senectus ultrices massa eget malesuada tellus. Ultricies non adipiscing a arcu ut turpis orci.</p>
                            
                    <div className="app-buttons" id='app__buttons'>
                        <a href="#google-play"><img src="/images/general/googleplay.webp" alt="Google Play" /></a>
                        <a href="#app-store"><img src="/images/general/appstore.webp" alt="App Store" /></a>
                    </div>
                </div>

                <div className="container__img">
                        <img className="phone" src='/images/phone/phone-hero-1.webp' alt='phone-app' />
                </div>
            </div>
        </section>
    );
};

export default AppStore;