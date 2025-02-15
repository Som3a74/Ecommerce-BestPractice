import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import fetchCategories from "@store/categories/act/actGetCategories";
import { categoriesRecordsCleanUp } from "@store/categories/categoriesSlice";

export const useCategories = () => {
    const dispatch = useAppDispatch()
    const { loading, error, records } = useAppSelector((state) => state.categoriesReducer)

    useEffect(() => {
        const promise =dispatch(fetchCategories())
        return () => {
            dispatch(categoriesRecordsCleanUp())
            promise.abort()
        }
    }, [dispatch])

    return { loading, error, records }
}
