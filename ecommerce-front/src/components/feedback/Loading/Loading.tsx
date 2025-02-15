import { TLoading } from "@types";
import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";

type LoadingProps = {
  loading: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

const Loading = ({ loading, error, children, type = "category", }: LoadingProps) => {

  const Component = skeletonsTypes[type];
  if (loading === "pending") return <Component />
  if (loading === "failed") {
    return (<div><LottieHandler type="error" message={error as string} /></div>);
  }

  return <div>{children}</div>;
};

export default Loading;