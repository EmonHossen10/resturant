import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type Review = {
  title: string;
  content: string;
  name: string;
  rating: number;
};

const reviews: Review[] = [
  {
    title: "Best Salon Service",
    content:
      "Super professional, clean, and overall a great service! The therapist came to my home, with everything as if I was at a Salon/Spa. She gave me a hair treatment which was quick and super good. Now, instead of dealing with traffic, I will just order Justlife which is much easier since the professional will come to my place. I really loved it, and I will be booking many times again.",
    name: "Shereen",
    rating: 5,
  },
  {
    title: "Amazing Cleaning",
    content:
      "It's my first time booking with Justlife, and it exceeded my expectations. The professional cleaned our house thoroughly; she was very friendly and made sure that everything was clean before she left. It was a great experience indeed, and I will surely book another service with Justlife. ❤️",
    name: "Nadia",
    rating: 5,
  },
  {
    title: "Reliable & Professional",
    content:
      "I booked Justlife’s home lab tests for vitamin D and B12. The specialist arrived at my doorstep and took my blood sample, which was so convenient as I did not have to step out of my house. I love this app and how they provide various services and multiple home test options. It’s much more reasonable than visiting a clinic. I just love this app!",
    name: "Kareem",
    rating: 4,
  },
];

const ReviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextReview = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="bg-gray-100 py-12 px-4 ">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">
          What customers say about Justlife
        </h2>
        <p className="text-gray-600 text-xl mt-2">
          Justlife has been rated 4.8 out of 5 based on 1626 reviews as of March
          2024.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto">
        {/* Left Button */}
        {currentIndex > 0 ? (
          <button
            onClick={prevReview}
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-300 bg-white 
                     text-sm font-medium cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
        ) : (
          <button className="w-[30px] h-[30px] "></button>
        )}

        {/* Review Card */}
        <div className="bg-white rounded-xl p-8 text-center shadow-sm max-w-4xl flex-1 flex-wrap">
          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: currentReview.rating }).map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl font-bold">
                ★
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-semibold mb-3">{currentReview.title}</h3>
          <p className="text-gray-700 mb-4 text-xl leading-relaxed">
            {currentReview.content}
          </p>
          <p className="text-blue-500 text-2xl font-bold mt-16">
            {currentReview.name}
          </p>
        </div>

        {/* Right Button */}
        {currentIndex < reviews.length - 1 ? (
          <button
            onClick={nextReview}
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-300 bg-white 
                     text-sm font-medium cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        ) : (
          <button className="w-[30px] h-[30px] "></button>
        )}
      </div>
    </section>
  );
};

export default ReviewSlider;
