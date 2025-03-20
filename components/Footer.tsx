import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="font-serif heading lg:max-w-[45vw]">
          제 <span className="text-purple">이력서를</span> 잠깐 보실래요?
        </h1>
        <a href="https://drive.google.com/file/d/1VpTlJHSWh1eQdor2hCB55LoMMsGJ2wki/view?usp=sharing">
          <MagicButton
            title="이력서 다운받기"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="font-serif"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Johnson W.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
