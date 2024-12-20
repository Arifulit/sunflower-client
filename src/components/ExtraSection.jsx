
const ExtraSection = () => {
  return (
    <div className="home-page">
      {/* Popular Visa Categories Section */}
      <section className="popular-visas py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center">
            Popular Visa Categories
          </h2>
          <p className="text-lg mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Explore the most sought-after visa types to fit your needs. Whether  traveling for leisure, work, study, or business, we have options for you.
          </p>
          <div className="visa-categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                type: "Tourist Visa",
                description: "For leisure and travel.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbSG3CQwufIDy95d5VFRqfutyILa49PFefQ&s",
              },
              {
                type: "Work Visa",
                description: "For employment purposes.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvM4WDFoHwpp81oWnRoFZqNe2X9SXGv91Qw&s",
              },
              {
                type: "Student Visa",
                description: "For academic studies.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFIQFjPO86j2wFqZPlBcPHnPNWphFoiYsZQ&s",
              },
              {
                type: "Business Visa",
                description: "For business-related travel.",
                image:
                  "https://5.imimg.com/data5/SELLER/Default/2021/3/IE/XF/WH/112977754/business-visa-services.jpeg",
              },
            ].map((visa, index) => (
              <div
                key={index}
                className="card border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={visa.image}
                  alt={visa.type}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{visa.type}</h3>
                  <p className="text-gray-600 mt-2">{visa.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center">
            How It Works
          </h2>
          <p className="text-lg mt-4 text-gray-600 text-center max-w-3xl mx-auto">
            Simple and hassle-free steps to get your visa application processed. Follow these easy steps to begin your journey.
          </p>
          <div className="steps mt-12 flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Step 1 */}
            <div className="step-card bg-white border rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-600">Step 1</h4>
              <h5 className="text-lg font-semibold mt-2 text-gray-800">Create an Account</h5>
              <p className="text-gray-600 mt-2">
                Sign up to get started. It quick and easy to create an account on our platform.
              </p>
            </div>
            {/* Step 2 */}
            <div className="step-card bg-white border rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-600">Step 2</h4>
              <h5 className="text-lg font-semibold mt-2 text-gray-800">Fill Application</h5>
              <p className="text-gray-600 mt-2">
                Provide the necessary details about your trip or purpose to ensure we select the right visa type.
              </p>
            </div>
            {/* Step 3 */}
            <div className="step-card bg-white border rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-600">Step 3</h4>
              <h5 className="text-lg font-semibold mt-2 text-gray-800">Submit Documents</h5>
              <p className="text-gray-600 mt-2">
                Upload the required files to complete your application. We accept all necessary documents online.
              </p>
            </div>
            {/* Step 4 */}
            <div className="step-card bg-white border rounded-lg shadow-md p-6 text-left hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-bold text-blue-600">Step 4</h4>
              <h5 className="text-lg font-semibold mt-2 text-gray-800">Track Progress</h5>
              <p className="text-gray-600 mt-2">
                Monitor your application status in real-time, and get notified once your visa is approved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
