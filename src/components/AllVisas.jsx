import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";

const AllVisas = () => {
  // Fetching all visas using useLoaderData
  const visas = useLoaderData();

  // State for selected visa type filter
  const [selectedVisaType, setSelectedVisaType] = useState("All");

  // Handle dropdown change
  const handleFilterChange = (event) => {
    setSelectedVisaType(event.target.value);
  };

  // Filter visas based on selected type
  const filteredVisas =
    selectedVisaType === "All"
      ? visas
      : visas.filter((visa) => visa.visaType === selectedVisaType);

  // Get unique visa types for the dropdown options
  const visaTypes = ["All", ...new Set(visas.map((visa) => visa.visaType))];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        All Visas
      </h2>

      {/* Filter Dropdown */}
      <div className="flex justify-center md:justify-end mb-6">
        <label htmlFor="visaType" className="mr-2 font-semibold">
          Filter by Visa Type:
        </label>
        <select
          id="visaType"
          value={selectedVisaType}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          {visaTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Visa Cards Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa) => (
          <div
            key={visa._id}
            className="border p-4 rounded-lg shadow-lg flex flex-col justify-between bg-white"
          >
            {/* Visa Image */}
            <img
              src={visa.countryImage || "placeholder.jpg"} // Fallback image for missing data
              alt={`Country: ${visa.countryName || "Unknown"}`}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />

            {/* Visa Details */}
            <h3 className="text-xl font-semibold mb-2">
              Country: {visa.countryName || "Unknown"}
            </h3>
            <p className="mb-1">
              <strong>Visa Type:</strong> {visa.visaType || "N/A"}
            </p>
            <p className="mb-1">
              <strong>Processing Time:</strong> {visa.processingTime || "N/A"}{" "}
              days
            </p>
            <p className="mb-1">
              <strong>Fee:</strong> ${visa.fee || "0"}
            </p>

            {/* "See Details" Button */}
            <NavLink to={`/visa/${visa._id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500 transition-all duration-300 w-full">
                See Details
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
