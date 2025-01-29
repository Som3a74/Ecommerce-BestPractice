import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from '@customTypes/products';
const { product, productImg } = styles;

const Product = ({ id, title, price, cat_prefix, img }: TProduct) => {
    return (
        <div className={product}>
            <div className={productImg}>
                <img src={img} alt={cat_prefix} />
            </div>
            <h2>{title}</h2>
            <h3>{price} EGP</h3>
            <Button variant="info" style={{ color: "white" }}>
                Add to cart
            </Button>
        </div>
    );
};

export default Product;