
import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Swal from "sweetalert2";

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

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [visas, setVisas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch visas on page load
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    setLoading(true);
    fetch(`https://assignment-sunflower-server.vercel.app/visa?userId=${user.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch visas");
        }
        return response.json();
      })
      .then((data) => setVisas(data))
      // .catch((err) => console.error("Error:", err.message))
      .finally(() => setLoading(false));
  }, [user, navigate]);

// Delete visa
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`https://assignment-sunflower-server.vercel.app/visa/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete visa");
            }
            setVisas((prev) => prev.filter((visa) => visa._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your visa has been deleted.",
              icon: "success",
            });
          })
          // eslint-disable-next-line no-unused-vars
          .catch((err) => {
            // console.error("Error:", err.message);
            Swal.fire({
              title: "Error",
              text: "Failed to delete visa. Please try again.",
              icon: "error",
            });
          })
          .finally(() => setLoading(false));
      }
    });
  };


  // Open the modal and load the selected visa
  const handleUpdate = (visaId) => {
    const visa = visas.find((visa) => visa._id === visaId);
    setSelectedVisa(visa); // Ensure selectedVisa is always fresh
    setIsModalOpen(true);
  };

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedVisa((prev) => ({ ...prev, [name]: value }));
  };

  // Submit the updated visa data
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(`https://assignment-sunflower-server.vercel.app/visa/${selectedVisa._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedVisa),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update visa");
        }
        return response.json();
      })
      .then(() => {
        // Update the local state with the modified visa
        setVisas((prev) =>
          prev.map((visa) =>
            visa._id === selectedVisa._id ? { ...visa, ...selectedVisa } : visa
          )
        );
        Swal.fire({
          title: "Updated!",
          text: "Visa updated successfully.",
          icon: "success",
        });
        setIsModalOpen(false);
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        // console.error("Error:", err.message);
        Swal.fire({
          title: "Error",
          text: "Failed to update visa. Please try again.",
          icon: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  // Render component
  return (
    <div className="lg:w-3/4 mx-auto mt-6">
      <h2 className="text-3xl font-bold">My Added Visas</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="visa-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {visas.map((visa) => (
            <div key={visa._id} className="card border rounded-lg shadow-md">
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{visa.countryName}</h3>
                <p><strong>Visa Type:</strong> {visa.visaType}</p>
                <p><strong>Processing Time:</strong> {visa.processingTime} days</p>
                <p><strong>Fee:</strong> ${visa.fee}</p>
                <p><strong>Validity:</strong> {visa.validity ? "Yes" : "No"}</p>
                <p><strong>Application Method:</strong> {visa.applicationMethod}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdate(visa._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(visa._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedVisa && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={modalStyles}
          contentLabel="Update Visa"
        >
          <h3 className="text-xl font-semibold">Update Visa</h3>
          <form onSubmit={handleSubmitUpdate}>
            <label className="block">
              Visa Type:
              <input
                type="text"
                name="visaType"
                value={selectedVisa.visaType || ""}
                onChange={handleInputChange}
                className="input mt-2"
              />
            </label>
            <label className="block mt-4">
              Processing Time:
              <input
                type="number"
                name="processingTime"
                value={selectedVisa.processingTime || ""}
                onChange={handleInputChange}
                className="input mt-2"
              />
            </label>
            <label className="block mt-4">
              Fee:
              <input
                type="number"
                name="fee"
                value={selectedVisa.fee || ""}
                onChange={handleInputChange}
                className="input mt-2"
              />
            </label>
            <label className="block mt-4">
              Validity:
              <select
                name="validity"
                value={selectedVisa.validity || ""}
                onChange={handleInputChange}
                className="input mt-2"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </label>
            <label className="block mt-4">
              Application Method:
              <input
                type="text"
                name="applicationMethod"
                value={selectedVisa.applicationMethod || ""}
                onChange={handleInputChange}
                className="input mt-2"
              />
            </label>
            <div className="mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Visa"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default MyAddedVisas;
