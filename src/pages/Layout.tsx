import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hr from "../components/Hr";
import ReleaseHistory from "../components/ReleaseHistory";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
      <Hr />
      <ReleaseHistory />
      <Hr />
      <Footer />
    </>
  );
};
export default Layout;
