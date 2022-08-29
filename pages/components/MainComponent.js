import styles from "../../styles/MainComponent.module.css";

const MainComponent = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.main_content}>
                    <img src='/logo.png' alt='Car Concierge' className={styles.container__height} width={300}/>
                </div>
                <div className={styles.main_content}>
                    <span className={styles.text}>Car Concierge</span>
                </div>
                <div className={styles.main_content}>
                    <span className={styles.heading__text}>Let us do the car shopping and you do the driving!</span>
                </div>
                <div>
                    <span className={styles.edit__text}>
                        Car Concierge has proven that the concept of buying the perfect vehicle online with the help of a professional can work, and work well. <br/>
                        Clients save time, stress, anxiety, money, and the headache of sitting in a car dealership all day.
                    </span>
                </div>
                <div className={styles.main_content}>
                    <button className={styles.button}>
                        Let's Start
                    </button>
                </div>
                <div className={styles.forms}>
                    <div className={styles.forms__container}>
                        <div>
                            <h4 className={styles.forms_text}>Get Free Call Script For Car Dealers</h4>
                        </div>
                        <div className={styles.forms__div}>
                            <div>
                                <input type={"email"} className={styles.forms__input}
                                       placeholder="Enter your email or phone"/>
                            </div>
                            <div>
                                <button className={styles.button_submit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.forms__container}>
                        <div>
                            <div>
                                <h4 className={styles.forms_text}>Get Free 60MinuteCar App for Google Chrome</h4>
                            </div>
                            <div>
                                <button className={styles.button_submit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainComponent;