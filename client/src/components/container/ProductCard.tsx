import React, { useState, useEffect } from "react";
import { hitApi } from "../../services/HitApi";
import { useNavigate } from "react-router-dom";

// Define the Product type alias
type Product = {
  _id: string;
  image: string;
  productName: string;
  productDescription: string;
  category: string;
  price: number;
};

const ProductsList: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const navigate = useNavigate();

  const getAllProduct = async () => {
    try {
      let result = await hitApi({
        url: "/product/read-all",
        method: "GET",
      });
      console.log(result);
      setProduct(result?.data?.data.reverse());
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="flex justify-center flex-wrap md:mx-[40px] mx-[0px] md:gap-[20px] gap-[10px] max-w-[1536px]">
      {product.map((value, index) => (
        <div
          className="w-[190px] md:w-[20%] p-3 flex flex-col rounded-md shadow-xl"
          key={index}
          onDoubleClick={() => {
            navigate(`/product/${value._id}`);
          }}
        >
          <div className="duration-500 hover:contrast-100 object-fill overflow-hidden 2xl:h-[340px] sm:h-[270px] h-[222px] rounded-lg">
            <img
              src={value.image}
              className="rounded-lg w-full"
              alt="BagImage"
            />
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-full flex justify-center">
                <span className="text-xl font-montserrat font-extrabold text-center pt-[5px]">
                  {value.productName}
                </span>
              </div>
              <p className="text-xs text-gray-700 h-[38px] text-center tracking-wider pt-[5px] line-clamp-2">
                {value.productDescription}
              </p>
              <span className="flex text-black font-ubuntu gap-[20px] py-[px] items-center ">
                <p className="text-[12px] flex items-center text-black">
                  {value.category}
                </p>
                <p className="font-montserrat font-bold text-[20px] flex items-center text-blue-600">
                  Rs. {value.price}
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
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                    रु. {value.price}
                  </span>
                </center>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
