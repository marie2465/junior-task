import Image from "next/image";

import Main_component from "./MainComponent";
import offer from "../../styles/Offer.module.css"
import footer from "../../styles/Footer.module.css"
import OfferComponent from "./OfferComponent";
import StrengthComponent from "./StrengthComponent";
import AboutUs from "./AboutUs";
import SwippersComponents from "./SwippersComponents";
import Link from "next/link";

const Layout = () => {
    return (
        <div>
            <Main_component/>
            <OfferComponent/>
            <StrengthComponent/>
            <AboutUs/>
            <SwippersComponents/>
            <div className={offer.offer}>
                <div className={footer.footer__row}>
                    <div className={footer.footer__column}>
                        <img src="/logo.png" alt="logo" height={130} width={360}/>
                    </div>
                    <div className={footer.footer__column}>
                        <div>
                            <h2 className={footer.footer__h2}>Car Concierge</h2>
                        </div>
                        <div>
                            <h3 className={footer.footer__h3}>BECAUSE CARS ARE OUR PASSION BECAUSE NOW IS YOUR
                                TIME.</h3>
                        </div>
                    </div>
                    <div className={footer.footer__column}>
                        <div>
                            <img src="/svg/facebook.svg" alt="facebook" height={33} width={33}/>
                            <img src="/svg/youtube.svg" alt="youtube" height={33} width={33}/>
                        </div>
                        <div>
                            <div>
                                <Link href="#">
                                    <a className={footer.footer__text}>
                                        Call or Text 772.202.2116
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="#">
                                    <a className={footer.footer__text}>
                                        Go to car concierge usa
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Layout;