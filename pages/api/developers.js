// utility functions
import dbConnect from "../../utils/dbConnect";
import AppError from "../../utils/appError";
import catchAsync from "../../utils/catchAsync";

// models
import Developer from "../../models/Developer";

// middlewares
import globalErrorHandler from "../../middleware/errorMd";

async function handler(req, res) {
  await dbConnect();
  const { method } = req; // request type

  if (method === "POST") {
    const newDeveloper = await Developer.create(req.body);

    res.status(200).json({
      status: "success",
      data: newDeveloper,
    });
  } else if (method === "GET") {
    const developers = await Developer.find();

    return res.status(200).json({
      status: "success",
      data: developers,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
