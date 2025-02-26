import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Hero from "../components/services/Hero";
import Section1 from "../components/services/Section1";
import Section2 from "../components/services/Section2";

export default function Services() {

    return (
        <div>
            <Header />
            <Hero />
            {/* Main part*/}
            <div className="flex pt-20 mx-30 space-x-30 pb-30" >
                <Section1 />
                <Section2 />
            </div>
            <Footer />
        </div>
    )
}