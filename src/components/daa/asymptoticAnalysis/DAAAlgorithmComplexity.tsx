import { Button } from "@mantine/core";
import { CodeFile } from "../../../consts/codeblock/codeblockType";
import { CodeLanguage } from "../../../consts/codeblock/codeblockEnum";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import CodeBlock from "../../CodeBlock";

import constantTC1 from "../../../sources/daa/daa1complexity/constantTC/Constant.c?raw";
import constantTC2 from "../../../sources/daa/daa1complexity/constantTC/Constant.cpp?raw";
import constantTC3 from "../../../sources/daa/daa1complexity/constantTC/Constant.java?raw";
import constantTC4 from "../../../sources/daa/daa1complexity/constantTC/Constant.py?raw";
import constantTC5 from "../../../sources/daa/daa1complexity/constantTC/Constant.js?raw";
import constantTC6 from "../../../sources/daa/daa1complexity/constantTC/Constant.ts?raw";

const constantTC: CodeFile[] = [
  {
    code: constantTC1,
    filename: "Constant.c",
    language: CodeLanguage.C,
  },
  {
    code: constantTC2,
    filename: "Constant.cpp",
    language: CodeLanguage.Cpp,
  },
  {
    code: constantTC3,
    filename: "Constant.java",
    language: CodeLanguage.Java,
  },
  {
    code: constantTC4,
    filename: "Constant.py",
    language: CodeLanguage.Python,
  },
  {
    code: constantTC5,
    filename: "Constant.js",
    language: CodeLanguage.JavaScript,
  },
  {
    code: constantTC6,
    filename: "Constant.ts",
    language: CodeLanguage.TypeScript,
  },
];

const DAAAlgorithmComplexity = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-[#2E5077] text-5xl">Algorithm Complexity</div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        In this Section, we'll discuss about some of the Time Complexities in
        detail.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">
        1. Constant Time Complexity - O(1)
      </h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        The Time Complexity of an algorithm is said to be Constant when the
        algorithm is not dependent on the input size n.
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Constant Time Complexity is denoted O(1).
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Example of Constant Time Complexity in Code:
      </div>
      <CodeBlock files={constantTC} />
      <h1 className="text-[#2e5777] text-4xl mt-10">
        2. Logarithmic Time Complexity - O(log n)
      </h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        The Time Complexity of an Algorithm is said to be Logarithmic if that
        Algorithm reduces the size of the input data in each step. This
        statement implies that the number of operations performed in the
        function is different from the input size. However, the number of
        operations reduces as the size of the input data increases.
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Logarithmic Time Complexity is denoted O(log n).
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Example of Logarithmic Time Complexity in Code:
      </div>
      <div className="flex flex-row w-full justify-between">
        <Button
          color="cyan"
          variant="gradient"
          fw={100}
          size="xl"
          w="300px"
          onClick={() =>
            navigate("/daa/asymptotic-analysis/asymptotic-analysis")
          }
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-xl items-center justify-end">
              <FaArrowLeft />
              <div>PREVIOUS SECTION</div>
            </div>
            <div className="text-xl text-end">Asymptotic Analysis</div>
          </div>
        </Button>
        <Button
          color="cyan"
          variant="gradient"
          fw={100}
          size="xl"
          w="375px"
          onClick={() =>
            navigate("/daa/asymptotic-analysis/algorithm-control-structure")
          }
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-xl items-center">
              <div>NEXT SECTION</div>
              <FaArrowRight />
            </div>
            <div className="text-xl">Algorithm Control Structure</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DAAAlgorithmComplexity;
