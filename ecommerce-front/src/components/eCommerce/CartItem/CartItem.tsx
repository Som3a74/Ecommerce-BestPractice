import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/products.types";
import { memo } from "react";
const { cartItem, product, productImg, productInfo, cartItemSelection } = styles;

type CartItemProps = TProduct & {
    changeQuantityHandler: (id: number, quantity: number) => void;
    removeItemHandler: (id: number) => void;
};

const CartItem = memo(({ id, title, price, img, max, quantity, changeQuantityHandler, removeItemHandler }: CartItemProps) => {
    // console.log("render")

    const renderOptions = Array(max).fill(0).map((_, index) => {
        const valueoption = ++index
        return <option value={valueoption} key={index}>{valueoption}</option>
    })

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = +event.target.value
        changeQuantityHandler(id, quantity)
    }


    return (
        <div className={cartItem}>
            <div className={product}>
                <div className={productImg}>
                    <img src={img} alt={title} />
                </div>
                <div className={productInfo}>
                    <h2>{title}</h2>
                    <h3>{(+price).toFixed(2)} EGP</h3>
                    <Button
                        variant="secondary"
                        style={{ width: "100px" }}
                        className="mt-auto text-white"
                        onClick={() => removeItemHandler(id)}
                    >
                        Remove
                    </Button>
                </div>
            </div>

            <div className={cartItemSelection}>
                <span className="d-block mb-1">Quantity</span>
                <Form.Select value={quantity} onChange={changeQuantity}>
                    {renderOptions}
                </Form.Select>
            </div>
        </div>
    );
})

export default CartItem;