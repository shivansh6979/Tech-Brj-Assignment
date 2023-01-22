import React from "react";
import "./subCategory.css";
import Veg from "../Images/Veg.png";
import Non from "../Images/Non.png";
const SubCategory = ({ cake }) => {
  console.log("items", cake.products);

  return (
    <div className="subcategory">
      {cake?.products?.map((product, index) => {
        return (
          <div className="tile" key={index}>
            <img className="cakeimg" src={product.imageURL} alt="cake" />
            <div className="flexing">
              {product.eggFree ? (
                <img className="veg" src={Veg} alt="veg" />
              ) : (
                <img src={Non} alt="non" />
              )}
              <span className="tiledata">{product.name}</span>
            </div>

            <span className="tiledata">
              Starts from : ${product.startsFrom}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SubCategory;
