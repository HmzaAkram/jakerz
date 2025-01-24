import React from "react";
import { Link } from "react-router-dom";
import "./collection.css";

const Collection = ({ collectionData, addToCart }) => {
  return (
    <>
      <h1 className="page-header">Collection's</h1>
      <div className="container grid3">
        {collectionData.map((collection, index) => {
          return (
            <div className="box" key={index}>
              <div className="collection mtop">
                <div className="img">
                  <span className="discount">{collection.discount}% Off</span>
                  <img src={collection.img} alt="collection-image" />
                </div>
                <div className="collection-details">
                  <h3>{collection.name}</h3>
                  <Link to={`/all-collections/${collection.id}`}>
                    <h5>Click here for more Info</h5>
                  </Link>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>{collection.price}.00</h4>
                    <button
                      aria-label="Add to cart"
                      onClick={() => addToCart(collection)}
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Collection;
