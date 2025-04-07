import { Button } from "@mantine/core";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const DAAAlgorithmAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-[#2E5077] text-5xl">Algorithm Analysis</div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Algorithm analysis refers to how to investigate the effectiveness of the
        algorithm in terms of time and space complexity. The fundamental purpose
        of algorithm evaluation is to decide how much time and space an
        algorithm needs to solve the problem as a feature of the scale of the
        input.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">1. Time Complexity</h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        The Time Complexity of an Algorithm is typically measured in phrases of
        the wide variety of simple operations (which includes comparisons,
        assignments, and mathematics operations) that the Algorithm plays at the
        enter records.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">2. Space Complexity</h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        The Spatial Complexity of an Algorithm refers to the quantity of
        reminiscence the Algorithm needs to solve the problem as a function of
        the size of the input.
      </div>

      <h1 className="text-[#2e5777] text-4xl mt-10">
        3. Types of Algorithm Analysis
      </h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        1. Time Complexity Evaluation
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        2. Space Complexity Evaluation
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        3. Worst-case Evaluation
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        4. Average-case Evaluation
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        5. Best-case Evaluation
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        6. Asymptotic Analysis
      </div>
      <div className="text-[#2d6170] text-3xl my-10 text-justify">
        We'll discuss more about Algorithm in the Next Section!
      </div>
      <div className="flex flex-row w-full justify-between">
        <Button
          color="cyan"
          variant="gradient"
          fw={100}
          size="xl"
          w="300px"
          onClick={() => navigate("/daa")}
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-xl items-center justify-end">
              <FaArrowLeft />
              <div>PREVIOUS SECTION</div>
            </div>
            <div className="text-xl text-end">Introduction to DAA</div>
          </div>
        </Button>
        <Button
          color="cyan"
          variant="gradient"
          fw={100}
          size="xl"
          w="300px"
          onClick={() => navigate("/daa/asymptotic-analysis/asymptotic-analysis")}
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-xl items-center">
              <div>NEXT SECTION</div>
              <FaArrowRight />
            </div>
            <div className="text-xl">Asymptotic Analysis</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DAAAlgorithmAnalysis;
