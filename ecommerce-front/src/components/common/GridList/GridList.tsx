import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";
// import { TCategory } from "@customTypes/Category";

type TGridListProps<T> = {
    records: T[];
    renderItem: (record: T) => React.ReactNode;
    emptyMessage: string;
}


function GridList<T extends { id?: number }>({ records, renderItem, emptyMessage }: TGridListProps<T>) {

    const categoryList = records.length > 0 ?
        records.map((record) =>
            <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                {renderItem(record)}
            </Col>
        ) : <Col><LottieHandler type="empty" message={emptyMessage} /></Col>

    return <Row>{categoryList}</Row>

}

export default GridList