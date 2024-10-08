export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface IBenefit {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage?: (value: SelectedPage) => void;
}

export interface IGymClass {
  image: string;
  title: string;
  description: string;
}
