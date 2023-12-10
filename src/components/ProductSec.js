import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductList from "./ProductList";
const ProductSec = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [product, setProduct] = useState([]);
  let pathValue = useRef("");
  const {text} = useParams();
  
  useEffect(() => {
    if (text === "Smart Phones") {
      setChecked1(true);
      pathValue.current = "mobile";
    } else if (text === "Laptops") {
      setChecked2(true);
      pathValue.current = "laptop";
    } else if (text === "Smart Devices") {
      setChecked3(true);
      pathValue.current = "smartdevice";
    } else if (text === "Headphones") {
      setChecked4(true);
      pathValue.current = "headphones";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProduct = async () => {
    const response = await fetch(
      `http://localhost:5000/api/product/${pathValue.current}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const parsedData = await response.json();
    setProduct(parsedData);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleRadioClick = async (type, check) => {
    if (check === false) {
      const response = await fetch(`http://localhost:5000/api/product/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const parsedData = await response.json();
      const newParsedData = parsedData.filter((parsedData) => {
        return parsedData.productType === type;
      });
      setProduct(product.concat(newParsedData));
    } else {
      const newProduct = product.filter((product) => {
        return product.productType !== type;
      });
      setProduct(newProduct);
    }
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col col-sm-3 filter" style={{ padding: "20px" }}>
            <h5>Category</h5>
            <div className="my-3 ">
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={checked1}
                  onChange={() => {
                    if (checked1 === true) setChecked1(false);
                    else {
                      setChecked1(true);
                    }
                  }}
                  onClick={() => handleRadioClick("Mobile", checked1)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Smart Phones
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={checked2}
                  onChange={() => {
                    if (checked2 === true) setChecked2(false);
                    else {
                      setChecked2(true);
                    }
                  }}
                  onClick={() => handleRadioClick("Laptop", checked2)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Laptops
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={checked3}
                  onChange={() => {
                    if (checked3 === true) setChecked3(false);
                    else {
                      setChecked3(true);
                    }
                  }}
                  onClick={() => handleRadioClick("Smart Device", checked3)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Smart Devices
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={checked4}
                  onChange={() => {
                    if (checked4 === true) setChecked4(false);
                    else {
                      setChecked4(true);
                    }
                  }}
                  onClick={() => handleRadioClick("Headphone", checked4)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Headphones
                </label>
              </div>
            </div>
          </div>
          <div className="col d-flex row">
            {product.map((element) => {
              return (
                <Link to={`/product-list/${element.productType}/${element._id}`} className="col-md-4" key={element._id} style={{textDecoration: "none"}}>
                  <ProductList
                    imageUrl={element.productImage}
                    spec={element.productSpecification.slice(0, 60)}
                  />
                </Link>
                
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSec;
