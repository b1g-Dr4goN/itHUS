import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import CAndCPP from "../pages/CAndCPP";
import Java from "../pages/Java";
import Python from "../pages/Python";
import JavaScript from "../pages/JavaScript";
import TypeScript from "../pages/TypeScript";
import DSA from "../pages/DSA";
import DAA from "../pages/DAA";
import OOP from "../pages/OOP";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ccpp" element={<CAndCPP />} />
      <Route path="/java" element={<Java />} />
      <Route path="/python" element={<Python />} />
      <Route path="/javascript" element={<JavaScript />} />
      <Route path="/typescript" element={<TypeScript />} />
      <Route path="/dsa" element={<DSA />} />
      <Route path="/daa" element={<DAA />} />
      <Route path="/oop" element={<OOP />} />
    </Routes>
  );
};

export default Router;
