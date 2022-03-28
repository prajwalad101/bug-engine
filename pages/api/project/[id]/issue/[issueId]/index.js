// utility functions
import dbConnect from "../../../../../../utils/dbConnect";
import catchAsync from "../../../../../../utils/catchAsync";
import AppError from "../../../../../../utils/appError";

// models
import Project from "../../../../../../models/Project";
import Activity from "../../../../../../models/Activity";

// middlewares
import globalErrorHandler from "../../../../../../middleware/errorMd";
import compareIssues from "../../../../../../utils/compareIssues";

async function handler(req, res) {
  await dbConnect();
  const { method } = req; // request type

  const { id } = req.query;
  const { issueId } = req.query;

  const project = await Project.findById(id); // individual project
  const issue = project.issues.id(issueId); // individual issue

  if (!project) {
    const err = new AppError("Could not find project with given id", 404);
    return globalErrorHandler(err, req, res);
  }

  if (!issue) {
    const err = new AppError("Could not find issue with given id", 404);
    return globalErrorHandler(err, req, res);
  }

  if (method === "DELETE") {
    project.issues.remove({ _id: issueId });
    await project.save();

    const newActivity = await Activity.create({
      projectName: project.name,
      action: "delete",
      issue: issue,
    });

    return res.status(200).json({
      status: "success",
      message: "successfully deleted",
      activity: newActivity,
    });
  } else if (method === "GET") {
    return res.status(200).json({
      status: "success",
      data: issue,
    });
  } else if (method === "PATCH") {
    const updatedInfo = compareIssues(req.body, issue);

    issue.set(req.body); // updates the issue
    const newProject = await project.save();

    const updated = await Activity.create({
      action: "update",
      projectName: project.name,
      updatedInfo,
      issue,
    });

    return res.status(200).json({
      status: "success",
      data: newProject,
      updated,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 400);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
