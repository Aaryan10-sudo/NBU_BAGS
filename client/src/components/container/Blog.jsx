import React from "react";

const Blog = () => {
  return (
    <div className="h-auto bg-[#3a79cd] text-white 2xl:px-40">
      <h1 className="py-[20px] text-center text-[20px] font-extrabold">BLOG</h1>
      <div className="flex justify-between mx-[10px] pb-[30px] lg:mx-[50px] 2xl:mx-0">
        <div className="w-[130px] sm:w-[210px] lg:w-[350px]">
          <div className="h-[100px] w-[130px] lg:h-[220px] sm:h-[150px] lg:w-[350px] sm:w-[210px] bg-[black] object-cover object-center overflow-hidden">
            <img src="forblog1.jpg" />
          </div>
          <p className="text-[10px] sm:text-[15px] mt-[10px] text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nam dapibus
            magnis
          </p>
        </div>
        <div className="w-[130px] sm:w-[210px] lg:w-[350px]">
          <div className="h-[100px] w-[130px] lg:h-[220px] sm:h-[150px] lg:w-[350px] sm:w-[210px] bg-[black] overflow-hidden">
            <video
              src="blog.mp4"
              className="h-full w-full object-cover"
              controls
            />
          </div>
          <p className="text-[10px] sm:text-[15px] mt-[10px] text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nam dapibus
            magnis
          </p>
        </div>

        {/* Another Video Section */}
        <div className="w-[130px] sm:w-[210px] lg:w-[350px]">
          <div className="h-[100px] w-[130px] lg:h-[220px] sm:h-[150px] lg:w-[350px] sm:w-[210px] bg-[black] overflow-hidden">
            <video
              src="blog3.mp4"
              className="h-full w-full object-cover"
              controls
            />
          </div>
          <p className="text-[10px] sm:text-[15px] mt-[10px] text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nam dapibus
            magnis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
