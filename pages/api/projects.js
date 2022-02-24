import dbConnect from "../../utils/dbConnect";
import Project from "../../models/project";
import catchAsync from "../../utils/catchAsync";

dbConnect();

const handler = catchAsync(async (req, res) => {
  const { method } = req; // request type

  if (method === "POST") {
    const newProject = await Project.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        project: newProject,
      },
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "No route for this request found",
    });
  }
});

export default handler;
