export default function Project1() {
    return (
        <div className="flex flex-col gap-y-20 items-center justify-center mt-40">

            <div className="text-5xl font-bold">
                Project1: <span style={{ color: '#CD1F01' }}>30-Day</span>Positivity Challenge
            </div>
            <div className="flex space-x-5 items-center">
                <div>
                    <img src="/project1Img.png" alt="" />
                </div>
                <div className="flex flex-col space-y-10 item-center w-3xl">
                    <div>
                        <div style={{ color: '#CD1F01' }}
                            className="text-4xl font-bold">
                            Description:
                        </div>
                        <div className="text-2xl">
                            A month-long program designed to help participants build
                            daily habits of gratitude, mindfulness, and positivity.
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#CD1F01' }}
                            className="text-4xl font-bold">
                            Outcome:

                        </div>
                        <div className="text-2xl">
                            Over 5,000 participants joined and reported higher
                            happiness levels and greater resilience.
                        </div>
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#C81F00' }}
                            className="btn text-white rounded-4xl border-0 px-20 py-7 text-xl">
                            Start Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}