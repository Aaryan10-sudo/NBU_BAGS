import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  let [productName, setProductName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [brand, setBrand] = useState("");

  const navigate = useNavigate();

  let params = useParams();
  let id = params.id;

  let getData = async () => {
    try {
      let result = await axios({
        url: `https://nbu-bags.onrender.com/product/${id}`,
        method: `GET`,
      });
      let data = result.data.data;
      setProductName(data.productName);
      setCategory(data.category);
      setPrice(data.price);
      setProductDescription(data.productDescription);
      setBrand(data.brand);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      productName: productName,
      category: category,
      price: price,
      productDescription: productDescription,
      brand: brand,
    };
    try {
      let result = await axios({
        url: `https://nbu-bags.onrender.com/product/update/${id}`,
        method: "PATCH",
        data: data,
      });
      console.log(result);
      setProductName("");
      setCategory("");
      setPrice("");
      setProductDescription("");
      setBrand("");

      navigate(`/admin`);
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
          <label>Category</label>
          <br />
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
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

        <button type="submit">UPDATE</button>
      </form>
    </>
  );
};

export default UpdateProduct;
