import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const StepThree = ({ onSelectionChange }) => {
  const {
    data: professionals = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["professionals"],
    queryFn: async () => {
      const res = await fetch("/data3.json");
      if (!res.ok) throw new Error("Failed to fetch professionals");
      return res.json();
    },
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const dateScrollRef = useRef<HTMLDivElement>(null);
  const timeScrollRef = useRef<HTMLDivElement>(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState("15:00-16:00");

  // console.log(selectedProfessional, selectedDate, selectedTime);
  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange({
        professional: selectedProfessional,
        date: selectedDate,
        time: selectedTime,
      });
    }
  }, [selectedProfessional, selectedDate, selectedTime, onSelectionChange]);

  const scroll = (direction, ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const dates = [
    { day: "Tue", date: 29 },
    { day: "Wed", date: 30 },
    { day: "Thu", date: 31 },
    { day: "Fri", date: 1 },
    { day: "Sat", date: 2 },
    { day: "Sun", date: 3 },
    { day: "Mon", date: 4 },
    { day: "Tue", date: 5 },
  ];

  const timeSlots = [
    "08:00-09:00",
    "14:30-15:30",
    "15:00-16:00",
    "15:30-16:30",
    "16:00-17:00",
    "17:30-18:30",
  ];

  if (isLoading) return <p>Loading professionals...</p>;
  if (error) return <p>Error loading professionals: {error.message}</p>;

  return (
    <div className="px-4 h-[600px] relative overflow-y-auto hide-vertical-scrollbar">
      {/* profession section */}
      <section className="relative">
        <h2 className=" font-semibold mb-4">
          Which professional do you prefer?
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left", scrollRef)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-200 rounded-full p-2 shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 hide-horizontal-scrollbar scroll-smooth py-4 px-10"
        >
          <div className="min-w-[200px] max-w-[200px] border-2 border-blue-300 p-4 rounded-xl bg-blue-50 text-center">
            <div className="w-16 h-16 bg-blue-400 rounded-full mx-auto flex items-center justify-center text-white font-bold text-sm">
              justlife
            </div>
            <h3 className="font-semibold mt-2">Auto assign</h3>
            <p className="text-sm text-gray-600">
              We'll assign the best professional
            </p>
          </div>

          {professionals.map((pro, index) => (
            <div
              key={index}
              onClick={() => setSelectedProfessional(pro.name)} // use a unique identifier
              className={`min-w-[200px] max-w-[200px] border p-4 rounded-xl text-center cursor-pointer transition
      ${
        selectedProfessional === pro.name
          ? "bg-sky-100 border-blue-400"
          : "bg-white"
      }`}
            >
              <img
                src={pro.image}
                alt={pro.name}
                className="w-16 h-16 object-cover rounded-full mx-auto"
              />
              <h3 className="text-blue-600 font-semibold mt-2 hover:underline">
                {pro.name}
              </h3>
              <p className="text-yellow-500 mt-1">⭐ {pro.rating}</p>
              <p className="text-sm text-gray-600">Recommended in your area</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right", scrollRef)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-200 transition rounded-full p-2 shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* date section */}
      <section className="mt-10">
        <h2 className=" font-semibold mb-4">
          When would you like your service?
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left", dateScrollRef)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-200 rounded-full p-2 shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={dateScrollRef}
            className="flex overflow-x-auto gap-4 hide-horizontal-scrollbar scroll-smooth px-10 py-2"
          >
            {dates.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDate(item.date)}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="text-sm text-gray-600 mb-1">{item.day}</div>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm
                    ${
                      selectedDate === item.date
                        ? "border-blue-500 text-blue-600 font-semibold"
                        : "border-gray-300 text-gray-600"
                    }`}
                >
                  {item.date}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right", dateScrollRef)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-200 rounded-full p-2 shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* time section */}
      <section className="mt-6 pb-32">
        <div className="flex justify-between items-center mb-4">
          <h2 className=" font-semibold">
            What time would you like us to start?
          </h2>
          <a href="#" className="text-blue-500 text-sm hover:underline">
            See all
          </a>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left", timeScrollRef)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-200 rounded-full p-2 shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={timeScrollRef}
            className="flex overflow-x-auto gap-4 hide-horizontal-scrollbar scroll-smooth px-10 py-2"
          >
            {timeSlots.map((slot, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTime(slot)}
                className={`px-4 py-2 border rounded-full text-sm cursor-pointer whitespace-nowrap
                  ${
                    selectedTime === slot
                      ? "bg-blue-100 text-blue-600 border-blue-300 font-semibold"
                      : "border-gray-300 text-gray-800"
                  }`}
              >
                {slot}
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right", timeScrollRef)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:bg-gray-200 rounded-full p-2 shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        {/* textarea */}
        <div className="relative mt-6">
          {/* Icon positioned absolutely on the left side */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <Info size={18} />
          </div>

          <Textarea
            className="pl-8 border-none bg-gray-100" // add left padding for icon space
            placeholder="Enjoy free cancellation up to 6 hours before your booking start time."
          />

          <div className="absolute right-3 bottom-2">
            <button className="text-[#00C3FF] underline font-bold text-sm hover:underline">
              Details
            </button>
          </div>
        </div>
        {/* instruction */}
        <div className="mt-4 ">
          <h2 className=" font-semibold my-6">
            What time would you like us to start?
          </h2>
          <Textarea
            className="border border-gray-300  focus:border-[#00C3FF] focus:ring-1 focus:ring-[#00C3FF] rounded-lg p-3 w-full"
            placeholder="Enter your preferred start time here"
          ></Textarea>
        </div>
      </section>
    </div>
  );
};

export default StepThree;
