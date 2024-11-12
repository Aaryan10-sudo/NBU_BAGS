import { Product } from "../schema/model.js";

export const createProductController = async (req, res, next) => {
  let data = req.body;
  try {
    let result = await Product.create(data);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const totalProduct = async (req, res, next) => {
  try {
    let result = await Product.countDocuments();
    res.status(200).json({
      success: true,
      message: "Total product count retrieved successfully",
      count: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product count", error });
  }
};

export const readEightProductController = async (req, res, next) => {
  try {
    let result = await Product.find({}).limit(8);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllProductController = async (req, res, next) => {
  try {
    let result = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificProductController = async (req, res, next) => {
  try {
    let result = await Product.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchProduct = async (req, res, next) => {
  let item = req.query.item;
  let sort = req.query.sort; // Expected values: 'asc' or 'desc'

  try {
    let pipeline = [];

    // Match stage to filter products based on search term
    let matchStage = {
      $match: {
        $or: [
          { brand: { $regex: item, $options: "i" } },
          { category: { $regex: item, $options: "i" } },
          { productName: { $regex: item, $options: "i" } },
          { productDescription: { $regex: item, $options: "i" } },
        ],
      },
    };
    pipeline.push(matchStage);

    // Add sort stage if sort parameter is provided
    if (sort === "asc" || sort === "desc") {
      let sortOrder = sort === "asc" ? 1 : -1;
      pipeline.push({ $sort: { price: sortOrder } });
    }

    let result = await Product.aggregate(pipeline);

    res.status(200).json({
      success: true,
      message: "Search Results",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
