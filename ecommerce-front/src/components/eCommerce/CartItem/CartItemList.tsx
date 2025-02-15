import { TProduct } from "@customTypes/products.types"
import CartItem from "./CartItem"

type productsprop = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
}

function CartItemList({ products, changeQuantityHandler, removeItemHandler }: productsprop) {
  
  const renderList = products.map((ele) => {
    return <CartItem key={ele.id} {...ele} changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler} />
  })

  return (
    <div>{renderList}</div>
  )
}

export default CartItemList