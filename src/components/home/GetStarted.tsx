export default function GetStarted() {
    return (
        <div style={{ borderColor: '#CD5F4A' }}
            className="relative flex border-2 gap-x-10 justify-between px-32 py-20 bg-white mx-40 z-10 top-30 rounded"
        >
            <div className="text-5xl font-bold">
                Ready To Get Started?
            </div>
            <button
                style={{ backgroundColor: '#C81F00' }}
                className="btn text-white rounded border-0 px-10 py-7 text-xl">
                Contact us
            </button>
        </div>
    )
}