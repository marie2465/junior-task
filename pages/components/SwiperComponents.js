import offer from "../../styles/Offer.module.scss";
import SwipeComponent from "./SwipeComponent";

const SwippersComponents = () => {
    return (
        <div className={offer.offer}>
            <div className={offer.offer__content}>
                <h2 className={offer.offer__text}>60 Minute Car Concierge Testimonials</h2>
            </div>
            <div className={offer.offer__content}><SwipeComponent/></div>
        </div>
    )
}
export default SwippersComponents;