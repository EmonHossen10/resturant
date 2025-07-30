import { Button } from "@/components/ui/button";
import { LocateFixed, MapPin, Menu, Search, User } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [location, setLocation] = useState("Dubai Marina");
  const [value, setValue] = useState("");
  const handleDetectLocation = () => {
    // Real logic can use navigator.geolocation here
    alert("Detecting location...");
  };
  return (
    <div className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto ">
        <header className="w-full px-4 py-2 flex items-center justify-between  ">
          {/* Left side: Logo + Location */}

          <img src="./jl-logo.svg" alt="" />
          <div className="flex items-center bg-blue-50 rounded-full px-4 py-2 w-fit shadow-sm">
            <MapPin className="text-blue-500 w-4 h-4 mr-2" />

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search for area, street name"
              className="bg-transparent outline-none font-semibold text-black placeholder:text-gray-400"
            />

            <button onClick={handleDetectLocation} className="ml-2">
              <LocateFixed className="w-5 h-5 text-sky-500" />
            </button>
          </div>
          {/* Center: Search Bar */}
          <div className="flex items-center w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white">
            <Search className="text-gray-400 w-4 h-4 mr-2" />
            <input
              type="text"
              value={value}
              // onChange={(e) => onChange(e.target.value)}
              placeholder={'Search for "Car Wash"'}
              className="w-full outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
            />
          </div>
          {/* Right side: Language, Flag, Profile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <span
                className="w-16 h-16 rounded-full hover:border border-gray-300 bg-white 
                   flex items-center justify-center text-sm font-medium 
                   cursor-pointer"
              >
                العربية
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="w-16 h-16 rounded-full hover:border border-gray-300 bg-white 
                   flex items-center justify-center text-sm font-medium 
                   cursor-pointer"
              >
                <img
                  src="https://flagcdn.com/w40/ae.png"
                  alt="UAE Flag"
                  className="w-6 h-6 object-cover rounded-full"
                />
              </div>
            </div>

            <Button
              variant="outline"
              className="rounded-full px-3 py-2 flex items-center gap-2 w-20 h-16   bg-white"
            >
              <User className="w-10 h-10" />
              <Menu className="w-10 h-10" />
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};
