import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import fetchProducts from "@store/products/act/actProducts";
import { useParams } from "react-router-dom";
import { prodectsCleanUp } from "@store/products/productsSlice";

function useProducts() {
    const dispatch = useAppDispatch()
    const { prefix } = useParams()
    const { loading, error, records } = useAppSelector((state) => state.ProductsReducer)
    const cartItems = useAppSelector((state) => state.cartSlice.itemsId);
    const wishListItemsId = useAppSelector((state) => state.wishlist.itemsId);

    const productsFullInfo = records.map((ele) => (
        {
            ...ele,
            quantity: cartItems[ele.id],
            isLiked: wishListItemsId.includes(ele.id),
        }
    ))

    useEffect(() => {
        const promise = dispatch(fetchProducts(prefix as string))
        return () => {
            dispatch(prodectsCleanUp())
            promise.abort()
        }
    }, [dispatch, prefix])

    return { loading, error, productsFullInfo, prefix }
}

export default useProducts