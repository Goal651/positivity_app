export default function ServiceCenter() {
    return (
        <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-2">
                <div className="font-bold text-3xl">
                    Service Center
                </div>
                <div className="text-lg w-3xl">
                    users can access support, get answers,
                    and explore resources to make the most of your services.
                    It acts as a central hub for assistance.
                </div>
            </div>
            <div
                style={{ borderColor: '#CD1F01' }}
                className="border-l-8 border-4 border-b-1 flex justify-between px-20 py-5 ">
                <div className="flex flex-col justify-center font-semibold">
                    <div className="flex  items-center gap-x-3">
                        <div className="w-2 h-2 rounded-full bg-black" />
                        <div>  Welcome to Our Service Center</div>
                    </div>
                    <div className="flex  items-center gap-x-3">
                        <div className="w-2 h-2 rounded-full bg-black" />
                        <div>  Support and Guidance at Your Fingertips<br /></div>
                    </div>
                    <div className="flex  items-center gap-x-3">
                        <div className="w-2 h-2 rounded-full bg-black" />
                        <div>  How Can We Help You<br /></div>
                    </div>
                </div>
                <div>
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.25 23.3333L20.8333 29.1666L26.6667 18.7499L20.8333 8.33325L31.25 14.1666L41.6667 8.33325L35.8333 18.7499L41.6667 29.1666L31.25 23.3333ZM81.25 64.1666L91.6667 58.3333L85.8333 68.7499L91.6667 79.1666L81.25 73.3333L70.8333 79.1666L76.6667 68.7499L70.8333 58.3333L81.25 64.1666ZM91.6667 8.33325L85.8333 18.7499L91.6667 29.1666L81.25 23.3333L70.8333 29.1666L76.6667 18.7499L70.8333 8.33325L81.25 14.1666L91.6667 8.33325ZM55.5833 53.2499L65.75 43.0833L56.9167 34.2499L46.75 44.4166L55.5833 53.2499ZM59.875 30.3749L69.625 40.1249C71.25 41.6666 71.25 44.3749 69.625 45.9999L21 94.6249C19.375 96.2499 16.6667 96.2499 15.125 94.6249L5.375 84.8749C3.75 83.3333 3.75 80.6249 5.375 78.9999L54 30.3749C55.625 28.7499 58.3333 28.7499 59.875 30.3749Z" fill="#CD1F01" />
                    </svg>
                </div>
            </div>
            <div>
                <div className="carousel carousel-center bg-transparent rounded-box w-full space-x-20 p-4">
                    <div className="carousel-item">
                        <img
                            src="/serviceCenterImg1.png"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/serviceCenterImg2.png"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/serviceCenterImg3.png"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/serviceCenterImg1.png"
                            className="rounded-box" />
                    </div>

                </div>
            </div>
        </div>
    )
}