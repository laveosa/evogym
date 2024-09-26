import { useState } from "react";

import NavLinks from "./NavLinks";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/ActionButton";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

interface INavbar {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (anchore: SelectedPage) => any;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: INavbar) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediunScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {isAboveMediunScreens ? (
              <div className={`${flexBetween} w-full`}>
                <NavLinks
                  className={`${flexBetween} gap-8 text-sm`}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div className={`${flexBetween} gap-8 font-bold`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Memeber
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-400 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediunScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div
            className="flex
           justify-end p-12"
          >
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <NavLinks
            className="ml-[33%] flex flex-col gap-10 text-2xl"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
