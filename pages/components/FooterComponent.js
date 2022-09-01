import footer from "../../styles/Footer.module.scss";
import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.footer__row}>
                <div className={footer.footer__column}>
                    <img src="/logo.png" alt="logo" className={footer.footer__img}/>
                </div>
                <div className={footer.footer__column}>
                    <div>
                        <h1 className={footer.footer__h2}>Car Concierge</h1>
                    </div>
                    <div>
                        <h3 className={footer.footer__h3}>BECAUSE CARS ARE OUR PASSION BECAUSE NOW IS YOUR
                            TIME.</h3>
                    </div>
                </div>
                <div className={footer.footer__column}>
                    <div className={footer.footer__h2}>
                        <img src="/svg/facebook.svg" alt="facebook" height={33} width={33}/>
                        <img src="/svg/youtube.svg" alt="youtube" height={33} width={33}/>
                    </div>
                    <div>
                        <div className={footer.footer__textDiv}>
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
            <div className={footer.footer__privacy}>
                <div className={footer.footer__privacy}>
                        <span className={footer.footer__textY}>Copyright © 2022 60minutecar | Car concierge is revolutionizing the car buying experience. All rights reserved.
                            <Link href='#'>
                                <a className={footer.footer__link}>Privacy Policy</a>
                            </Link>
                        </span>
                </div>
                <div className={footer.footer__column}>
                        <span className={footer.footer__textY}>
                            Powered by <Link href='#'><a className={footer.footer__link}>99 Promo</a></Link>
                        </span>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;