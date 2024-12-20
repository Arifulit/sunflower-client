
import { Player } from "@lottiefiles/react-lottie-player";
import { Typewriter } from "react-simple-typewriter";

const LottieAndTypewriter = () => {
  return (
    <div className="flex flex-col justify-center items-center h-30 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      {/* Lottie Animation for Visa Card */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-30 h-30">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_0fpum6x5.json" // Visa card animation
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <h1 className="text-2xl font-bold text-blue-900">Visa Card Animation</h1>
      </div>

      {/* Typewriter Effect */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Visa?</h2>
        <p className="text-lg text-gray-600 mt-4">
          <Typewriter
            words={[
              "Fast and Secure Payments!",
              "Worldwide Acceptance!",
              "Trusted by Millions!",
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

export default LottieAndTypewriter;
