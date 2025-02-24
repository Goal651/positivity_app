import Header from "../../components/global/Header";

export default function Home() {

    return (
        <div>
            <Header />
            <div>
                <div className="bg-cover bg-center bg-no-repeat h-[650px] flex items-center justify-center"
                    style={{ backgroundImage: 'url("/land-img.png")' }}
                >
                    <div className="flex items-center justify-center ">
                        <button className="btn bg-white border-0 text-black text-xl font-bold px-10 p-7 rounded-4xl mt-20">
                            Explore now
                        </button>
                    </div>
                </div>
                <div className="flex border gap-x-10 justify-between px-20 py-10 bg-white"
                    style={{ borderColor: '#C81F0070' }}>
                    <div className="w-80">
                        <div style={{ color: '#CD1F01' }} className="text-5xl font-bold">55+</div>
                        <div className="text-black text-xl">
                            Our technology helps companies explore and navigate the world in new ways.
                        </div>
                    </div>
                    <div className="border-l-2 border-black" />
                    <div>
                        <img
                            src="/diversity.png"
                            alt="" />
                    </div>
                    <div className="border-l-2 border-black" />
                    <div className="w-80">
                        <div style={{ color: '#CD1F01' }} className="text-5xl font-bold">Dive-</div>
                        <div className="text-black text-xl">
                            Our technology helps companies explore and navigate the world in new ways.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}