import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import fetchProducts from "@store/products/act/actProducts";
import { useParams } from "react-router-dom";
import { prodectsCleanUp } from "@store/products/productsSlice";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Products = () => {

  const { loading, error, records } = useAppSelector((state) => state.ProductsReducer)
  const dispatch = useAppDispatch()


  const { prefix } = useParams()

  useEffect(() => {
    if (prefix) {
      dispatch(fetchProducts(prefix))
    }
    return () => {
      dispatch(prodectsCleanUp())
    }
  }, [dispatch, prefix])

  return (

    <Container>
      <Loading loading={loading} error={error} >
        <GridList records={records} renderItem={(record) => <Product {...record} />} />
      </Loading>
    </Container>
  );
};

export default Products;