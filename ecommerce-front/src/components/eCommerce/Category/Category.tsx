import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Tcategort } from '@customTypes/Category';
const { category, categoryImg, categoryTitle } = styles;


const Category = ({ img, prefix, title }: Tcategort) => {
    return (
        <div className={category}>
            <Link to={`/categories/products/${prefix}`}>
                <div className={categoryImg}>
                    <img src={img} alt={prefix} />
                </div>
                <h4 className={categoryTitle}>{title}</h4>
            </Link>
        </div>
    );
};

export default Category;