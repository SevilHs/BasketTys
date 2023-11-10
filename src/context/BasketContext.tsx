import { ReactNode, createContext, useState } from "react";
import { BasketContextState, BasketItem } from "../types";

const value: BasketContextState = {
  basketItems: [],
  addBasket: () => {},
  changeItemCount: () => {},
  confirmBasket: () => {},
  deleteBasket: () => {},
};
export const BasketContext = createContext(value);

const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>(
    value.basketItems
  );

  const addBasket = (item: BasketItem) => {
    if (basketItems.find((basketItem) => basketItem.id == item.id)) {
      setBasketItems((basketItems: BasketItem[]) =>
        basketItems.map((basketItem) =>
          basketItem.id == item.id
            ? { ...basketItem, count: basketItem.count + 1 }
            : basketItem
        )
      );
    } else {
      setBasketItems((basketItems) => [...basketItems, { ...item, count: 1 }]);
    }
  };

  const changeItemCount = (item: BasketItem, count: number) => {
    if (count >= 1) {
      setBasketItems((basketItems) =>
        basketItems.map((basketItem) =>
          basketItem.id == item.id
            ? { ...basketItem, count: count }
            : basketItem
        )
      );
    }
  };

  const confirmBasket = () => {
    setBasketItems([]);
  };
  const deleteBasket = (id: string) =>
    setBasketItems((basketItems: BasketItem[]) =>
      basketItems.filter((item) => item.id != id)
    );

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addBasket,
        deleteBasket,
        changeItemCount,
        confirmBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
