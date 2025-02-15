import { Heading } from "@components/common"
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import { useCart } from "@hooks/useCart";

function Cart() {
    const { loading, error, products, changeQuantityHandler, removeItemHandler } = useCart()

    return (
        <>
            <Heading title='Your Cart' />
            <Loading loading={loading} error={error} type="cart" >
                {products.length ? <>
                    < CartItemList products={products} changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler} />
                    <CartSubtotalPrice products={products} />
                </> : <LottieHandler type="empty" message="Your Cart is empty" />
                }
            </Loading>
        </>
    )
}
export default Cart