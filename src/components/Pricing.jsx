import { Link } from "react-router-dom";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className={"overflow-hidden"} id={"pricing"} crosses>
      <div className="container relative z-1">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            width={250}
            height={250}
            className="relative z-1"
            alt="sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              width={950}
              height={400}
              alt="stars"
              className="w-full"
            />
          </div>
        </div>
        <Heading
          title={"Pay once, use forever"}
          tag={"Get started with Brainwave"}
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <Link
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            to={"#"}
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
