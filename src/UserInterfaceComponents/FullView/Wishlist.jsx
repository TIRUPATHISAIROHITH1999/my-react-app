// src/components/Wishlist.js-->corrected
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { removeFromWishlist } from '../../ReduxStateManagementAndDataFetch/wishlistSlice';
// import { addToRecycleBin } from '../../ReduxStateManagementAndDataFetch/recycleBinSlice';
//--> myfix
import { removeFromWishlist } from '../../ReduxStateManagementAndDataFetch/wishlistSlice';
import { removeFromRecycleBin } from '../../ReduxStateManagementAndDataFetch/recycleBinSlice';
import { addToRecycleBin } from '../../ReduxStateManagementAndDataFetch/recycleBinSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const recycleBin = useSelector((state) => state.recycleBin.deletedItems);

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
    dispatch(addToRecycleBin(item));
  };

  const handleDeleteFromRecycleBin = (item) => {
    dispatch(removeFromRecycleBin(item));
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleRemoveFromWishlist(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Recycle Bin</h2>
      <ul>
        {recycleBin.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDeleteFromRecycleBin(item)}>Delete Forever</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
