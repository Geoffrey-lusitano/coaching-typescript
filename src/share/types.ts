export enum SelectedPage {
  Home = "accueil",
  Benefits = "bénéfices",
  OurClasses = "noscours",
  ContactUs = "nouscontacter",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
