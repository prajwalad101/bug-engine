// utility functions
import dbConnect from "../../../../../../utils/dbConnect";
import catchAsync from "../../../../../../utils/catchAsync";
import AppError from "../../../../../../utils/appError";

// models
import Project from "../../../../../../models/Project";

// middlewares
import globalErrorHandler from "../../../../../../middleware/errorMd";

async function handler(req, res) {
  await dbConnect();
  const { method } = req; // request type

  const { id } = req.query;
  const { issueId } = req.query;

  const project = await Project.findById(id);
  const issue = project.issues.id(issueId);

  if (!project) {
    const err = new AppError("Could not find project with given id", 404);
    globalErrorHandler(err, req, res);
  }

  if (!issue) {
    const err = new AppError("Could not find issue with given id", 404);
    globalErrorHandler(err, req, res);
  }

  if (method === "DELETE") {
    project.issues.remove({ _id: issueId });
    await project.save();

    res.status(200).json({
      status: "success",
      message: "successfully deleted",
    });
  }
  if (method === "GET") {
    res.status(200).json({
      status: "success",
      data: issue,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
