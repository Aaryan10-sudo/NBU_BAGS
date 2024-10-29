import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";
import { hitApi } from "../../../services/HitApi";

const Products = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();
  const getAllProduct = async () => {
    try {
      let result = await hitApi({
        url: "/product/readall",
        method: "GET",
      });
      setProduct(result?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `https://nbu-bags.onrender.com/product/delete/${id}`,
        method: "DELETE",
      });
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
    <>
      <div className="flex ">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full">
          <NavBarAd />
          <div className="overflow-auto h-screen">
            <div>
              <h1 className="text-center font-extrabold text-[30px] sm:my-[20px] my-[10px] ">
                Products
              </h1>
              <div>
                <div className="mx-[10px] flex flex-wrap gap-[20px] sm:mx-[50px] sm:gap-[50px] justify-center">
                  {product.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="sm:w-[270px] w-full  h-[470px] border-2 border-black"
                      >
                        <div className="h-[300px] object-cover object-center">
                          <img src={value.image} className="h-[300px] w-full" />
                        </div>
                        <h1 className="px-[10px] text-[19px] font-bold">
                          {value.productName}
                        </h1>

                        <p className="mx-[10px] bg-slate-400 w-[100px] px-[5px] ">
                          {value.category}
                        </p>
                        <p className="mx-[10px] mt-[10px]">
                          {value.productDescription}
                        </p>
                        <p className="mx-[10px] bg-blue-600 h-[30px] text-center flex items-center justify-center text-white">
                          Rs. {value.price}
                        </p>
                        <div className="flex justify-center gap-5 my-[15px]">
                          <button
                            onClick={handleEdit(value._id)}
                            className="border border-black w-[80px] hover:scale-105 transform transition-all ease-linear duration-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              sweetalert2(value._id);
                            }}
                            className="bg-red-700 text-white w-[80px] hover:scale-105 transform transition-all ease-linear duration-100"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
