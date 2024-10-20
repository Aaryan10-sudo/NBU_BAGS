import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";

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

      navigate(`/admin/product`);
    } catch (error) {}
  };
  return (
    <>
      <div className="flex ">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full">
          <NavBarAd />
          <div className="overflow-auto h-screen">
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
              <div>
                <label>Product Description</label>
                <br />
                <input
                  type="string"
                  name="productDescription"
                  id="productDescription"
                  value={productDescription}
                  onChange={(e) => {
                    setProductDescription(e.target.value);
                  }}
                ></input>
              </div>
              <br />
              <div>
                <label>Brand</label>
                <br />
                <input
                  type="string"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                ></input>
              </div>

              <button type="submit">UPDATE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
