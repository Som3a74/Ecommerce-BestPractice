import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetWishlist, cleanWishlistProductsFullInfo } from "@store/wishlist/wishlistSlice";

export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { productsFullInfo, loading, error } = useAppSelector((state) => state.wishlist)
  const cartItems = useAppSelector((state) => state.cartSlice.itemsId);

  useEffect(() => {
    const promise = dispatch(actGetWishlist())
    return () => {
      dispatch(cleanWishlistProductsFullInfo())
      promise.abort()
    }
  }, [dispatch])

  const records = productsFullInfo.map((ele) => (
    {
      ...ele,
      quantity: cartItems[ele.id],
      isLiked: true
    }
  ))

  return { productsFullInfo, loading, error, records }
}
