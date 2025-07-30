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
    <div  >
      <ServiceCategories></ServiceCategories>
      <ServiceSection heading="General Cleaning" services={generalCleaning} />
      <ServiceSection heading="Salon & Spa at Home" services={salonSpa} />
      <TopReasons></TopReasons>
    </div>
  );
};

export default Home;
