// import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-dvh w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="font-serif uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            제 플레이그라운드에 오신 것을 환영합니다
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="한계를 두지 않고 프론트엔드부터 백엔드까지 프로젝트를 구축하는 자가 학습 개발자"
            className="font-serif font-extrabold text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="font-serif  text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            안녕하세요! 한양대학교 출신의 외국인 개발자 존슨입니다.
          </p>

          <a href="https://drive.google.com/file/d/1VpTlJHSWh1eQdor2hCB55LoMMsGJ2wki/view?usp=sharing">
            <MagicButton
              title="이력서 다운받기기"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="font-serif"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
