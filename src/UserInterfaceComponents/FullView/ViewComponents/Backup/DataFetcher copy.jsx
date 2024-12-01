// src/components/DataFetcher.js-->corrected
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../../ReduxStateManagementAndDataFetch/dataSlice';
import { addToWishlist } from '../../../../ReduxStateManagementAndDataFetch/wishlistSlice';

const DataFetcher = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.items);
  const loading = useSelector((state) => state.data.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  return (
    <div>
      <h2>Data</h2>
      {loading && <p>Loading...</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleAddToWishlist(item)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
