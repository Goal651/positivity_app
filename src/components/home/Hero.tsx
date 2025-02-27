export default function Hero() {
    return (
        <div className="bg-white-50">
            <div className="bg-cover bg-center bg-no-repeat h-[650px] flex items-center justify-center"
                style={{ backgroundImage: 'url("/land-img.png")' }}
            >
                <div className="flex items-center justify-center ">
                    <button className="btn bg-white border-0 text-black text-xl font-bold px-10 p-7 rounded-4xl mt-20">
                        Explore now
                    </button>
                </div>
            </div>
            <div className="relative flex border-3 gap-x-10 justify-between px-32 py-14 bg-white mx-32 z-10 bottom-40 rounded-2xl"
                style={{ borderColor: '#C81F0070' }}>
                <div className="w-80">
                    <div style={{ color: '#CD1F01' }} className="text-5xl font-bold">55+</div>
                    <div className="text-black text-xl">
                        Our technology helps companies explore and navigate the world in new ways.
                    </div>
                </div>
                <div className="border-l-3 border-black" />
                <div className="mx-10">
                    <img
                        src="/diversity.png"
                        alt="" />
                </div>
                <div className="border-l-3 border-black" />
                <div className="w-80">
                    <div style={{ color: '#CD1F01' }} className="text-5xl font-bold">Dive-</div>
                    <div className="text-black text-xl">
                        Our technology helps companies explore and navigate the world in new ways.
                    </div>
                </div>
            </div>
        </div>
    )
}