import { useContext } from "react";
import image from "../assets/shirtImage.png";
import { BasketItem } from "../types";
import { BasketContext } from "../context/BasketContext";

interface ItemProps {
  item: BasketItem;
}

const BasketItemCard = ({ item }: ItemProps) => {
  const { deleteBasket, changeItemCount } = useContext(BasketContext);

  return (
    <div className="basket-card">
      <div className="img-title">
        <img src={image} className="card-img-top" alt="..." />
        <h4>{item.title}</h4>
      </div>
      <div className="price-amount-btn">
        <div className="price-amount">
          <input
            value={item.count}
            type="number"
            onChange={(e) =>
              changeItemCount(item, parseInt(e.target.value, 10))
            }
          />
          <h5>${item.price * item.count}</h5>
        </div>
        <button
          className="btn delete-btn"
          onClick={() => deleteBasket(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BasketItemCard;
