// ApartmentDetailsTable.tsx
import React from "react";

interface ApartmentDetails {
  size: number;
  bedrooms: number;
  bathrooms: number;
  compound: string;
  deliveryYear: number;
  developer: string;
  saleType: string;
}

interface ApartmentDetailsTableProps {
  apartmentDetails: ApartmentDetails;
}

const ApartmentDetailsTable: React.FC<ApartmentDetailsTableProps> = ({
  apartmentDetails,
}) => {
  return (
    <div className="relative overflow-x-auto w-[80%] m-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white border-gray-300 border  mb-10">
        <thead className="text-xs text-gray-700 uppercase">
          <tr className="bg-gray-100 border-b border-gray-300">
            <th scope="col" className="px-6 py-3">
              Apartment
            </th>
            <th scope="col" className="px-6 py-3">
              {apartmentDetails.size} m²
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-gray-300">
            <td className="px-6 py-4">Bedrooms</td>
            <td className="px-6 py-4">{apartmentDetails.bedrooms}</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-300">
            <td className="px-6 py-4">Bathrooms</td>
            <td className="px-6 py-4">{apartmentDetails.bathrooms}</td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <td className="px-6 py-4">Compound</td>
            <td className="px-6 py-4">{apartmentDetails.compound}</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-300">
            <td className="px-6 py-4">Delivery in</td>
            <td className="px-6 py-4">{apartmentDetails.deliveryYear}</td>
          </tr>
          <tr className="bg-white border-b border-gray-300">
            <td className="px-6 py-4">Developer</td>
            <td className="px-6 py-4">{apartmentDetails.developer}</td>
          </tr>
          <tr className="bg-gray-100 border-b border-gray-300">
            <td className="px-6 py-4">Sale type</td>
            <td className="px-6 py-4">{apartmentDetails.saleType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApartmentDetailsTable;
