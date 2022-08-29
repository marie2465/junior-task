import Image from "next/image";
import Link from "next/link";
import styles from '/styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <div className={styles.nav__div}>
                        <li className={styles.nav__item}><Image src='/svg/facebook.svg' alt='facebook' height={30}
                                                                width={30}
                                                                className={styles.nav__icon}/>
                        </li>
                        <li className={styles.nav__item}>
                            <Image src='/svg/youtube.svg' alt='youtube' height={30} width={30}
                                   className={styles.nav__icon}/>
                        </li>
                    </div>
                    <ul className={styles.nav__listRight}>
                        <li className={styles.nav__main}>
                            <div>
                                <Link href='/' >
                                    <a>
                                        <span>Car concierge</span>
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li className={styles.nav__item}>
                            <div><Link href='#'><a>About</a></Link></div>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href='#' className={styles.nav__link}>Service</Link>
                            <span className="nav__dropdown-icon">&#9660;</span>
                            <ul className={styles.nav__subnav}>
                                <li>
                                    <Link href='#' className={styles.nav__subnavlink}>
                                        <a>
                                            Car concierge Service
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.nav__subnavlink}>
                                        <a>
                                            Training "How to buy a car"
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.nav__subnavlink}>
                                        <a>
                                            JDM Car List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href='#'>
                                <a>Process</a>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href='#'>
                                <a>Testimonials</a>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href='#'>
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href='#'>
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link href='#' className={styles.nav__link}>Profile</Link>
                            <span className="nav__dropdown-icon">&#9660;</span>
                            <ul className={styles.nav__subnav}>
                                <li>
                                    <Link href='#' className={styles.nav__subnavlink}>
                                        <a>
                                            Car concierge Service
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.nav__subnavlink}>
                                        <a>
                                            Training "How to buy a car"
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.nav__subnavlink}>
                                        <a>
                                            JDM Car List
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;