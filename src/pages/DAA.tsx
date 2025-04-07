import { NavLink } from "@mantine/core";
import { Outlet, useNavigate } from "react-router";

const DAA = () => {
  const navigate = useNavigate();

  const checkActive = (href: string) => {
    if (window.location.href.includes(href)) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full min-h-screen flex flex-row gap-8 font-titan px-8 py-10">
      <div className="w-1/5 text-cyan-800 bg-amber-100 font-thin">
        <div className="text-md text-cyan-900 h-10 flex items-center justify-center bg-amber-200">
          FIRST SIGHTS
        </div>
        <NavLink
          variant="filled"
          color="cyan"
          label="Introduction to DAA"
          onClick={() => navigate("/daa")}
          active={!checkActive("/daa/")}
        />
        <NavLink
          variant="filled"
          color="cyan"
          label="Algorithm Analysis"
          onClick={() => navigate("/daa/algorithm-analysis")}
          active={checkActive("/daa/algorithm-analysis")}
        />
        <div className="text-md text-cyan-900 h-10 flex items-center justify-center bg-amber-200">
          ASYMPTOTIC ANALYSIS
        </div>
        <NavLink
          variant="filled"
          color="cyan"
          label="Asymptotic Analysis"
          onClick={() =>
            navigate("/daa/asymptotic-analysis/asymptotic-analysis")
          }
          active={checkActive("daa/asymptotic-analysis/asymptotic-analysis")}
        />
        <NavLink
          variant="filled"
          color="cyan"
          label="Algorithm Complexity"
          onClick={() =>
            navigate("/daa/asymptotic-analysis/algorithm-complexity")
          }
          active={checkActive("daa/asymptotic-analysis/algorithm-complexity")}
        />
        <NavLink
          variant="filled"
          color="cyan"
          label="Algorithm Control Structure"
          onClick={() =>
            navigate("/daa/asymptotic-analysis/algorithm-control-structure")
          }
          active={checkActive(
            "/daa/asymptotic-analysis/algorithm-control-structure"
          )}
        />
        <div className="text-md text-cyan-900 h-10 flex items-center justify-center bg-amber-200">
          SIMPLE SORTING ALGORITHMS
        </div>
        <NavLink
          variant="filled"
          color="cyan"
          label="Bubble Sort"
          onClick={() => navigate("/daa/simple-sorting/bubble-sort")}
          active={checkActive("/daa/simple-sorting/bubble-sort")}
        />
        <NavLink
          variant="filled"
          color="cyan"
          label="Selection Sort"
          onClick={() => navigate("/daa/simple-sorting/selection-sort")}
          active={checkActive("/daa/simple-sorting/selection-sort")}
        />
        <NavLink
          variant="filled"
          color="cyan"
          label="Insertion Sort"
          onClick={() => navigate("/daa/simple-sorting/insertion-sort")}
          active={checkActive("/daa/simple-sorting/insertion-sort")}
        />
      </div>
      <div className="w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default DAA;
