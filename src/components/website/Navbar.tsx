import { Button } from "@/components/ui/button";
import { LocateFixed, MapPin, Menu, Search, User } from "lucide-react";
import { useRef, useState } from "react";

import img1 from "../../../public/appstore.webp";
import img2 from "../../../public/playstore.webp";

export const Navbar = () => {
  const [location, setLocation] = useState("Dubai Marina");
  const [value, setValue] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const containerRef = useRef(null);

  const drawerWidth = containerRef.current?.offsetWidth || "auto";

  // this is for flag modal
  const [isCountryDrawerOpen, setIsCountryDrawerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    "United Arab Emirates"
  );
  const countries = [
    { name: "United Arab Emirates", code: "ae" },
    { name: "Pest Co", code: "ps" }, // Note: 'Pest Co' might need a proper country code
    { name: "Saudi Arabia", code: "sa" },
    { name: "Qatar", code: "qa" },
  ];

  const toggleCountryDrawer = () => {
    setIsCountryDrawerOpen(!isCountryDrawerOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country.name);
    setIsCountryDrawerOpen(false);
  };
  // profile drawer
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const buttonRef = useRef(null);

  // const dropdownWidth = buttonRef.current?.offsetWidth || 'auto';

  // Function to handle location detection
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
          {/* <div className="flex  items-center w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white">
            <Search className="text-gray-400 w-4 h-4 mr-2" />
            <input
              type="text"
              value={value}
              // onChange={(e) => onChange(e.target.value)}
              placeholder={'Search for "Car Wash"'}
              className="w-full outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
            />
          </div> */}

          {/* searchbar and drawer */}

          <div className="relative w-full max-w-md mx-auto">
            {/* Search Bar */}
            <div
              ref={containerRef}
              className="flex items-center w-full px-4 py-3 border border-gray-200 rounded-full bg-white shadow-sm cursor-pointer"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <Search className="text-gray-400 w-4 h-4 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services"
                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-400 text-sm"
                readOnly
              />
            </div>

            {/* Drawer Content */}
            {isDrawerOpen && (
              <div
                className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-3"
                style={{ width: drawerWidth }}
              >
                {/* Popular Searches Section */}
                <div className="px-4">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Popular Searches
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Home Cleaning
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Women's Salon
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Women's Spa
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Men's Spa
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Handyman & Maintenance
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-2"></div>

                {/* Top Services Section */}
                <div className="px-4">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Top services for you
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      General Cleaning
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Salon & Spa at Home
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Handyman & Maintenance
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      Healthcare at Home
                    </li>
                    <li className="text-gray-600 hover:bg-gray-50 px-2 py-1.5 rounded cursor-pointer">
                      AC Clean at Home
                    </li>
                  </ul>
                </div>
              </div>
            )}
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

            {/* flag */}
            <div className="relative" ref={containerRef}>
              {/* Country Flag Button */}
              <div
                className="flex items-center justify-center"
                onClick={toggleCountryDrawer}
              >
                <div className="w-16 h-16 rounded-full hover:border border-gray-300 bg-white flex items-center justify-center text-sm font-medium cursor-pointer">
                  <img
                    src={`https://flagcdn.com/w40/${
                      countries.find((c) => c.name === selectedCountry)?.code ||
                      "ae"
                    }.png`}
                    alt={`${selectedCountry} Flag`}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Country Selection Drawer */}
              {isCountryDrawerOpen && (
                <div className="absolute top-full  right-8  mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b">
                    Select Country
                  </div>

                  <ul className="py-1">
                    {countries.map((country) => (
                      <li
                        key={country.code}
                        className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${
                          selectedCountry === country.name
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700"
                        }`}
                        onClick={() => selectCountry(country)}
                      >
                        <div className="flex items-center">
                          <img
                            src={`https://flagcdn.com/w20/${country.code}.png`}
                            alt={`${country.name} Flag`}
                            className="w-4 h-4 mr-2 rounded-full"
                          />
                          {country.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Profile and Menu */}

            <div className="relative">
              {/* Your original button */}
              <div ref={buttonRef}>
                <Button
                  variant="outline"
                  className="rounded-full px-3 py-2 flex items-center gap-2 w-20 h-16 bg-white hover:bg-gray-50"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User className="w-10 h-10" />
                  <Menu className="w-10 h-10" />
                </Button>
              </div>

              {/* Fixed width drawer (400px) */}
              {isProfileOpen && (
                <div className="absolute  right-8 top-full mt-2 w-[400px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                  <div className="p-4  ">
                    <button
                      className="bg-[#FFD03E] text-white py-2 px-4 rounded-full font-bold
                    w-full"
                    >
                      Sign Up or Login
                    </button>
                  </div>

                  <div className="p-2">
                    <div className=" flex gap-1 py-2">
                      <img
                      width={18}
                        data-v-c1455b16=""
                        src="https://deax38zvkau9d.cloudfront.net/prod/assets/static/svgs/question-mark-outlined.svg"
                        alt="question-mark-outlined-icon"
                        className="question-mark-icon-custom"
                        loading="lazy"
                      ></img>
                      <h2> Help</h2>
                    </div>
                  </div>

                  <hr className="border-gray-300" />

                  <div className="border-t flex gap-10 p-5 border-gray-100  ">
                    <div>
                      <img src={img1} alt="App Store" />
                    </div>
                    <div>
                      <img src={img2} alt="Play Store" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
