import { useContext } from "react";
import image from "../assets/shirtImage.png";
import { BasketItem } from "../types";
import { BasketContext } from "../context/BasketContext";

interface ItemProps {
  item: BasketItem;
}

const ItemCard = ({ item }: ItemProps) => {
  const { addBasket } = useContext(BasketContext);
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4>{item.title}</h4>
        <h5>${item.price}</h5>
        <button className="btn" onClick={() => addBasket(item)}>
          Add Basket
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
