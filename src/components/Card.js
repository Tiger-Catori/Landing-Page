const Card = ({ imgSrc, title, description }) => {
    return (
        <div className="card">
            <img className="card-img" src={imgSrc} alt="Card"/>
            <h3 className="heading">
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Card;
