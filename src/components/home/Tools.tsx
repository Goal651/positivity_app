export default function Tools() {
    return (
        <div className="flex mt-40 items-center justify-center">
            <div className="flex flex-col gap-y-10">
                <div className="text-5xl font-bold">
                    Practical Tools for a
                    <span style={{ color: '#CD1F01' }}>Positive</span> Mindset
                </div>
                <div className="text-xl w-xl">
                    Discover practical tools and inspiring resources to cultivate a positive mindset.
                    From guided meditations to journaling prompts and uplifting challenges,
                    find everything you need to bring joy and resilience into your life.
                    Start building your positivity toolkit today for small steps toward big transformations!
                </div >
                <div className="flex flex-col justify-start items-start">
                    <ul className="steps steps-vertical">
                        <li className="step step-warning ">Register</li>
                        <li className="step step-warning  ">Choose plan</li>
                        <li className="step step-warning  ">Purchase</li>
                        <li className="step step-warning  ">Receive Product</li>
                    </ul>
                </div>
                <div className="flex gap-x-32">
                    <button
                        style={{ backgroundColor: '#C81F00' }}
                        className="btn text-white rounded-xl border-0 px-10 py-7 text-xl"
                    >
                        Discover tools
                    </button>
                    <button
                        style={{ borderColor: '#C81F00', color: '#C81F00' }}
                        className="btn border-2 rounded-xl bg-white px-10 py-7 text-xl"
                    >
                        Read more
                    </button>


                </div>


            </div>
            <div className="">
                <img src="/toolImg.png" alt="" />
            </div>
        </div>

    )
}