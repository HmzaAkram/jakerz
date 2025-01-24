import React from "react";
import Collection from "../../components/Collection/Collection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Collectionpage = ({ cartItems, collectionData, addToCart }) => {
return (
    <>
      <Header cartItems={cartItems} />
      <Collection collectionData={collectionData} addToCart={addToCart} />
      <Footer />
    </>
);
};

export default Collectionpage;
