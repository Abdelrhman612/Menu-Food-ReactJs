import { Card, Col, Row } from "react-bootstrap";
import { ItemData } from "./interFace";
import { Zoom } from "react-awesome-reveal";
const ItemsList = ({ itemData }: { itemData: ItemData[] }) => {
  return (
    <Row>
      <Zoom>
        {itemData.length ? (
          itemData.map((data) => (
            <Col key={data.id} sm="12" className="mb-3">
              <Card
                className="d-flex flex-row"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <Card.Img className="img-item" src={data.img} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    <div className="item-title">{data.title}</div>
                    <div className="item-price">{data.price}</div>
                  </Card.Title>
                  <Card.Text className="py-2">
                    <div className="item-description">{data.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h2 className="text-center"> لا يوجد اصناف</h2>
        )}
      </Zoom>
    </Row>
  );
};

export default ItemsList;
