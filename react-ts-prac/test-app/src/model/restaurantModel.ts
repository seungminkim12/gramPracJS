// let data = {
//     name: "restaurant",
//     category: "western",
//     address: {
//       city: "seoul",
//       detail: "bongchen",
//       zipCode: 17643,
//     },
//     menu: [
//       { name: "tomato pasta", price: 2000, category: "pasta" },
//       { name: "garlic steak", price: 3000, category: "steak" },
//     ],
//   };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressNoZip = Omit<Address, "zipCode">;
//Omit은 아래 처럼도 쓸수 있는데 주의 필요함 Address 받는 부분에서 zipcode를 체크 안하기 때문에
// export type Address = {
//   city: string;
//   detail: string;
//   zipCode?: number;
// };

export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

//api 사용시 data의 타입이 다이나믹하게 올 경우
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
