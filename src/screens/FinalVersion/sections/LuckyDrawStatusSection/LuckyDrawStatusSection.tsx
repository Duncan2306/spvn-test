import { ClockIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

// Prize data for mapping
const prizeData = [
  {
    type: "Legendary Prize",
    count: "01",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/mask-group.png",
  },
  {
    type: "Super Mavian Prize",
    count: "01",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/mask-group-1.png",
  },
  {
    type: "Rare Mavian Prize",
    count: "01",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/mask-group-2.png",
  },
  {
    type: "Common Mavian Prizes",
    count: "07",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/mask-group-3.png",
  },
];

// Eligibility criteria data
const eligibilityCriteria = [
  {
    text: "Follow us on Twitter: x.com/MaviaGame  |  x.com/NexiraDAEP",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/frame-1000003842.png",
  },
  {
    text: "Member of our Discord: Discord.gg/maviaofficial",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/2.png",
  },
  {
    text: "I consent to receive emails/updates from Mavia/Nexira",
    icon: "https://c.animaapp.com/mbx9rsggFtkcG0/img/2-1.png",
  },
];

export const LuckyDrawStatusSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 justify-between">
        {/* Left side - Form */}
        <div className="flex flex-col w-full lg:w-[673px]">
          <div className="flex flex-col gap-7 w-full">
            <div className="w-full">
              <div className="flex flex-col gap-[38px]">
                {/* Full Name Field */}
                <div className="w-full">
                  <label className="block mb-2 font-bold [font-family:'Rajdhani',Helvetica] text-lg">
                    Your Full Name
                    <span className="text-[#ea3640]">*</span>
                  </label>
                  <div className="w-full h-[58px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/bg-form.svg)] bg-[100%_100%]">
                    <Input
                      className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#ffffff59] pl-6"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="w-full">
                  <label className="block mb-2 font-bold [font-family:'Rajdhani',Helvetica] text-lg">
                    Your Email Address
                    <span className="text-[#ea3640]">*</span>
                  </label>
                  <div className="w-full h-[58px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/bg-form.svg)] bg-[100%_100%]">
                    <Input
                      className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#ffffff59] pl-6"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>

                {/* Social Media Fields */}
                <div className="flex w-full gap-4">
                  {/* Twitter Field */}
                  <div className="w-1/2">
                    <label className="block mb-2 font-bold [font-family:'Rajdhani',Helvetica] text-lg">
                      Twitter / X Profile{" "}
                      <span className="font-medium text-[#ffffff80]">
                        (Optional)
                      </span>
                    </label>
                    <div className="w-full h-[58px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/bg-form.svg)] bg-[100%_100%]">
                      <Input
                        className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#ffffff59] pl-6"
                        placeholder="@youraccount"
                      />
                    </div>
                  </div>

                  {/* Facebook Field */}
                  <div className="w-1/2">
                    <label className="block mb-2 font-bold [font-family:'Rajdhani',Helvetica] text-lg">
                      Facebook Profile{" "}
                      <span className="font-medium text-[#ffffff80]">
                        (Optional)
                      </span>
                    </label>
                    <div className="w-full h-[58px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/bg-form.svg)] bg-[100%_100%]">
                      <Input
                        className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#ffffff59] pl-6"
                        placeholder="fb.com/your_profile"
                      />
                    </div>
                  </div>
                </div>

                {/* Wallet Address Field */}
                <div className="w-full">
                  <label className="block mb-2 font-bold [font-family:'Rajdhani',Helvetica] text-lg">
                    Lucky Draw & Airdrop Wallet Address
                    <span className="text-[#ea3640]">*</span>
                  </label>
                  <div className="w-full h-[58px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/bg-form.svg)] bg-[100%_100%]">
                    <Input
                      className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-semibold text-[#ffffff59] pl-6"
                      placeholder="Example: 0x213f987982454Ce646f68AC8c123123dasftMAVIA"
                    />
                  </div>
                </div>

                {/* Country Field */}
                <div className="w-full">
                  <label className="block mb-2 font-bold [font-family:'Rajdhani',Helvetica] text-lg">
                    Country of Residence
                    <span className="text-[#ea3640]">*</span>
                  </label>
                  <div className="w-full h-[58px] bg-[url(https://c.animaapp.com/mbx9rsggFtkcG0/img/group-1000004134.png)] bg-[100%_100%]">
                    <Select defaultValue="vietnam">
                      <SelectTrigger className="h-[58px] bg-transparent border-none [font-family:'Rajdhani',Helvetica] font-bold text-white">
                        <div className="flex items-center gap-2">
                          <img
                            className="w-5 h-4"
                            alt="Flag country"
                            src="https://c.animaapp.com/mbx9rsggFtkcG0/img/flag-country.svg"
                          />
                          <SelectValue placeholder="Select country" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vietnam">Vietnam</SelectItem>
                        {/* Other countries would be added here */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="w-full pb-7">
              <h3 className="font-bold [font-family:'Rajdhani',Helvetica] text-white text-lg mb-5">
                To be eligible for the Lucky Draw, participants must meet the
                following criteria:
              </h3>
              <div className="flex flex-col gap-2">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <img
                      className="w-6 h-6"
                      alt={`Criteria ${index + 1}`}
                      src={criteria.icon}
                    />
                    <span className="font-bold [font-family:'Rajdhani',Helvetica] text-white text-lg">
                      {criteria.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center w-[242px] mx-auto opacity-50">
            <Button
              className="w-full h-[54px] bg-white border-2 border-white relative"
              disabled
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold [font-family:'Rajdhani',Helvetica] text-[#215dd6] text-[28px]">
                  SUBMIT
                </span>
              </div>
            </Button>
          </div>
        </div>

        {/* Right side - Prize Info */}
        <div className="flex flex-col w-full lg:w-[462px] gap-8">
          {/* Prize Card */}
          <Card className="w-full h-[422px] rounded-[20px] border-2 border-[#1cd7d7] bg-transparent relative overflow-hidden">
            <CardContent className="p-0">
              {/* Background elements */}
              <div className="absolute w-[290px] h-[63px] bottom-0 left-1/2 transform -translate-x-1/2 bg-[#62f1ff26] rounded-[145px/31.5px] blur-[25px]" />
              <img
                className="absolute w-[290px] h-[258px] top-[37px] left-1/2 transform -translate-x-1/2"
                alt="Vector"
                src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector.svg"
              />

              {/* Header */}
              <div className="flex flex-col items-center pt-6 px-[38px]">
                <div className="flex items-end gap-2 w-full">
                  <div className="relative w-11 h-11 -rotate-90">
                    <img
                      className="absolute w-10 h-[38px] top-[3px] left-0.5 rotate-90"
                      alt="Icon"
                      src="https://c.animaapp.com/mbx9rsggFtkcG0/img/ixon-1.png"
                    />
                  </div>
                  <h2 className="w-fit [text-shadow:0px_0px_20px_#ffb42540] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-transparent text-[34px] text-center">
                    Massive $15K+ Prizes
                  </h2>
                </div>
                <div className="flex items-center gap-1 w-full">
                  <h3 className="w-fit [text-shadow:0px_0px_4px_#5ff8ff80] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-[#5ff8ff] text-[34px] whitespace-nowrap">
                    &amp; up to 200K Airdrop
                  </h3>
                  <img
                    className="w-12 h-12 object-cover"
                    alt="Image"
                    src="https://c.animaapp.com/mbx9rsggFtkcG0/img/image-943.png"
                  />
                </div>
              </div>

              {/* Prize List */}
              <div className="absolute w-[390px] h-[189px] top-[141px] left-[37px]">
                <div className="absolute w-[340px] h-[175px] top-1.5 left-12">
                  <div className="absolute h-[175px] top-0 left-0 [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-white text-[26.5px] tracking-[0] leading-[25.5px] flex flex-col gap-[25px]">
                    {prizeData.map((prize, index) => (
                      <React.Fragment key={index}>
                        <span>
                          {prize.count} {prize.type}
                        </span>
                        {index < prizeData.length - 1 && (
                          <img
                            className="absolute w-80 h-0.5 top-[40px] left-0 mt-[50px]"
                            style={{ top: `${index * 50 + 10}px` }}
                            alt="Separator"
                            src="https://c.animaapp.com/mbx9rsggFtkcG0/img/vector-888.svg"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Prize Icons */}
                <div className="flex flex-col w-[37px] h-[189px] items-start justify-center gap-[11.05px] absolute top-0 left-0 shadow-[0px_0px_22.11px_#071c45]">
                  {prizeData.map((prize, index) => (
                    <div
                      key={index}
                      className="relative w-[37.07px] h-[38.9px]"
                    >
                      <img
                        className="absolute w-9 h-[39px] top-0 left-0"
                        alt={`Prize icon ${index + 1}`}
                        src={prize.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-[25px] left-[35px] [text-shadow:0px_0px_18.49px_#ffb42540] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-transparent text-[31.4px] text-center">
                25,000 $MAVIA + 100 NFTs
              </div>
            </CardContent>
          </Card>

          {/* Lucky Number Card */}
          <Card className="w-full h-[167px] rounded-[20px] border-2 border-[#1cd7d7] [background:linear-gradient(180deg,rgba(8,17,48,1)_16%,rgba(8,52,115,1)_100%)]">
            <CardContent className="p-0 flex items-center">
              <div className="flex flex-col w-[237px] items-start gap-2.5 p-9">
                <h3 className="w-fit [text-shadow:0px_0px_20px_#ffb42540] [background:linear-gradient(180deg,rgba(255,227,173,1)_0%,rgba(255,180,37,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-transparent text-[34px] text-center">
                  YOUR LUCKY #
                </h3>
                <div className="self-stretch [text-shadow:0px_0px_20px_#ffffff40] [font-family:'Century_Gothic-Bold',Helvetica] font-bold text-white text-[74px] text-center leading-[68.1px]">
                  5121
                </div>
              </div>
              <img
                className="w-[126px] h-[156px]"
                alt="Character"
                src="https://c.animaapp.com/mbx9rsggFtkcG0/img/ksajlkasd-1.png"
              />
            </CardContent>
          </Card>

          {/* Deadline Info */}
          <div className="w-full flex items-center mt-4">
            <ClockIcon className="w-6 h-6 text-white" />
            <p className="ml-1 [font-family:'Century_Gothic-Regular',Helvetica] text-white text-xl tracking-[-0.20px] leading-7">
              <span className="[font-family:'Century_Gothic-Bold',Helvetica] font-bold text-[#5ff8ff]">
                Deadline:
              </span>
              &nbsp;&nbsp;Registrations must be submitted by
              <br />
              <span className="[font-family:'Century_Gothic-Bold',Helvetica] font-bold">
                05 June 2025 @6:00 VN (23:00 UTC)
              </span>{" "}
              to be eligible.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Image */}
      <img
        className="w-full max-w-[1177px] h-auto mx-auto mt-16"
        alt="Group"
        src="https://c.animaapp.com/mbx9rsggFtkcG0/img/group-1000004414.png"
      />
    </section>
  );
};
