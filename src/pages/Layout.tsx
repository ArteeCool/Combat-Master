import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-20 mb-40">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
