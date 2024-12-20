/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Modal from "react-modal";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Modal Styling
const modalStyles = {
  content: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const VisaDetails = () => {
  const visaLoader = useLoaderData(); // Load data passed via loader
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    countryName: visaLoader?.countryName || "",
    countryImage: visaLoader?.countryImage || "",
    visaType: visaLoader?.visaType || "",
    processingTime: visaLoader?.processingTime || "",
    validity: visaLoader?.validity || "",
    fee: visaLoader?.fee || "",
    applicationMethod: visaLoader?.applicationMethod || "",
    appliedDate: new Date().toISOString().split("T")[0],
    email: user?.email || "",
    firstName: "",
    lastName: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle visa application submission
  const handleApply = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://assignment-sunflower-server.vercel.app/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to apply for visa");
      }

      // Success Alert
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        text: 'Your visa application has been submitted successfully.',
      }).then(() => {
        setIsModalOpen(false);
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
        });
        navigate("/application/:id"); // Redirect after successful submission
      });
    } catch (error) {
      // console.error("Error submitting application:", error);
      // Error Alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });
    }
  };

  // Redirect to login if user is not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  const { countryImage, countryName, visaType, processingTime, validity, fee, applicationMethod } = visaLoader;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
      <img
        src={countryImage}
        alt={countryName}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{countryName}</h2>
        <p className="text-gray-700 mb-2"><strong>Visa Type:</strong> {visaType}</p>
        <p className="text-gray-700 mb-2"><strong>Processing Time:</strong> {processingTime} days</p>
        <p className="text-gray-700 mb-2"><strong>Validity:</strong> {validity}</p>
        <p className="text-gray-700 mb-2"><strong>Fee:</strong> ${fee}</p>
        <p className="text-gray-700 mb-2"><strong>Application Method:</strong> {applicationMethod}</p>
        <p className="text-gray-700 mb-2"><strong>Applied Date:</strong> {formData.appliedDate}</p>

        {/* Open Modal Button */}
        <button
          className="btn btn-primary mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Apply for the Visa
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
        contentLabel="Apply for Visa"
      >
        <h3 className="text-xl font-semibold">Apply for Visa</h3>
        <form onSubmit={handleApply}>
          {/* Visa Application Fields */}
          <div className="form-group mt-4">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-group mt-4">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Hidden Fields for Visa Data */}
          <div className="form-group mt-4">
            <label>Country</label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Country Image</label>
            <input
              type="text"
              name="countryImage"
              value={formData.countryImage}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Visa Type</label>
            <input
              type="text"
              name="visaType"
              value={formData.visaType}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Processing Time</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Validity</label>
            <input
              type="text"
              name="validity"
              value={formData.validity}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Fee</label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Application Method</label>
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Applied Date</label>
            <input
              type="text"
              name="appliedDate"
              value={formData.appliedDate}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div className="form-group mt-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>

        
         <button type="submit" className="btn btn-primary w-full mt-4">
            Submit Application
          </button>
         
        </form>
      </Modal>
    </div>
  );
};

export default VisaDetails;
