import offer from "../../styles/Offer.module.scss";

const OfferComponent = () => {
    return (
        <div className={offer.offer__light}>
            <div className={offer.offer}>
                <div className={offer.offer__text}>
                    <h2>Offer</h2>
                </div>
                <div className={offer.offer__content}>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/dollar.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>We will help you get the optimum financing for
                                your car.</h3>
                        </div>
                    </div>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/clock.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>Save you the frustration, hassle and wasted time.</h3>
                        </div>
                    </div>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/handshake.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>We negotiate on your behalf with the dealerships.</h3>
                        </div>
                    </div>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/truck.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>If you don’t want to pick up the car we can help you with delivery.</h3>
                        </div>
                    </div>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/rotate.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>If you have a trade-in we’ll help your family to get the most for it.</h3>
                        </div>
                    </div>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/list.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>Typically our process takes under 1 week.</h3>
                        </div>
                    </div>
                    <div className={offer.offer__textWithImage}>
                        <img src='/svg/square-check.svg' alt='dollar'
                             className={offer.offer__image}/>
                        <div className={offer.offer__textUnderImage}>
                            <h3>Painless car purchase - $995</h3>
                        </div>
                    </div>
                </div>
                <div className={offer.offer__clip}></div>
            </div>
        </div>
    );
}

export default OfferComponent;