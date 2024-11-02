import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiLoaderAlt } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { hitApi } from "../../../services/HitApi";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";
import MobileNavbar from "./MobileNavbar";

const UpdateProduct = () => {
  let [productName, setProductName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [brand, setBrand] = useState("");
  let [image, setImage] = useState("");
  let [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  let params = useParams();
  let id = params.id;

  let getData = async () => {
    try {
      let result = await hitApi({
        url: `/product/${id}`,
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

  const activity = async (product) => {
    const data = {
      Activity: `Updated ${product} at ${new Date().toLocaleString()}`,
    };
    try {
      let result = await hitApi({
        url: "/activity/create",
        method: "POST",
        data: data,
      });
      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(false);

    let data = {
      productName: productName,
      category: category,
      price: price,
      productDescription: productDescription,
      brand: brand,
      image: image,
    };
    try {
      let result = await hitApi({
        url: `/product/update/${id}`,
        method: "PATCH",
        data: data,
      });
      setLoader(true);
      setProductName("");
      setCategory("");
      setPrice("");
      setProductDescription("");
      setBrand("");
      setImage("");
      navigate(`/admin/product`);
      activity(productName);
    } catch (error) {}
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);

    try {
      let result = await hitApi({
        url: `/file/single`,
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
          <div className=" h-screen">
            {/* Form section */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row  justify-center items-center gap-[50px] my-[50px]">
                {/* Add image using react-dropzone */}
                <div {...getRootProps()} style={{ width: "300px" }}>
                  <label className="flex justify-center">
                    Product Image :{" "}
                  </label>
                  <input {...getInputProps()} />
                  {/* Allows user to drag and drop pictures */}
                  {isDragActive ? (
                    <span className="flex justify-center items-center cursor-pointer">
                      <p>Drop the files here ...</p>
                    </span>
                  ) : (
                    <div className="flex justify-center sm:my-[10px]">
                      <span className="h-[280px] w-[200px] bg-slate-500 flex justify-center items-center cursor-pointer">
                        {image ? (
                          <img
                            src={image}
                            alt="Product"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <p className="text-[40px] text-white">+</p>
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="">
                  {/* Product Name */}
                  <div className="pb-[20px]">
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

                  {/* Category */}
                  <div className="pb-[20px]">
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

                  {/* Price */}
                  <div className="pb-[20px]">
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

                  {/* Product Description */}
                  <div className="pb-[20px]">
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

                  {/* Brand */}
                  <div className="pb-[0px]">
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
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-center items-center ">
                <button
                  type="submit"
                  className="flex justify-center items-center w-[150px] bg-slate-400 h-[30px]"
                >
                  {loader ? (
                    "Update"
                  ) : (
                    <BiLoaderAlt className="text-[20px] animate-spin text-white" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <MobileNavbar />
      </div>
    </>
  );
};

export default UpdateProduct;
