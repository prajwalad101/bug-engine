// model
import Project from "../../../../models/Project";
import Activity from "../../../../models/Activity";

// error handlers
import AppError from "../../../../utils/appError";

// middlewares
import catchAsync from "../../../../utils/catchAsync";
import globalErrorHandler from "../../../../middleware/errorMd";

// Handler to create new issues (POST)
async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === "POST") {
    const project = await Project.findById(id);
    project.issues.push(req.body);
    await project.save();

    const newIssue = project.issues[project.issues.length - 1];

    const newActivity = await Activity.create({
      projectName: project.name,
      action: "create",
      issue: newIssue,
    });

    return res.status(200).json({
      status: "success",
      issue: newIssue,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
