import Blogs from "../components/Blogs/Blogs";
import BulkEnquiry from "../components/BulkEnquiry/BulkEnquiry";
import Faq from "../components/Faq/Faq";
import Home from "../components/HomePage.jsx/Home";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "../components/ReturnPolicy/ReturnPolicy";



export const routes = [
  { path: "/home", element: <Home /> },
  { path: "/privacypolicy", element: <PrivacyPolicy /> },
  { path: "/returnpolicy", element: <ReturnPolicy /> },
  { path: "/faq", element: <Faq /> },
  { path: "/bulkenquiry", element: <BulkEnquiry /> },
  { path: "/blogs", element: <Blogs/> },


  
];
