import { Col, Row } from "react-bootstrap";
import { CategoryProps } from "./interFace";
import { Roll } from "react-awesome-reveal";

function Category({ felterByCategory, allCategories }: CategoryProps) {
  const onFleter = (name: string) => {
    felterByCategory(name);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center text-center">
        <Roll>
          {allCategories.length >= 1 ? (
            allCategories.map((cat) => {
              return (
                <div>
                  <button
                    onClick={() => onFleter(cat)}
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h4> لا يوجد تصنيفات الان</h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
}
export default Category;
