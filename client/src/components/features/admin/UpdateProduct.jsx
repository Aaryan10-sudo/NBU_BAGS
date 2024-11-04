import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { hitApi } from "../../../services/HitApi";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";
import MobileNavbar from "./MobileNavbar";
import Loader from "../../ui/Loader";
import Gallery from "../../ui/Gallery";

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
      <div className="flex pb-[50px] sm:pb-0 ">
        <SideBar />

        <div className="flex flex-col w-full">
          <NavBarAd />
          <div className=" ">
            <form onSubmit={handleSubmit}>
              <div className="flex sm:flex-row flex-col justify-center items-center gap-[50px] mt-[30px] mb-[10px]">
                {/* Product Image Upload Section */}
                <div {...getRootProps()} style={{ width: "300px" }}>
                  <label className="flex justify-center text-[20px] font-semibold">
                    Product Image :
                  </label>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <span className="flex justify-center items-center cursor-pointer">
                      <p>Drop the files here ...</p>
                    </span>
                  ) : (
                    <div className="flex justify-center my-[5px]">
                      <span className="h-[280px] w-[230px] bg-slate-500 flex justify-center items-center cursor-pointer rounded-xl">
                        {image ? (
                          <img
                            src={image}
                            alt="Product"
                            className="h-full w-full object-cover rounded-xl"
                          />
                        ) : (
                          <span className="text-[50px] text-white">
                            <Gallery />
                          </span>
                        )}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details Input Section */}
                <div className="flex flex-wrap mx-[5px] justify-between w-[full] font-semibold">
                  <div>
                    <label className="">Product Name :</label>
                    <br />
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      value={productName}
                      className="w-full px-[3px] h-[40px] rounded-md border-2 border-gray-400"
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div>
                    <label>Category :</label>
                    <br />
                    <input
                      type="text"
                      name="category"
                      id="category"
                      value={category}
                      className="w-full px-[3px] h-[40px] rounded-md border-2 border-gray-400"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    />
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
                      className="w-full px-[3px] h-[40px] rounded-md border-2 border-gray-400"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div>
                    <label className="mt-[10px]">Brand :</label>
                    <br />
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      value={brand}
                      className="w-full px-[3px] h-[40px] rounded-md border-2 border-gray-400"
                      onChange={(e) => {
                        setBrand(e.target.value);
                      }}
                    />
                  </div>
                  <br />
                  <div className="w-full">
                    <label>Product Description :</label>
                    <br />
                    <textarea
                      name="productDescription"
                      id="productDescription"
                      value={productDescription}
                      className="w-full h-[100px] px-[10px] text-left rounded-lg border-2 border-gray-400" // Adjusted styles for left alignment
                      onChange={(e) => {
                        setProductDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center pb-[20px]">
                <button
                  type="submit"
                  className="flex justify-center items-center w-[150px] bg-blue-500 h-[40px] rounded-md font-bold text-white"
                >
                  {loader ? (
                    "Update"
                  ) : (
                    <Loader className="text-[20px] animate-spin text-white" />
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
