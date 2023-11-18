"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faImages,
  faMap,
  faSheetPlastic,
  faRulerCombined,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ApartmentDetailsTable from "../components/ApartmentDetailsTable";

interface ApartmentDetails {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  zone: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  deliveryYear: number;
  developer: string;
  saleType: string;
  compound: string;
}

const imagePaths: string[] = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
];

function ApartmentDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [apartmentDetails, setApartmentDetails] =
    useState<ApartmentDetails | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchApartmentDetails = async () => {
      try {
        const response = await axios.get<ApartmentDetails>(
          `https://nawy-backend-cfdk.vercel.app/apartments/getApartmentDetails/${id}`
        );
        setApartmentDetails(response.data);
      } catch (error) {
        console.error("Error fetching apartment details:", error);
      }
    };

    if (id) {
      fetchApartmentDetails();
    }
  }, [id]);

  if (!apartmentDetails) {
    return <div>Loading...</div>;
  }

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <NavBar />
      <div className="relative md:w-[80%] w-[90%] m-auto mt-20">
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          <img
            src={imagePaths[currentImageIndex]}
            className="absolute block w-full h-full object-cover"
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {imagePaths.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-white" />
        </button>
      </div>
      <div className="relative w-[80%] m-auto mt-10 flex flex-col">
        <div className="flex flex-row">
          <img
            src="/images/Tatweer_Misr.webp"
            className="w-[100px] h-[100px] rounded-full border border-gray-300"
          />
          <div className="flex flex-col p-2 ml-5">
            <h1 className="text-2xl text-blue-900 font-bold">
              {apartmentDetails.title}
            </h1>
            <h1 className="text-sm text-gray-500 mt-3">
              {apartmentDetails.description}
            </h1>
            <h1 className="text-xl text-gray-900 font-bold mt-3">
              {apartmentDetails.price} EGP
            </h1>
          </div>
        </div>
        <div className="flex justify-end  space-x-3 mb-3 mr-3 ">
          <div className="flex gap-4">
            <button
              className="bg-gray-300 text-blue-900 px-4 py-2 rounded flex items-center h-[50px]"
              onClick={() => {
                window.location.href = "tel:#";
              }}
            >
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
              Call us
            </button>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center h-[50px]"
              onClick={() => {
                window.location.href =
                  "https://wa.me/201029208551?text=I%20would%20like%20more%20information%20on%20Chalet%20for%20sale%20in%20Il%20Monte%20Galala%20with%202%20bedrooms%20in%20Ain%20Sokhna%20by%20Tatweer%20Misr.%0AReference%20%23%2028605447.%20%0A%0A*Please%20do%20NOT%20delete%20this%20message*%20as%20our%20property%20consultants%20use%20this%20reference%20number%20to%20better%20assist%20you.";
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>

      <ApartmentDetailsTable apartmentDetails={apartmentDetails} />
      <div className="relative w-[80%] m-auto">
        <h1 className="text-2xl text-blue-900 font-bold">Details</h1>
        <div className="relative my-5 flex gap-5">
          <div className="md:w-[130px] h-[80px] w-[80px] border border-gray-300 rounded flex items-center justify-center cursor-pointer flex flex-col">
            <FontAwesomeIcon icon={faImages} size="2x" />
            <span className="block text-center mt-1 md:text-lg text-sm">
              Gallery
            </span>
          </div>
          <div className="md:w-[130px] h-[80px] w-[90px] border border-gray-300 rounded flex items-center justify-center cursor-pointer flex flex-col">
            <FontAwesomeIcon icon={faMap} size="2x" />
            <span className="block text-center mt-1 md:text-lg text-sm">
              {" "}
              View on map
            </span>
          </div>
          <div className="md:w-[130px] h-[80px] w-[90px] border border-gray-300 rounded flex items-center justify-center cursor-pointer flex flex-col">
            <FontAwesomeIcon icon={faSheetPlastic} size="2x" />
            <span className="block text-center mt-1 md:text-lg text-sm">
              {" "}
              Floor plan
            </span>
          </div>
          <div className="md:w-[130px] h-[80px] w-[90px] border border-gray-300 rounded flex items-center justify-center cursor-pointer flex flex-col">
            <FontAwesomeIcon icon={faRulerCombined} size="2x" />
            <span className="block text-center mt-1 md:text-lg text-sm">
              {" "}
              Master plan
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApartmentDetails;
