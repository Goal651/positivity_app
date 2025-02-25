import { useState } from 'react';

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
    }
];

export default function ClientTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="carousel w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={testimonial.id}
                    id={`slide${testimonial.id}`}
                    className={`carousel-item relative w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                    <div className="bg-white flex flex-col gap-y-2 p-6 rounded-sm shadow-2xl shadow-slate-600 border-2 border-slate-300 w-96 mx-auto">
                        <div className="flex items-center gap-4">
                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="font-bold">{testimonial.name}</h3>
                                <p className="text-sm ">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="my-4 text-sm font-semibold">{testimonial.review}</div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, starIndex) => (
                                <span key={starIndex} >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.86416 12.3917L7.78082 10.17L10.6975 12.3908L9.60749 8.77917L12.5083 6.72417H8.95416L7.78082 2.93583L6.60749 6.72417H3.05332L5.95332 8.77917L4.86416 12.3917ZM7.78332 15.5C6.74666 15.5 5.77166 15.3033 4.85832 14.91C3.94554 14.5161 3.15138 13.9817 2.47582 13.3067C1.80027 12.6317 1.26555 11.8383 0.871656 10.9267C0.477767 10.015 0.280823 9.04028 0.280823 8.0025C0.280823 6.96472 0.477767 5.98972 0.871656 5.0775C1.26499 4.16472 1.7986 3.37056 2.47249 2.695C3.14638 2.01944 3.93999 1.48472 4.85332 1.09083C5.76666 0.696945 6.74166 0.5 7.77832 0.5C8.81499 0.5 9.78999 0.696945 10.7033 1.09083C11.6161 1.48417 12.4103 2.01806 13.0858 2.6925C13.7614 3.36694 14.2961 4.16056 14.69 5.07333C15.0839 5.98611 15.2808 6.96083 15.2808 7.9975C15.2808 9.03417 15.0842 10.0092 14.6908 10.9225C14.2975 11.8358 13.763 12.63 13.0875 13.305C12.4119 13.98 11.6186 14.5147 10.7075 14.9092C9.79638 15.3036 8.82166 15.5006 7.78332 15.5ZM7.78082 14.6667C9.64193 14.6667 11.2183 14.0208 12.51 12.7292C13.8017 11.4375 14.4475 9.86111 14.4475 8C14.4475 6.13889 13.8017 4.5625 12.51 3.27083C11.2183 1.97917 9.64193 1.33333 7.78082 1.33333C5.91971 1.33333 4.34332 1.97917 3.05166 3.27083C1.75999 4.5625 1.11416 6.13889 1.11416 8C1.11416 9.86111 1.75999 11.4375 3.05166 12.7292C4.34332 14.0208 5.91971 14.6667 7.78082 14.6667Z"
                                            fill={starIndex < testimonial.rating ? '#FACF07' : '#0000004D'} />
                                    </svg>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={prevTestimonial} className="btn btn-circle">❮</button>
                        <button onClick={nextTestimonial} className="btn btn-circle">❯</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
