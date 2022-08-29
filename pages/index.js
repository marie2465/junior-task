import Navbar from "./components/Navbar";
import styles from '../styles/Home.module.css';
import Layout from "./components/Layout";

export default function Home() {
    return (
        <div className={styles.containers}>
            <Navbar/>
            <Layout/>
        </div>
    );
}
