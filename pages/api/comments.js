// model
import Project from "../../models/Project";
import Activity from "../../models/Activity";

// error handlers
import AppError from "../../utils/appError";

// middlewares
import catchAsync from "../../utils/catchAsync";
import globalErrorHandler from "../../middleware/errorMd";

async function handler(req, res) {
  const { method } = req;
  const { issueId, projectId } = req.query;

  const project = await Project.findById(projectId);
  const issue = await project.issues.id(issueId);

  if (method === "GET") {
    const comments = issue.comments;

    return res.status(200).json({
      status: "success",
      data: comments,
    });
  } else if (method === "POST") {
    issue.comments.push(req.body);
    await project.save();

    const newComment = issue.comments[issue.comments.length - 1];

    return res.status(200).json({
      status: "success",
      data: newComment,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
