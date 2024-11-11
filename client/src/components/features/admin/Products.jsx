import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";
import { hitApi } from "../../../services/HitApi";
import MobileNavbar from "./MobileNavbar";

const Products = () => {
  let [product, setProduct] = useState([]);
  let [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  const getAllProduct = async () => {
    setLoader(true);
    try {
      let result = await hitApi({
        url: "/product/readall",
        method: "GET",
      });
      setProduct(result?.data?.data);
      setLoader(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const activity = async (product) => {
    const data = {
      Activity: `Deleted ${product} at ${new Date().toLocaleString()}`,
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

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `https://nbu-bags.onrender.com/product/delete/${id}`,
        method: "DELETE",
      });
      activity(result.data.data.productName);
      getAllProduct();
    } catch (error) {}
  };
  const handleEdit = (id) => {
    return () => {
      navigate(`/admin/update/${id}`);
    };
  };
  const sweetalert2 = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `Product deleted successfully`,
          icon: "success",
        });
        handleDelete(id);
      }
    });
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center h-screen bg-gray-300">
          <div class="loader"></div>
        </div>
      ) : (
        <div className="flex ">
          {/* Sidebar */}
          <SideBar />

          {/* Main Content: NavBar + Dashboard */}
          <div className="flex flex-col w-full">
            <NavBarAd />
            <div className="overflow-auto h-screen 2xl:px-40">
              <div>
                <h1 className="text-center font-extrabold text-[30px] lg:my-[20px] my-[10px] ">
                  Products
                </h1>
                <div>
                  <div className="flex  justify-center  flex-wrap md:mx-[40px] mx-[10px] md:gap-[20px] gap-[10px] lg:pb-[20px] pb-[100px] ">
                    {product.map((value, index) => {
                      return (
                        <div
                          class="w-[190px] md:w-[20%] p-3 flex flex-col rounded-md shadow-xl"
                          key={index}
                        >
                          <div class="duration-500  hover:contrast-100 object-fill overflow-hidden 2xl:h-[330px] lg:h-[230px] h-[222px] rounded-lg">
                            <img
                              src={value.image}
                              className="rounded-lg  w-full"
                              alt="BagImage"
                            />
                          </div>
                          <div class="flex flex-col gap-[10px] w-full">
                            <div class="flex flex-col justify-center items-center w-full">
                              <div class="w-full flex justify-center">
                                <span class="text-xl font-montserrat font-extrabold text-center pt-[5px] ">
                                  {value.productName}
                                </span>
                              </div>
                              <p class="text-xs text-gray-700  h-[38px] text-center tracking-wider pt-[5px] line-clamp-2">
                                {value.productDescription}
                              </p>
                              <span className="flex text-black font-ubuntu gap-[20px] py-[px]">
                                <p className="text-[12px] flex items-center text-black">
                                  {value.category}
                                </p>
                                <p className="font-montserrat font-bold text-[20px] flex items-center text-blue-600 pt-[5px]">
                                  रु. {value.price}
                                </p>
                              </span>
                            </div>
                            {/* Add to cart button */}
                            <div className="flex justify-center gap-[20px] text-white font-bold">
                              <button
                                className="w-[230px] h-[0p3x] flex justify-center items-center bg-primary"
                                onClick={handleEdit(value._id)}
                              >
                                Update
                              </button>
                              <button
                                className="w-[230px] h-[30px] flex justify-center items-center bg-red-600"
                                onClick={() => {
                                  sweetalert2(value._id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MobileNavbar />
        </div>
      )}
    </div>
  );
};

export default Products;
