import dbConnect from "../../utils/dbConnect";
import Project from "../../models/project";

async function handler(req, res) {
  dbConnect();

  if (req.method === "POST") {
    try {
      const newProject = await Project.create(req.body);

      res.status(200).json({
        status: "success",
        data: {
          project: newProject,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  } else {
    res.status(500).json({
      status: "error",
      message: "No route for this request found",
    });
  }
}

export default handler;
