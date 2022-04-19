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
    let query = Activity.find({});
    query = query.sort({ createdAt: "desc" });

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 100;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    const activities = await query;

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
