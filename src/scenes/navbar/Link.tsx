import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface INavLink {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (anchore: SelectedPage) => any;
}

const Link = (props: INavLink) => {
  const anchorPath = props.page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`cursor-pointer text-primary-transition duration-300 hover:text-primary-300 ${props.selectedPage === anchorPath ? "text-primary-500" : ""}`}
      href={`#${anchorPath}`}
      onClick={() => props.setSelectedPage(props.selectedPage)}
    >
      {props.page}
    </AnchorLink>
  );
};

export default Link;
