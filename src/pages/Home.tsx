import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import itHUS from "../assets/ithus.png";
import logoC from "../assets/c.svg";
import logoJava from "../assets/java-4.svg";
import logoPython from "../assets/python-5.svg";
import logoJavaScirpt from "../assets/javascript-r.svg";
import logoTypeScript from "../assets/typescript.svg";
import logoMySQL from "../assets/mysql-logo-pure.svg";

const icons = [
  logoC,
  logoJava,
  logoPython,
  logoJavaScirpt,
  logoTypeScript,
  logoMySQL,
];

const Home = () => {

  return (
    <div className="min-h-svh flex flex-col items-center py-12 gap-24">
      <img className="w-1/2 drop-shadow-glow" src={itHUS} alt="" />
      <div className="flex flex-row font-titan text-6xl gap-16 text-[#27445D] items-center">
        <div className="text-2xl">itHUS's GitHub</div>
        <FaGithubSquare
          className="cursor-pointer hover:text-[#1f3549] hover:drop-shadow-glow active:text-[#152432]"
          onClick={() => window.open("https://github.com/b1g-Dr4goN/itHUS")}
        />
        <FaFacebookSquare
          className="cursor-pointer hover:text-[#1f3549] hover:drop-shadow-glow active:text-[#152432]"
          onClick={() =>
            window.open("https://www.facebook.com/ku4nm1N.b1gDr4goN/")
          }
        />
        <div className="text-2xl">My Facebook</div>
      </div>
      <div className="mt-12 font-titan text-6xl text-[#4DA1A9]">
        SUPPORTED LANGUAGES
      </div>
      <div className="relative overflow-hidden w-full h-28">
        <div className="absolute top-0 left-0 flex animate-marquee">
          {/* Repeat the icons twice for seamless scroll */}
          {[...Array(18)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-row mx-52">
              {icons.map((src, i) => (
                <img
                  key={`${setIndex}-${i}`}
                  src={src}
                  alt=""
                  className="h-20 mx-20"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
