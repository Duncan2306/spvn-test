import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { LuckyDrawStatusSection } from "./sections/LuckyDrawStatusSection";

export const FinalVersion = (): JSX.Element => {
  return (
    <div
      className="bg-transparent flex flex-row justify-center w-full"
      data-model-id="196:2835"
    >
      <div className="w-full max-w-[1440px] relative flex flex-col">
        <div className="w-full h-[1010px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/banner.png)] bg-cover bg-center" />

        <div className="w-full">
          <LuckyDrawStatusSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
