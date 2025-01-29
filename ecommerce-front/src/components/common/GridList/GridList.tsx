import { Row, Col } from "react-bootstrap";
// import { Tcategort } from "@customTypes/Category";

type TGridListProps<T> = {
    records: T[];
    renderItem: (record: T) => React.ReactNode;
}


function GridList<T extends { id?: number }>({ records, renderItem }: TGridListProps<T>) {

    const categoryList = records.length > 0 ?
        records.map((record) =>
            <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
                {renderItem(record)}
            </Col>
        ) : "No data"

    return <Row>{categoryList}</Row>

}

export default GridList