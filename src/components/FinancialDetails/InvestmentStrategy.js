import { Icon } from "@iconify/react";
import { Progress } from "@material-tailwind/react";

export default function InvestmentStrategy() {
  return (
    <div className="bg-[#DEF4E4] py-[3rem] mb-[5rem]">
      <div className="w-[80%] mx-auto">
        <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
          Investment Strategy Returns Calculator
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[4rem]">
          <div className="space-y-[3rem]">
            <div>
              <p className="text-[#B1B1B1]">Investment Amount</p>
              <p className="text-[1.25rem] border-b-[1px] border-[#000] pb-[1rem] my-[1.25rem]">
                ₹10,00,000
              </p>
              <div>
                <Progress value={50} className="bg-[#B1B1B1] rounded-md" />
                <div className="flex justify-between items-center font-semibold">
                  <p>₹100</p>
                  <p>₹10,00,000</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-[1.25rem] my-[1.25rem] flex items-center gap-[0.5rem]">
                  <span>Annual Dividends</span>
                  <Icon
                    className="text-[#B1B1B1] text-[1.25rem]"
                    icon="zondicons:exclamation-solid"
                  />
                </p>
                <p className="border-b-[1px] border-[#000] text-[1.25rem] font-semibold">
                  2.88 %
                </p>
              </div>
              <Progress value={50} className="bg-[#B1B1B1] rounded-md" />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <p className="text-[1.25rem] my-[1.25rem] flex items-center gap-[0.5rem]">
                  <span>Annual Appreciation</span>
                  <Icon
                    className="text-[#B1B1B1] text-[1.25rem]"
                    icon="zondicons:exclamation-solid"
                  />
                </p>
                <p className="border-b-[1px] border-[#000] text-[1.25rem] font-semibold">
                  4.5 %
                </p>
              </div>
              <Progress value={50} className="bg-[#B1B1B1] rounded-md" />
            </div>
          </div>

          <div className="space-y-[2.5rem] flex flex-col justify-end">
            <div>
              <p className="text-[1.25rem] mb-[0.3rem]">
                Annualized Total Returns
              </p>
              <p className="text-[2.5rem] font-semibold">₹2.88</p>
            </div>
            <div>
              <p className="text-[1.25rem] mb-[0.3rem]">
                Annualized Total Returns
              </p>
              <p className="text-[2.5rem] font-semibold">₹2.88</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
