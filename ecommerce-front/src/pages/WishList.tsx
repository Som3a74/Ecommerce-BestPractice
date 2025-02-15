import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { Product } from "@components/eCommerce";
import { useWishlist } from "@hooks/useWishlist";
import { TProduct } from '@types';


const Wishlist = () => {
  const { loading, error, records } = useWishlist()

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading loading={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="Your Wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;