import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../components/MainLayout";

import Home from "../components/Home";


import Login from "../components/Login";
import Register from "../components/Register";
import MainLayout from "../MainLayout/MainLayout";
// import MyAddVisas from "../components/AddEquipment";
// import AddEquipment from "../components/AddEquipment";
// import MyAddVisa from "../components/AddVisa";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import AddVisa from "../components/AddVisa";
import AllVisas from "../components/AllVisas";
import VisaDetails from "../components/VisaDetails";
import MyAddedVisas from "../components/MyAddedVisas";
import MyVisaApplications from "../components/MyVisaApplications";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "../components/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,


        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>fetch('https://assignment-sunflower-server.vercel.app/visa') 

            },
            
            {
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/register",
                element: <Register></Register>,

            },
            {
                path: "/add-visa",
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>,

            },
            {
                path:"/my-profile",
                element:<MyProfile></MyProfile>       
           } ,
           {
            path:"/update-profile",
            element:<UpdateProfile></UpdateProfile>
           },
           {
            path:"/all-visas",
            element:<AllVisas></AllVisas>,
            loader: () =>fetch(`https://assignment-sunflower-server.vercel.app/visa`)
        
           },
           {
            path:"/visa/:id",
            element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
            loader: ({params}) =>fetch(`https://assignment-sunflower-server.vercel.app/visa/${params.id}`)
           },
           {
            path:"/my-add-visa",
            element:<PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
            // loader: ({params}) =>fetch(`https://assignment-sunflower-server.vercel.app/visa/${params.id}`)
           },
           {
            path:"/application/:id",
            element:<PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>,
            loader: () =>fetch(`https://assignment-sunflower-server.vercel.app/application`)
           },
           {
            path:"*",
            element:<ErrorPage></ErrorPage>
            },







        ]
    }
])

export default router;