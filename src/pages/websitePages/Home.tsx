import AppDownloadSection from "@/components/website/AppDownloadSection";
import PromiseSection from "@/components/website/PromiseSection";
import ReviewSlider from "@/components/website/ReviewSlider";
import ServiceCategories from "@/components/website/ServiceCategories";
import ServiceSection from "@/components/website/ServiceSection";
import TopReasons from "@/components/website/TopReasons";

const generalCleaning = [
  { title: "Home Cleaning", image: "./general_cleaning/homecleaning.webp" },
  {
    title: "Furniture Cleaning",
    image: "./general_cleaning/homecleaning.webp",
  },
  {
    title: "Home Deep Cleaning",
    image: "./general_cleaning/deepcleaning.webp",
  },
  {
    title: "Kitchen & Bathroom Deep Clean",
    image: "./general_cleaning/homepageimages_furniturecleaning.webp",
  },
  {
    title: "Kitchen & Bathroom Deep Clean",
    image: "./general_cleaning/homecleaning.webp",
  },
  {
    title: "Kitchen & Bathroom Deep Clean",
    image: "./general_cleaning/homecleaning.webp",
  },
  {
    title: "Kitchen & Bathroom Deep Clean",
    image: "./general_cleaning/homecleaning.webp",
  },
  {
    title: "Kitchen & Bathroom Deep Clean",
    image: "./general_cleaning/homecleaning.webp",
  },
  { title: "AC Cleaning", image: "./general_cleaning/homecleaning.webp" },
];

const salonSpa = [
  { title: "Women's Salon", image: "/images/women-salon.jpg" },
  { title: "Women's Spa", image: "/images/women-spa.jpg" },
  { title: "Men's Salon", image: "/images/men-salon.jpg" },
  { title: "Men's Spa", image: "/images/men-spa.jpg" },
  { title: "Hair Salon", image: "/images/hair-salon.jpg" },
];

const Home = () => {
  return (
    <div>
      <ServiceCategories></ServiceCategories>
      <ServiceSection heading="General Cleaning" services={generalCleaning} />
      <ServiceSection
        heading="Salon & Spa at Home"
        services={generalCleaning}
      />
      <ServiceSection
        heading="Handyman & Maintenance"
        services={generalCleaning}
      />
      <ServiceSection heading="Healthcare at Home" services={generalCleaning} />
      <div className="max-w-7xl mx-auto">
        <button className="bg-blue-500 text-white text-xl py-4 px-6 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none w-full">
          SHOW MORE
        </button>
      </div>
      <TopReasons></TopReasons>
      <ReviewSlider></ReviewSlider>
      <PromiseSection></PromiseSection>
      <AppDownloadSection></AppDownloadSection>
    </div>
  );
};

export default Home;
