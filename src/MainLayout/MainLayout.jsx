import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from './../components/Footer';
// import Lottie from "lottie-react";
import LottieAndTypewriter from "../components/LottieAndTypewriter";
import LottieAnimation from "../components/LottieAnimation";
import { Typewriter } from "react-simple-typewriter";

const MainLayout = () => {
    return (
        <div>   
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Typewriter></Typewriter>
         <LottieAnimation></LottieAnimation>
        <LottieAndTypewriter></LottieAndTypewriter>
        
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;

