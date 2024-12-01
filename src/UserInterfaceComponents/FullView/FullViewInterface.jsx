import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./ViewComponents/NavbarComponent";
import Carousal from "./ViewComponents/Carousal";
import DataFetcher from "./DataFetcher";
import Footer from "./Footer";
import ProductView from "./ProductView";
import ImageUrls from "./ImageUrls";
import WishListView from "./WishListView";

function FullViewInterface() {
  useEffect(() => {
    const fetchit = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
    };

    fetchit();
  }, []);

  // -->productView
  const [view, setView] = useState("");
  const [viewLoad, setViewLoad] = useState(false);

  //->image array

  return (
    <Router>
      <NavbarComponent />
      <Carousal />
      {viewLoad && <ProductView value={{ ImageUrls, view, setViewLoad }} />}
      {/* Routes for DataFetcher, WishListView, and ProductView */}
      <Routes>
        <Route
          path="/wishlist"
          element={<WishListView value={{ ImageUrls, setViewLoad, setView }} />}
        />

        <Route
          path="/my-react-app"
          element={<DataFetcher value={{ ImageUrls, setView, setViewLoad }} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default FullViewInterface;
