import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { memo } from "react";
import useProducts from "@hooks/useProducts";

const Products = memo(() => {
  const { loading, error, productsFullInfo, prefix } = useProducts()

  return (
    <Container>
      <Heading title={`Products ${prefix}`} />
      <Loading loading={loading} error={error} type="product">
        <GridList
          emptyMessage="There are no Products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
});

export default Products;