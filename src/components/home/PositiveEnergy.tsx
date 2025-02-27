export default function PositiveEnergy() {
    return (
        <div className="relative flex flex-col items-center justify-center mt-40 z-10 rounded-3xl custom-shadow-xl">
            <div className="font-bold text-4xl">
                Radiate <span style={{ color: '#CD1F01' }}>Positive</span> Energy
            </div>
            <div className="flex flex-col  w-6xl">
                <div className="flex justify-between">
                    <div><img src="/radiateImg1.png" alt="Radiate Image 1" /></div>
                    <div><img src="/radiateCurve1.png" alt="Decorative Curve 1" /></div>
                </div>
                <div className="relative bottom-10 flex items-center justify-center z-5">
                    <div><img src="/radiateImg2.png" alt="Radiate Image 2" /></div>
                    <div className="absolute top-10 left-50 z-10 flex flex-col w-3xl gap-y-10">
                        <div className="flex items-start justify-start"><img src="/liveWithTxt.png" alt="" /></div>
                        <div className="flex items-center justify-center"><img src="/playVideo.png" alt="Play Video" /></div>
                        <div className="flex items-end justify-end"><img src="/positiveVibeTxt.png" alt="" /></div>
                    </div>
                </div>
                <div className="flex relative bottom-40 gap-x-20 items-center">
                    <div>
                        <img src="/radiateCurve2.png" alt="Decorative Curve 2" />
                    </div>
                    <div className="">
                        <p className="text-xl font-bold w-2xl">
                            Embrace the Vibes, Feel the Positivity, Life, Lived Brightly, Glow with Positive Vibes
                        </p>
                        <div className="flex items-end justify-end">
                            <button style={{ backgroundColor: '#C81F00D1' }}
                                className="btn border-0 rounded-2xl px-14 py-6 text-white text-lg ">
                                Live stream
                            </button>
                        </div>
                    </div>
                    <div style={{ borderColor: '#CD5F4A' }}
                        className="border-4 w-72 h-[400px] rounded-xl relative flex bg-white overflow-visible">
                        <img src="/radiateImg3.png" alt="Radiate Image 3" className="object-cover "/>
                    </div>
                </div>
            </div>

        </div>
    )
}