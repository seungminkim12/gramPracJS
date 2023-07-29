import React from "react";
import BestMenu from "./components/BestMenu";
import Store from "./components/Store";
import { Address, Restaurant } from "./model/restaurantModel";

let data: Restaurant = {
  name: "restaurant",
  category: "western",
  address: {
    city: "seoul",
    detail: "bongchen",
    zipCode: 17643,
  },
  menu: [
    { name: "tomato pasta", price: 2000, category: "pasta" },
    { name: "garlic steak", price: 3000, category: "steak" },
  ],
};

function App() {
  //generic = useState 같은 함수 부르는 순간에 type 정해줌
  const [myRestaurant, setMyRestaurant] = React.useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={data} changeAddress={changeAddress} />
      <BestMenu
        name="B pizza"
        category="pizza"
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
}

export default App;
