import Image from "next/image";

import Main_component from "./MainComponent";
import offer from "../../styles/Offer.module.css"
import about from "../../styles/AboutUs.module.css"
import OfferComponent from "./OfferComponent";
import StrengthComponent from "./StrengthComponent";
import AboutUs from "./AboutUs";
import SwipeComponent from "./SwipeComponent";

const Layout = () => {
    return (
        <div>
            <Main_component/>
            <OfferComponent/>
            {/*<StrengthComponent/>*/}
            {/*<AboutUs/>*/}

            {/*<div className={offer.offer}>*/}
            {/*    <div>*/}
            {/*        <h2 className={offer.offer__text}>60 Minute Car Concierge Testimonials</h2>*/}
            {/*    </div>*/}
            {/*    /!*<SwipeComponent/>*!/*/}
            {/*</div>*/}
        </div>
    );
}
export default Layout;