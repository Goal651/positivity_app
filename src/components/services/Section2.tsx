import QASection from "./QASection";
import ServiceCenter from "./ServiceCenter";
import ServiceOverView from "./ServiceOverView";

export default function Section2() {
    return (
        <div className="flex flex-col space-y-10">
            <div>
                <img
                    src="/serviceSection2Img1.png"
                    alt=""
                    className="w-3xl" />
            </div>
            <ServiceOverView />
            <ServiceCenter />
            <QASection />
        </div>
    )
}