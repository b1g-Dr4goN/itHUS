import logo from "../../assets/ithus.png";

const Footer = () => {
  return (
    <div className="bg-[#27445D] text-[#82D5CC] text-center font-titan flex flex-col items-center px-10">
      <div className="w-full">
        <div className="flex flex-row items-center justify-between w-full h-56 px-10">
          <img className="h-5/6" src={logo} alt="ithus" />
          <div>
            <div className="text-8xl">itHUS</div>
            <div>VNU - HUS IT Knowledge Site</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 h-[1px] w-full"></div>
      <div className="text-sm text-[#4DA1A9] my-3">
        From Faculty of Mathematics, Mechanics and Informatics (VNU-HUS) with
        love 💖
      </div>
      <div
        className="text-sm text-[#55b1b9] mb-3 hover:text-[#56a0a7] active:text-[#41949c] cursor-pointer transition-all"
        onClick={() => window.open("https://github.com/b1g-Dr4goN")}
      >
        Copyright © Big DragoN, 2025
      </div>
    </div>
  );
};

export default Footer;
