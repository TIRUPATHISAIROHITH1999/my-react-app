import React, { useState } from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { FaTimes, FaHeart } from "react-icons/fa";
import { addToWishlist } from "../../ReduxStateManagementAndDataFetch/wishlistSlice";
import { useDispatch } from "react-redux";

const ProductView = ({ value }) => {
  const [showModal] = useState(true);
  const { ImageUrls, view, setViewLoad } = value;
  const dispatch = useDispatch();

  // Function to close the modal
  const handleCloseModal = () => {
    setViewLoad(false);
  };

  // Function to handle adding the product to the wishlist

  const handleAddToWishlist = (item) => {
    console.log("clicked");
    dispatch(addToWishlist(item));
  };

  return (
    <div>
      {/* Modal with overlay */}
      <Modal show={showModal} centered>
        <Modal.Body
          className="modalCustomStyle"
          style={{ position: "relative" }}
        >
          {/* Close button in the top-right corner */}
          <FaTimes
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            onClick={handleCloseModal}
          />

          {/* Product content */}
          <div className="text-center">
            <Image src={ImageUrls[view.id]} fluid alt={view.title} />
            <h3 className="mt-3">{view.title}</h3>
            <p>{view.body}</p>
            <p>
              <b>ITEM :</b>
              {view.id}
            </p>

            {/* Wishlist Button */}
            <Button
              className="MywishBtn w-100 mb-2 skew-button"
              variant="primary"
              onClick={() => {
                handleAddToWishlist(view);
              }}
            >
              <FaHeart className="me-2" /> Add to Wishlist
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductView;
