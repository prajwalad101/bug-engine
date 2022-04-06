import clientPromise from "../../utils/mongoDb";

// utility functions
import AppError from "../../utils/appError";
import catchAsync from "../../utils/catchAsync";

// middlewares
import globalErrorHandler from "../../middleware/errorMd";

async function handler(req, res) {
  const { method } = req;
  const { user } = req.query;

  const client = await clientPromise;
  const assigneesCollection = client.db().collection("users");

  if (method === "GET") {
    let assignees;
    if (user) {
      assignees = await assigneesCollection.find({ role: user }).toArray();
    } else {
      assignees = await assigneesCollection.find().toArray();
    }

    return res.status(200).json({
      status: "success",
      data: assignees,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
