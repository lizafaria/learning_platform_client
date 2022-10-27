import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import Course from "./Course";
import CourseDetails from "./CourseDetails";
import ErrorPage from "./ErrorPage";
import FAQ from "./FAQ";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Selected from "./Selected";

const router=createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/home',
            element:<Home></Home>,
        },
        {
            path:'/course',
            loader:()=>fetch(`https://assignment-10-server-orpin-five.vercel.app/books`),
            element:<Course></Course>,
        },
        {
            path:'/books/id',
            loader:({params})=>fetch(`https://assignment-10-server-orpin-five.vercel.app/books/${params.id}`),
            element:<CourseDetails></CourseDetails>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/blog',
            element:<Blog></Blog>,
        },
        {
            path:'/faq',
            element:<FAQ></FAQ>,
        },
        {
            path:'/selected/:id',
            loader:({params})=>fetch(`https://assignment-10-server-orpin-five.vercel.app/books/${params.id}`),
            element:<ProtectedRoute><Selected></Selected></ProtectedRoute>,
        },
    ]

}])


export default router;