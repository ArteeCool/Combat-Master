import { Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import News from "./pages/News";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
