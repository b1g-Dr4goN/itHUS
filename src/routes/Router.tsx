import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import CAndCPP from "../pages/CAndCPP";
import Java from "../pages/Java";
import Python from "../pages/Python";
import JavaScript from "../pages/JavaScript";
import TypeScript from "../pages/TypeScript";
import DSA from "../pages/DSA";
import OOP from "../pages/OOP";
import SQLDB from "../pages/SQLDB";
import DAA from "../pages/DAA";
import DAAIntroduction from "../components/daa/DAAIntroduction";
import DAAAlgorithmAnalysis from "../components/daa/DAAAlgorithmAnalysis";
import DAAAsymptoticAnalysis from "../components/daa/asymptoticAnalysis/DAAAsymptoticAnalysis";
import DAAAlgorithmComplexity from "../components/daa/asymptoticAnalysis/DAAAlgorithmComplexity";
import DAAAlgorithmControlStructure from "../components/daa/asymptoticAnalysis/DAAAlgorithmControlStructure";
import DAABubbleSort from "../components/daa/simpleSorting/DAABubbleSort";
import DAASelectionSort from "../components/daa/simpleSorting/DAASelectionSort";
import DAAInsertionSort from "../components/daa/simpleSorting/DAAInsertionSort";

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
      <Route path="/daa" element={<DAA />}>
        <Route index element={<DAAIntroduction />} />
        <Route path="algorithm-analysis" element={<DAAAlgorithmAnalysis />} />
        <Route path="asymptotic-analysis">
          <Route index element={<DAAAsymptoticAnalysis />} />
          <Route
            path="asymptotic-analysis"
            element={<DAAAsymptoticAnalysis />}
          />
          <Route
            path="algorithm-complexity"
            element={<DAAAlgorithmComplexity />}
          />
          <Route
            path="algorithm-control-structure"
            element={<DAAAlgorithmControlStructure />}
          />
        </Route>
        <Route path="simple-sorting">
          <Route index element={<DAABubbleSort />} />
          <Route path="bubble-sort" element={<DAABubbleSort />} />
          <Route path="selection-sort" element={<DAASelectionSort />} />
          <Route path="insertion-sort" element={<DAAInsertionSort />} />
        </Route>
      </Route>
      <Route path="/oop" element={<OOP />} />
      <Route path="/sqldb" element={<SQLDB />} />
    </Routes>
  );
};

export default Router;
