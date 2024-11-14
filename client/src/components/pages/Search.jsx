import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { hitApi } from "../../services/HitApi";
import NavBar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Search = () => {
  const [query] = useSearchParams();
  const product = query.get("product");
  const [search, setSearch] = useState([]);
  const [sort, setSort] = useState(query.get("sort") || ""); // Set initial state from URL
  const navigate = useNavigate();

  const searchItem = async () => {
    try {
      let result = await hitApi({
        url: `/product/search?item=${product}&sort=${sort}`,
        method: "GET",
      });
      setSearch(result.data.data);
    } catch (error) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?product=${product}&sort=${sort}`);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value); // Update sort state when the select value changes
    navigate(`/search?product=${product}&sort=${e.target.value}`); // Update the URL with new sort value
  };

  useEffect(() => {
    if (product) {
      searchItem();
    }
  }, [product, sort]); // Add sort to dependency to re-fetch when sort changes

  return (
    <div className="">
      <NavBar />
      {/* Header */}
      <div className="flex justify-between">
        <p className="pl-[40px] p-[20px] text-[20px] font-semibold 2xl:mx-40">
          Search result for{" "}
          <span className="text-blue-500">{query.get("product")}</span>
        </p>
        <form
          className="p-[20px] flex gap-5 items-center"
          onSubmit={handleSubmit}
        >
          <p>Sort by:</p>
          <select
            className="border-2 border-black"
            value={sort} // Bind select value to state
            onChange={handleSortChange} // Use handleSortChange to update state
          >
            <option value="popularity">Best Match</option>
            <option value="asc">Price low to high</option>
            <option value="desc">Price high to low</option>
          </select>
        </form>
      </div>
      {/* Searched Product List */}
      <div className="flex justify-center flex-wrap md:mx-[40px] mx-[10px] md:gap-[20px] gap-[10px] pb-[20px]">
        {search.map((value, index) => {
          return (
            <div
              className="w-[190px] md:w-64 bg-gray-50 p-3 flex flex-col rounded-md shadow-md"
              key={index}
              onDoubleClick={() => {
                navigate(`/product/${value._id}`);
              }}
            >
              <div className="duration-500 hover:contrast-100 object-fill overflow-hidden sm:h-[270px] h-[230px] rounded-lg]">
                <img src={value.image} className="rounded-lg " alt="BagImage" />
              </div>
              <div className="flex flex-col gap-[10px] w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="w-full flex justify-center">
                    <span className="text-xl font-montserrat font-extrabold text-center py-[10px]">
                      {value.productName}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 text-center flex items-center justify-center h-[60px] tracking-wider">
                    {value.productDescription}
                  </p>
                  <span className="flex text-black font-ubuntu gap-[20px] py-[5px]">
                    <p className="text-[12px] flex items-center text-black">
                      {value.category}
                    </p>
                    <p className="font-montserrat font-bold text-[20px] flex items-center text-blue-600">
                      रु. {value.price}
                    </p>
                  </span>
                </div>

                {/* Add to cart button */}
                <button className="buttonTest rounded-lg">
                  <div className="default-btn sm:px-[30px] px-[20px] flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="#ffffff"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="cart-icon"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span>Add to Cart</span>
                  </div>
                  <div className="hover-btn">
                    <center>
                      <span className="text-center font-ubuntu">
                        Rs. {value.price}
                      </span>
                    </center>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
