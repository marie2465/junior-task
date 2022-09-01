import offer from "../../styles/Offer.module.scss";
import about from "../../styles/AboutUs.module.scss";

const AboutUs = () => {
    return (
        <div className={offer.offer__light}>
            <div className={offer.offer}>
                <div className={about.about__headerText}>
                    <h2>About Us</h2>
                </div>
                <div className={about.about__content}>
                    <div className={about.about__text}>
                           <span>
                               Car Concierge has proven that the concept of buying the perfect vehicle online with the help of a professional can work, and work well.<br/>
                               Clients save time, stress, anxiety, money, and the headache of sitting in a car dealership all day.
                           </span>
                    </div>
                    <div className={about.about__text}>
                        Don’t do the car dealership dance anymore. Let us take care of all the steps while you reap
                        the rewards.
                    </div>
                </div>
                <div>
                    <button className={about.about__button}>Read more</button>
                </div>
                <div className={about.about__separator}></div>
            </div>
        </div>
    );
}

export default AboutUs;