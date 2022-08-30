import Main_component from "./MainComponent";
import OfferComponent from "./OfferComponent";
import StrengthComponent from "./StrengthComponent";
import AboutUs from "./AboutUs";
import SwiperComponents from "./SwiperComponents";
import FooterComponent from "./FooterComponent";

const Layout = () => {
    return (
        <div>
            <Main_component/>
            <OfferComponent/>
            <StrengthComponent/>
            <AboutUs/>
            <SwiperComponents/>
            <FooterComponent/>
        </div>
    );
}
export default Layout;