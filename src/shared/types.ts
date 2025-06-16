export const enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "our-classes",
    ContactUs = "contact-us",
}

export interface BenefitType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}