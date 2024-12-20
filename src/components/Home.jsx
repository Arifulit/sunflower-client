
import Banner from "./Banner";
import ExtraSection from "./ExtraSection";
import LatestVisa from "./LatestVisa";
// import LottieAndTypewriter from "./LottieAndTypewriter";


const Home = () => {


    return (
    <>

        <div className="text-black"> {/* You can adjust the color as needed */}
          
        <Banner></Banner>

        <LatestVisa></LatestVisa>
        
        <ExtraSection></ExtraSection>
      </div></>
    );
};

export default Home;