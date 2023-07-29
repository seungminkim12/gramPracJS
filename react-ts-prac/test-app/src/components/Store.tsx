import React from "react";
import { Address, Restaurant } from "../model/restaurantModel";

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
}

const Store = (props: OwnProps) => {
  return <div>{props.info.name}</div>;
};

export default Store;
