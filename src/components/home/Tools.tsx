export default function Tools() {
    return (
        <div className="flex px-15 mt-40 items-center justify-center pb-20 bg-gradient-to-b from-white via-white to-red-100">
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
                <div className="flex flex-col items-start">
                    <div className="flex items-start">
                        <div className="flex flex-col items-center">
                            <div style={{backgroundColor:'#CD1F01'}} className="w-10 h-10 rounded-full  text-white flex items-center justify-center font-bold">1</div>
                            <div style={{backgroundColor:'#CD1F01'}} className="w-1 h-10 "/>
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-lg">Meditation Resources</h3>
                            <p className="text-sm text-gray-700">Calm, Headspace</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex flex-col items-center">
                            <div style={{backgroundColor:'#CD1F01'}} className="w-10 h-10 rounded-full  text-white flex items-center justify-center font-bold">2</div>
                            <div style={{backgroundColor:'#CD1F01'}} className="w-1 h-10 "/>
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-lg">Journaling Prompts</h3>
                            <p className="text-sm text-gray-700">Writing down things you’re grateful for using their templates</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex flex-col items-center">
                            <div style={{backgroundColor:'#CD1F01'}} className="w-10 h-10 rounded-full  text-white flex items-center justify-center font-bold">3</div>
                            <div style={{backgroundColor:'#CD1F01'}} className="w-1 h-10 "/>
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-lg">Affirmations Generator</h3>
                            <p className="text-sm text-gray-700">An interactive tool where users can get a random affirmation</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex flex-col items-center">
                            <div style={{backgroundColor:'#CD1F01'}} className="w-10 h-10 rounded-full  text-white flex items-center justify-center font-bold">4</div>
                            <div style={{backgroundColor:'#CD1F01'}} className="w-1 h-10 "/>
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-lg">Books and Articles</h3>
                            <p className="text-sm text-gray-700">Curate a list of books, eBooks, or articles on positivity and mindfulness</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">5</div>
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-lg">DIY Resources</h3>
                            <p className="text-sm text-gray-700">A Mood Tracker template, Coloring Pages for stress relief</p>
                        </div>
                    </div>
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