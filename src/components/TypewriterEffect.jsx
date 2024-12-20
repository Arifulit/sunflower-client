
import { Player } from "@lottiefiles/react-lottie-player";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <div className="flex flex-col justify-center items-center h-20 bg-gradient-to-br from-blue-50 via-white to-gray-100 p-6 space-y-12">
      {/* Visa Animation Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-80 h-80">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_0fpum6x5.json" // Visa card animation
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <h1 className="text-3xl font-bold text-blue-900">Visa Card Animation</h1>
        <p className="text-lg text-gray-600 text-center max-w-md">
          Experience seamless and secure payments with Visa cards. Trusted by millions worldwide, Visa offers unparalleled convenience for all your transactions.
        </p>
      </div>

      {/* Typewriter Effect Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Visa?</h2>
        <p className="text-lg text-gray-600">
          <Typewriter
            words={[
              "Fast and Secure Payments!",
              "Worldwide Acceptance!",
              "Trusted by Millions!",
              "Build Confidence in Your Purchases!",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
  );
};

export default TypewriterEffect;
