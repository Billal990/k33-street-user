import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function FAQ() {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="w-[80%] mx-auto mb-[5rem]">
        <div className="pb-[3rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
            Common Questions
            {/* <p className="w-[100%] h-[1px] bg-[#000]"></p> */}
          </h3>
        </div>
        
        {/* FAQs */}
        <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is the anticipated return on investment?</AccordionHeader>
        <AccordionBody>
        The anticipated return on investment varies based on the property and market conditions, with potential returns coming from rental income and property value appreciation. Our projections indicate an expected annual cash flow of [X%] based on rental income, along with an estimated annual appreciation of [Y%] in property value. These figures are subject to market fluctuations and property performance.
        </AccordionBody>
      </Accordion>
      
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        How is the property's value projected to appreciate over time?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What are the potential risks associated with this investment?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        Can you provide historical performance data for similar investments?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
        Can you provide historical performance data for similar investments?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
      </section>
  )
}
