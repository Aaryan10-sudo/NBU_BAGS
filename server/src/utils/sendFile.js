import multer from "multer";
import path from "path";

let limits = {
  fileSize: 1024 * 1024 * 2, //2MB
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let staticFolder = "./public";
    cb(null, staticFolder);
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

let fileFilter = (req, file, cb) => {
  let validExtension = [".png", ".PNG", ".jpg", ".JPG", ".jpeg", ".JPEG"];

  let originalName = file.originalname;

  let originalExtension = path.extname(originalName);

  let isValidExtension = validExtension.includes(originalExtension);

  if (isValidExtension) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"));
  }
};

export const upload = multer({
  limits: limits,

  storage: storage,
  fileFilter: fileFilter,
});
