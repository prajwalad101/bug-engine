import dbConnect from "../../utils/dbConnect";
import Project from "../../models/project";
import catchAsync from "../../utils/catchAsync";
import AppError from "../../utils/appError";
import globalErrorHandler from "../../middleware/errorMd";

dbConnect();

const handler = async (req, res) => {
  const { method } = req; // request type

  if (method === "POST") {
    console.log(req.body);
    const newProject = await Project.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        project: newProject,
      },
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    globalErrorHandler(err, req, res);
  }
};

// wrapping function with catchAsync to handler errors
export default catchAsync(handler);
