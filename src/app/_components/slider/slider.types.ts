import { ElementType } from "react";

type SliderItem = {
  path: string;
  descriptions: { title: string; dec: string };
  logo: string;
  alt: string;
};
export type SliderProps = {
  data: SliderItem[];
  Component: ElementType;
  displayCount: string
};
