import AboutUs from "../components/AboutUs/AboutUs";
import Blogs from "../components/Blogs/Blogs";
import BulkEnquiry from "../components/BulkEnquiry/BulkEnquiry";
import CategoryPage from "../components/CategoryPage/CategoryPage";
import ContactUs from "../components/ContatcUs/ContactUs";
import Faq from "../components/Faq/Faq";
import Home from "../components/HomePage.jsx/Home";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "../components/ReturnPolicy/ReturnPolicy";
import SignUp from "../components/Signup/SignUp";



export const routes = [
  { path: "/home", element: <Home /> },
  { path: "/privacypolicy", element: <PrivacyPolicy /> },
  { path: "/returnpolicy", element: <ReturnPolicy /> },
  { path: "/faq", element: <Faq /> },
  { path: "/bulkenquiry", element: <BulkEnquiry /> },
  { path: "/blogs", element: <Blogs/> },
  { path: "/categories", element: <CategoryPage /> },
  {path:"/contactus",element:<ContactUs/>},
  {path:"/aboutus",element:<AboutUs/>},
  { path: "/signin", element: <SignUp /> },


  
];
