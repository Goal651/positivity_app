import CoreValues from "../../components/about/CoreValues";
import Hero from "../../components/about/Hero";
import HowWeHelp from "../../components/about/HowWeHelp";
import Mission from "../../components/about/Mission";
import News from "../../components/about/News";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";

export default function AboutUs() {
    return (
        <div>
            <Header />
            <Hero />
            <News />
            <CoreValues />
            <Mission />
            <HowWeHelp/>
            <Footer/>
        </div>
    )
}