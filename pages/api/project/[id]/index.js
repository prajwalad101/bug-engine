// utility functions
import dbConnect from "../../../../utils/dbConnect";
import catchAsync from "../../../../utils/catchAsync";
import AppError from "../../../../utils/appError";

// models
import Project from "../../../../models/Project";

// middlewares
import globalErrorHandler from "../../../../middleware/errorMd";

async function handler(req, res) {
  await dbConnect();
  const { method } = req; // request type

  const { id } = req.query;

  const project = await Project.findById(id);

  if (!project) {
    const err = new AppError("Cannot find project with that id", 404);
    return globalErrorHandler(err, req, res);
  }

  // GET request
  if (method === "GET") {
    return res.status(200).json({
      status: "success",
      data: {
        project,
      },
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
