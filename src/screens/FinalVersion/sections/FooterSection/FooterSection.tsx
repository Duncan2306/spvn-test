import React from "react";

export const FooterSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    {
      id: 1,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-12.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923.png",
      alt: "Social media icon",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-9.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-1.png",
      alt: "Social media icon",
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/icon.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-2.png",
      alt: "Social media icon",
    },
    {
      id: 4,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-2.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-3.png",
      alt: "Social media icon",
    },
    {
      id: 5,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-1.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-4.png",
      alt: "Social media icon",
    },
    {
      id: 6,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-6.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-5.png",
      alt: "Social media icon",
    },
    {
      id: 7,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-8.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-6.png",
      alt: "Social media icon",
    },
    {
      id: 8,
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-7.png",
      isComplex: true,
      alt: "Social media icon",
    },
    {
      id: 9,
      icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-10.svg",
      bgImage: "https://c.animaapp.com/mbx9rsggFtkcG0/img/group-4923-8.png",
      alt: "Social media icon",
    },
  ];

  return (
    <footer className="w-full h-[75px] bg-[#0e1426] relative">
      <div className="w-full h-[76px] bg-transparent bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/rectangle-318.svg)] bg-[100%_100%]">
        <div className="flex justify-between items-center h-full px-[73px]">
          {/* Copyright text */}
          <div className="h-[25px]">
            <p className="font-['Rajdhani',Helvetica] text-[15px] tracking-[-0.30px] leading-[25px] whitespace-nowrap">
              <span className="font-semibold text-[#d7def9] tracking-[-0.04px]">
                © Copyright 2025{" "}
              </span>
              <span className="font-bold text-white tracking-[-0.04px]">
                SKRICE | NEXIRA
              </span>
              <span className="font-semibold text-[#d7def9] tracking-[-0.04px]">
                . All rights reserved
              </span>
            </p>
          </div>

          {/* Right side with language selector and social icons */}
          <div className="flex items-center gap-14">
            {/* Language selector */}
            <div className="relative w-[81px] h-7 bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/rectangle-317.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[81px] h-7 top-0 left-0"
                alt="Union"
                src="https://c.animaapp.com/mbx9rsggFtkcG0/img/union.svg"
              />
              <img
                className="absolute w-2 h-1.5 top-[11px] left-16"
                alt="Frame"
                src="https://c.animaapp.com/mbx9rsggFtkcG0/img/frame-93.svg"
              />
              <div className="absolute top-[5px] left-[33px] font-['Rajdhani',Helvetica] font-semibold text-white text-sm tracking-[-0.28px] leading-[normal]">
                EN
              </div>
              <img
                className="absolute w-4 h-3 top-2 left-[9px]"
                alt="Flag set"
                src="https://c.animaapp.com/mbx9rsggFtkcG0/img/flag-set.svg"
              />
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-3.5">
              {socialLinks.map((link) => (
                <div
                  key={link.id}
                  className={`relative w-7 h-7 ${link.id === 3 ? "w-[28.29px] h-[28.05px] mb-[-0.05px]" : ""}`}
                  style={{
                    backgroundImage: `url(${link.bgImage})`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  {!link.isComplex ? (
                    <img
                      className={`absolute ${
                        link.id === 1
                          ? "w-4 h-[13px] top-[7px] left-1.5"
                          : link.id === 2
                            ? "w-4 h-3 top-2 left-1.5"
                            : link.id === 3
                              ? "w-4 h-[15px] top-1.5 left-1.5"
                              : link.id === 4
                                ? "w-4 h-[11px] top-[9px] left-1.5"
                                : link.id === 5
                                  ? "w-3.5 h-3.5 top-[7px] left-[7px]"
                                  : link.id === 6
                                    ? "w-4 h-[13px] top-2 left-1.5"
                                    : link.id === 7
                                      ? "w-4 h-4 top-1.5 left-1.5"
                                      : link.id === 9
                                        ? "w-[15px] h-[18px] top-1 left-1.5"
                                        : ""
                      }`}
                      alt={link.alt}
                      src={link.icon}
                    />
                  ) : (
                    <div className="relative w-4 h-4 top-1.5 left-1.5 bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/subtract.svg)] bg-[100%_100%]">
                      <div className="relative w-3 h-3 top-1 left-0.5 bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-5.svg)] bg-[100%_100%]">
                        <img
                          className="absolute w-0.5 h-px top-0 left-1.5"
                          alt="Vector"
                          src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-7.svg"
                        />
                        <img
                          className="absolute w-[7px] h-[3px] top-px left-1"
                          alt="Vector"
                          src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-3.svg"
                        />
                        <img
                          className="absolute w-0.5 h-0.5 top-px left-1"
                          alt="Vector"
                          src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-11.svg"
                        />
                        <img
                          className="absolute w-3 h-2 top-1 left-0"
                          alt="Vector"
                          src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-4.svg"
                        />
                        <img
                          className="absolute w-[5px] h-px top-1 left-1.5"
                          alt="Vector"
                          src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-13.svg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
