export default function Mission() {
    return (
        <div className="flex justify-center  items-center mt-20">
            <div className="flex flex-col gap-y-5 w-2xl">
                <div className="text-4xl font-bold">
                    Our mission
                </div>
                <div className="text-3xl font-semibold">
                    Inspiring <span style={{ color: '#CD1F01' }}> positivity </span>
                    every day, building it by
                    One step at a time.
                </div>
                <div className="text-lg ">
                    This platform was born from my own journey of seeking positivity during tough times.
                    I realized that with the right mindset, small changes can lead to big transformations.
                    Now, I’m here to share what I’ve learned with you.
                </div>
                <div>
                    <button
                        style={{ backgroundColor: '#C81F00CC' }}
                        className="btn border-0 px-10 py-2 text-lg font-semibold"
                    >
                        Join our coaching
                    </button>
                </div>
            </div>
            <div>
                <img src="/missionImg1.png" alt="" />
            </div>
        </div>
    )
}