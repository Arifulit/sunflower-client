/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const loadedVisas = useLoaderData();
  const [visas, setVisas] = useState(loadedVisas || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Cancel Application Handler
  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        const response = await fetch(`https://assignment-sunflower-server.vercel.app/application/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to cancel the application");
        }

        setVisas((prev) => prev.filter((visa) => visa._id !== id));
        Swal.fire("Cancelled!", "Your application has been successfully canceled.", "success");
      } catch (error) {
        // console.error("Error cancelling application:", error);
        Swal.fire("Error!", "Failed to cancel the application. Please try again.", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  // Search Handler
  const handleSearch = () => {
    const filteredVisas = loadedVisas.filter((visa) =>
      visa.countryName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisas(filteredVisas);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">My Visa Applications</h1>

      {/* Search Field */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by country name..."
          className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Search
        </button>
      </div>

      {/* Visa Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.length > 0 ? (
          visas.map((visa) => (
            <div key={visa._id} className="bg-white p-4 shadow-lg rounded-lg relative">
              {/* Visa Image */}
              <img
                src={visa.countryImage || "placeholder.jpg"}
                alt={visa.countryName || "Country"}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Visa Details */}
              <h3 className="text-xl font-bold mb-2">{visa.countryName || "Unknown Country"}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Applicant Name:</strong> {`${visa.firstName || ""} ${visa.lastName || ""}`}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Applicant Email:</strong> {visa.email || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Visa Type:</strong> {visa.visaType || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Processing Time:</strong> {visa.processingTime || "N/A"} days
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Validity:</strong> {visa.validity || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Fee:</strong> ${visa.fee || "0"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Application Method:</strong> {visa.applicationMethod || "N/A"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Applied Date:</strong> {visa.appliedDate || "N/A"}
              </p>
              

              {/* Cancel Button */}
              <button
                onClick={() => handleCancel(visa._id)}
                className="absolute bottom-4 right-4 px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 focus:ring focus:ring-red-300"
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No visa applications found.</p>
        )}
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default MyVisaApplications;
