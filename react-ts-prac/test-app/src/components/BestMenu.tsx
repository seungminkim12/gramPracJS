import React from "react";
import { Menu } from "../model/restaurantModel";

// interface OwnProps extends Menu {
//   showBestMenuName(name: string): string;
// }

type OwnProps = Omit<Menu, "price"> & {
  showBestMenuName(name: string): string;
};

const BestMenu = (props: OwnProps) => {
  return <div>{props.name}</div>;
};

export default BestMenu;
