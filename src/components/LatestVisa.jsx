import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LatestVisa = () => {
  // eslint-disable-next-line no-unused-vars
  const visas = useLoaderData(); // React Router loader data
  const [visa, setVisa] = useState([]); // State to hold visa data from fetch
  const [showAll] = useState(false); // State to toggle between latest and all visas
  const navigate = useNavigate();

  // Sort visas by processing time (or other sorting logic if needed)
  const sortedVisas = [...visa].sort(
    (a, b) => parseInt(a.processingTime) - parseInt(b.processingTime)
  );

  // Determine which visas to show (latest 6 or all)
  const displayedVisas = showAll ? sortedVisas : sortedVisas.slice(0, 6);

  // Fetch visa data from the server
  useEffect(() => {
    fetch("https://assignment-sunflower-server.vercel.app/visa")
      .then((res) => res.json())
      .then((data) => {
        setVisa(data);
      })
      // .catch((err) => console.error("Error fetching visas:", err));
  }, []);

  // Navigate to detailed visa view
  const handleViewDetails = (id) => {
    navigate(`/visa/${id}`);
  };

  return (
    <div className="container mx-auto p-6 lg:p-12">
      {/* Latest Visas Section */}
      <h2 className="text-3xl lg:text-4xl font-semibold text-purple-700 text-center mb-8">
        Latest Visas
      </h2>

      {/* Display Visas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedVisas.map((visa) => (
          <div key={visa._id} className="visa-card bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Visa Country Image */}
            <img
              src={visa.countryImage || "https://via.placeholder.com/400x300"}
              alt={`Country: ${visa.countryName || "Unknown"}`}
              className="w-full h-40 md:h-48 lg:h-56 object-cover"
            />
            {/* Visa Details */}
            <div className="p-6">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                {visa.countryName || "Unknown"}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Processing Time:</strong> {visa.processingTime} days
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Validity:</strong> {visa.validity ? "Valid" : "Not valid"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              {/* Button for Visa Details */}
              <button
                onClick={() => handleViewDetails(visa._id)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All Visas Button */}
      <div className="text-center mt-8">
        <NavLink to="/all-visas">
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
            See All Visas
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LatestVisa;
