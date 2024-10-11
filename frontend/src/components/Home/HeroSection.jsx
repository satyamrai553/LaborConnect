import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {

    const slides = [
        {
            image: 'https://res.cloudinary.com/dpxkotl1n/image/upload/v1728662105/LabourConnect/Home/kbtyynail71gvrslirm1.jpg',
            text: 'Find the Best Blue-Collar Jobs',
        },
        {
            image: 'https://res.cloudinary.com/dpxkotl1n/image/upload/v1728662100/LabourConnect/Home/v8f8pdcwn81o2a6ea7yc.jpg',
            text: 'Connect with Skilled Workers',
        },
        {
            image: 'https://res.cloudinary.com/dpxkotl1n/image/upload/v1728662100/LabourConnect/Home/ycdqfsywdz8bzwayrpi3.jpg',
            text: 'Easily Post Job Listings',
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to navigate to the next slide
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    // Function to navigate to the previous slide
    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [currentSlide]); // Run effect whenever currentSlide changes

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {/* Slide Image */}
            {slides.map((slide, index) => (
                <Link to='/job'>
                    <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    {/* Slide Text */}
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">{slide.text}</h1>
                    </div>
                </div>
                </Link>
            ))}

            {/* Next and Previous Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-black px-3 py-1 rounded-full hover:bg-gray-200"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-black px-3 py-1 rounded-full hover:bg-gray-200"
            >
                &#10095;
            </button>
        </div>
    )
}

export default HeroSection