import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import fetchCategories from "@store/categories/act/actGetCategories";
import { Loading } from "@components/feedback";
import GridList from './../components/common/GridList/GridList';

const Categories = () => {

  const { loading, error, records } = useAppSelector((state) => state.categoriesReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!records.length) {
      dispatch(fetchCategories())
    }
  }, [dispatch, records.length])

  return (
    <Container>
      <Loading loading={loading} error={error} >
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;