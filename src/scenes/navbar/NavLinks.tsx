import Link from "./Link";

export default function NavLinks({ className, selectedPage, setSelectedPage }) {
  return (
    <div className={className}>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={(page) => setSelectedPage(page)}
      />
      <Link
        page="Benefits"
        selectedPage={selectedPage}
        setSelectedPage={(page) => setSelectedPage(page)}
      />
      <Link
        page="Our Classes"
        selectedPage={selectedPage}
        setSelectedPage={(page) => setSelectedPage(page)}
      />
      <Link
        page="Contact Us"
        selectedPage={selectedPage}
        setSelectedPage={(page) => setSelectedPage(page)}
      />
    </div>
  );
}
