import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";
import { cartItemChangeQuantity, cartItemRemove, fetchProductsByItems, cleanCartProductsFullInfo } from "@store/cart/cartSlice";

export const useCart = () => {
    const dispatch = useAppDispatch()
    const { loading, error, productsFullInfo, itemsId } = useAppSelector((state) => state.cartSlice)

    useEffect(() => {
        const promise = dispatch(fetchProductsByItems())
        return () => {
            dispatch(cleanCartProductsFullInfo())
            promise.abort()
        }
    }, [dispatch])

    const products = productsFullInfo.map((ele) => (
        {
            ...ele,
            quantity: itemsId[ele.id]
        }
    ))

    const changeQuantityHandler = useCallback(
        (id: number, quantity: number) => {
            dispatch(cartItemChangeQuantity({ id, quantity }));
        }, [dispatch]
    )

    const removeItemHandler = useCallback(
        (id: number) => {
            dispatch(cartItemRemove(id));
        }, [dispatch]
    )

    return { loading, error, products, changeQuantityHandler, removeItemHandler }
}
