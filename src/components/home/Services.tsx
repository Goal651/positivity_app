export default function Services() {

    return (
        <div className="flex flex-col items-center justify-center gap-y-10">
            <div className="text-black font-bold text-5xl ">
                Our services inspire <span style={{ color: '#CD1F01' }}>positively</span>
            </div>
            <div className="flex gap-x-20 items-center justify-center">
                <div className="flex flex-col gap-y-5">
                    <div className="flex items-center">
                        <img src="/serviceImg1.png" alt="" />
                        <div className="font-bold text-3xl text-black ">What we offer</div>
                    </div>
                    <div className="text-bold text-2xl text-black w-lg">
                        In a world filled with challenges, we believe in the power of
                        <span style={{ color: '#CD1F01' }}>positivity</span> to transform lives.
                        Our mission is to help you embrace a brighter perspective, no matter what life throws your way
                    </div>
                    <div className="flex justify-end"> 
                        <button style={{ backgroundColor: '#C81F00D1' }}
                            className="btn text-white rounded-4xl border-0 px-10 py-7 text-xl"
                        >Read more</button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <div className="flex relative top-10 gap-x-4 border-4  custom-shadow-lg rounded-2xl border-gray-200  px-10 py-4 w-fit bg-white z-10">
                        <div className="">
                            <img
                                src="/communityServices.png"
                                className="object-cover"
                                alt="" />
                        </div>
                        <div className="text-black font-semibold  w-32">
                            "We believe in the power of kindness."
                            "Positivity is contagious and can create ripples of change."
                        </div>
                    </div>
                    <div className="flex gap-x-40">
                        <div className="flex gap-x-4 border-4 rounded-2xl  custom-shadow-lg border-gray-200  px-10 py-4 bg-white w-fit">
                            <div className="">
                                <img
                                    src="/communityServices.png"
                                    className="object-cover"
                                    alt="" />
                            </div>
                            <div className="text-black font-semibold w-32">
                                "We believe in the power of kindness."
                                "Positivity is contagious and can create ripples of change."
                            </div>
                        </div>
                        <div className="flex gap-x-4 border-4 rounded-2xl  custom-shadow-lg border-gray-200  px-10 py-4 bg-white w-fit">
                            <div className="">
                                <img
                                    src="/communityServices.png"
                                    className="object-cover"
                                    alt="" />
                            </div>
                            <div className="text-black font-semibold w-32">
                                "We believe in the power of kindness."
                                "Positivity is contagious and can create ripples of change."
                            </div>
                        </div>
                    </div>
                    <div className="flex relative bottom-10 gap-x-4 border-4  custom-shadow-xl rounded-2xl border-gray-200  px-10 py-4 bg-white w-fit z-10">
                        <div className="">
                            <img
                                src="/communityServices.png"
                                className="object-cover"
                                alt="" />
                        </div>
                        <div className="text-black font-semibold w-32">
                            "We believe in the power of kindness."
                            "Positivity is contagious and can create ripples of change."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}