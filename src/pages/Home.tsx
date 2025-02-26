import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import DailyTips from "../components/home/DailyTips";
import GetStarted from "../components/home/GetStarted";
import Hero from "../components/home/Hero";
import Inspiring from "../components/home/Inspirings";
import PositiveEnergy from "../components/home/PositiveEnergy";
import Services from "../components/home/Services";
import ClientTestimonials from "../components/home/Testimonials";
import Tools from "../components/home/Tools";

export default function Home() {

    return (
        <div>
            <Header />
            <Hero />
            <Inspiring />
            <Services />
            <DailyTips />
            <Tools />
            <PositiveEnergy />
            <ClientTestimonials />
            <GetStarted />
            <Footer />
        </div>
    )
}