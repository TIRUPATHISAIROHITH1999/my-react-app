import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../ReduxStateManagementAndDataFetch/wishlistSlice";
import { fetchData } from "../../ReduxStateManagementAndDataFetch/dataSlice";
import { FaHeart, FaEye } from "react-icons/fa";

const DataFetcher = ({ value }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const { ImageUrls, setView, setViewLoad } = value;

  const [visibleProducts, setVisibleProducts] = useState(10);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 10);
  };

  return (
    <Container className="pCardBox" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Row for Cards */}
      <Row
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={6}
        className="g-4"
        style={{
          justifyContent: "center",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {data.slice(0, visibleProducts).map((product) => (
          <Col md={12} sm={12}
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={ImageUrls[product.id]}
                alt={product.title}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  {product.title.substring(0, 20)}
                  {product.title.length > 20 ? "..." : ""}
                </Card.Title>
                <Card.Text>
                  {product.body.substring(0, 100)}
                  {product.body.length > 100 ? "..." : ""}
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    className="MywishBtn w-100 mb-2 skew-button"
                    variant="primary"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <FaHeart className="me-2" /> Wishlist
                  </Button>
                  <Button
                    className="MywishBtn w-100 skew-button"
                    variant="secondary"
                    onClick={() => {
                      setView(product);
                      setViewLoad(true);
                    }}
                  >
                    <FaEye className="me-2" /> View
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Row for Show More Button */}
      {visibleProducts < data.length && (
        <Row className="mt-4" style={{ width: "100%", justifyContent: "center" }}>
          <Col xs="auto" lg={12} md={12} xl={12}>
            <Button
              variant="link"
              onClick={handleShowMore}
              style={{
                color: "white",
                transition: "transform 0.3s",
                textDecoration: "none",
                backgroundColor: "blue",
                width:"100%",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "skew(-20deg)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "skew(0deg)";
              }}
            >
              Show More
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DataFetcher;
