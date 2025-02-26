import Part1Sec1 from "./Part1Sec1";
import Part1Sec2 from "./Part1Sec2";

export default function Section1() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-10">
                <Part1Sec1 />
                <Part1Sec2/>
            </div>
        </div>
    )
}