import Header from "../../components/global/Header";
import DailyTips from "../../components/home/DailyTips";
import Hero from "../../components/home/Hero";
import Inspiring from "../../components/home/Inspirings";
import PositiveEnergy from "../../components/home/PositiveEnergy";
import Services from "../../components/home/Services";
import Tools from "../../components/home/Tools";

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
        </div>
    )
}