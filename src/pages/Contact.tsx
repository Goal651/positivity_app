import GetInTouch from "../components/contact/GetInTouch";
import Hero from "../components/contact/Hero";
import Header from "../components/global/Header";

export default function Contact() {
    return (
        <div>
            <Header pageNumber={5}/>
            <Hero/>
            <GetInTouch/>
        </div>
    )
}