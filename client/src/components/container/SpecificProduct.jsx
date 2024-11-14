import React, { useEffect, useState } from "react";
import NavBar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Location from "../ui/Location";
import CashOnDelivery from "../ui/CashOnDelivery";
import Delivery from "../ui/Delivery";
import Seven from "../ui/Seven";
import Guarentee from "../ui/Guarentee";
import Phone from "../ui/Phone";
import { hitApi } from "../../services/HitApi";
import { useParams } from "react-router-dom";

const SpecificProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const getData = async () => {
    try {
      let result = await hitApi({
        url: `/product/${params.id}`,
        method: "GET",
      });
      console.log(result.data.data);
      setProduct(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="pb-[20px] sm:m-[20px] m-[10px] 2xl:px-40">
        <div className="tracking-wider text-blue-700 sm:text-[20px]">
          NBU <span className="text-gray-500">{">"}</span> Bag{" "}
          <span className="text-gray-500">{">"}</span> {product.category}{" "}
          <span className="text-gray-500 font-ubuntu">{">"}</span>
          {product.productName}
        </div>
        <br />
        <div className="w-full h-[75vh] sm:h-[60vh] shadow-xl flex flex-col sm:flex-row ">
          <div className="h-[350px] sm:h-full 2xl:w-[55vw] lg:w-[70vw]  flex gap-1 ">
            <img
              src={product.image}
              className="h-[300px] sm:h-auto w-[200px] sm:w-auto"
            />
            <div className="w-full mx-[10px] sm:mx-[20px]">
              <div className="pb-[10px] border border-transparent border-b-gray-300 w-full">
                <h1 className="font-bold text-[20px] sm:text-[30px] font-ubuntu">
                  {product.productName}
                </h1>
                <p className="lg:text-[20px]">
                  Brand : <span className="text-blue-700">{product.brand}</span>
                </p>
                <p className="lg:text-[20px]">
                  Category :{" "}
                  <span className="text-blue-700">{product.category}</span>
                </p>
              </div>

              <div className="py-[10px] h-[160px] 2xl:h-[260px] border border-transparent border-b-gray-300">
                <h1 className="font-bold lg:text-[30px]">
                  Product Description:
                </h1>
                <p className="text-[12px] tracking-wider lg:text-[15px]">
                  {product.productDescription}
                </p>
              </div>

              <div className="text-center my-[10px] lg:my-[20px] bg-primary h-[40px]  flex items-center justify-center">
                <h1 className="font-bold text-white font-montserrat lg:text-[20px]">
                  Rs. {product.price}
                </h1>
              </div>
            </div>
          </div>

          {/* Info section */}
          <div className="p-[10px]  flex flex-col gap-2 lg:w-[30vw]">
            <div className="pb-[10px] border border-transparent border-b-gray-500 flex flex-col gap-2 2xl:text-[20px]">
              <h1 className="font-bold text-[15px] 2xl:text-[20px] lg:text-[20px]">
                Delivery Options
              </h1>
              <p className="flex gap-3 items-center">
                <Location />
                Inside Kathmandu Valley
              </p>
              <p className="flex gap-2 items-center">
                <CashOnDelivery />
                Cash On Delivery available
              </p>
              <p className="flex gap-3 items-center">
                <Delivery />
                Standard delivery within 24hr
              </p>
            </div>
            {/* Return and warranty */}
            <div className="flex flex-col gap-2 pb-[10px] border border-transparent border-b-gray-500 2xl:text-[20px]">
              <h1 className="font-bold text-[15px] 2xl:text-[20px] lg:text-[20px]">
                Return and warranty
              </h1>
              <p className="flex gap-3 items-center">
                <Seven />7 days ease return
              </p>
              <p className="flex gap-3 items-center">
                <Guarentee />1 months warranty
              </p>
            </div>
            {/* Seller */}
            <div className="flex flex-col gap-2 2xl:text-[20px]">
              <h1 className="font-bold text-[15px] 2xl:text-[20px] lg:text-[20px]">
                NBU BAGS
              </h1>
              <p className="flex gap-3 items-center font-montserrat">
                <Phone /> +977 9803087763
              </p>
              <p className="flex gap-3 items-center">
                <Location />
                Pyukha Marg
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecificProduct;
