// utility functions
import dbConnect from "../../utils/dbConnect";
import catchAsync from "../../utils/catchAsync";
import AppError from "../../utils/appError";

// models
import Project from "../../models/Project";

// middlewares
import globalErrorHandler from "../../middleware/errorMd";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req; // request type

  if (method === "POST") {
    const newProject = await Project.create(req.body);

    return res.status(200).json({
      status: "success",
      data: {
        project: newProject,
      },
    });
  } else if (method === "GET") {
    const projects = await Project.find();

    return res.status(200).json({
      status: "success",
      data: projects,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    globalErrorHandler(err, req, res);
  }
};

// wrapping function with catchAsync to handler errors
export default catchAsync(handler);
