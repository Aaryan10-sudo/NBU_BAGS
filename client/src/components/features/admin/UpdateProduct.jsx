import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";
import { useDropzone } from "react-dropzone";

const UpdateProduct = () => {
  let [productName, setProductName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [brand, setBrand] = useState("");
  let [image, setImage] = useState("");

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
      setImage(data.image);
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
      image: image,
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
      setImage("");

      navigate(`/admin/product`);
    } catch (error) {}
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);

    try {
      let result = await axios({
        url: `https://nbu-bags.onrender.com/file/single`,
        method: "POST",
        data: data,
      });
      console.log(result);
      setImage(result.data.result);
    } catch (error) {}
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <>
      <div className="flex ">
        <SideBar />

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

              <div
                {...getRootProps()}
                style={{ border: "1px solid black", width: "300px" }}
              >
                <label>Product Image : </label>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag and drop some files here, or click to select files</p>
                )}
                {image ? (
                  <img
                    src={image}
                    alt="Product Image"
                    height={"100px"}
                    width={"100px"}
                  ></img>
                ) : null}
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
