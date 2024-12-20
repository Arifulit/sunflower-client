
import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center h-25 bg-gray-100">
      <div className="w-96">
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json" // Replace with your Lottie file URL
          style={{ height: "300px", width: "300px" }}
        />
        <h1 className="text-center text-lg font-semibold mt-4">Lottie Animation Example</h1>
      </div>
    </div>
  );
};

export default LottieAnimation;
