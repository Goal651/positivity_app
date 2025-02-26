import { useState } from 'react'

const faqs = [
    {
        id: 1,
        question: 'What is this platform about?',
        answer: 'This platform helps you enhance your mindset, build a more positive outlook on life, and develop habits that promote personal growth.'
    },
    {
        id: 2,
        question: 'Who is this platform for?',
        answer: 'This platform is for anyone aiming to improve their daily well-being, seeking inspiration, or facing challenges. Our tools and resources support individuals from all walks of life.'
    },
    {
        id: 3,
        question: 'How do I access the guided meditations?',
        answer: 'You can access the guided meditations through our app’s meditation section, available to all registered users.'
    }
]


export default function QASection() {
    const [openId, setOpenId] = useState<number | null>(null)

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return (

        <div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-y-5'>
                    <div className="text-3xl font-bold">
                        Frequently Asked Questions ?
                    </div>
                    <div className='font-semibold'>
                        Addressing common questions about your platform, services, or tools.
                    </div>
                </div>
                <div>
                    <svg width="236" height="268" viewBox="0 0 236 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_54_512)">
                            <path d="M108.979 64.5922C101.135 64.8004 95.2968 70.9575 95.505 78.8009L96.2398 106.483C96.448 114.327 102.605 120.166 110.449 119.957L138.131 119.222L157.076 137.188L156.586 118.733C164.43 118.524 170.268 112.367 170.06 104.524L169.325 76.8414C169.117 68.998 162.96 63.1593 155.116 63.3675L108.979 64.5922ZM128.669 77.9206L136.595 77.7102L145.118 105.186L138.197 105.37L136.136 98.4989L129.215 98.6826L127.673 105.649L121.616 105.81L128.669 77.9206ZM132.538 82.4349C132.125 84.2926 131.668 86.5579 131.239 87.9544L130.108 94.0419L135.584 93.8965L134.122 87.8732C133.168 86.5181 132.587 84.2804 132.538 82.4349ZM64.066 111.955C56.2226 112.163 50.3839 118.32 50.5921 126.163L51.3269 153.846C51.5351 161.689 57.6922 167.528 65.5356 167.32L66.0255 185.775L83.9907 166.83L111.673 166.095C119.517 165.887 125.355 159.73 125.147 151.886L124.412 124.204L110.571 124.571C101.805 124.804 94.6973 118.99 92.1822 111.208L64.066 111.955ZM85.6175 124.799C93.4609 124.591 97.3234 130.953 97.5193 138.335C97.6908 144.794 95.5803 148.95 91.9383 150.893C93.8083 151.767 96.0082 152.198 98.3273 152.598L96.7242 157.258C93.4701 156.421 90.0823 155.07 86.8158 153.767C86.3422 153.318 85.5356 153.372 85.0743 153.384C79.5255 153.07 74.2733 148.62 74.0283 139.392C73.8201 131.549 78.2355 124.995 85.6175 124.799ZM85.7515 129.847C82.0605 129.945 80.3806 134.145 80.5153 139.22C80.6622 144.756 82.5504 148.4 86.2414 148.302C89.9324 148.204 91.7507 144 91.616 138.925C91.4813 133.85 89.4425 129.749 85.7515 129.847Z" fill="#CD1F01" />
                        </g>
                        <defs>
                            <clipPath id="clip0_54_512">
                                <rect width="200" height="200" fill="white" transform="translate(0 88.2197) rotate(-26.174)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="space-y-10 ">
                {faqs.map((faq) => (
                    <div key={faq.id} className="relative z-0">
                        <div className='z-5'>
                            <div
                                style={{ borderColor: '#CD1F01' }}
                                className="border-l-8 border-t-1  bg-white shadow-xl shadow-gray-400 flex justify-between items-center px-5 py-10 cursor-pointer"
                                onClick={() => toggle(faq.id)}
                            >
                                <h3 style={{ color: `${openId === faq.id ? '#CD1F01' : ''}` }} className="font-semibold text-lg ">Q{faq.id}: {faq.question}</h3>
                                <span className="text-xl ">{openId === faq.id ?
                                    <div>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 11.875C31.725 11.875 33.125 13.275 33.125 15V26.875H45C45.8288 26.875 46.6237 27.2042 47.2097 27.7903C47.7958 28.3763 48.125 29.1712 48.125 30C48.125 30.8288 47.7958 31.6237 47.2097 32.2097C46.6237 32.7958 45.8288 33.125 45 33.125H33.125V45C33.125 45.8288 32.7958 46.6237 32.2097 47.2097C31.6237 47.7958 30.8288 48.125 30 48.125C29.1712 48.125 28.3763 47.7958 27.7903 47.2097C27.2042 46.6237 26.875 45.8288 26.875 45V33.125H15C14.1712 33.125 13.3763 32.7958 12.7903 32.2097C12.2042 31.6237 11.875 30.8288 11.875 30C11.875 29.1712 12.2042 28.3763 12.7903 27.7903C13.3763 27.2042 14.1712 26.875 15 26.875H26.875V15C26.875 13.275 28.275 11.875 30 11.875Z" fill="#CD1F01" />
                                        </svg>
                                    </div> :
                                    <div>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 11.875C31.725 11.875 33.125 13.275 33.125 15V26.875H45C45.8288 26.875 46.6237 27.2042 47.2097 27.7903C47.7958 28.3763 48.125 29.1712 48.125 30C48.125 30.8288 47.7958 31.6237 47.2097 32.2097C46.6237 32.7958 45.8288 33.125 45 33.125H33.125V45C33.125 45.8288 32.7958 46.6237 32.2097 47.2097C31.6237 47.7958 30.8288 48.125 30 48.125C29.1712 48.125 28.3763 47.7958 27.7903 47.2097C27.2042 46.6237 26.875 45.8288 26.875 45V33.125H15C14.1712 33.125 13.3763 32.7958 12.7903 32.2097C12.2042 31.6237 11.875 30.8288 11.875 30C11.875 29.1712 12.2042 28.3763 12.7903 27.7903C13.3763 27.2042 14.1712 26.875 15 26.875H26.875V15C26.875 13.275 28.275 11.875 30 11.875Z" fill="black" />
                                        </svg>
                                    </div>
                                }</span>
                            </div>
                        </div>
                        <div className='relative bottom-10 -z-10 h-20'>
                            {openId === faq.id && (
                                <div className="p-5 pt-20 bottom-30 bg-gray-200 border-4  border-gray-300 ">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}