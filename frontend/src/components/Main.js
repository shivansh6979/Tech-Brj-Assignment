import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import SubCategory from "./SubCategory";
const Main = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://backend.bakeone.in/api/get-products/?categoryDisplayURL=cakes&format=json"
      )
      .then((res) => {
        console.log("fttyf", res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("hgfgh", data?.productInfo);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        data && (
          <div className="main">
            {data?.productInfo?.map((items, index) => {
              return (
                <div className="data" key={index}>
                  <span className="subcategoryname">
                    {items.subCategoryName}
                  </span>
                  <hr />
                  <SubCategory cake={items} />
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

export default Main;
