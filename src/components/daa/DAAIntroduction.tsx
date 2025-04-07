import { useNavigate } from "react-router";
import algo1 from "../../assets/daa/daa1_intro/whatisalgo.png";
import { Button } from "@mantine/core";
import { FaArrowRight } from "react-icons/fa";

const DAAIntroduction = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="text-[#2E5077] text-5xl">DAA Tutorial</div>
      <div className="text-[#36798b] text-2xl ml-10">
        Before we begin, let's take a look at some first sights.
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">1. Algorithm</h1>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <div className="text-[#36798b] text-2xl ml-10 text-justify">
            In Mathematics and Computer Science, an Algorithm is a finite
            sequence of mathematically rigorous instructions, typically used to
            solve a problem, a class of specific problems or to perform a
            computation.
          </div>
          <div className="text-[#36798b] text-2xl ml-10 text-justify">
            In short, Algorithm is a procedure used for solving a problem or
            performing a computation.
          </div>
        </div>
        <img src={algo1} className="h-56 w-auto" alt="" />
      </div>
      <h1 className="text-[#2e5777] text-4xl mt-10">2. Why study Algorithm?</h1>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.1. Problem-Solving Skills
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        Algorithms let you know how to deal with problems, break down complex
        problems into smaller, manageable parts, and help you learn how to think
        logically, systematically and efficiently.
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.2. Writing Efficient Code
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        Studying Algorithms helps you optimize performance, reduce memory usage
        of your code, and help your code to be capable of handling larger
        datasets.
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.3. Foundation of Computer Science
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        Algorithms are the backbone of: Operating Systems (OS), Networking,
        Databases, Artificial Intelligence (AI), Cryptography, etc..., basically
        every fields in Computer Science.
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.4. Preparing for future Plans
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        If you're preparing for Tech Interviews or Competitive Programming
        Contests, understanding algorithms is essential.
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.5. Sharpening Logical Thinking
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        Studying Algorithms improves your Analytical Thinking, Decision Making
        and Pattern Recognition.
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.6. Building Better Softwares
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        Knowing when to apply the right Algorithm helps you to Choose the best
        Data Structures, Write scalable applications and Avoid bottleneck early.
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 text-justify">
        2.7. Understand How Technology Works
      </div>
      <div className="text-[#36798b] text-2xl ml-20 text-justify">
        Wants to know how Google ranks pages, how Facebook helps you connected
        to other people, how Maps can find the best routes, or how Games are
        developed? All of them are driven by smart Algorithms!
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 mt-10 text-justify">
        Ready to dive into the world of Algorithms?
      </div>
      <div className="text-[#2d6170] text-3xl ml-10 mb-10 text-justify">
        Let's go to the Next Section!
      </div>
      <Button
        color="cyan"
        variant="gradient"
        fw={100}
        size="xl"
        w="285px"
        className="self-end"
        onClick={() => navigate("/daa/algorithm-analysis")}
      >
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 text-xl items-center">
            <div>NEXT SECTION</div>
            <FaArrowRight />
          </div>
          <div className="text-xl">Algorithm Analysis</div>
        </div>
      </Button>
    </div>
  );
};

export default DAAIntroduction;
