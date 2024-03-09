import { Link } from "react-router-dom";
import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className={"!px-0 !py-10"}>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved!
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <Link
              key={item.id}
              target="_blank"
              to={item.url}
              className="flex justify-center items-center w-10 h-10 rounded-full bg-n-7 transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
