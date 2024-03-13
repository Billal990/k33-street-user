import { Icon } from "@iconify/react";
import Market from "./Market";

function Markets({markets}) {
  return (
    <div className="w-[80%] mx-auto my-[5rem]">
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        The Market
      </h3>
      <h3 className="text-[1.5rem] font-semibold mb-[1.8rem]">
        Around this project
      </h3>

      <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-[1.5rem] gap-[3rem]">
        {markets?.map((market, index) => (
          <Market key={index} market={market} />
        ))}
        <div>
          <Icon
            className="text-[3rem] cursor-pointer"
            icon="ic:twotone-keyboard-arrow-right"
          />
        </div>
      </div>
      {/* Hyderabad TS  */}
      <div className="mt-[2rem]">
        <h3 className="text-[1.5rem] font-bold mb-[0.5rem]">Hyderabad, TS</h3>
        <p className="text-[1.25rem]">
          Hyderabad is the capital of southern India's Telangana state. A major
          center for the technology industry, it's home to many upscale
          restaurants and shops. Its historic sites include Golconda Fort, a
          former diamond-trading center that was once the Qutb Shahi dynastic
          capital. The Charminar, a 16th-century mosque whose 4 arches support
          towering minarets, is an old city landmark near the long-standing Laad
          Bazaar.
        </p>
      </div>
    </div>
  );
}

export default Markets;
