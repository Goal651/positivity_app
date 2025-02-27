import { useRef } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Chance Regine',
        location: 'Kigali, RWANDA',
        image: '/testimonial!.png',
        review: 'This platform has completely transformed how I view my day-to-day challenges. The tips and resources are a game-changer! The daily affirmations and journaling prompts have made me feel more grounded and positive every morning.',
        rating: 4
    },
    {
        id: 2,
        name: 'Chance Regine',
        location: 'Kigali, RWANDA',
        image: '/testimonial!.png', review: 'This platform has completely transformed how I view my day-to-day challenges. The tips and resources are a game-changer! The daily affirmations and journaling prompts have made me feel more grounded and positive every morning.',
        rating: 3
    },
    {
        id: 3,
        name: 'Chance Regine',
        location: 'Kigali, RWANDA',
        image: '/testimonial!.png', review: 'This platform has completely transformed how I view my day-to-day challenges. The tips and resources are a game-changer! The daily affirmations and journaling prompts have made me feel more grounded and positive every morning.',
        rating: 4
    },
    {
        id: 2,
        name: 'Chance Regine',
        location: 'Kigali, RWANDA',
        image: '/testimonial!.png', review: 'This platform has completely transformed how I view my day-to-day challenges. The tips and resources are a game-changer! The daily affirmations and journaling prompts have made me feel more grounded and positive every morning.',
        rating: 3
    },
    {
        id: 3,
        name: 'Chance Regine',
        location: 'Kigali, RWANDA',
        image: '/testimonial!.png', review: 'This platform has completely transformed how I view my day-to-day challenges. The tips and resources are a game-changer! The daily affirmations and journaling prompts have made me feel more grounded and positive every morning.',
        rating: 4
    }
];

export default function ClientTestimonials() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className='relative z-0 pt-20 flex flex-col space-y-10 justify-center items-center bg-gradient-to-t from-white via-white to-red-100'>
            <div className='flex justify-between w-full px-40 pb-20'>
                <button onClick={scrollLeft} className="">
                    <svg width="31" height="46" viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.85749 23.0002L26.535 36.553L23 39.2631L3.55499 24.3553C3.08632 23.9959 2.82303 23.5085 2.82303 23.0002C2.82303 22.492 3.08632 22.0046 3.55499 21.6451L23 6.7373L26.535 9.44747L8.85749 23.0002Z" fill="black" />
                    </svg>
                </button>

                <div className='text-4xl font-bold'>
                    What clients say!
                </div>

                <button onClick={scrollRight} className="">
                    <svg width="31" height="46" viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.1425 22.9998L4.46504 9.44703L8.00004 6.73686L27.445 21.6447C27.9137 22.0041 28.177 22.4915 28.177 22.9998C28.177 23.508 27.9137 23.9954 27.445 24.3549L8.00004 39.2627L4.46504 36.5525L22.1425 22.9998Z" fill="black" />
                    </svg>
                </button>
            </div>

            <div ref={carouselRef} className="carousel  space-x-15 w-full pb-10 items-center justify-center overflow-x-scroll scroll-smooth">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="carousel-item relative"
                    >
                        <div className="bg-white flex flex-col gap-y-2 p-6 rounded-sm  hover:shadow-xl shadow-gray-300 border-2 border-slate-300 w-96 mx-auto">
                            <div className="flex items-center gap-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="font-bold">{testimonial.name}</h3>
                                    <p className="text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                            <div className="my-4 text-sm font-semibold">{testimonial.review}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
