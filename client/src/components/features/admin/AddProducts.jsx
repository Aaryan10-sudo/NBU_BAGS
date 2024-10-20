import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  let [productName, setProductName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      productName: productName,
      quantity: quantity,
      price: price,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/product`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setProductName("");
      setPrice("");
      setQuantity("");
      toast.success(result.data.message);
    } catch (error) {}
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name :</label>
          <br />
          <input
            type="text"
            name="productName"
            id="productName"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div>
          <label>Quantity :</label>
          <br />
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div>
          <label>Price :</label>
          <br />
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default AddProducts;
