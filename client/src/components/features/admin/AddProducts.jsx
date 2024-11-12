import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";
import { useDropzone } from "react-dropzone";
import { hitApi } from "../../../services/HitApi";
import MobileNavbar from "./MobileNavbar";
import Loader from "../../ui/Loader";
import Gallery from "../../ui/Gallery";

const AddProducts = () => {
  // State variables for product details
  let [productName, setProductName] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [productDescription, setProductDescription] = useState("");
  let [brand, setBrand] = useState("");
  let [image, setImage] = useState(null);

  // Loader state
  let [loader, setLoader] = useState(true);

  // Function to log activity
  const activity = async (product) => {
    const data = {
      Activity: `Created ${product} at ${new Date().toLocaleString()}`,
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

  // Handle form submission
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
        url: `/product/create`,
        method: "POST",
        data: data,
      });
      setLoader(true);
      // Reset form fields after submission
      setProductName("");
      setCategory("");
      setPrice("");
      setProductDescription("");
      setBrand("");
      setImage(null);
      activity(productName);
      toast.success(result.data.message);
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  // Handle file drop
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
      setImage(result.data.result);
    } catch (error) {
      console.log(error.data.response);
    }
  }, []);

  // Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <ToastContainer />
      <div className="flex sm:p-0 pb-[50px]">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full">
          <NavBarAd />
          <div className="mx-[px] ">
            <form onSubmit={handleSubmit}>
              <div className="flex md:flex-row flex-col justify-center items-center gap-[50px] mt-[30px] mb-[10px]">
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
                  className="flex justify-center items-center w-[150px] bg-green-500 h-[40px] rounded-md font-bold text-white"
                >
                  {loader ? (
                    "Create"
                  ) : (
                    <Loader className="text-[20px] animate-spin text-white" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </>
  );
};

export default AddProducts;
