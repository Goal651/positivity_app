export default function Project2() {
    return (
        <div className="flex flex-col gap-y-20 items-center justify-center mt-40">

            <div className="text-5xl font-bold">
                Project2: <span style={{ color: '#CD1F01' }}>Daily</span> Affirmation App
            </div>
            <div className="flex space-x-5 items-center">
                <div className="flex flex-col space-y-10 item-center w-3xl">
                    <div>
                        <div style={{ color: '#CD1F01' }}
                            className="text-4xl font-bold">
                            Description:
                        </div>
                        <div className="text-2xl">
                            A mobile app that delivers personalized daily affirmations to inspire and motivate users.
                        </div>
                    </div>
                    <div>
                        <div style={{ color: '#CD1F01' }}
                            className="text-4xl font-bold">
                            Outcome:

                        </div>
                        <div className="text-2xl">
                            Successfully launched in 10 countries with over 20,000 downloads.
                        </div>
                    </div>
                    <div>
                        <button style={{ backgroundColor: '#C81F00' }}
                            className="btn text-white rounded-4xl border-0 px-18 py-8 text-xl">
                            Download the App →
                        </button>
                    </div>
                </div>
                <div>
                    <img src="/project2Img.png" alt="" />
                </div>
            </div>
        </div>
    )
}