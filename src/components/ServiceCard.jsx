import { seriveCard } from "@/data/data";
import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="container mx-auto px-6 md:px-10  max-w-5xl mb-20 ">
      <h2 className="text-4xl font-bold text-red-700 text-center mb-10">
        ജ്യോതിഷ സേവനങ്ങൾ{" "}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
        {seriveCard.map((service) => (
          <div
            className=" bg-amber-300 w-72 h-72 p-4 rounded-br-4xl rounded-tl-4xl shadow-md mx-auto hover:shadow-lg cursor-pointer hover:rotate-6 transition ease-in-out "
            key={service.title}
          >
            <div className="">
              <Image
                src={service.img}
                alt={service.title}
                f
                className="object-cover rounded-br-4xl rounded-tl-4xl w-64 h-56"
              />
            </div>
            <p className="text-xl font-bold text-red-700 mb-2 text-center mt-3">
              {service.title}
            </p>
            {/* <p className='text-gray-600 text-sm text-center'>{service.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
