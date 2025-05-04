import { Card, Col, Row } from "react-bootstrap";

const ItemsList = () => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#F8F8F8" }}
        >
          <Card.Img className="img-item" variant="top" src="" />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <div className="item-title"> وجبه فطار</div>
              <div className="item-price"> 50 جنيه</div>
            </Card.Title>
            <Card.Text className="py-2">
              <div className="item-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                similique praesentium ipsa earum ducimus, consectetur impedit
                quia! Esse, excepturi incidunt asperiores neque, id dolorum
                reiciendis veritatis sit porro dolore voluptate.
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemsList;
