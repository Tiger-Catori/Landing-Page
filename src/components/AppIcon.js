const AppIcon = () => {
    return (
        <section className="section__icon section">
            <h1 className='heading benefits__head'><span>Why</span> Fasco App </h1>
            <div className="container wrap__backward">
                {/* <h1 className='heading benefits__head'><span>Why</span> Fasco App </h1> */}
                <div className="container__img">
                        <img className="phone-new" src='/images/phone/phone-double.webp' alt='phone-app' />
                </div>

                <div className="fasco__list-box">
                    <ul className="fasco-list">
                        <li>
                            <div className="icon-box">
                                <img className="icon__img" src="/images/icon/icon-1.webp" alt=''/>
                                <h3>Pay by credit card</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo lectus posuere tellus auctor non ac in. Tincidunt feugiat senectus ultrices massa eget malesuada tellus. Ultricies non adipiscing a arcu ut turpis orci. Penatibus morbi pellentesque phasellus ipsum eget aliquet vel tortor nibh.</p>
                        </li>
                        <li>
                            <div className="icon-box">
                                <img className="icon__img" src="/images/icon/icon-2.webp" alt=""/>
                                <h3>Customer support</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Leo lectus posuere tellus auctor non ac in. Tincidunt feugiat senectus ultrices massa eget malesuada tellus. Ultricies non adipiscing a arcu ut turpis orci. Penatibus morbi pellentesque phasellus ipsum eget aliquet vel tortor nibh.</p>
                        </li>
                    </ul>
                </div>

            </div>

        </section>
    )
}
export default AppIcon;