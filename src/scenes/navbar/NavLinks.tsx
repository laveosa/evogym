import { SelectedPage } from "@/shared/types";
import Link from "./Link";

export default function NavLinks({ className, selectedPage, setSelectedPage }) {
  return (
    <div className={className}>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={() => setSelectedPage(SelectedPage.Home)}
      />
      <Link
        page="Benefits"
        selectedPage={selectedPage}
        setSelectedPage={() => setSelectedPage(SelectedPage.Benefits)}
      />
      <Link
        page="Our Classes"
        selectedPage={selectedPage}
        setSelectedPage={() => setSelectedPage(SelectedPage.OurClasses)}
      />
      <Link
        page="Contact Us"
        selectedPage={selectedPage}
        setSelectedPage={() => setSelectedPage(SelectedPage.ContactUs)}
      />
    </div>
  );
}
