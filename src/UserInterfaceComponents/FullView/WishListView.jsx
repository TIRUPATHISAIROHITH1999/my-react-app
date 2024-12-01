import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { removeFromWishlist } from "../../ReduxStateManagementAndDataFetch/wishlistSlice"; // Assuming you have a remove action in the slice


const WishListView = ({ value }) => {
  const { ImageUrls, setViewLoad, setView } = value;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items); // Access wishlist items from Redux store

  const handleRemoveFromWishlist = (id) => {
    console.log("remove clicked");
    console.log(id);
    dispatch(removeFromWishlist(id)); // Dispatch action to remove product
  };

  return (
    <Container className="mt-4">
      <h2>Your Wishlist</h2>
      {/* Display wishlist items in a responsive grid */}
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {wishlist.length === 0 ? (
          <div>Your wishlist is empty.</div>
        ) : (
          wishlist.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={ImageUrls[product.id]} // Image URL
                  alt={product.title}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>

                  <div className="d-flex justify-content-between">
                    {/* View button (you can integrate the modal here if needed) */}
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setView(product);
                        setViewLoad(true);
                      }}
                    >
                      View
                    </Button>

                    {/* Bin button to remove item */}
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromWishlist(product.id)}
                    >
                      <FaTrash className="me-2" /> Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default WishListView;
