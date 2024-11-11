import React, { useEffect, useState } from "react";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";
import MobileNavbar from "./MobileNavbar";
import { useSearchParams } from "react-router-dom";
import { hitApi } from "../../../services/HitApi";
import Swal from "sweetalert2";

const AdminSearch = () => {
  const [query] = useSearchParams();
  let product = query.get("product");
  let [search, setSearch] = useState([]);

  const searchItem = async () => {
    try {
      let result = await hitApi({
        url: `/product/search?item=${product}`,
        method: "GET",
      });
      setSearch(result.data.data);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `https://nbu-bags.onrender.com/product/delete/${id}`,
        method: "DELETE",
      });
      activity(result.data.data.productName);
      searchItem();
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
    searchItem();
  }, [product]);

  return (
    <>
      <div className="flex sm:h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="sm:fixed h-full sm:block hidden">
          <SideBar />
        </div>

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full sm:ml-[220px] overflow-auto">
          <NavBarAd />
          <div className="m-[35px] font-bold text-[20px]">
            Search Result for <span className="text-blue-500">"{product}"</span>
          </div>

          <div className="flex justify-center flex-wrap md:mx-[40px] mx-[10px] md:gap-[20px] gap-[10px] sm:pb-[20px] pb-[100px]">
            {search.length === 0 ? (
              <div className="text-gray-500 text-center mt-10">
                No products found for "
                <span className="text-blue-500">{product}</span>"
              </div>
            ) : (
              search.map((value, index) => (
                <div
                  className="w-[190px] md:w-[20%] p-3 flex flex-col rounded-md shadow-xl"
                  key={index}
                >
                  <div className="duration-500 hover:contrast-100 object-fill overflow-hidden 2xl:h-[330px] sm:h-[230px] h-[222px] rounded-lg">
                    <img
                      src={value.image}
                      className="rounded-lg w-full"
                      alt="BagImage"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] w-full">
                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="w-full flex justify-center">
                        <span className="text-xl font-montserrat font-extrabold text-center pt-[5px] ">
                          {value.productName}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 h-[38px] text-center tracking-wider pt-[5px] line-clamp-2">
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
                    {/* Update/Delete buttons */}
                    <div className="flex justify-center gap-[20px] text-white font-bold">
                      <button
                        className="w-[230px] h-[30px] flex justify-center items-center bg-primary"
                        onClick={handleEdit(value._id)}
                      >
                        Update
                      </button>
                      <button
                        className="w-[230px] h-[30px] flex justify-center items-center bg-red-600"
                        onClick={() => sweetalert2(value._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <MobileNavbar />
    </>
  );
};

export default AdminSearch;
