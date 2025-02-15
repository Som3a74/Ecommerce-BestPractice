import { TProduct } from "@customTypes/products.types";
import styles from "./styles.module.css";

type CartSubtotalPriceProps = { products: TProduct[] };

const CartSubtotalPrice = ({ products }: CartSubtotalPriceProps) => {
  const subtotal = products.reduce((acc, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subtotal.toFixed(2)} EGP</span>
    </div>
  );
};

export default CartSubtotalPrice;