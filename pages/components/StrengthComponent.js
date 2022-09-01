import offer from "../../styles/Offer.module.scss";
import strength from "../../styles/Strength.module.scss";

const StrengthComponent = () => {
    return (
        <div className={offer.offer__dark}>
            <div className={offer.offer}>
                <div className={offer.offer__text}>
                    <h2>Our Strength</h2>
                </div>
                <div className={strength.strength__content}>
                    <div className={strength.strength__content}>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/user.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>
                                    Independent specialist
                                </span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/signs-post.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>
                                    Purchase advice
                                </span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/chart-line.svg" alt='user' className={offer.offer__image}
                            />
                            <div className={offer.offer__textUnderImage}>
                                <span>
                                    Market analysis, expenses and fees
                                </span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/thumbs-up.svg" alt='user' className={offer.offer__image}
                            />
                            <div className={offer.offer__textUnderImage}>
                                <span>
                                    Best solution offer
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={strength.strength__content}>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/mobile-alt.svg" alt='user' className={offer.offer__image}
                            />
                            <div className={offer.offer__textUnderImage}>
                                <span>Contact the owner and users</span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/star.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>The optimal solution for companies</span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/heart.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>Personal approach</span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/window-restore.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>Comparison of current offers</span>
                            </div>
                        </div>
                    </div>
                    <div className={strength.strength__content}>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/bookmark.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>Assistance in pickup + report</span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/sliders.svg" alt='user' className={offer.offer__image}
                            />
                            <div className={offer.offer__textUnderImage}>
                                <span>Order for production or stock </span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/heart.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>Personal approach</span>
                            </div>
                        </div>
                        <div className={strength.strength__textWithImage}>
                            <img src="/svg/strength/car.svg" alt='user' className={offer.offer__image}/>
                            <div className={offer.offer__textUnderImage}>
                                <span>Working with any brand</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StrengthComponent;