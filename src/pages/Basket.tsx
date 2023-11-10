import { ChangeEvent, useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import BasketItemCard from "../components/BasketItemCard";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  cardNumber: number;
  cardDate: string;
  cvv: number;
}
const Basket = () => {
  const { basketItems, confirmBasket } = useContext(BasketContext);
  const [values, setValues] = useState<FormValues>({
    email: "",
    cardNumber: 0,
    cardDate: "",
    cvv: 0,
  });
  const navigate = useNavigate();

  const totalAmount = basketItems
    .map((item) => item.count * item.price)
    .reduce((a, b) => a + b, 0);

  const handleChangeCardNum = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value)) {
      setValues({ ...values, cardNumber: +e.target.value });
    }
  };
  const handleChangeCvv = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value)) {
      setValues({ ...values, cvv: +e.target.value });
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (basketItems.length != 0) {
      if (
        values.cvv.toString().length == 3 &&
        values.cardNumber.toString().length == 16
      ) {
        setValues({
          email: "",
          cardNumber: 0,
          cardDate: "",
          cvv: 0,
        });
        confirmBasket();
        navigate("/");
      } else {
        alert("Please fill form");
      }
    }
  };
  return (
    <div className="basket-cards">
      {basketItems.map((item) => (
        <BasketItemCard key={item.id} item={item} />
      ))}
      <div className="footer-basket-cards">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={values.email}
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              value={values.cardNumber}
              minLength={16}
              maxLength={16}
              onChange={handleChangeCardNum}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardDate">Card Date</label>
            <input
              type="date"
              className="form-control"
              id="cardDate"
              value={values.cardDate}
              onChange={(e) =>
                setValues({ ...values, cardDate: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              required
              value={values.cvv}
              minLength={3}
              maxLength={3}
              onChange={handleChangeCvv}
            />
          </div>
          <h3>Total: ${totalAmount}</h3>
          <button className="btn" type="submit">
            Confirm Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default Basket;
