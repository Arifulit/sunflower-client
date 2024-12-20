
// AddVisa.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddVisa = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        requiredDocuments: checked
          ? [...prev.requiredDocuments, value]
          : prev.requiredDocuments.filter((doc) => doc !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to database (replace with your API endpoint)
    const response = await fetch("https://assignment-sunflower-server.vercel.app/visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire("Success!", "Visa added successfully!", "success");
      navigate("/all-visas");
    } else {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Add Visa</h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Country Image */}
        <div className="mb-4">
          <label htmlFor="countryImage" className="block text-sm font-bold mb-2">
            Country Image URL
          </label>
          <input
            type="text"
            name="countryImage"
            id="countryImage"
            value={formData.countryImage}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Country Name */}
        <div className="mb-4">
          <label htmlFor="countryName" className="block text-sm font-bold mb-2">
            Country Name
          </label>
          <input
            type="text"
            name="countryName"
            id="countryName"
            value={formData.countryName}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Visa Type */}
        <div className="mb-4">
          <label htmlFor="visaType" className="block text-sm font-bold mb-2">
            Visa Type
          </label>
          <select
            name="visaType"
            id="visaType"
            value={formData.visaType}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist visa">Tourist visa</option>
            <option value="Student visa">Student visa</option>
            <option value="Official visa">Official visa</option>
          </select>
        </div>

        {/* Processing Time */}
        <div className="mb-4">
          <label htmlFor="processingTime" className="block text-sm font-bold mb-2">
            Processing Time
          </label>
          <input
            type="text"
            name="processingTime"
            id="processingTime"
            value={formData.processingTime}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Required Documents */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Required Documents</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Valid passport"
                onChange={handleInputChange}
                checked={formData.requiredDocuments.includes("Valid passport")}
              />
              <span className="ml-2">Valid passport</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Visa application form"
                onChange={handleInputChange}
                checked={formData.requiredDocuments.includes("Visa application form")}
              />
              <span className="ml-2">Visa application form</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Recent passport-sized photograph"
                onChange={handleInputChange}
                checked={formData.requiredDocuments.includes("Recent passport-sized photograph")}
              />
              <span className="ml-2">Recent passport-sized photograph</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          ></textarea>
        </div>

        {/* Age Restriction */}
        <div className="mb-4">
          <label htmlFor="ageRestriction" className="block text-sm font-bold mb-2">
            Age Restriction
          </label>
          <input
            type="number"
            name="ageRestriction"
            id="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Fee */}
        <div className="mb-4">
          <label htmlFor="fee" className="block text-sm font-bold mb-2">
            Fee ($)
          </label>
          <input
            type="number"
            name="fee"
            id="fee"
            value={formData.fee}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Validity */}
        <div className="mb-4">
          <label htmlFor="validity" className="block text-sm font-bold mb-2">
            Validity
          </label>
          <input
            type="text"
            name="validity"
            id="validity"
            value={formData.validity}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Application Method */}
        <div className="mb-4">
          <label htmlFor="applicationMethod" className="block text-sm font-bold mb-2">
            Application Method
          </label>
          <input
            type="text"
            name="applicationMethod"
            id="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleInputChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;

