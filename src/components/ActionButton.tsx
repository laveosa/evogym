import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

export interface IActionButton {
  children: React.ReactNode;
  setSelectedPage: (anchore: SelectedPage) => void;
}

export default function ActionButton({
  children,
  setSelectedPage,
}: IActionButton) {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      className="cursor-pointer text-primary-transition duration-300 rounded-md bg-secondary-500 px-6 py-2 hover:bg-primary-500 hover:text-white font-bold"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
}
