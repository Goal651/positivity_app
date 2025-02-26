export default function Hero() {
    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center"
                style={{ backgroundImage: 'url("/heroImg.png")', backdropFilter: 'blur(10px)' }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(255, 255, 255,0)',
                    backdropFilter: 'blur(20px)'
                }} />
                <div className="flex flex-col items-center justify-center z-10 text-5xl font-extrabold text-white">
                    <div>
                        <img src="/serviceCommunity.png" alt="" />
                    </div>
                    <div>
                        Ser<span style={{ color: '#CD1F01' }}>vi</span>ce
                    </div>
                </div>
            </div>
        </div>
    )
}