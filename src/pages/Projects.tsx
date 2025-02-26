import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import Hero from "../components/projects/Hero";
import Project1 from "../components/projects/Project1";
import Project2 from "../components/projects/Project2";
import Project3 from "../components/projects/Project3";
import Transformation from "../components/projects/Transformation";

export default function Projects() {
    return (
        <div>
            <Header pageNumber={4} />
            <Hero />
            <Transformation />
            <Project1 />
            <Project2/>
            <Project3/>
            <Footer/>
        </div>
    )
}