import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";;
import { routes } from "../../appRoutes/appRoutes";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
<Navbar/>
      {/* Main Content Area */}
      <div className="flex-1  ">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Layout;
