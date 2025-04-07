import { Tabs } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import logoHUS from "../../assets/LogoHUS.png";
import logoBigDragon from "../../assets/bigdragon.png";
import logo from "../../assets/ithus.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState<string | null>("Home");

  const navigate = useNavigate();

  return (
    <div className="sticky top-0 left-0 z-50">
      <div className="flex flex-row items-center justify-between w-full h-24 bg-[#27445D] text-center font-titan text-[#82D5CC] px-10">
        <img className="h-4/5" src={logo} alt="ithus" />
        <div className="flex flex-row h-2/5">
          <img src={logoBigDragon} alt="bigdragon" />
          <div className="h-full w-[1px] mr-2 bg-slate-200" />
          <img className="opacity-90" src={logoHUS} alt="" />
        </div>
      </div>
      <div className="shadow-xl">
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List grow className="bg-[#4DA1A9] text-[#F6F4F0] font-semibold">
            <Tabs.Tab
              value="Home"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/")}
            >
              Home
            </Tabs.Tab>
            <Tabs.Tab
              value="C/C++"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/ccpp")}
            >
              C/C++
            </Tabs.Tab>
            <Tabs.Tab
              value="Java"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/java")}
            >
              Java
            </Tabs.Tab>
            <Tabs.Tab
              value="Python"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/python")}
            >
              Python
            </Tabs.Tab>
            <Tabs.Tab
              value="Javasript"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/javascript")}
            >
              Javasript
            </Tabs.Tab>
            <Tabs.Tab
              value="Typescript"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/typescript")}
            >
              Typescript
            </Tabs.Tab>
            <Tabs.Tab
              value="DSA"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/dsa")}
            >
              DSA
            </Tabs.Tab>
            <Tabs.Tab
              value="DAA"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/daa")}
            >
              DAA
            </Tabs.Tab>
            <Tabs.Tab
              value="OOP"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/oop")}
            >
              OOP
            </Tabs.Tab>
            <Tabs.Tab
              value="SQL & Databases"
              className="hover:bg-[#449096] active:bg-[#40878d]"
              onClick={() => navigate("/sqldb")}
            >
              SQL & Databases
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
};

export default Header;
