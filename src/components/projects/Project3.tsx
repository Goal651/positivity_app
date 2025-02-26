export default function Project3() {
    return (
        <div className="flex flex-col gap-y-20 items-center justify-center mt-40">

            <div className="text-5xl font-bold">
                Project3: <span style={{ color: '#CD1F01' }}>Mindfulness</span>Webinar Series
            </div>
            <div className="flex space-x-5 items-center">
                <div>
                    <img src="/project3Img.png" alt="" />
                </div>
                <div className="flex flex-col space-y-10 item-center w-3xl">
                    <div>
                        <div style={{ color: '#CD1F01' }}
                            className="text-4xl font-bold">
                            Description:
                        </div>
                        <div className="text-2xl">
                            A series of live webinars teaching mindfulness techniques to reduce stress and boost mental clarity.
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

                </div>
            </div>
        </div>
    )
}