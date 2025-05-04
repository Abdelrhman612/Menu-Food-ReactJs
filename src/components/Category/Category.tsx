import { Col, Row } from "react-bootstrap";

interface CategoryProps {
  felterByCategory: (name: string) => void;
}

function Category({ felterByCategory }: CategoryProps) {
  const onFleter = (name: string) => {
    felterByCategory(name);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center text-center">
        <div>
          <button
            onClick={() => onFleter("الكل")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            الكل
          </button>
          <button
            onClick={() => onFleter("فطار")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            فطار
          </button>
          <button
            onClick={() => onFleter("عشاء")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            عشاء
          </button>
          <button
            onClick={() => onFleter("غداء")}
            style={{ border: "1px solid #b45b35" }}
            className="btn mx-2"
          >
            غداء
          </button>
        </div>
      </Col>
    </Row>
  );
}
export default Category;
