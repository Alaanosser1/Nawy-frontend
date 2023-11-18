"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faMap } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/NavBar";

interface Apartment {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  zone: string;
}

const imagePaths: string[] = [
  "/images/apartment1.webp",
  "/images/apartment8.webp",
  "/images/apartment3.webp",
  "/images/apartment4.webp",
  "/images/apartment5.webp",
  "/images/apartment6.webp",
  "/images/apartment7.webp",
  "/images/apartment8.webp",
  "/images/apartment9.webp",
  "/images/apartment10.webp",
  "/images/landing-background.jpg",
  "/images/limited.png",
];

const getApartments = async () => {
  try {
    const response = await axios.get<Apartment[]>(
      "https://nawy-backend.vercel.app/apartments/listApartments"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching apartments:", error);
    return [];
  }
};

const Home = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApartments();
      setApartments(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative w-full max-w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imagePaths[10]})`,
            filter: "brightness(50%)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <form className="w-[80%]">
            <label className="mb-2 text-sm font-medium text-white sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block mt-20 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="#">
          <img
            className="rounded-t-lg max-h-[150px] w-[80%] m-auto"
            src={imagePaths[12]}
            alt=""
          />
        </a>
      </div>

      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 m-auto container gap-5 p-5 mt-20">
        {apartments.map((apartment, index) => (
          <Link href={`/apartment/?id=${apartment._id}`} key={apartment._id}>
            <div className="relative max-w-[100%] min-w-[100%] min-h-[100%] mb-5 bg-white border border-gray-200 rounded-lg shadow m-auto md:w-full overflow-hidden">
              <div className="absolute top-2 right-2 space-x-3">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-white cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faShare}
                  className="text-white cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faMap}
                  className="text-white cursor-pointer"
                />
              </div>

              <a href="#">
                <img
                  className="rounded-t-lg max-h-[200px] min-h-[200px] w-[100%] transition-transform duration-500 transform hover:scale-110"
                  src={imagePaths[index]}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
                    {apartment.title} | {apartment.zone}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
                  {apartment.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-800">
                  {apartment.zone}
                </p>
                <p className="mb-3 text-xl font-bold text-gray-700 dark:text-gray-800">
                  {apartment.price} EGP
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
