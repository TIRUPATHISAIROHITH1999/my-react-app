import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../ReduxStateManagementAndDataFetch/wishlistSlice";
import { fetchData } from "../../ReduxStateManagementAndDataFetch/dataSlice";
import { FaHeart, FaEye } from "react-icons/fa"; // Importing icons

const DataFetcher = ({ value }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const loading = useSelector((state) => state.data.loading);
  const wishlist = useSelector((state) => state.wishlist.items);
  const { ImageUrls, setView, setViewLoad } = value;

  const [visibleProducts, setVisibleProducts] = useState(10); // Initially show 10 products

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
    // console.log("Item added to wishlist:", item); // Log the added item
    // console.log("Current Wishlist Items:", wishlist); // Log all wishlist items
  };

  const handleShowMore = () => {
    setVisibleProducts(visibleProducts + 10); // Show next 10 products
  };

  // console.log(ImageUrls);

  return (
    <Container className="pCardBox">
      {/* Responsive Row with Cards */}
      <Row xs={1} sm={2} md={3} lg={4} xl={6} className="g-4">
        {data.slice(0, visibleProducts).map((product) => (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={ImageUrls[product.id]}
                alt={product.title}
              />
              <Card.Body className="d-flex flex-column">
                {/* Limit title to 20 characters */}
                <Card.Title>
                  {product.title.substring(0, 20)}
                  {product.title.length > 20 ? "..." : ""}
                </Card.Title>
                {/* <Card.Title>
                 <b>ITEM :</b>
                 {product.id}
                </Card.Title> */}
                <Card.Text>
                  {product.body.substring(0, 100)}
                  {product.body.length > 100 ? "..." : ""}
                </Card.Text>

                {/* Buttons - Wishlist and View with icons */}
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
                      // setView(JSON.stringify(product));
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

      {/* Show More Button */}
      {visibleProducts < data.length && (
        <div className="text-center mt-4">
          <Button
            variant="link"
            onClick={handleShowMore}
            style={{
              color: "white",
              transition: "transform 0.3s",
              textDecoration: "none",
              backgroundColor: "blue",
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
        </div>
      )}
    </Container>
  );
};

export default DataFetcher;
