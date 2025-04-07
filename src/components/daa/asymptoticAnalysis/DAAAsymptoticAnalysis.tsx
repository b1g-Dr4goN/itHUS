import { Button } from "@mantine/core";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import complexity1 from "../../../assets/daa/daa2_complexity/complexity1.png";
import complexity2 from "../../../assets/daa/daa2_complexity/complexity2.webp";
import complexity3 from "../../../assets/daa/daa2_complexity/complexity3.png";
import complexity4 from "../../../assets/daa/daa2_complexity/complexity4.webp";
import complexity5 from "../../../assets/daa/daa2_complexity/complexity5.png";
import complexity6 from "../../../assets/daa/daa2_complexity/complexity6.webp";
import complexity7 from "../../../assets/daa/daa2_complexity/complexity7.png";
import complexity8 from "../../../assets/daa/daa2_complexity/complexity8.png";
import complexity9 from "../../../assets/daa/daa2_complexity/complexity9.png";
import complexity10 from "../../../assets/daa/daa2_complexity/complexity10.png";
import complexity11 from "../../../assets/daa/daa2_complexity/complexity11.png";

const DAAAsymptoticAnalysis = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-[#2E5077] text-5xl">Asymptotic Analysis</div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        There are many ways to determine the Time Complexity and Space
        Complexity of an Algorithm, such as Big-O, Little-o, Omega and Theta.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">1. Big-O Notation</h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        <i>
          "Big-O Notation is a mathematical notation that describes the limiting
          behavior of a function when the argument tends towards a particular
          value or infinity. It is a member of a family of notations invented by
          Paul Bachmann, Edmund Landau, and others, collectively called
          Bachmann–Landau notation or asymptotic notation."
        </i>
      </div>
      <div className="text-[#36798b] text-2xl text-right">
        (Source: Wikipedia)
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        In plain words, Big-O Notation describes the Complexity of your code
        using algebraic terms.
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Formal Definition of Big-O:
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity1} alt="" />
        <img src={complexity2} className="w-[35%]" alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        For example:
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity11} alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Big-O Notation describes the <i>Upper Bound</i> of the Complexity. So
        it's used to Analyze the Worst-case Complexity of an Algorithm.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">2. Omega Notation</h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Formal Definition of Omega:
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity3} alt="" />
        <img src={complexity4} className="w-[35%]" alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Omega Notation describes the <i>Lower Bound</i> of the Complexity. So
        it's used to Analyze the Best-case Complexity of an Algorithm.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">3. Theta Notation</h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Formal Definition of Theta:
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity5} alt="" />
        <img src={complexity6} className="w-[35%]" alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        In other words,
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity7} alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Theta Notation describes the <i>Exact Bound</i> of the Complexity. So
        it's used to Analyze the Average-case Complexity of an Algorithm.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">4. Little-o Notation</h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Formal Definition of Little-o:
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity8} alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        In other words,
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity9} alt="" />
      </div>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        Little-o Notation describes the{" "}
        <i>Upper Bound excluding the Exact Bound</i>.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">
        5. Relationship between these Notations
      </h1>
      <div className="text-[#36798b] text-2xl ml-10 text-justify">
        This diagram will illustrate the relationship between Big-O, Little-o,
        Omega and Theta <i>(Source: FreeCodeCamp)</i>.
      </div>
      <div className="text-[#36798b] text-2xl ml-10 justify-items-center">
        <img src={complexity10} className="shadow-xl border-slate-500 border-2" alt="" />
      </div>
      <div className="flex flex-row w-full justify-between">
        <Button
          color="cyan"
          variant="gradient"
          fw={100}
          size="xl"
          w="300px"
          onClick={() => navigate("/daa/algorithm-analysis")}
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-xl items-center justify-end">
              <FaArrowLeft />
              <div>PREVIOUS SECTION</div>
            </div>
            <div className="text-xl text-end">Algorithm Analysis</div>
          </div>
        </Button>
        <Button
          color="cyan"
          variant="gradient"
          fw={100}
          size="xl"
          w="300px"
          onClick={() =>
            navigate("/daa/asymptotic-analysis/algorithm-complexity")
          }
        >
          <div className="flex flex-col">
            <div className="flex flex-row gap-2 text-xl items-center">
              <div>NEXT SECTION</div>
              <FaArrowRight />
            </div>
            <div className="text-xl">Algorithm Complexity</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default DAAAsymptoticAnalysis;
