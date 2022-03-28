// utility functions
import dbConnect from "../../utils/dbConnect";
import AppError from "../../utils/appError";
import catchAsync from "../../utils/catchAsync";

// models
import Activity from "../../models/Activity";

// middlewares
import globalErrorHandler from "../../middleware/errorMd";

async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    let activities = Activity.find({});
    activities = await activities.sort({ createdAt: "desc" });

    res.status(200).json({
      status: "success",
      data: activities,
    });
  } else {
    const err = new AppError(`Cound not find the route for ${req.url}`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
