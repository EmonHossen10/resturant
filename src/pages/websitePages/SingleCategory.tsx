import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  title: string;
  image: string;
  isNew?: boolean;
};

const services: Service[] = [
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

const SingleCategory = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 mt-10 mb-24">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Link to={"/"}>
          <ArrowLeft size={35} />
        </Link>
        <h2 className="text-2xl font-semibold">General Cleaning</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className=" min-w-[180px] bg-white overflow-hidden hover:cursor-pointer "
          >
            <div className="relative transition-transform hover:scale-105 ">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-32 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity "></div>
            </div>

            {/* Title */}
            <p className="font-medium py-2">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleCategory;
