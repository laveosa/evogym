import AnchorLink from "react-anchor-link-smooth-scroll";

import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";

type IFooter = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Footer({ setSelectedPage }: IFooter) {
  const linkStyles =
    "mb-1 cursor-pointer text-primary-transition duration-300 hover:text-primary-500";

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa esse
            recusandae quibusdam ducimus excepturi sapiente soluta eligendi
            voluptas iusto porro illum vitae quam, deleniti aliquid quis
            nesciunt minima libero incidunt.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="flex flex-col mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold mb-5">Links</h4>
          <AnchorLink href={`#${SelectedPage.Home}`} className={linkStyles}>
            Home
          </AnchorLink>
          <AnchorLink href={`#${SelectedPage.Benefits}`} className={linkStyles}>
            Benefits
          </AnchorLink>
          <AnchorLink
            href={`#${SelectedPage.OurClasses}`}
            className={linkStyles}
          >
            Our Classes
          </AnchorLink>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">evogym@google.com</p>
          <p className="mt-1">(333)425-1212</p>
        </div>
      </div>
    </footer>
  );
}
