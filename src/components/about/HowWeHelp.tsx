export default function HowWeHelp() {
    return (
        <div className="flex gap-x-10 items-center justify-center mt-40 mb-20">
            <div className="w-lg">
                <img
                    src="/helpImg1.png"
                    alt="" />
            </div>
            <div className="flex flex-col gap-y-5 w-2xl">
                <div className="text-5xl font-bold">How we help!</div>
                <div className="text-4xl font-semibold">Your Journey Starts Here, Let’s Build Something
                    <span style={{ color: '#CD1F01' }}>Together</span>
                </div>
                <div className="text-lg">
                    Through our resources, daily tips, and community challenges,
                    we provide actionable tools to cultivate positivity in your life.
                    From uplifting stories to mindfulness practices
                </div>
                <div className="flex-col">
                    <div className="flex  space-x-4">
                        <span style={{ backgroundColor: '#CD1F01' }} className="w-5 h-5 rounded-full " />
                        <span>Provide Knowledge and Resources</span>
                    </div>
                    <div className="flex  space-x-4">
                        <span style={{ backgroundColor: '#CD1F01' }} className="w-5 h-5 rounded-full " />
                        <span>Provide Knowledge and Resources</span>
                    </div>
                    <div className="flex  space-x-4">
                        <span style={{ backgroundColor: '#CD1F01' }} className="w-5 h-5 rounded-full " />
                        <span>Provide Knowledge and Resources</span>
                    </div>
                    <div className="flex  space-x-4">
                        <span style={{ backgroundColor: '#CD1F01' }} className="w-5 h-5 rounded-full " />
                        <span>Provide Knowledge and Resources</span>
                    </div>
                    <div className="flex space-x-4">
                        <span style={{ backgroundColor: '#CD1F01' }} className="w-5 h-5 rounded-full " />
                        <span>Provide Knowledge and Resources</span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        style={{ backgroundColor: '#C81F00CC' }}
                        className="btn border-0 py-2 px-10 underline text-lg font-semibold"
                    >
                        Start your journey
                    </button>
                </div>
            </div>
        </div>
    )
}