export const handleSingleFileController = async (req, res, next) => {
  try {
    let link = req.file.path;
    res.status(200).json({
      success: true,
      message: "File uploads successfully",
      result: link,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const handleMultipleFileController = async (req, res, next) => {
  try {
    // Map through the files and get each file's Cloudinary URL
    let links = req.files.map((file) => file.path);
    res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      result: links,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
