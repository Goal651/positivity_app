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
                <div className="flex flex-col items-center justify-center z-10 text-5xl font-extrabold gap-y-2 text-white">
                    <div>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.9665 92.2208C62.9665 92 45.9623 89.65 28.154 71.8459C10.3498 54.0375 8.004 37.0375 7.779 31.0333C7.44567 21.8833 14.454 12.9958 22.5498 9.52501C23.5247 9.10404 24.5923 8.94377 25.6479 9.05991C26.7034 9.17606 27.7106 9.56463 28.5707 10.1875C35.2373 15.0458 39.8373 22.3958 43.7873 28.175C44.6564 29.4447 45.028 30.9898 44.8313 32.5158C44.6346 34.0419 43.8833 35.4422 42.7207 36.45L34.5915 42.4875C34.1988 42.7711 33.9223 43.1876 33.8135 43.6597C33.7047 44.1318 33.7709 44.6273 33.9998 45.0542C35.8415 48.4 39.1165 53.3834 42.8665 57.1334C46.6165 60.8834 51.8373 64.375 55.4165 66.425C55.8653 66.6769 56.3935 66.7474 56.8926 66.6218C57.3917 66.4963 57.8237 66.1843 58.0998 65.75L63.3915 57.6959C64.3644 56.4035 65.7995 55.5378 67.3964 55.2799C68.9933 55.0221 70.628 55.3921 71.9582 56.3125C77.8207 60.3709 84.6623 64.8917 89.6707 71.3042C90.3441 72.1705 90.7725 73.2017 90.911 74.2902C91.0496 75.3786 90.8932 76.4843 90.4582 77.4917C86.9707 85.6292 78.1457 92.5583 68.9665 92.2208Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        Con<span style={{ color: '#CD1F01' }}>t</span>act
                    </div>
                </div>
            </div>
        </div>
    )
}