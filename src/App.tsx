import { Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Updates from "./pages/Updates";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Updates" element={<Updates />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
