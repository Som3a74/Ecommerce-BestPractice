import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import Like from "../../../assets/like.svg?react";
import LikeFill from "../../../assets/like-fill.svg?react";
import { TProduct } from '@customTypes/products.types';
import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo, useEffect, useState } from "react";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

const Product = memo(({ id, title, price, cat_prefix, img, max, quantity, isLiked }: TProduct & { isLiked?: boolean }) => {
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isBtnDisabled) { return; }

        const debounce = setTimeout(() => {
            setIsBtnDisabled(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const HandelAddCart = (id: number) => {
        dispatch(addToCart(id))
        setIsBtnDisabled(true);
    }
    const currentRemainingQuantity = max - (quantity ?? 0);
    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;


    const likeToggleHandler = (id: number) => {
        if (!isLoading) {
            setIsLoading(true)
            dispatch(actLikeToggle(id))
                .unwrap()
                .then(() => setIsLoading(false))
                .catch(() => setIsLoading(false))
        }
    }

    return (
        <div className={product}>
            <div onClick={() => likeToggleHandler(id)} className={wishlistBtn}>
                {isLoading ? <Spinner animation="border" size="sm" variant="primary" />
                    : isLiked ? <LikeFill /> : <Like />
                }

            </div>

            <div className={productImg}>
                <img src={img} alt={cat_prefix} />
            </div>
            <h2>{title}</h2>
            <h3>{(+price).toFixed(2)} EGP</h3>
            <p className={maximumNotice}>
                {quantityReachedToMax ? "You reach to the limit" : `You can add ${currentRemainingQuantity} item(s)`}
            </p>
            <Button disabled={isBtnDisabled || quantityReachedToMax} variant="info" style={{ color: "white" }} onClick={() => HandelAddCart(id)}>
                {isBtnDisabled ?
                    <>
                        <Spinner animation="border" size="sm" /> Loading...
                    </> : "Add to cart"
                }
            </Button>
        </div>
    );
});

export default Product;